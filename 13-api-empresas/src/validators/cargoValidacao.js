const yup = require('yup')

const cargoSchema = yup.object().shape({
    nome: yup
        .string('Campo precia ser um texto')
        .required('Esse campo é obrigatorio'),
    descricao: yup.string(),
    salario: yup
        .number('Campo precisa ser um numero')
        .min(1412, 'precisa ser maior que o salario minimo')
        .required('Campo obrigatorio')
})

function cargoValidador(req, res, next){
    cargoSchema
        .validate(req.body, {abortEarly: false})
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
    cargoValidador
}