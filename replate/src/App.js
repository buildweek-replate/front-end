import React from 'react';
import './App.css';

import BusinessSignUp from "./components/business/signup/BusinessSignUp";
import Dashboard from "./components/business/dashboard/Dashboard";
import BusinessPickUp from "./components/business/dashboard/BusinessPickup";



import Login from './components/Login';
import './App.css';


function App() {



  return (
    <div className="App">


    <BusinessPickUp />


      <Login />
    </div>
  );
}

export default App;
