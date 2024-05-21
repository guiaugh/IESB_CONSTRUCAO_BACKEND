const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/cargoController')
const DepartamentoController = require('../controllers/departamentoController')
const FuncionarioController = require('../controllers/funcionarioController')
const ProjetoController = require('../controllers/projetoController')
const TarefaController = require('../controllers/tarefaController')

// validators
const { validarId } = require('../validators/idValidacao')
const { cargoValidador } = require('../validators/cargoValidacao')
const { departamentoValidador } = require('../validators/departamentoValidacao')
const { funcionarioValidador } = require('../validators/funcionarioValidacao')
const { tarefaValidador } = require('../validators/tarefaValidacao')
const { projetoValidador } = require('../validators/projetoValidacao')

// Cargos
router.post('/cargos', cargoValidador, CargoController.create)
router.get('/cargos', CargoController.getAll)
router.get('/cargos/:id', validarId, CargoController.getById)
router.put('/cargos/:id', validarId, cargoValidador, CargoController.update)
router.delete('/cargos/:id', validarId, CargoController.remove)

// Departamentos
router.post('/departamentos', departamentoValidador, DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll)
router.get('/departamentos/:id', validarId, DepartamentoController.getById)
router.put('/departamentos/:id', validarId, departamentoValidador, DepartamentoController.update)
router.delete('/departamentos/:id', validarId, DepartamentoController.remove)

// Funcionarios
router.post('/funcionarios', funcionarioValidador, FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.put('/funcionarios/:id', validarId, funcionarioValidador, FuncionarioController.update)
router.delete('/funcionarios/:id', validarId, FuncionarioController.remove)

// Projetos
router.post('/projetos', projetoValidador, ProjetoController.create)
router.get('/projetos', ProjetoController.getAll)
router.get('/projetos/:id', validarId, ProjetoController.getById)
router.put('/projetos/:id', validarId, projetoValidador, ProjetoController.update)
router.delete('/projetos/:id', validarId, ProjetoController.remove)

// Tarefas
router.post('/tarefas', tarefaValidador, TarefaController.create)
router.get('/tarefas', TarefaController.getAll)
router.get('/tarefas/:id', validarId, TarefaController.getById)
router.put('/tarefas/:id', validarId, tarefaValidador, TarefaController.update)
router.delete('/tarefas/:id', validarId, TarefaController.remove)

module.exports = router