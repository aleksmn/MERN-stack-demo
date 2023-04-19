const express = require('express')
const { createCard, getCards, getOneCard } = require('../controllers/cardController')
 

const router = express.Router()


// GET ALL
router.get('/', getCards)

// GET one
router.get('/:id', getOneCard)

// POST new card
router.post('/', createCard)

// DELETE card
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE card'})
})

// UPDATE card
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE card'})
})



module.exports = router