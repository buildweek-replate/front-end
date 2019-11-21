import React from "react";
import { Link } from 'react-router-dom';
import BusinessProfile from "./business/BusinessProfile";
import BusinessPickup from "./business/BusinessPickup";

import styled from "styled-components";

const DashStyles = styled.div`
  .dashboard-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 98vh;

    .link-container {
        
        margin: 1rem;
        padding: 1rem;
        height: 15rem;
        width: 15rem;

    

      .button-container {
          margin: 0 auto;
          height: 100%;

        button {
        font-size: 1.5rem;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

const BusinessDashboard = () => {
  return (
    <DashStyles>
      <div className="dashboard-container">
          <div className="link-container">
            <Link to="/profile">
              <div className="button-container">
                <button>Profile</button>
              </div>
            </Link>
          </div>

          <div className="link-container">
            <Link to="/create-a-request">
              <div className="button-container">
                <button>Create a Request</button>
              </div>
            </Link>
          </div>
      </div>
    </DashStyles>
  );
};

export default BusinessDashboard;
