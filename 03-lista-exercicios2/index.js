const express = require('express')
const app = express()
const port = 3000

app.use(express.json)

//1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
app.get('/questao1', (req, res) => {

})

app.listen(port, () =>{
    console.log('Aplicação iniciada em http://localhost:3000')
})