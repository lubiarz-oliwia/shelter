import React from 'react'
import Button from './Button'

function Card({name, description, getDetails}) {
    return (
        <div className="card">
            <h3 className="card_h">{name}</h3>
            <p className="card_p">{description}</p>
            <Button button_text={"Więcej..."} button_action={getDetails}/>
        </div>
    )
}

export default Card
