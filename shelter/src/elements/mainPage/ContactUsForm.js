import React, { useState } from 'react'
import Button from '../Button'
import { sendMessage } from '../../actions/contact'

function ContactUsForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState({ name: "", email: "", message: "" });
    const [messageSend, setMessageSend] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(e.target)
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let { name, email, message } = form;
        setError({});
        let isError = false;

        if (name.length < 5) {
            setError(prevState => {
                return {
                    ...prevState,
                    name: "Dane są nieprawidłowe."
                }
            })
            isError = true;
        }

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

        if (message.length < 20) {
            setError(prevState => {
                return {
                    ...prevState,
                    message: "Wiadomość jest zbyt krótka",
                }
            });
            isError = true;
        }

        if (!isError) {
            sendMessage(form).then(() => setMessageSend(true));
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="contact_form">
                <h1>Formularz kontaktowy</h1>
                {messageSend ? <h2>Dziękujemy za wiadomość!</h2> : <> <div className="contact_details_form">
                    <div>
                    <label>Imię i nazwisko</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                    {error ? <p className="error">{error.name}</p> : null}
                </div>
                    <div>
                        <label>E-mail</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} />
                        {error ? <p className="error">{error.email}</p> : null}
                    </div>
                    </div>
                    <div className="message_form">
                        <label>Wiadomość</label>
                        <textarea type="text" name="message" value={form.message} onChange={handleChange} rows="4" cols="42"/>
                        {error ? <p className="error">{error.message}</p> : null}
                    </div>
                    <Button button_text={"Wyślij"} type="onSubmit" /></>}
            </form>
        </>
    )
}

export default ContactUsForm
