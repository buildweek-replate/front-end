import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

<<<<<<< HEAD
import BusinessProfile from "./components/business/BusinessProfile";
=======
import BusinessSignUp from "./components/business/BusinessSignUp";
import Dashboard from "./components/Dashboard";
import BusinessPickUp from "./components/business/BusinessPickup";
>>>>>>> 3134cedd00f8b29eae56a82425e8337e4e7b61b3

import Login from './components/Login';



function App() {



  return (
    <div className="App">


    <BusinessProfile />


      <Login />
    </div>
  );


return (
  <div>
    <PickupList list={savedList} />
    <Route path="/universalSignup" component= {UniversalSignUp} />
    <Route exact path="/volunteerDashboard" component= {VolunteerDashboard} />
    <Route render={() => <h1>Page not found</h1>} />
  </div>
)
}
export default App;
