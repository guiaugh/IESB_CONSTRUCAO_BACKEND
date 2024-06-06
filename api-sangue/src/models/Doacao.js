const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        quantidade: {
            type: Number,
            required: true
        },
        tipo_sanguineo: {
            type: String,
        },
        observacao: {
            type: String,
            required: false
        },
        doador: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'doador',
            required: true
        }
    },
    {
        timestamp: true
    }
)

const Doacao = mongoose.model('doacao', schema)
module.exports = Doacao