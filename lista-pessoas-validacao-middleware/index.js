const express = require('express')
const app = express()
const port = 3000

const routerPessoas = require('./router/pessoas')

app.use(express.json())

app.use(routerPessoas)

app.listen(port, () => {
    console.log('Aplicação Rodando! ')
})