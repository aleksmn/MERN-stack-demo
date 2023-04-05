require('dotenv').config()

const express = require('express')

const app = express()
const cardRoutes = require('./routes/cards')

// middleware
app.use((req, res, next) => {
    // Выводим в консоль путь запроса и метод запроса
    console.log(req.path, req.method)

    next()
})

// routes
app.get('/', (req, res) => {
    res.json({ msg: 'Добро пожаловать!' })
})



app.listen(process.env.PORT, () => {
    console.log('Listening on port 5000')
})