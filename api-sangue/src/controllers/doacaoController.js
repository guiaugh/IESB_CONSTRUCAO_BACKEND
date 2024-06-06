const Doacao = require('../models/Doacao')
const Doador = require('../models/Doador')

async function create(req, res) {
    try {
        //Função para buscar o tipo sanguineo do doador
        const doadorEncontrado = await Doador.findById(req.body.doador);
        const doacao = new Doacao({
            quantidade: req.body.quantidade,
            tipo_sanguineo: doadorEncontrado.tipo_sanguineo,
            observacao: req.body.observacao,
            doador: req.body.doador
        })
        const doacaoCriado = await doacao.save()

        
        res.status(201).json(doacaoCriado)
    } catch (error) {
        console.error('Erro ao criar: ', error)
        res.status(400).json({
            mensagem: 'Erro ao criar doacao!',
            erro: error.messager
        })
    }
}

async function getAll(req, res) {
    res.json(await Doacao.find().populate('doador'))
}

async function getById(req, res) {
    const doacao = await Doacao.findById(req.params.id).populate('doador')
    if (doacao) {
        res.json(doacao)
    } else {
        res.status(404).json({
            mensagem: 'Doacao não encontrado!'
        })
    }

}

async function update(req, res) {
    //Função para buscar o tipo sanguineo do doador
    const doadorEncontrado = await Doador.findById(req.body.doador);

    const obj = {
        quantidade: req.body.quantidade,
        tipo_sanguineo: doadorEncontrado.tipo_sanguineo,
        observacao: req.body.observacao,
        doador: req.body.doador
    }

    const doacaoAtualizado = await Doacao.findByIdAndUpdate(req.params.id, obj, { new: true })
    if (doacaoAtualizado) {
        res.json(doacaoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Doacao não encontrado!" })
    }

}

async function remove(req, res) {
    const doacaoExcluido = await Doacao.findByIdAndDelete(req.params.id)
    if (doacaoExcluido) {
        res.json({
            mensagem: "Doacao excluido com sucesso!",
            doacaoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Doacao não encontrado!" })
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}