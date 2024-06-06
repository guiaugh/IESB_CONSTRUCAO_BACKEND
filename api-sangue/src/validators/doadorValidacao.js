const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    idade: yup
        .number('campo precisa ser um número')
        .required('campo obrigatório'),
    tipo_sanguineo: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    ultima_doacao: yup
        .date('campo precisa ser um Date'),
    telefone: yup
        .string('campo precisa ser válido')
        .required('campo obrigatório!'),
    cpf: yup
        .string('campo precisa ser válido!')
        .required('campo obrigatório')
})

function doadorValidador(req, res, next) {
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
    doadorValidador
}