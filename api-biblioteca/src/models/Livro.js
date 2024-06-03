const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        titulo: {
            type: String,
            require: true
        },
        autor: {
            type: String,
            require: true
        },
        editora: {
            type: String,
            require: true
        },
        data_publicacao: {
            type: Date,
            require: true
        },
        genero: {
            type: String,
            require: true
        },
        isbn: {
            type: Number,
            require: true
        }
    },
    {
        timestamp: true
    }
)

const Livro = mongoose.model('livro', schema)

module.exports = Livro