const express = require('express')
const router = express.Router()

const autenticacaoController = require('../controllers/autenticacaoController')
const { usuarioValidador, loginValidador } = require('../validators/autenticacaoValidacao')

router.post('/auth/registro', usuarioValidador, autenticacaoController.registrar)
router.post('/auth/login', loginValidador, autenticacaoController.login)

module.exports = router 