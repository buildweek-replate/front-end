import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Route from 'react-router-dom';
import { Link } from 'react-router-dom';

const VolunteerDelivery = props => {
    const [delivery, setDelivery] = useState([])
    useEffect(() => {
      const getDelivery = () => {
        axios
          .get('post link here')
          .then(response => {
            setDelivery(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getVolunteer();
    }, []);
    console.log(props);
    return (
      <div className="delivery-list">
        {delivery.map(delivery => (
          <Link key={movie.id} to={`/volunteer/${delivery.id}`} >
            <DeliveryDetails delivery={delivery} />
            </Link>
        ))}
      </div>
    );
  }
  
  function DeliveryDetails({ delivery }) {
    const { date, time, food, amount } = delivery;
    return (
      <div className="delivery-card">
        <h2>{title}</h2>
        <div className="delivery-date">
          Date: <em>{date}</em>
        </div>
        <div className="delivery-time">
          Time: <strong>{time}</strong>
        </div>
        <div className="food">
          Time: <strong>{food}</strong>
        </div>
        <div className="amount">
          Time: <strong>{amount}</strong>
        </div>
      </div>
    );
  }
  
  export default VolunteerDelivery;
