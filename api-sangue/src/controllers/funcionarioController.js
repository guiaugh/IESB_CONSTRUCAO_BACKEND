require('dotenv').config();
const Funcionario = require('../models/Funcionario');
const { cpf } = require('cpf-cnpj-validator'); // Validador de CPF
const { parsePhoneNumberFromString } = require('libphonenumber-js'); // Validador de telefone
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Biblioteca do token para autenticação

const JWT_SECRET = process.env.JWT_SECRET; // Pegando o JWT do arquivo .env

async function create(req, res) {
    const { senha, ...funcionarioData } = req.body;

    try {
        // Hash a senha recebida
        const senhaHash = await bcrypt.hash(senha, 10);

        // Crie uma nova instância do modelo Funcionario com a senha hashada
        const funcionario = new Funcionario({ ...funcionarioData, senha: senhaHash });

        // Valide o telefone
        const telefoneValido = validatePhoneNumber(funcionario.telefone, 'BR');
        if (!telefoneValido.valid) {
            return res.status(400).json("Telefone é inválido");
        }

        // Valide o CPF
        if (!cpf.isValid(funcionario.cpf)) {
            return res.status(400).json("CPF é inválido!");
        }

        // Salve o funcionario no banco de dados
        const funcionarioCriado = await funcionario.save();
        res.status(201).json(funcionarioCriado);

    } catch (error) {
        console.error("Erro ao criar funcionario:", error);
        res.status(500).json({ mensagem: "Erro ao criar funcionario", error });
    }
}

async function getAll(req, res) {
    res.json(await Funcionario.find())
}

async function getById(req, res) {
    const funcionario = await Funcionario.findById(req.params.id)
    if (funcionario) {
        res.json(funcionario)
    } else {
        res.status(404).json({
            mensagem: 'Funcionario não encontrado!'
        })
    }

}

async function update(req, res) {
    const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (funcionarioAtualizado) {
        res.json(funcionarioAtualizado)
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrado!" })
    }

}

async function remove(req, res) {
    const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id)
    if (funcionarioExcluido) {
        res.json({
            mensagem: "Funcionario excluido com sucesso!",
            funcionarioExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrado!" })
    }
}

// Função que valida número de telefone
function validatePhoneNumber(number, country) {
    const phoneNumber = parsePhoneNumberFromString(number, country);
    if (phoneNumber && phoneNumber.isValid()) {
        return {
            valid: true,
            formatted: phoneNumber.formatInternational()
        };
    } else {
        return { valid: false };
    }
}

// Função que efetua login
async function login(req, res) {
    const { email, senha } = req.body;

    const funcionario = await Funcionario.findOne({ email });

    if (!funcionario) {
        return res.status(401).json({ mensagem: "Funcionario não cadastrado!" });
    }

    const senhaValida = await bcrypt.compare(senha, funcionario.senha);

    if (!senhaValida) {
        console.log("Senha inválida!");
        return res.status(401).json({ mensagem: "Email ou senha inválidos!" });
    }

    const token = jwt.sign({ email: funcionario.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({
        mensagem: "Login efetuado!",
        token: token
    });
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
    login
}