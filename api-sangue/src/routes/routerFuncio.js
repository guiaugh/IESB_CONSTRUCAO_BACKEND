const express = require('express')
const router = express.Router()

const FuncionarioController = require('../controllers/funcionarioController')
const { funcionarioValidador, loginValidador } = require('../validators/funcionarioValidacao')

// Funcionarios
router.post('/funcionarios', funcionarioValidador, FuncionarioController.create)
router.post('/auth/login', loginValidador, FuncionarioController.login)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', FuncionarioController.getById)
router.put('/funcionarios/:id', funcionarioValidador, FuncionarioController.update)
router.delete('/funcionarios/:id', FuncionarioController.remove)

module.exports = router;