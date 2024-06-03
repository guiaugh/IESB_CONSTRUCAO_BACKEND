const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        nome: {
            type: String,
            require: true
        },
        endereco: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        data_inscricao: {
            type: Date,
            require: true
        },
        status_associacao: {
            type: String,
            require: true
        }
    },
    {
        timestamp: true
    }
)

const Membro = mongoose.model('membro', schema)
mmodule.exports = Membro