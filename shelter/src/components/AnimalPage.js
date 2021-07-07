import React, { useState, useEffect } from 'react'
import { getAnimalDetails } from '../actions/animals'

function AnimalPage({ location }) {
    const [animalDetails, setAnimalDetails] = useState({ id: "", name: "", date: "", age: "", size: '', breed: '', description: '' })
    const [editDetails, setEditDetails] = useState(false)
    const [form, setForm] = useState({ id: "", name: "", date: "", age: "", size: '', breed: '', description: '' });

    useEffect(() => {
        const { state } = location;
        getAnimalDetails(state.id, (data) => { setAnimalDetails(data); setForm(data) });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e)
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    return (
        <>
            {
                !editDetails ? <div>
                    <p>{animalDetails.id}</p>
                    <p>{animalDetails.name}</p>
                    <p>{animalDetails.date}</p>
                    <p>{animalDetails.age}</p>
                    <p>{animalDetails.size}</p>
                    <p>{animalDetails.breed}</p>
                    <p>{animalDetails.description}</p>
                </div> : <form>
                        <input type="text" name="id" value={form.id} />
                        <input type="text" name="name" value={form.name} onChange={handleChange} />
                        <input type="text" name="date" value={form.date} onChange={handleChange} />
                        <input type="text" name="age" value={form.age} onChange={handleChange} />
                        <input type="text" name="size" value={form.size} onChange={handleChange} />
                        <input type="text" name="breed" value={form.breed} onChange={handleChange} />
                        <textarea type="text" name="description" value={form.description} onChange={handleChange} />
                    </form>}
            {!editDetails ? <div><button onClick={setEditDetails}>Edytuj</button><button>Usuń</button></div> : <button>Zapisz</button>}
        </>
    )
}

export default AnimalPage
