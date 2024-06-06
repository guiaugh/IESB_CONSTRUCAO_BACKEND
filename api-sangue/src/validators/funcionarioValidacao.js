require('dotenv').config();
const yup = require('yup');
const jwt = require('jsonwebtoken'); //Exportando a biblioteca do token para haver autenticação em minhas requisições

const JWT_SECRET = process.env.JWT_SECRET; //Pegando meu JWT lá do arquivo .env

const schema = yup.object().shape({
    nome: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    cargo: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    email: yup
        .string('campo precisa ser um texto')
        .email('E-mail inválido')
        .required('campo obrigatório'),
    telefone: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    data_contratacao: yup
        .date('Data inválida'),
    senha: yup
        .string()
        .required('Campo senha obrigatório!'),
    cpf: yup
        .string('campo precisa ser válido!')
        .required('campo obrigatório')
})

function funcionarioValidador(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            console.log(err)
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('E-mail inválido')
        .required('Campo e-mail obrigatório'),
    senha: yup
        .string('Campo senha precisa ser preenchido no formato')
        .required('Campo senha obrigatório')
})

function loginValidador(req, res, next) {
    loginSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(e => {
            const errors = e.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}

async function checarToken(req, res, next) {
    try {
        const authorizationHeader = req.get('Authorization')
        const separator = authorizationHeader.split(' ')
        const token = separator[1]

        jwt.verify(token, JWT_SECRET)
        next()
    } catch (error) {
        return res.status(401).json({ mensagem: "Token inválido" })
    }
}

module.exports = {
    funcionarioValidador,
    loginValidador,
    checarToken
}