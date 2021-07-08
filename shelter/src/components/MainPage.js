import React from 'react';
import Grid from '../elements/mainPage/Grid';
import Header from '../elements/mainPage/Header';
import Nav from '../elements/Nav';
import ContactUsForm from '../elements/mainPage/ContactUsForm';
import ContactInfo from '../elements/mainPage/ContactInfo';

function MainPage() {
    return (
        <>
            <Nav />
            <Header />
            <Grid />
            <div className="contact_section">
                <ContactInfo />
                <ContactUsForm />
            </div>
        </>
    )
}

export default MainPage
