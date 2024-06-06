const yup = require('yup')

const schema = yup.object().shape({
    quantidade: yup
        .number('campo precisa ser um number')
        .required('campo obrigatório'),
    tipo_sanguineo: yup
        .string('campo precisa ser um string'),
    observacao: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    doador: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório')
})

function doacaoValidador(req, res, next) {
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

module.exports = {
    doacaoValidador
}