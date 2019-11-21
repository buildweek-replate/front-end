import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BusinessProfile from "./business/BusinessProfile";
import BusinessPickup from "./business/BusinessPickup";

import styled from "styled-components";

const DashStyles = styled.div`
  .dashboard-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 98vh;

    .dashboard-container-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      height: 60%;
      width: 40%;
      border: 1px solid black;

      .link-col-1 {
     
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        .link-container {
        
          margin: 1rem;
          padding: 1rem;
          height: 10rem;
          width: 10rem;

          .button-container {
            margin: 0 auto;
            height: 100%;

            button {
              font-size: 1.5rem;
              width: 100%;
              height: 100%;
              background: white;
            }
          }
        }
      }

      .link-col-2 {
      
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        .link-container {
        
          margin: 1rem;
          padding: 1rem;
          height: 10rem;
          width: 10rem;

          .button-container {
            margin: 0 auto;
            height: 100%;

            button {
              font-size: 1.5rem;
              width: 100%;
              height: 100%;
              background: white;
            }
          }
        }
      }
    }
  }
`;

const BusinessDashboard = () => {
  return (
    <DashStyles>
      <div className="dashboard-container">
      <span className="dashboard-span">Business Dashboard</span>
        <div className="dashboard-container-inner">
          <Router>
            <Switch>
              <Route  path="/profile" component={BusinessProfile} />
              <Route  path="/create-a-request" component={BusinessPickup} />
            </Switch>

            <div className="link-col-1">
              <div className="link-container">
                <Link exact to="/profile">
                  <div className="button-container">
                    <button>Profile</button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="link-col-2">
              <div className="link-container">
                <Link exact to="/create-a-request">
                  <div className="button-container">
                    <button>Create a Request</button>
                  </div>
                </Link>
              </div>
            </div>
          </Router>
        </div>
      </div>
    </DashStyles>
  );
};

export default BusinessDashboard;
