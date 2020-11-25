const express = require('express')
const { listarPizzas, listarUmaPizza } = require('../controller/cardapioController')
const router = express.Router()

router.get('/', listarPizzas)

router.get('/:numero', listarUmaPizza)

module.exports = router