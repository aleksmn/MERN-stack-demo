const CardDetails = ({ card }) => {

    return (
        <div className="card-details">
            <h5>{card.title}</h5>
            <p>{card.content}</p>
            <hr />
        </div>
    )
}

export default CardDetails