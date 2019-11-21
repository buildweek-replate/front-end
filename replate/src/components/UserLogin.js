import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';



const UserLogin = (props) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = event => {
        return setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const login = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/profile');
            })
            .catch(error => console.log(error.response));
    };


    return (
        
        <div>
            <h1>Login To Your Replate Account</h1>
            <form onSubmit={login}>
                <label htmlFor="username">Email:</label>
                <input 
                        type="text" 
                        name="username" 
                        id="username"
                        value={credentials.username}
                        onChange={handleChange} 
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input 
                    type="text" 
                    name="password" 
                    id="password"
                    value={credentials.password}
                    onChange={handleChange} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    
    )

}

export default UserLogin;