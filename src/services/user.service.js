import config from 'config';
import axios from 'axios'
export const userService = {
    login
}

function login(email, password) {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }
    return axios.post(`${config.apiUrl}/user/login`, requestOptions.body)
        .then(handleResponse)
        .then(user => {
            console.log(user)
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user.token));
            return user;
        })
}

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    console.log(response)
    return response.text().then(text => {
        console.log("texttt: ",text)
        const data = text && JSON.parse(text);
        console.log('data: ',data)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}