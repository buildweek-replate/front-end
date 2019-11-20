import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Route from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp =  props => {
    const [user, setUser] = useState([])
    useEffect(() => {
        const postUser = () => {
            axios.post ('/user', {
                userType: ""
            })
            .then(function (response) {
                console.log(response);
            }
            .catch(error => {
                console.error('Server Error', error);
            });
        }
    })
}

export default SignUp;