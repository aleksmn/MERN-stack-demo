require('dotenv').config()

const express = require('express')

const app = express()
const cardRoutes = require('./routes/cards')

// middleware
app.use(express.json())

app.use((req, res, next) => {
    // Выводим в консоль путь запроса и метод запроса
    console.log(req.path, req.method)

    next()
})

// routes
app.use('/api/cards', cardRoutes)



app.listen(process.env.PORT, () => {
    console.log('Listening on port 5000')
})