import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

const BusinessFormStyles = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 100vh;

.Business-Signup-Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.FormStyle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 50%;
    border: 1px solid black;

    .Label-Container {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #53131E;
        width: 100%;
        height: 10%;

        label {
            color: #E7D7C1;
            font-size: 2rem;
        }
    }

   

    .Content-Row {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;
        height: 100%;

        .Content-Col-One {
            width: 50%;
            margin: 10px;

            .formField {
                height: 30px;
                width: 70%;
                margin: 5px;
            }
        }

        .Content-Col-Two {
            width: 50%;
            margin: 20px;

            .formField {
                width: 90%;
                height: 30px;
                margin: 5px;
            }
        }

        Button {
            color: black;
            background: white;
            width: 10rem;
            margin: 15px;
        }

    }
}


`;




 const BusinessSignUp = ({ values, errors, touched, status}) => {
     const [users, setUsers] = useState( [] )

useEffect( () => {
    status && setUsers(users => [...users, status]);
}, [status] );

const classes = useStyles();

    return (
        <React.Fragment>
        <CssBaseline />
        <BusinessFormStyles>
        <Container className="Business-Signup-Container" maxWidth="lg">
        <Form className="FormStyle">
        <div className="Label-Container">
        <label>Thank you for volunteering!</label>
        </div>
       

        <div className="Content-Row">

        <div className="Content-Col-One">
        <div className="Inner-Top-Content">
        <TextField id="outlined-basic" className={classes.textField} type="text" name="username" label="Username" margin="normal" variant="outlined"/>
        <TextField id="outlined-basic" className={classes.textField} type="password" name="password" label="Password" margin="normal" variant="outlined" />
        <TextField id="outlined-basic" className={classes.textField} type="password" name="confirm-password" label="Confirm Password" margin="normal" variant="outlined" />
        </div>
        </div>
        <div className="Content-Col-Two">
        <div className="Inner-Bottom-Content">
        <TextField id="outlined-basic" className={classes.textField} type="text" name="business-name" label="Business Name" margin="normal" variant="outlined" />
        <TextField id="outlined-basic" className={classes.textField} type="text" name="business-address" label="Business Address" margin="normal" variant="outlined" />
        </div>
        </div>
        </div>
        <Button variant="contained" color="primary" className={classes.button}>Sign Up!</Button>
        </Form>
        </Container>
        </BusinessFormStyles>
        </React.Fragment>
    );
};


const FormikBusinessSignupForm = withFormik({
    mapPropsToValues({ username, password, phoneNumber, businessName, businessAddress}) {

        return {
            username: username || "",
            password: password || "",
            phoneNumber: phoneNumber || "",
            businessName: businessName || "",
            businessAddress: businessAddress || ""
        };
    },

  
    handleSubmit(values, { setStatus }) {
    axios
    .post("https://reqres.in/api/users/", values)
    .then(response => {
        setStatus(response.data);
        console.log(response.data)
    })
    .catch(error => console.log(`I'm sorry there seems to be an error! ${error}`));
    }

})

export default FormikBusinessSignupForm(BusinessSignUp)