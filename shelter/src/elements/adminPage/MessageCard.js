import React from 'react'

function MessageCard({name, email, message}) {
    return (
        <div className="card">
            <h3 className="card_h">{name}</h3>
            <p className="card_p">{email}</p>
            <p className="card_p">{message}</p>
        </div>
    )
}

export default MessageCard

