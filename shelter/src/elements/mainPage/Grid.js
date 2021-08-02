import React, { useState, useEffect } from 'react'
import { getAnimalsDetails } from '../../actions/animals'
import Card from '../Card'
import { useHistory } from "react-router-dom";

function Grid() {
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
        console.log(input)
        history.push(input);
    }

    return (
        <>
        <div className="grid">
            {animalsDetails.map((item, index) => {
                return (
                    <Card
                        name={item.name}
                        description={item.description}
                        getDetails={() => toDetails(item.id)}
                    />
                )
            })}
        </div>
        </>
    )
}

export default Grid
