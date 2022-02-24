import React,{useState,useContext} from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import img from "./logo.png";
import {useHistory,Link} from 'react-router-dom'
import {SetAuthenticatedContext,AuthenticateContext} from '../App.js'

const Login = () => {
  const setAuthenticatedContext=useContext(SetAuthenticatedContext)
  const history=useHistory();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleChange=(event)=>{
    if(event.target.id=='email')
    {
      setEmail(event.target.value)
      console.log(email)
    }
    else{
      setPassword(event.target.value)
      console.log(password)
    }

  }


  const submitHandle = async () =>{
      await axios.post('http://localhost:8888/api/login',{email:email,password:password}).then(res=>{
        if(res.data.status)
        {
          // window.sessionStorage.login=true
          // window.location.href='/';
          // window.localStorage.setItem("loggedin",true)
          // setAuthenticatedContext(true);
          window.localStorage.setItem("email",email);
          window.localStorage.setItem("firstname",res.data.firstname);
          window.localStorage.setItem("lastname",res.data.lastname);
          window.localStorage.setItem("phone",res.data.phone);
          if(res.data.role.toLowerCase()=="admin"){
            window.localStorage.setItem('admin',res.data.password);
          }
          if(res.data.role.toLowerCase()=="superadmin"){
            window.localStorage.setItem('admin',res.data.password);
            window.localStorage.setItem('superadmin',res.data.password);
          }
          history.push("/")
        }
        else{
          alert("INVALID EMAIL OR PASSWORD!!")
        }
      })
      
    

  }
  return (
    <Container className="shadow">
      <img src={img} style={{ height: "100px", width: "100px" }} alt="logo" />
      <Form.Control id='email' onChange={handleChange}
        style={{ margin: "10px", width: "60%" }}
        type="email"
        placeholder="Email"
      />
      <Form.Control id='Password' onChange={handleChange}
        style={{ margin: "10px", width: "60%" }}
        type="password"
        placeholder="Password"
      />
      <Button variant="outline-primary" onClick={submitHandle}>LOG IN</Button>
      {/* <div as={Link} to={"/SignUp"}>Signup</div> */}
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin: auto;
  width: 25vw;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    width:50vw
`;
