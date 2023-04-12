const express = require('express')
const Card = require('../models/cardModel')


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
router.post('/', async (req, res) => {

    const {title, content} = req.body

    try {
        const card = await Card.create({title, content})
        res.status(200).json(card)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

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