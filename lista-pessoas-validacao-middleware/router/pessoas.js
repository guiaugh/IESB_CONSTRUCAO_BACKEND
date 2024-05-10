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

function validarPessoa(req, res, next) {
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    if (pessoa) {
        req.pessoa = pessoa
        next()
    } else {
        return res.status(404).json({ mensagem: 'Pessoa não encontrada!' })
    }
}

function validarAtributos(req, res, next) {
    const dados = req.body
    if (!dados.nome || !dados.idade || !dados.email || !dados.telefone) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos!' })
    } else {
        next()
    }
}

router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

router.get('/pessoas/:id', validarPessoa, (req, res) => {
    res.json(req.pessoa)
})

router.post('/pessoas', validarAtributos, (req, res) => {
    const body = req.body
    const pessoaNova =
    {
        id: Math.round(Math.random() * 1000),
        nome: body.nome,
        idade: body.idade,
        email: body.email,
        telefone: body.email
    }

    listaPessoas.push(pessoaNova)
    res.json({
        mensagem: 'Pessoa cadastrada com sucesso!',
        pessoaNova
    })
})

router.put('/pessoas/:id', validarPessoa, validarAtributos, (req, res) => {
    const body = req.body
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

    const pessoaAtualizada = {
        id: id,
        nome: body.nome,
        idade: body.idade,
        email: body.email,
        telefone: body.email
    }

    listaPessoas[index] = pessoaAtualizada

    res.json({mensagem: 'pessoal atualizada com sucesso!',
    pessoaAtualizada
})

})

router.delete('/pessoas/:id', validarPessoa, (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    listaPessoas.splice(index, 1)

    res.json({ mensagem: "Pessoa excluida com sucesso!" })
})

module.exports = router