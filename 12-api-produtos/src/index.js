const express = require('express')
const app = express()
const port = 3000
const db = require('./db/connection')

db()

app.use(express.json())

app.listen(port, () => {
    console.log('Aplicação Rodando!')
})