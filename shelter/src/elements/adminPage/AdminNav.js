import React from 'react'
import { Link } from "react-router-dom";

function AdminNav() {
    return (
        <nav className='nav'>
        <ul className='nav_ul'>
            <li className='nav_li'>
                <Link to="/">Strona główna</Link>
            </li>
            <li className='nav_li'>
                <Link to="/wiadomosci">Wiadomości</Link>
            </li>
            <li className='nav_li'>
                <Link to="/dodajzwierze">Dodaj zwierzaka</Link>
            </li>
            <li className='nav_li'>
                <Link to="/uzytkownicy">Uzytkownicy</Link>
            </li>
        </ul>
    </nav>
    )
}

export default AdminNav
