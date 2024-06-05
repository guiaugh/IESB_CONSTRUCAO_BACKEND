const express = require('express')
const router = express.Router()

const FuncionarioController = require('../controller/funcionarioController')
const funcionarioValidador = require('../validators/funcionarioValidacao')

// Funcionarios
router.post('/funcionarios', funcionarioValidador, FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', FuncionarioController.getById)
router.put('/funcionarios/:id', funcionarioValidador, FuncionarioController.update)
router.delete('/funcionarios/:id', FuncionarioController.remove)