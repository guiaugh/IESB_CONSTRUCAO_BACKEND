require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/hello', (req, res) => {
    res.json('hello')
})

const DB_USER = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@bancododado.c4ei1fg.mongodb.net/?retryWrites=true&w=majority&appName=bancododado`)
    .then(() => console.log('Conectado ao banco'))
    .catch(err => console.log('Erro ao conectar'))

app.listen(port, () =>{
    console.log('Aplicação Rodando!')
})