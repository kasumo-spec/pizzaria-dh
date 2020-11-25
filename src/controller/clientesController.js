const clientes = require("../model/clientes")

const clientesController = {
    listarClientes: (req,res)=> {
        res.json(clientes)
    },
    listarUmCliente: (req,res) => {
        let clienteIndex = clientes.findIndex(nome => req.params.nome)
        res.json(clientes[clienteIndex])
    }
}

module.exports = clientesController