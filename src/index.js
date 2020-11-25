const express = require( 'express')
const cardapioRouter = require('./routes/cardapioRouter')
const clientesRouter = require('./routes/clientesRouter')
const app = express()

app.get("/", (req,res) => res.send({ok: true}))

app.use("/pizza/cardapio", cardapioRouter)

app.use("/clientes", clientesRouter)


app.listen(3000, () => console.log("O ADM TA ON!"))