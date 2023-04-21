const express = require('express')
const {
    createCard,
    getCards,
    getOneCard,
    deleteCard,
    updateCard
} = require('../controllers/cardController')


const router = express.Router()


// GET ALL
router.get('/', getCards)

// GET one
router.get('/:id', getOneCard)

// POST new card
router.post('/', createCard)

// DELETE card
router.delete('/:id', deleteCard)


// UPDATE card
router.patch('/:id', updateCard)



module.exports = router