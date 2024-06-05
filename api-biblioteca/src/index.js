const express = require('express')
const dbConnection = require('./db/connection');

dbConnection()

const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
    console.log(`Aplicação Rodando na porta ${port} !`)
})