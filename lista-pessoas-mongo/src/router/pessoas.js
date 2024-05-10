require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()


//const DB_USER = process.env.DB_USERNAME
//const DB_PASSWORD = process.env.DB_PASSWORD


mongoose.connect(`mongodb+srv://guilhermer:AKS7AcvyVTURMPLZ@bancododado.c4ei1fg.mongodb.net/?retryWrites=true&w=majority&appName=bancododado`)
    .then(() => console.log('Conectado ao banco'))
    .catch(err => console.log('Erro ao conectar'))

const Pessoa = mongoose.model('pessoa', { nome: String })

router.post('/pessoas', async (req, res) => {
    const pessoa = new Pessoa({nome: req.body.nome})
    await pessoa.save()
    res.json({mensagem: 'Pessoa cadastrada com sucesso !',
    pessoa
})
})

router.get('/pessoas', async (req, res) => {
    const pessoa = await Pessoa.find()
    res.json(pessoa)
})

router.get('/pessoas/:id', async (req, res) =>{
    const id = req.params.id
    const pessoa = await Pessoa.findById(id)
    res.json(pessoa)
})

router.put('/pessoas/:id', async (req, res) => {
    const id = req.params.id
    const pessoa = await Pessoa.findByIdAndUpdate(id, {nome: req.body.nome}, {new: true})
    res.json(pessoa)
})

router.delete('/pessoas/:id', async (req, res) => {
    const id = req.params.id
    const pessoa = await Pessoa.findByIdAndDelete(id)
    res.json({mensagem: 'Deletado com sucesso'})
})

module.exports = router    