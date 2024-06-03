const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        valor: {
            type: Number,
            require: true
        },
        data_vencimento: {
            type: Date,
            require: true
        },
        status_multa: {
            type: String,
            require: true
        },
        emprestimo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'emprestimo',
            required: true
        }
    },
    {
        timestamp: true
    }
)

const Multa = mongoose.model('multa', schema)
module.exports = Multa