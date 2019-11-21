import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
//Components
import BusinessSignUp from './components/business/BusinessSignup';
import Dashboard from './components/Dashboard';
import BusinessPickUp from './components/business/BusinessPickup';
import UniversalSignUp from './components/UniversalSignUp';
import Login from './components/Login';



function App() {
  

  return (
    <div className="App">
      <Login />
      <PickupList list={savedList} />
      <Route path="/universalSignup" component= {UniversalSignUp} />
      
        <Route exact path="/Dashboard" component= {Dashboard} />
        <Route render={() => <h1>Page not found</h1>} />
      
    </div>
  );

}
export default App;
