import React, {useState, useEffect} from "react"; 
import Axios from "axios";
import styled from "styled-components";

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
           


            .profile-container {
           
           display: flex;
           flex-direction: row;
           align-items: flex-start;
           width: 90%;
           margin: 2rem;
           padding: 1rem;

           .profile-col-1 {
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: flex-start;
               width: calc(90% / 2);

               .labels {
                   font-size: 1.2rem;
                   margin: 0.5rem;
               }
           }

           .profile-col-2 {
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               width: calc(90% / 2);

               .user-span {
                   font-size: 1.2rem;
                   margin: 0.5rem;
               }
           }
       
       }

        }
   

        .container-header {
            background: lightgrey;
            border-bottom: 1px solid black;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 10%;
            width: 100%;

            span {
                padding: 1rem;
                
            }
        }
    }
}


`;



const BusinessProfile = props => {

    const [businessUser, setBusinessUser] = useState([])
    useEffect(() => {
     
            Axios
            .get ("https://reqres.in/api/users/2")
            .then(response => {
                setBusinessUser(response.data.data);
                console.log(response)
                
            })
            .catch(error => {
                console.error('Server Error', error);
            });
        
    }, [])


    return (
       <BusinessProfileStyles>
        <div className="divContainerOuter">
        <div className="divContainerInner">
        <div className="container-header">
        <span>Go back</span>
        </div> 
        <div className="profile-wrapper">
        <h2>Business Information</h2>
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
        <button>Delete business account</button>
        </div>
        </div>
        </div>
        </BusinessProfileStyles>
    )
}

export default BusinessProfile;