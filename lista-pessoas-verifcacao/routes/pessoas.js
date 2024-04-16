const express = require('express')
const router = express.Router()

listaPessoas = [
    {
        id: 1,
        nome: "João",
        idade: 20,
        email: "joão@email.com",
        telefone: "61900010002"
    }
]

router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)

    if (pessoa) {
        return res.json(pessoa)
    }

    return res.status(404).json({ mensagem: 'Pessoa não encontrada' })
})

router.post('/pessoas', (req, res) => {
    const corpo = req.body

    if(!corpo.nome || !corpo.idade || !corpo.email || !corpo.telefone){
        return res.status(400).json({mensagem: 'Preencha todos os campos'})
    }

    pessoa = {
        id: Math.round(Math.random() * 1000),
        nome: corpo.nome,
        idade: corpo.idade,
        email: corpo.email,
        telefone: corpo.telefone
    }

    listaPessoas.push(pessoa)

    return res.json({
        mensagem: 'Pessoa adicionada com sucesso!',
        pessoa
    })
})

router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const corpo = req.body
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

    if(!corpo.nome || !corpo.idade || !corpo.email || !corpo.telefone){
        return res.status(400).json({mensagem: 'Preencha todos os campos'})
    }

    if(index == -1){
        return res.status(404).json({ mensagem: 'Pessoa não encontrada' })
    }

    pessoaAtualizada = {
        id: Number(id),
        nome: corpo.nome,
        idade: corpo.idade,
        email: corpo.email,
        telefone: corpo.telefone
    }

    listaPessoas[index] = pessoaAtualizada

    return res.json({
        mensagem: 'Pessoa atualizada com sucesso !',
        pessoaAtualizada
    })

})

router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

    listaPessoas.splice(index, 1)

    res.json({
        mensagem: 'Pessoa deletada com sucesso'
    })
})

module.exports = router