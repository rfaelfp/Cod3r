const express = require('express')
const app = express()

app.use('/opa', (req, res) => {
    res.json({
        nome: "ipad 32gb",
        price: "1899.99",
        discount: 0.15
    })
})



app.listen(3000, () => {
    console.log('Backend executando')
})