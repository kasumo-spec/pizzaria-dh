const cardapio = require("../model/cardapio")

const cardapioController = {
    listarPizzas: (req,res)=> {
        res.json(cardapio)
    },
    listarUmaPizza: (req,res) => {
        let cardapioIndex = cardapio.findIndex(numero => req.params.numero)
        res.json(cardapio[cardapioIndex])
    }
}

module.exports = cardapioController