import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons'

function ContactInfo() {
    return (
        <div className="contact_info">
            <h1>Kontakt</h1>
            <h2>SCHRONISKO DLA BEZDOMNYCH ZWIERZĄT</h2>
           <p> <FontAwesomeIcon icon={faLocationArrow} />30-254 KRAKÓW ul.Rybna 3</p>
            <p><FontAwesomeIcon icon={faPhone} />12 429-74-72 , 12 429-92-41</p>
            <p><FontAwesomeIcon icon={faEnvelope} />biuro@schronisko.krakow.pl</p>
        </div>
    )
}

export default ContactInfo
