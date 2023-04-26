import { useEffect, useState } from 'react'


import CardDetails from "../components/CardDetails"

const Home = () => {
    const [cards, setCards] = useState(null)

    useEffect(() => {
        const fetchCards = async () => {
            const response = await fetch('/api/cards')
            const json = await response.json()

            if (response.ok) {
                setCards(json)
            }
        }

        fetchCards()
    }, [])

    return (
        <div className="container">
            <div className="cards">
                {cards && cards.map((card) => (
                    

                    <CardDetails key={card._id} card={card}/>
                    
                ))}
            </div>
        </div>
    );
}

export default Home;