import { useState } from 'react'

const CardForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const card = { title, content }

        const response = await fetch('/api/cards', {
            method: 'POST',
            body: JSON.stringify(card),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setTitle('')
            setContent('')

            console.log('new card added:', json)
        }

    }

    return (
        <form className="createCard" onSubmit={handleSubmit}>
            <h3>Добавить карточку</h3>

            <label className="form-label">Название:</label>
            <input
                className="form-control  mb-3"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label className="form-label">Содержимое:</label>
            <textarea
                className="form-control  mb-3"
                type="text"
                onChange={(e) => setContent(e.target.value)}
                value={content}
            ></textarea>

            <button className="btn btn-primary">Добавить</button>
            {error && <div className="error text-danger mt-2">{error}</div>}
        </form>
    )
}

export default CardForm