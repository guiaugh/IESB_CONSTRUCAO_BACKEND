//criando uma instancia do modulo express
const express = require('express')
//Criando nossa aplicacao
const app = express()

//Definindo os caminhos da aplicacao
app.get('/', (req, res) => {
    res.send('Olá')
})

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/nome', (req, res) => {
    res.send('Guilherme')
})


//Path param
app.get('/exercicio1/:nota1/:nota2/:nota3/:nota4', (req, res) => {
    const nota1 = Number(req.params.nota1)
    const nota2 = Number(req.params.nota2)
    const nota3 = Number(req.params.nota3)
    const nota4 = Number(req.params.nota4)

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    const resultado = media >= 7 ? 'Aprovado!' : 'Reprovado' 

    res.send(resultado + ' A médida foi: ' + media)
})

app.get('/teste', (req, res) => {
    res.send('Teste GET Ok')
})

app.post('/teste', (req, res) => {
    res.send('Teste POST Ok')
})

//executando a aplicacao na porta definida
app.listen(3000, () => {
    console.log('Api inciada! Rodando em http://localhost:3000')
})
