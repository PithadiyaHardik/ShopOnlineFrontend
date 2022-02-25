import React,{useState,useContext} from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Signup = () => {
    const history=useHistory();
    const [firstname,setFirstname]=useState("")
    const [middlename,setMiddlename]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")

  const handleChange=(event)=>{
    if(event.target.id=='firstname')
    {
      setFirstname(event.target.value)
    }
    else if(event.target.id=='middlename')
    {
      setMiddlename(event.target.value)
    }
    else if(event.target.id=='lastname')
    {
      setLastname(event.target.value)
    }
    else if(event.target.id=='email')
    {
        setEmail(event.target.value)
    }
    else if(event.target.id=='phoneno')
    {
        setPhone(event.target.value)
       
    }
    else{
        setPassword(event.target.value)
    }

  }

  const submitHandle=async ()=>{
   
      if(email!=""&&firstname!=""&&lastname!=""&&middlename!=""&&password!=""&& phone!="")
      {
    await axios.post(process.env.REACT_APP_BASE_API+'/api/register',{first_name:firstname,last_name:lastname,middle_name:middlename,phone_number:phone,email:email,password:password}).then(res=>{
        
        if(res.data.result==="success")
        {
          window.localStorage.setItem("email",email);
          window.localStorage.setItem("firstname",firstname);
          window.localStorage.setItem("lastname",lastname);
          window.localStorage.setItem("phone",phone);
          history.push("/")
        

        }
        else{
          alert("INVALID INFORMATION PLEASE TRY AGAIN!!!")
        }
      })
    }
    else{
      alert("Invalid data.Please make sure you have submitted all the values")
    }

  }


  return (
    <Container className='shadow'>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          color: "green",
        }}
      >
        Register Youself
      </div>
      <div className="row">
        <Form.Control
          id='firstname'
          type="text"
          placeholder="Firstname"
          className="col"
          onChange={handleChange}
          style={{ margin: "10px" }}
        />
        <Form.Control
          type="text"
          placeholder="Middlename"
          className="col"
          id="middlename"
          onChange={handleChange}
          style={{ margin: "10px" }}
        />
        <Form.Control
          id='lastname'
          type="text"
          placeholder="Lastname"
          onChange={handleChange}
          className="col"
          style={{ margin: "10px" }}
        />
      </div>
      <div className="row">
        <input
          className="col form-control"
          required
          id='email'
          type="email"
          onChange={handleChange}
          placeholder="Email"
          style={{ margin: "10px" }}
        />
        <Form.Control
          className="col"
          id="phoneno"
          type="tel"
          onChange={handleChange}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="PhoneNumber"
          style={{ margin: "10px" }}
        />
        <Form.Control
          className="col"
          id='password'
          type="password"
          onChange={handleChange}
          placeholder="Password"
          style={{ margin: "10px" }}
        />
      </div>
      <div className="row">
        <Button
          type="reset"
          variant="outline-danger"
          className="col"
          style={{ margin: "10px" }}
        >
          Reset
        </Button>
        <Button
          type="submit"
          variant="outline-success"
          onClick={submitHandle}
          className="col"
          style={{ margin: "10px" }}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  margin: auto;
  width: 50vw;
  padding:15px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width:80vw
`;
