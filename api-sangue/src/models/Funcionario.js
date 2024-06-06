const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cargo: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        data_contratacao: {
            type: Date,
            default: Date.now
        },
        senha: {
            type: String,
            required: true,
        },
        cpf: {
            type: String,
            required: true
        }
    },
    {
        timestamp: true
    }
)

const Funcionario = mongoose.model('funcionario', schema)
module.exports = Funcionario