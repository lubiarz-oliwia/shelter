import React from 'react';
import Grid from '../elements/Grid';
import Header from '../elements/Header';
import Nav from '../elements/Nav';
import ContactUsForm from './ContactUsForm';

function MainPage() {
    return (
        <div className="container">
            <Nav />
            <Header />
            <Grid  />
            <ContactUsForm />
        </div>
    )
}

export default MainPage
