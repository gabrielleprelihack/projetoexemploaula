const express = require("express")
const app = express()

//rotas
const index = require("./routes/index")
const professoras = require("./routes/professorasRoute")

app.use(function(req, res, next){
    res.header("Acess-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, x-Request-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/professoras", professoras)

module.exports = app