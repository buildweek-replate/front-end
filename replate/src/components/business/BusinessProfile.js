import React, {useState, useEffect} from "react"; 
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../../Dashboard";





const BusinessProfileStyles = styled.div`

.divContainerOuter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 98vh;
    .divContainerInner {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        height: 60%;
        width: 40%;
        border: 1px solid black;


        .profile-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


            .profile-h2  {
                line-height: 130%;
                border-bottom: 1px solid black;
                font-weight: 400;

                span {
                    color: red;
                    font-weight: 900;
                }
            }
           


            .profile-container {
           
           display: flex;
           flex-direction: row;
           justify-content: center;
           align-items: center;
           width: 90%;
           margin: 2rem;
           padding: 1rem;

           .profile-col-1 {
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: flex-start;
               width: calc(90% / 2);
               border: 1px solid black;

               .labels {
                   font-size: 1.2rem;
                   margin: 0.5rem;
                   font-weight: 900;
                 
               }
           }

           .profile-col-2 {
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               width: calc(90% / 2);
               border: 1px solid black;

               .user-span {
                   font-size: 1.2rem;
                   margin: 0.5rem;
               }
           }
       
       }

        }
   

        .container-header {
            background: #53131E;
            border-bottom: 1px solid black;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 10%;
            width: 100%;

            .dashboard-button {
                padding: 0.4rem;
                margin: 1rem;
                color: #F7EDF0;
                background: #1E2D24;
                border: 1px solid white;
               

                &:hover {
                    border: 1px solid black;
                    background: white;
                    color: black;
                }

            }
        }

        .delete-button {
            background: #1E2D24;
            width: 15rem;
            height: 2rem;
            color: white;

            &:hover {
               
                font-weight: 900;
            }

        }
    }
}


`;



const BusinessProfile = () => {
    

    const [businessUser, setBusinessUser] = useState([])
    useEffect(() => {
     
            axiosWithAuth()
            .get ("https://reqres.in/api/users/2")
            .then(response => {
                setBusinessUser(response.data.data);
                console.log(response)
                
            })
            .catch(error => {
                console.error('Server Error', error);
            });
        
    }, [])

    const deleteUser= () => {        axiosWithAuth()
        .delete ('users/2')
        .then(response => {
            console.log(response)
            
        })
        .catch(error => {
            console.error('Server Error', error);
        });
    }


    return (
       <BusinessProfileStyles>
        <div className="divContainerOuter">
        <div className="divContainerInner">
        <div className="container-header">
        
        
        
        
        <Link to="/dashboard">
            <button className="dashboard-button">Dashboard</button>
        </Link>
        
        </div> 
        <div className="profile-wrapper">
        <h2 className="profile-h2"><span>{businessUser.first_name}'s</span> Business Information</h2>
        <div className="profile-container">
        <div className="profile-col-1">
        <span className="labels">Business Name:</span>
        <span className="labels">Business Address:</span>
        <span className="labels">Business Phone Number:</span>
        </div>
        <div className="profile-col-2">
        <span className="user-span">{businessUser.first_name}</span>
        <span className="user-span">{businessUser.first_name}</span>
        <span className="user-span">{businessUser.first_name}</span>
        </div>
        </div>
        <button onClick={deleteUser} className="delete-button">Delete business account</button>
        </div>
        </div>
        </div>
        </BusinessProfileStyles>
    )
}

export default BusinessProfile;