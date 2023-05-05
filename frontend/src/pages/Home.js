import { useEffect} from 'react'
import { useCardsContext } from '../hooks/useCardsContext'


import CardDetails from "../components/CardDetails"
import CardForm from '../components/CardForm'

const Home = () => {
    // const [cards, setCards] = useState(null)

    const {cards, dispatch} = useCardsContext()

    useEffect(() => {
        const fetchCards = async () => {
            const response = await fetch('/api/cards')
            const json = await response.json()

            if (response.ok) {
                // setCards(json)

                dispatch({type: 'SET_CARDS', payload: json})
            }
        }

        fetchCards()
    }, [dispatch])

    return (
        <div className="container mt-4">
            <div className='row gx-5'>
                <div className="cards col-md-8">
                    {cards && cards.map((card) => (


                        <CardDetails key={card._id} card={card} />

                    ))}
                </div>
                <div className='col-md-4'>
                    <CardForm />
                </div>
            </div>
        </div>
    );
}

export default Home;