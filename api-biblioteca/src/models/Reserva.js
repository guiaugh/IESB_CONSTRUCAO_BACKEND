const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        data_reserva: {
            type: Date,
            require: true
        },
        status_reserva: {
            type: String,
            require: true
        },
        livro: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'livro',
            required: false
        },
        membro: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'membro',
            required: false
        }
    },
    {
        timestamp: true
    }
)

const Reserva = mongoose.model('reserva', schema)
module.exports = Reserva