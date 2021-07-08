import {API_URL} from './constants';

export const sendMessage = (values) => {
    return fetch(`${API_URL}/contact`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values),
    })
        .catch(err => console.log(err));
};


export const getMessages= (successCallback) => {
    fetch(`${API_URL}/contact`)
        .then(r => r.json())
        .then(data => {
            console.log(data);
            successCallback(data);
        })
        .catch(err => console.log(err));
}
