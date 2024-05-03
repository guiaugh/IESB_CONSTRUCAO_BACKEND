require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const DB_USER = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@bancododado.c4ei1fg.mongodb.net/?retryWrites=true&w=majority&appName=bancododado`)
    .then(() => console.log('Conectado ao banco'))
    .catch(err => console.log('Erro ao conectar'))

const Tarefa = mongoose.model('tarefa', {nome: String})

app.post('/tarefas', async (req, res) => {
    const tarefa = new Tarefa({nome: req.body.nome})
    await tarefa.save()
    res.json(tarefa)
})

app.get('/tarefas', async (req, res) => {
    const tarefas = await Tarefa.find()
    res.json(tarefas)
})

app.get('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findById(req.params.id)
    res.json(tarefa)
})

app.put('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, {nome: req.body.nome}, {new: true})
    res.json(tarefa)
})

app.delete('/tarefas/:id', async (req, res) => {
    await Tarefa.findByIdAndDelete(req.params.id)
    res.json({
        mensagem: 'Deletado com sucesso!'
    })
})

app.listen(port, () => {
    console.log('Aplicação Rodando!')
})