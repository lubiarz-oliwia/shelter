import React from 'react'
import dog6 from '../img/dog6.jpeg'

function Header() {
    return (
        <header className="header">
                <div className="header_h">
                    <h1>Zaadoptuj zwierzaka!</h1>
                    <h2>One tez potrzebują domu.</h2>
                </div>
                    <img src={dog6} alt="" className="header_img" />
    </header>
    )
}

export default Header
