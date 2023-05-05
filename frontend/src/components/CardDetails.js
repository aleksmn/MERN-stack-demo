import { useCardsContext } from '../hooks/useCardsContext';

// Format Date
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru';


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
            <p>{formatDistanceToNow(new Date(card.createdAt), { addSuffix: true, locale: ruLocale } )}</p>
            <span onClick={handleClick} className='text-danger material-symbols-outlined'>delete</span>

            <hr />
        </div>
    )
}

export default CardDetails