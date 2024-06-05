const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        idade: {
            type: Number,
            required: true
        },
        tipo_sanguineo: {
            type: String,
            required: true
        },
        ultima_doacao: {
            type: Date,
            required: false
        },
        telefone: {
            type: String,
            required: true
        }
    },
    {
        timestamp: true
    }
)

const Doador = mongoose.model('doador', schema)
module.exports = Doador