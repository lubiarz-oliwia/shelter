import {API_URL} from './constants';

export const createAccount = (values) => {
    return fetch(`${API_URL}/users`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values),
    })
        .catch(err => console.log(err));
};