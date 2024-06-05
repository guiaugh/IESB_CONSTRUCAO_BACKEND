const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        quantidade: {
            type: Number,
            required: true
        },
        tipo_sanguineo: {
            type: String,
            required: true
        },
        data_validade: {
            type: Date,
            required: false
        },
        localizacao: {
            type: String,
            required: false
        },
        doacao: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'doacao',
            required: true
        }
    },
    {
        timestamp: true
    }
)

const Estoque = mongoose.model('estoque', schema)
module.exports = Estoque