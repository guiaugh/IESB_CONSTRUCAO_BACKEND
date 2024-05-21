const Funcionario = require('../models/funcionario')

async function create(req, res) {
    try {
        const funcionario = new Funcionario(req.body)
        const funcionarioCriado = await funcionario.save()
        res.status(201).json(funcionarioCriado)
    } catch (error) {
        console.error('Erro ao criar: ', error)
        res.status(400).json({
            mensagem: 'Erro ao criar funcionario!',
            erro: error.messager
        })
    }
}

async function getAll(req, res) {
    res.json(await Funcionario.find().populate(['cargo', 'departamento']))
}

async function getById(req, res) {
    const funcionario = await Funcionario.findById(req.params.id).populate('cargo')
    if (funcionario) {
        res.json(funcionario)
    } else {
        res.status(404).json({
            mensagem: 'Funcionario não encontrado!'
        })
    }

}

async function update(req, res) {
    const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (funcionarioAtualizado) {
        res.json(funcionarioAtualizado)
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrato!" })
    }

}

async function remove(req, res) {
    const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id)
    if (funcionarioExcluido) {
        res.json({
            mensagem: "Funcionario excluido com sucesso!",
            funcionarioExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrato!" })
    }
}

module.exports = {
    create,
    getById,
    update,
    remove,
    getAll
}