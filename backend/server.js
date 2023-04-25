require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const cardRoutes = require('./routes/cards')

const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    // Выводим в консоль путь запроса и метод запроса
    console.log(req.path, req.method)

    next()
})

// routes
app.use('/api/cards', cardRoutes)
 

// connect DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port ' + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


