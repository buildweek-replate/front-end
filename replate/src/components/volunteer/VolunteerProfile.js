import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Route from 'react-router-dom';
import { Link } from 'react-router-dom';

const VolunteerProfile = props => {
    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        const getVolunteer = () => {
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

getVolunteer();
}, [];
console.log(props);
return (
    <div className='volunteer-profile'>
        {volunteer.map(volunteer => (
            <Link key{volunteer.id} to={`/volunteer/${volunteer.id}`} >
                <Volunteer volunteer={volunteer} />
            </Link>
        ))}
    </div>
);
        }

        export default Volunteer;