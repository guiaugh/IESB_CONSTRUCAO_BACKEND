const Estoque = require('../models/Estoque')
const Doacao = require('../models/Doacao')
const Doador = require('../models/Doador')

async function create(req, res) {
    try {
        //Buscando informações de doações
        const doacaoEncontrada = await Doacao.findById(req.body.doacao)

        //Buscando o tipo sanguineo do doador
        const doadorEncontrado = await Doador.findById(doacaoEncontrada.doador)
        const estoque = new Estoque({
            quantidade: doacaoEncontrada.quantidade,
            tipo_sanguineo: doadorEncontrado.tipo_sanguineo,
            data_validade: req.body.data_validade,
            localizacao: req.body.localizacao,
            doacao: req.body.doacao
        })
        const estoqueCriado = await estoque.save()
        res.status(201).json(estoqueCriado)
    } catch (error) {
        console.error('Erro ao criar: ', error)
        res.status(400).json({
            mensagem: 'Erro ao criar estoque!',
            erro: error.messager
        })
    }
}

async function getAll(req, res) {
    res.json(await Estoque.find().populate('doacao'))
}

async function getById(req, res) {
    const estoque = await Estoque.findById(req.params.id).populate('doacao')
    if (estoque) {
        res.json(estoque)
    } else {
        res.status(404).json({
            mensagem: 'Estoque não encontrado!'
        })
    }

}

async function update(req, res) {
    const estoqueAtualizado = await Estoque.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (estoqueAtualizado) {
        res.json(estoqueAtualizado)
    } else {
        res.status(404).json({ mensagem: "Estoque não encontrado!" })
    }

}

async function remove(req, res) {
    const estoqueExcluido = await Estoque.findByIdAndDelete(req.params.id)
    if (estoqueExcluido) {
        res.json({
            mensagem: "Estoque excluido com sucesso!",
            estoqueExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Estoque não encontrado!" })
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}