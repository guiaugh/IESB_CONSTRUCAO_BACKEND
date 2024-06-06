const Doador = require('../models/Doador');
const { cpf } = require('cpf-cnpj-validator'); // Validador de CPF
const { parsePhoneNumberFromString } = require('libphonenumber-js'); // Validador de telefone

async function create(req, res) {
    try {
        const doador = new Doador(req.body)
        // Valide o telefone
        const telefoneValido = validatePhoneNumber(doador.telefone, 'BR');
        if (!telefoneValido.valid) {
            return res.status(400).json("Telefone é inválido");
        }
        // Valide o CPF
        if (!cpf.isValid(doador.cpf)) {
            return res.status(400).json("CPF é inválido!");
        }

        const doadorCriado = await doador.save()
        res.status(201).json(doadorCriado)
    } catch (error) {
        console.error('Erro ao criar: ', error)
        res.status(400).json({
            mensagem: 'Erro ao criar doador!',
            erro: error.messager
        })
    }
}

async function getAll(req, res) {
    res.json(await Doador.find())
}

async function getById(req, res) {
    const doador = await Doador.findById(req.params.id)

    if (doador) {
        res.json(doador);
    } else {
        res.status(404).json("Doador não encontrado!");
    }
}

async function update(req, res) {
    const doadorAtualizado = await Doador.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (doadorAtualizado) {
        res.json(doadorAtualizado)
    } else {
        res.status(404).json({ mensagem: "Doador não encontrado!" })
    }
}

async function deletar(req, res) {
    const doadorExcluido = await Doador.findByIdAndDelete(req.params.id);
    if (doadorExcluido) {
        res.json({ mensagem: "Excluído com sucesso!" })
    } else {
        res.status(404).json({ mensagem: "Doador não encontrado!" })
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

module.exports = {
    create,
    getById,
    getAll,
    update,
    deletar
}