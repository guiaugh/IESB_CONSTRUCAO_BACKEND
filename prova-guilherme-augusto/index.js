const express = require('express')
const app = express()
const port = 3000

const routerLivros = require('./router/livros')

app.use(express.json())

app.use(routerLivros)

app.listen(port, () => {
    console.log('Aplicação Rodando!')
})