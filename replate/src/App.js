import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
//Components
import PrivateRoute from './components/PrivateRoute';
import BusinessProfile from './components/business/BusinessProfile';
import BusinessSignUp from './components/business/BusinessSignUp';
import BusinessDashboard from './components/Dashboard';
import BusinessPickUp from './components/business/BusinessPickup';
import UserLogin from './components/UserLogin';



function App() {
  

  return (
    <div className="App">
      <Switch>
        <Route exact path = '/signup' component={BusinessSignUp} />
        <Route exact path = '/' component={UserLogin} />
        <Route exact path = '/dashboard' component={BusinessDashboard} />
        <PrivateRoute exact path = '/profile' component={BusinessProfile} />
      </Switch>  
    </div>
   
  );

}
export default App;
