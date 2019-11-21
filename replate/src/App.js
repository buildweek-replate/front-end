import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
//Components
import BusinessProfile from './components/business/BusinessProfile';
import BusinessSignUp from './components/business/BusinessSignUp';
import Dashboard from './components/Dashboard';
import BusinessPickUp from './components/business/BusinessPickup';
import UniversalSignUp from './components/UniversalSignUp';
import Login from './components/Login';



function App() {
  

  return (
    <div className="App">

<Dashboard />
      
    </div>
  );

}
export default App;
