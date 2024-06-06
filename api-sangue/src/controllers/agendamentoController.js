const Agendamento = require('../models/Agendamento');

async function create(req, res) {
    try {
        const agendamento = new Agendamento(req.body)
        const agendamentoCriado = await agendamento.save()
        res.status(201).json(agendamentoCriado)
    } catch (error) {
        console.error('Erro ao criar: ', error)
        res.status(400).json({
            mensagem: 'Erro ao criar agendamento!',
            erro: error.messager
        })
    }
}

async function getAll(req, res) {
    res.json(await Agendamento.find()
    .populate({
        path: 'doador',
        select: 'nome tipo_sanguineo telefone'        
    })
    .populate({
        path: 'responsavel',
        select: 'nome cargo telefone email'
    }))
}

async function getById(req, res) {
    const agendamento = await Agendamento.findById(req.params.id)
    .populate({
        path: 'doador',
        select: 'nome tipo_sanguineo telefone'        
    })
    .populate({
        path: 'responsavel',
        select: 'nome cargo telefone email'
    })
    
    if (agendamento) {
        res.json(agendamento);
    } else {
        res.status(404).json("Agendamento não encontrado!");
    }
}

async function update(req, res) {
    //Meu rating só pode ser de 1 a 5, então vamos validar isso
    if (req.body.rating > 5 || req.body.rating < 1) {
        return res.status(400).json({ mensagem: "Sua classificação do produto tem que ser de 1 a 5!" });
    }

    const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (agendamentoAtualizado) {
        res.json(agendamentoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Agendamento não encontrado!" })
    }
}

async function deletar(req, res) {
    const agendamentoExcluido = await Agendamento.findByIdAndDelete(req.params.id);
    if (agendamentoExcluido) {
        res.json({ mensagem: "Excluído com sucesso!" })
    } else {
        res.status(404).json({ mensagem: "Agendamento não encontrado!" })
    }
}

module.exports = {
    create,
    getById,
    getAll,
    update,
    deletar
}