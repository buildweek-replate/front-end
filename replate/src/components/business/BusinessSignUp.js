import React from "react";
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { withFormik, Form, Field } from "formik";
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import styled from "styled-components";


const SignUpStyles = styled.div`


.divContainerOuter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 98vh;

    .divContainerInner {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 60%;
        width: 40%;
        border: 1px solid black;

        .spanContainer {
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid lightgrey;
            background: white;
        
            span {
                font-weight: 900;
                font-size: 2rem;
            }
        }

        Form {

            .formLabel {
                font-size: 2rem;
            }

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;

            .row {
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 70%;


                .userSeparator {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 50%;

                .fieldStyles {
                    margin: 1.2rem;
                    width: 70%;
                }
               
            }

            .businessSeparator {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 50%;

                .fieldStyles {
                    margin: 1.2rem;
                    width: 70%;
                }
            }

            }

        
     
        }

    }

}


`;



const BusinessSignUp = () => {


    return (

        <SignUpStyles>
        <div className="divContainerOuter">
        <div className="divContainerInner">
        <div className="spanContainer">
        <span>Thank you for volunteering!</span>
        </div>
        <Form>
        <label className="formLabel">Sign up as a business.</label>

        <div className="row">
        <div className="userSeparator">
        <Field className="fieldStyles" component={TextField} type="text" name="username" label="Username" />
        <Field className="fieldStyles" component={TextField} type="password" name="password" label="Password" />
        <Field className="fieldStyles" component={TextField} type="text" name="phoneNumber" label="Phone Number" />
        </div>

        <div className="businessSeparator">
        <Field className="fieldStyles" component={TextField} type="text" name="businessName" label="Business Name" />
        <Field className="fieldStyles" component={TextField} type="text" name="businessAddress" label="Business Address" />
        <Field className="fieldStyles" component={TextField} type="number" name="zipCode" label="Zip Code" />
        </div>
        </div>

        <button type="submit">Submit</button>

        </Form>

        </div>
        </div>
        </SignUpStyles>
    );
};

const FormikBusinessSignUp = withFormik({
    mapPropsToValues({username, password, phoneNumber, businessName, businessAddress, zipCode}) {
        return {
            username: username || "",
            password: password || "",
            phoneNumber: phoneNumber || "",
            businessName: businessName || "",
            businessAddress: businessAddress || "",
            zipCode: zipCode || ""
        }
    },

    validationSchema: Yup.object().shape(
        {
            username: Yup.string().required(),
            password: Yup.string().required(),
            phoneNumber: Yup.string().required(),
            businessName: Yup.string().required(),
            businessAddress: Yup.string().required(),
            zipCode: Yup.string().required()
        }
    ),

    handleSubmit(values, {setStatus}) {
        axiosWithAuth()
        .post('users', values)
        .then(res => {
          setStatus(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error.response));
    }
})

export default FormikBusinessSignUp(BusinessSignUp);