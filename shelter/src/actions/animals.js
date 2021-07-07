import { API_URL } from './constants';

// GET, POST, PUT, DELETE

export const getAnimalsDetails = (successCallback) => {
    fetch(`${API_URL}/dogs`)
        .then(r => r.json())
        .then(data => {
            console.log(data);
            successCallback(data);
        })
        .catch(err => console.log(err));
}

export const getAnimalDetails = (id, successCallback) => {
    fetch(`${API_URL}/dogs/${id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data);
            successCallback(data);
        })
        .catch(err => console.log(err));
};

export const deleteAnimal = (id) => {
    return fetch(`${API_URL}/dogs/${id}`, {
        method: 'DELETE',
    })
        .catch(err => console.log(err));
}

export const addAnimal = (values) => {
    return fetch(`${API_URL}/dogs`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values),
    })
        .catch(err => console.log(err));
};

export const editAnimalDetails = (id, data) => {
    return fetch(`${API_URL}/dogs/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data),
    })
        .catch(err => console.log(err));
};