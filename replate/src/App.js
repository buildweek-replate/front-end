import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
//Components
import BusinessProfile from './components/business/BusinessProfile';
import BusinessSignUp from './components/business/BusinessSignUp';
import BusinessDashboard from './components/Dashboard';
import BusinessPickUp from './components/business/BusinessPickup';
import UniversalSignUp from './components/UniversalSignUp';
import Login from './components/Login';



function App() {
  

  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component={Login} />
        <Route exact path = '/dashboard' component={BusinessDashboard} />
        <Route exact path = '/profile' component={BusinessProfile} />
      </Switch>  
    </div>
   
  );

}
export default App;
