const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        data_emprestimo: {
            type: Date,
            require: true
        },
        data_devolucao: {
            type: Date,
            require: true
        },
        status_emprestimo: {
            type: String,
            require: true
        },
        livro: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'livro',
            required: false
        },
        membro:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'membro',
            required: false
        }
    }
)

const Emprestimo = mongoose.model('emprestimo', schema)

module.exports = Emprestimo