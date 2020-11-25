const express = require('express')
const { listarClientes, listarUmCliente } = require('../controller/clientesController')
const router = express.Router()

router.get('/', listarClientes)
router.get('/:nome', listarUmCliente)

module.exports = router