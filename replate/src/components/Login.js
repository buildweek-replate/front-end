import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';





const Login = () => {
    return (
        
        <div>
            <h1>Login To Your Replate Account</h1>
            <form>
                <label for="username">Username:</label>
                <input type="text" name="username" id="username" />
                <br />
                <label for="password">Password:</label>
                <input type="text" name="password" id="password" />
            </form>
        </div>
    
    )
}

export default Login;