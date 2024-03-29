const express = require('express')
const router = express.Router()

let listaContatos = ['Gilberto', 'Arnaldo', 'Diana', 'Marria']

router.get('/contatos', (req, res) =>{
    res.json(listaContatos)
})

router.post('/contatos', (req, res) => {
    listaContatos.push(req.body.nome)
    res.status(201).json({mensagem: "Cadastrado com sucesso!"})
    
})

router.get('/contatos/:id', (req, res) => {
    const id = req.params.id
    res.json(listaContatos[id])
})

router.delete('/contatos/:id', (req, res) => {
    const id = req.params.id
    listaContatos.splice(id, 1)
    res.json({mensagem: 'Contato excluido com sucesso !'})
})


router.put('/contatos/:id', (req, res) => {
    const id = req.params.id
    const contato = req.body.nome

    listaContatos[id] = contato
    res.json({mensagem: "contato atualizado com sucesso"})
})

module.exports = router