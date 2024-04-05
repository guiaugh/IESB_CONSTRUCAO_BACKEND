const express = require('express')
const router = express.Router()

let listaProdutos = [
    {
        id: 1,
        nome: "Chocolate",
        preco: 2.99

    },
    {
        id: 2,
        nome: "Cereal",
        preco: 3.99

    },
    {
        id: 3,
        nome: "Cerveja",
        preco: 4.99

    }
]

router.get('/produtos', (req, res) => {
    res.json(listaProdutos)
})

router.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)

    res.json(listaProdutos[index])
})

router.post('/produtos', (req, res) => {
    const novoProduto = {
        id: listaProdutos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco
    }

    listaProdutos.push(novoProduto)
    res.send('Produto adicionado com sucesso!')
})

router.put('/produtos/:id', (req, res) => {
    const index = listaProdutos.findIndex(produto => produto.id == req.params.id)
    const nome = req.body.nome
    const preco = req.body.preco
    if(nome || preco){
        if(nome){
            listaProdutos[index].nome = req.body.nome
        }
        if(preco){
            listaProdutos[index].preco = req.body.preco
        }
    }
    
    res.send('Alteração concluida!')
})

router.delete('/produtos/:id', (req, res) => {
    const index = listaProdutos.findIndex(produto => produto.id == req.params.id)
    listaProdutos.splice(index, 1)
    res.json('Deletado com sucesso!')
})

module.exports = router