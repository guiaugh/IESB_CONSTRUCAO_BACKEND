const yup = require('yup')

const usuarioSchema = yup.object().shape({
    nome: yup
        .string('Campo precia ser um texto')
        .required('Esse campo é obrigatorio'),
    email: yup
        .string()
        .required('Esse campo é obrigatorio'),
    senha: yup
        .string('Campo precia ser um texto')
        .required('Esse campo é obrigatorio'),
})

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required('Esse campo é obrigatorio'),
    senha: yup
        .string('Campo precia ser um texto')
        .required('Esse campo é obrigatorio'),
})


function usuarioValidador(req, res, next) {
    usuarioSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })

            res.status(400).json({
                mensagem: 'Falha na validação dos campos',
                erros: errors
            })
        })
}

function loginValidador(req, res, next) {
    loginSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })

            res.status(400).json({
                mensagem: 'Falha na validação dos campos',
                erros: errors
            })
        })
}

module.exports = {
    usuarioValidador,
    loginValidador
}