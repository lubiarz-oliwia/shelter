import React, { useState } from 'react'
import Button from '../elements/Button'
import Nav from '../elements/Nav'
import { createAccount } from '../actions/users'
import { useHistory } from "react-router-dom";


function Register() {
    const [form, setForm] = useState({ email: "", email2: "", password: "", password2: "" });
    const [error, setError] = useState({ email: "", email2: "", password: "", password2: "" });

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let { email, email2, password, password2 } = form;
        setError({});
        let isError = false;

        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (!validateEmail(email)) {
            setError(prevState => {
                return {
                    ...prevState,
                    email: "E-mail jest nieprawidłowy.",
                }
            });
            isError = true;
        }

        if (email !== email2) {
            setError(prevState => {
                return {
                    ...prevState,
                    email2: "Maile nie są takie same."
                }
            })
            isError = true;
        }

        if (password.length < 6) {
            setError(prevState => {
                return {
                    ...prevState,
                    password: "Hasło jest zbyt krótkie."
                }
            })
        }

        if (password !== password2) {
            setError(prevState => {
                return {
                    ...prevState,
                    password2: "Hasła nie są takie same."
                }
            })
        }

        if (!isError) {
            createAccount(form);
            history.push('/stronauzytkownika')
        }
    }

    return (
        <div>
            <Nav />
            <div className="container">
                <form className="login_form" onSubmit={handleSubmit}>
                    <h1>Zarejestruj się</h1>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} />
                        {error ? <p className="error">{error.email}</p> : null}
                    </div>
                    <div>
                        <label>Powtórz email</label>
                        <input type="email" name="email2" value={form.email2} onChange={handleChange} />
                        {error ? <p className="error">{error.email2}</p> : null}
                    </div>
                    <div>
                        <label>Hasło</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange} />
                        {error ? <p className="error">{error.password}</p> : null}
                    </div>
                    <div>
                        <label>Powtórz hasło</label>
                        <input type="password" name="password2" value={form.password2} onChange={handleChange} />
                        {error ? <p className="error">{error.password2}</p> : null}
                    </div>
                    <Button button_text={"Zapisz się"} />
                </form>
            </div>
        </div>
    )
}

export default Register
