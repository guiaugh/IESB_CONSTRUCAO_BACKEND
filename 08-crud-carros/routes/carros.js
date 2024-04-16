const express = require('express')
const router = express.Router()

listaCarros = [
    {
        id: 1,
        marca: 'VW',
        modelo: 'Gol',
        cor: 'Rosa',
        valor: 80000
    },
    {
        id: 2,
        marca: 'Renault',
        modelo: 'Kwid',
        cor: 'Branco',
        valor: 90000
    }
]

router.get('/carros', (req, res) => {
    res.json(listaCarros)
})

router.get('/carros/:id', (req, res) => {
    const id = req.params.id
    const carro = listaCarros.find(carro => carro.id == id)

    if (carro) {
        return res.json(carro)
    }

    return res.status(404).json({ mensagem: 'Carro não encontrado' })
})

router.post('/carros', (req, res) => {
    const corpo = req.body

    if (!corpo.marca || !corpo.modelo || !corpo.cor || !corpo.valor) {
        return res.status(400).json({ mensagem: 'Campos marca, modelo, cor e valor são obrigatorios' })
    }

    const carro = {
        id: Math.round(Math.random() * 1000),
        marca: corpo.marca,
        modelo: corpo.modelo,
        cor: corpo.cor,
        valor: corpo.valor
    }

    listaCarros.push(carro)

    return res.json({
        mensagem: 'Carro criado com sucesso!',
        carro
    })

})

router.put('/carros/:id', (req, res) => {
    const id = req.params.id
    const corpo = req.body

    if (!corpo.marca || !corpo.modelo || !corpo.cor || !corpo.valor) {
        return res.status(400).json({ mensagem: 'Campos marca, modelo, cor e valor são obrigatorios' })
    }

    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: 'Carro não encontrado' })
    }

    const carroAtualizado = {
        id: Number(id),
        marca: corpo.marca,
        modelo: corpo.modelo,
        cor: corpo.cor,
        valor: corpo.valor
    }

    listaCarros[index] = carroAtualizado

    return res.json({
        mensagem: 'Carro atualizado com sucesso',
        carroAtualizado
    })
})

router.delete('/carros/:id', (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(carro => carro.id == id)

    if (index == -1) {
        return res.status(404).json({ mensagem: 'Carro não encontrado' })
    }

    listaCarros.splice(index, 1)

    res.json({
        mensagem: 'O carro foi excluido com sucesso'
    })

})

router.get('/carros/cor/:cor', (req, res) => {
    const cor = req.params.cor
    const carrosCor = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())

    res.json(carrosCor)

})

router.get('/carros/cor/:cor/valor', (req, res) => {
    const cor = req.params.cor
    const carrosCor = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())

    let valorTotal = 0
    
    carrosCor.forEach(carro => {
        valorTotal = valorTotal + carro.valor
    });

    res.json({valor: valorTotal.toFixed(2)})
})

module.exports = router