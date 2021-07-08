import React, { useState } from 'react'
import Nav from '../elements/Nav'
import Button from '../elements/Button'

function AddPetForm() {
    const [form, setForm] = useState({ name: "", date: "", age: "", size: '', breed: '', description: '' })

    //date will be added automatically

    return (
        <>
            <Nav />
            <div className="container">
                <form>
                    <h1>Dodaj zwierzę</h1>
                    <div>
                        <label>Imię</label>
                        <input type="text" name="name" value={form.name} />
                    </div>
                    <div>
                        <label>Płeć:</label>
                        <select>
                            <option value="male">Suczka</option>
                            <option value="female">Pies</option>
                        </select>
                    </div>
                    <div>
                        <label>Data przyjazdu:</label>
                        <input type="date" name="date" value={form.date} />
                    </div>
                    <div>
                        <label>Wiek:</label>
                        <input type="number" name="age" value={form.age} />
                    </div>
                    <div>
                        <label>Rozmiar:</label>
                        <input type="number" name="age" value={form.age} />
                    </div>
                    <div>
                        <label>Rasa:</label>
                        <input type="text" name="breed" value={form.breed} />
                    </div>
                    <div>
                        <label>Opis:</label>
                        <textarea name="descritpion" value={form.description} />
                    </div>
                    <Button button_text={"Dodaj"} />
                </form>
            </div>
        </>
    )
}

export default AddPetForm
