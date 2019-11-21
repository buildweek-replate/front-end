import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from "@material-ui/pickers";

const FormStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 98vh;

  .formStyles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 25rem;
    margin: 2rem;
    border: 1px solid lightgrey;

    .formLabel {
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: 3px;
      margin: 10px;
      padding: 5px;
    }

    .formField {
      margin: 5px;
      padding: 5px;
    }

    .date-container {
      display: flex;
      flex-direction: column;
      margin: 1rem;

      span {
        margin: 10px;
      }
    }

    .date-container {
      margin: 1rem;
      
      .pickerField {
        margin: 1rem;
      }
      
    }
  }

  .return-main-container {
    .return-outer-container {
      border: 1px solid black;
      background: lightgrey;
      margin: 1rem;
      .return-inner-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        span {
          font-size: 1.3rem;
          margin: 1rem;
        }
      }
    }
  }
`;




const BusinessPickup = ({status}) => {

  const [entries, setEntries] = useState([]);
  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    status && setEntries(entries => [...entries, status]);
  }, [status]);


  return (
    <FormStyles>
      <div className="formDiv">
        <Form className="formStyles">
          <label className="formLabel">Create a pickup request</label>

          <Field
            className="formField"
            type="text"
            name="food"
            placeholder="Food Name"
          />

          <Field
            className="formField"
            type="number"
            name="quantity"
            placeholder="Quantity"
          />

          <div className="date-container">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Field
              className="pickerField"
                label="What day?"
                name="date"
                value={selectedDate}
                onChange={handleDateChange}
                component={DatePicker}
                animateYearScrolling
                setFieldValue={selectedDate}
  
              />

            </MuiPickersUtilsProvider>
          </div>

          <button as="button">Create Request</button>
        </Form>

        <div className="return-main-container">
          {entries.map(e => (
            <div className="return-outer-container">
              <div key={e.id} className="return-inner-container">
                <span>Food Name: {e.food}</span>
                <span>Food Quantity: {e.quantity}</span>
              <span>Date: {e.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FormStyles>
  );
};


const FormikBusinessPickup = withFormik({
  mapPropsToValues({ food, quantity, date }) {
    return {
      food: food || "",
      quantity: quantity || "",
      date: date || "",
    };
  },

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error.response));
  }
});

export default FormikBusinessPickup(BusinessPickup);
