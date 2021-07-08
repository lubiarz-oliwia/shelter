import React, { useState } from 'react'
import Button from '../elements/Button'
import Nav from '../elements/Nav'
import { Link, useHistory } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({ login: "", password: "" })
    const [error, setError] = useState({ login: "", password: "" })

    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        // to be continued with conditions

        history.push('/stronaadmina')

    }
    return (
        <>
            <Nav />
            <div className="container">
                <form className="login_form" onSubmit={onSubmit}>
                    <h1>Zaloguj się</h1>
                    <div>
                        <label>Login</label>
                        <input type="login" name="login" value={form.name} />
                        {error ? <p className="error">{error.name}</p> : null}
                    </div>
                    <div>
                        <label>Hasło</label>
                        <input type="password" name="password" value={form.email} />
                        {error ? <p className="error">{error.email}</p> : null}
                    </div>
                    <Button button_text={"Zaloguj"} />
                    <p>Nie masz konta?</p>
                    <Link to="/rejestracja" className="login_form_link">Zarejestruj się!</Link>
                </form>
            </div>
        </>
    )
}

export default Login
