const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        data_agendamento: {
            type: Date,
            default: Date.now
        },
        status_agendamento: {
            type: String,
            required: true
        },
        observacao: {
            type: String,
            required: false
        },
        doador: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'doador',
            required: true
        },
        responsavel: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'funcionario',
            required: true
        }
    },
    {
        timestamp: true
    }
)

const Agendamento = mongoose.model('agendamento', schema)
module.exports = Agendamento