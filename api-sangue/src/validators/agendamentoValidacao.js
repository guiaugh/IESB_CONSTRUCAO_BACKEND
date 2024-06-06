const yup = require('yup')

const schema = yup.object().shape({
    data_agendamento: yup
        .date('campo precisa ser uma data'),
    status_agendamento: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    observacao: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    doador: yup
        .string('campo precisa ser um id válido')
        .required('campo obrigatório'),
    responsavel: yup
        .string('campo precisa ser um id válido')
        .required('campo obrigatório!'),
})

function agendamentoValidador(req, res, next) {
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
    agendamentoValidador
}