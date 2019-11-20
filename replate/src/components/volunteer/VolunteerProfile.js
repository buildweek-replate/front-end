import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Route from 'react-router-dom';
import { Link } from 'react-router-dom';

const VolunteerProfile = props => {
    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        const getVolunteerAccount = () => {
            axios
            .get ( )
            .then(response => {
                setVolunteer(response.data);
            })
            .catch(error => {
                console.error('Server Error', error);
            });
        }
    })
}