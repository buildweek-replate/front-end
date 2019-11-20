import React, {useState, useEffect} from "react"; 
import Axios from "axios";

const BusinessProfile = props => {
    const [businessUser, setBusinessUser] = useState([]);

    useEffect( () => {
        const getBusinessAccount = () => {
            Axios
            .get()
            .then(response => {
                setBusinessUser(response.data);
            })
            .catch(error => {
                console.log(`Server error, ${error}`);
            });
        }
    })


    return (
        <div>
        <span>Business Information</span>
        <span>Business Name: </span>
        <span>Business Address: </span>
        <span>Business Phone Number: </span>
        <button>Delete business account</button>
        </div>
    )
}

export default BusinessProfile;