const express = require('express')
const app = express()
const port = 3000

const routerPessoa = require('./router/pessoas')

app.use(express.json())

app.use(routerPessoa)

app.listen(port, () =>{
    console.log('Aplicação Rodando!')
})