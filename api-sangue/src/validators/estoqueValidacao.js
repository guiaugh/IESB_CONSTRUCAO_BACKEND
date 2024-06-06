const yup = require('yup')

const schema = yup.object().shape({
    quantidade: yup
        .number('campo precisa ser um número'),
    data_validade: yup
        .date('campo precisa ser uma data')
        .required('campo obrigatório'),
    localizacao: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    tipo_sanguineo: yup
        .date('campo precisa ser um Date'),
    doacao: yup
        .string('campo precisa ser um id válido')
        .required('campo obrigatório!'),
})

function estoqueValidador(req, res, next) {
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
    estoqueValidador
}