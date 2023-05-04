import { useCardsContext } from '../hooks/useCardsContext';

const CardDetails = ({ card }) => {

    const { dispatch } = useCardsContext()

    const handleClick = async () => {
        const response = await fetch('/api/cards/' + card._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_CARD', payload: json})
        }

    }

    return (
        <div className="card-details">
            <h5>{card.title}</h5>
            <p>{card.content}</p>
            <span onClick={handleClick} style={{"color":"red"}}>Удалить</span>

            <hr />
        </div>
    )
}

export default CardDetails