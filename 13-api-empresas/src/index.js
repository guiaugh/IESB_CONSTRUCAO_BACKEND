const express = require('express')
const dbConnection = require('./db/connection')
const routes = require('./routes/router')
const routerAutenticacao = require('./routes/autenticacao.router')

dbConnection()
const app = express()
const port = 3000

app.use(express.json())
app.use(routes)

app.use(routerAutenticacao)

app.listen(port, () =>{
    console.log('Aplicação Rodando!')
})
