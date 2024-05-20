const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/cargoController')
const DepartamentoController = require('../controllers/departamentoController')
const FuncionarioController = require('../controllers/funcionarioController')

// validators
const { validarId } = require('../validators/idValidacao')
const { cargoValidador } = require('../validators/cargoValidacao')
const { departamentoValidador } = require('../validators/departamentoValidacao')
const { funcionarioValidador } = require('../validators/funcionarioValidacao')

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


module.exports = router