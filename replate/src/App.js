import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

import BusinessSignUp from "./components/business/signup/BusinessSignUp";
import Dashboard from "./components/business/dashboard/Dashboard";
import BusinessPickUp from "./components/business/dashboard/BusinessPickup";

import Login from './components/Login';



function App() {
  const [userData, setUserData] = useState([{}]);
  const [pendingOrders, setPendingOrders] = useState([{}]);
  const [assignedOrders, setAssignedOrders] = useState([{}]);
  const [completedOrders, setCompletedOrders] = useState([{}]);
  


  return (
    <div className="App">
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
