const express = require('express')
const router = express.Router()

const cargoController = require('../controllers/cargoController')
const funcionarioController = require('../controllers/funcionarioController')

const { cargoValidador } = require('../validators/cargoValidacao')

router.post('/cargos', cargoValidador, cargoController.create)
router.get('/cargos', cargoController.getAll)
router.get('/cargos/:id', cargoController.getById)
router.put('/cargos/:id', cargoController.update)
router.delete('/cargos/:id', cargoController.remove)

router.post('/funcionarios', funcionarioController.create)
router.get('/funcionarios/:id', funcionarioController.getById)

module.exports = router