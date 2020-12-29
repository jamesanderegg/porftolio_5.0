import { Handler } from "leaflet";
import React, { useState } from "react";
import styled from "styled-components";

export default function Contact() {
  const [values, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    mapleSyrup: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [errors, setErrors] = useState([]);
  function updateValue(e) {
    // check if its a number and convert
    let { value } = e.target;
    if (e.target.type === "number") {
      value = parseInt(e.target.value);
    }

    setValue({
      ...values,
      [e.target.name]: value,
    });
  }
  function checkForm(e) {
    e.preventDefault();
    let errorsList = [];

    Object.keys(values).map((value) => {
      if (value === "mapleSyrup") {
        if (values[value] !== "") {
          console.log("ROBOT");
          // Do Not submit form
          errorsList.push(value);
        }
        return null;
      } else {
        if (values[value] === "") {
          errorsList.push(value);
        }
      }
      return null;
    });

    if (errorsList.length !== 0) {
      setErrors(errorsList);
      console.log("Fail");
    } else {
      setErrors(errors);
      handleSubmit(values);
    }
  }
  async function handleSubmit(values) {
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        name: values.name,
        email: values.email,
        message: values.message,
        subject: values.subject}),
    };
    fetch('/contact_form', requestOptions).then(response => {
      console.log(response)
      if(response.status === 200){
        //form successful
        //clear errors
        setErrors([])
        //clear form
        setValue({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        //set form sent to true and display Success
        setFormSent(true);
      }else{
        
        //clear form
        setValue({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

      }
    })
  }
  
  return (
    <Wrapper>
      <h2>Contact:</h2>

      <FormGrid onSubmit={(e) => checkForm(e)}>
        <FormLabel>Name:</FormLabel>
        <FormInputandButton
          type="text"
          name="name"
          id="name"
          value={values.name}
          placeholder="Enter your name"
          onChange={updateValue}
        />
        <FormLabel>Email:</FormLabel>
        <FormInputandButton
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={updateValue}
        />
        <FormLabel>Subject:</FormLabel>
        <FormInputandButton
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter the subject"
          value={values.subject}
          onChange={updateValue}
        />

        <FormInputandButton
          type="mapleSyrup"
          name="mapleSyrup"
          id="mapleSyrup"
          value={values.mapleSyrup}
          onChange={updateValue}
          className="mapleSyrup"
        />
        <FormLabel>Your message:</FormLabel>
        <textarea
          name="message"
          id="message"
          placeholder="Type your Message here."
          rows="10"
          value={values.message}
          style={{ width: "100%" }}
          onChange={updateValue}
        />
        
        <Button type="submit">Send Form</Button>
      </FormGrid>
      {formSent? (<h4>Thank you, your form has been sent!</h4>): (null)}
      {errors.map(error => (<h4>Please fix the {error} field in the form</h4>))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #333;
`;

const FormGrid = styled.form`
  margin: 40px auto;

  width: 80%;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  grid-gap: 20px;
  @media (max-width: 580px) {
    width: 100%;
  }
`;
const FormLabel = styled.label`
  display: block;
  align-self: center;
`;
const FormInputandButton = styled.input`
  font-size: 14px;
  grid-column: 2/3;
  &.mapleSyrup{
    display: none;
  }
`;
const Button = styled.button`
  grid-area: 6 / span 2;
  margin: auto;
  background: lightgray;
  border: 0;
  font-size: 20px;
  cursor: pointer;
  width: 95%;
  &:hover {
    background: #c46c00;
    outline: 0;
  }
`;
