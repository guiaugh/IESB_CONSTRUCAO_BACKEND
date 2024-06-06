const express = require('express');
const router = express.Router();

// Controllers
const agendamentoController = require('../controllers/agendamentoController');
const doadorController = require('../controllers/doadorController');
const estoqueController = require('../controllers/estoqueController');
const doacaoController = require('../controllers/doacaoController')

//Importando o validador

// Validações de agendamento
const { agendamentoValidador } = require('../validators/agendamentoValidacao');

// Validações de doador
const { doadorValidador } = require('../validators/doadorValidacao');

// Validações de estoque
const { estoqueValidador } = require('../validators/estoqueValidacao');

// Validações de doacao
const { doacaoValidador } = require('../validators/doacaoValidacao');

// Validação de ID
const { validarId } = require('../validators/validarId');

// Rota de agendamento
router.post('/agendamentos', agendamentoValidador, agendamentoController.create)
router.get('/agendamentos', agendamentoController.getAll);
router.get('/agendamentos/:id', validarId, agendamentoController.getById)
router.put('/agendamentos/:id', validarId, agendamentoValidador, agendamentoController.update)
router.delete('/agendamentos/:id', validarId, agendamentoController.deletar)

// Rota de doador
router.post('/doadores', doadorValidador, doadorController.create)
router.get('/doadores', doadorController.getAll);
router.get('/doadores/:id', validarId, doadorController.getById)
router.put('/doadores/:id', validarId, doadorValidador, doadorController.update)
router.delete('/doadores/:id', validarId, doadorController.deletar)

// Rota de estoque
router.post('/estoques', estoqueValidador, estoqueController.create)
router.get('/estoques', estoqueController.getAll);
router.get('/estoques/:id', validarId, estoqueController.getById)
router.put('/estoques/:id', validarId, estoqueValidador, estoqueController.update)
router.delete('/estoques/:id', validarId, estoqueController.remove)

// Rota de doacao
router.post('/doacoes', doacaoValidador, doacaoController.create)
router.get('/doacoes', doacaoController.getAll);
router.get('/doacoes/:id', validarId, doacaoController.getById)
router.put('/doacoes/:id', validarId, doacaoValidador, doacaoController.update)
router.delete('/doacoes/:id', validarId, doacaoController.remove)

module.exports = router;