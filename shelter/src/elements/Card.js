import React from 'react'

function Card({name, description}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <button>Więcej</button>
        </div>
    )
}

export default Card
