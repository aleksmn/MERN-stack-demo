const express = require('express')

const app = express()


// routes
app.get('/', (req, res) => {
    res.json({ msg: 'Добро пожаловать!' })
})



app.listen(5000, () => {
    console.log('Listening on port 5000')
})