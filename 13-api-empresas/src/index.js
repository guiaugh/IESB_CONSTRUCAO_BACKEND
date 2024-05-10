const express = require('express')
const dbConnection = require('./db/connection')
const routes = require('./routes/router')

const app = express()
const port = 3000

app.use(express.json())
app.use(routes)

dbConnection()

app.listen(port, () =>{
    console.log('Aplicação Rodando!')
})
