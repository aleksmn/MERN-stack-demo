const express = require('express')


const router = express.Router()


// GET ALL
router.get('/', (req, res) => {
    res.json({mssg: 'GET all cards'})
})

// GET one
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET one card'})
})

// POST new card
router.post('/', (req, res) => {
    res.json({mssg: 'POST new card'})
})

// DELETE card
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE card'})
})

// UPDATE card
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE card'})
})



module.exports = router