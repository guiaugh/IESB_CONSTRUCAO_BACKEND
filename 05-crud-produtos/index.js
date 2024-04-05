const express = require('express')
const app = express()
const port = 3000

const produtos = require('./routes/produtos')

app.use(express.json())

app.use(produtos)

app.listen(port, () => {
    console.log('Aplicação Rondando')
})