import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className='nav'>
            <ul className='nav_ul'>
                <li className='nav_li'>
                    <Link to="/">Strona główna</Link>
                </li>
                <li className='nav_li'>
                    Schronisko dla Bezdomnych Zwierząt
                </li>
                <li className='nav_li'>
                    <Link to="/logowanie">Zaloguj się</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
