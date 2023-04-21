const Card = require('../models/cardModel')

const mongoose = require('mongoose')


// get all cards

const getCards = async (req, res) => {
    const cards = await Card.find({}).sort({ createdAt: -1 })

    res.status(200).json(cards)

}


// get single card


const getOneCard = async (req, res) => {

    const { id } = req.params

    // check id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id format' })
    }

    const card = await Card.findById(id)

    if (!card) {
        return res.status(404).json({ error: 'No such card' })
    }

    res.status(200).json(card)

}



// create new card

const createCard = async (req, res) => {

    const { title, content } = req.body

    try {
        const card = await Card.create({ title, content })
        res.status(200).json(card)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}



// delete card

const deleteCard = async (req, res) => {
    const { id } = req.params

    // check id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id format' })
    }

    const card = await Card.findByIdAndDelete({ _id:id })

    if (!card) {
        return res.status(404).json({ error: 'No such card' })
    }

    res.status(200).json(card)

}


const updateCard = async (req, res) => {
    const { id } = req.params

    // check id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id format' })
    }

    const card = await Card.findByIdAndUpdate({ _id:id })

    if (!card) {
        return res.status(404).json({ error: 'No such card' })
    }

    res.status(200).json(card)

}




// update card





module.exports = {
    createCard,
    getCards,
    getOneCard,
    deleteCard,
    updateCard
}