const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        dataInicio: {
            type: Date,
            required: true
        },
        dataFim: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Projeto = mongoose.model('projeto', schema)

module.exports = Projeto