import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Route from 'react-router-dom';
import { Link } from 'react-router-dom';

const VolunteerSchedule = props => {
    const [schedule, setScheudle] = useState([])
    useEffect(() => {
        const getVolunteerSchedule = () => {
            axios
            .get ( )
            .then(response => {
                setSchedule(response.data);
            })
            .catch(error => {
                console.error('Server Error', error);
            });
        }
    })
}

