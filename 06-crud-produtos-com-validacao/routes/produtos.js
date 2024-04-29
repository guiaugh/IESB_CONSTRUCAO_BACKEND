const express = require('express')
const router = express.Router()

let listaProdutos = [
    {
        id: 1,
        nome: "Cerveja",
        preco: 4.99

    }
]

router.get('/produtos', (req, res) => {
    res.json(listaProdutos)
})

router.post('/produtos', (req, res) => {
    const dados = req.body

    if(!dados.nome || !dados.preco){

        res.status(404).json({mensagem: 'Nome e preço são obrigatorios'})

    } else{

        const produto = {
            id: Math.round(Math.random() * 100),
            nome: dados.nome,
            preco: dados.preco
        }
        res.status(201).json({mensagem: 'Produto cadastrado com sucesso !'})
        
    }

})

router.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const produto = listaProdutos.find(produto => produto.id == id)
    if(produto){
        res.json(produto)
    } else{
        res.status(404).json({mensagem: 'Produto não encontrado'})
    }
})

module.exports = router