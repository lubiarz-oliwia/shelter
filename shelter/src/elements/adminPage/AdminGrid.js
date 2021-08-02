import React, { useState, useEffect } from 'react'
import { getAnimalsDetails } from '../../actions/animals'
import { useHistory } from "react-router-dom";

function AdminGrid() {
    let history = useHistory();
    const [animalsDetails, setAnimalsDetails] = useState([])

    useEffect(() => {
        getAnimalsDetails(setAnimalsDetails)
    }, [])

    const toDetails = (id) => {
        const input = {
            pathname: `/zwierze/${id}`,
            state: { id: id }
        };
        history.push(input);
    }

    return (
        <>
            <table>
                <tr>
                    <th>Imię</th>
                    <th>Płeć</th>
                    <th>Wiek</th>
                    <th>Waga</th>
                    <th>Data dodania</th>
                    <th>Więcej informacji</th>
                </tr>
                {animalsDetails.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.sex}</td>
                            <td>{item.age}</td>
                            <td>{item.weight}</td>
                            <td>{item.add_date}</td>
                            <td><button onClick={() => toDetails(item.id)}>details</button></td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default AdminGrid;





