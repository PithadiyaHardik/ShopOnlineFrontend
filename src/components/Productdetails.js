import React from "react";
import styled from "styled-components";
import img from "./electronics.jpg";
import { Card,Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Productdetails = () => {
  const {id}=useParams()
  console.log(id)
  return (
    // <Container>
    //   <div style={{ alignText: "start", width: "30vw" }}>
    //     <h4>Electronics Items</h4>
    //     <font>nfinffnekenfenfnkenfekneknfenkfnf</font>
    //   </div>

    //   <Productimg src={img} />

    //   <div style={{ alignText: "start", width: "30vw" }}>
    //     <h5>500000</h5>
    //     <h6>Contact:</h6>
    //     <font>nfkmrfmmfeme@gmail.com</font>
    //     <br />
    //     <font>154874451511</font>
    //   </div>
    // </Container>
    <center>
   
    <Container  >
      <h3 style={{alignSelf:'start'}}>Product Name</h3>
      <Productimg src={img} />
      <p style={{alignSelf:'flex-start'}}>Price:</p>
      <p style={{alignSelf:'start'}}>Company Name:</p>
      <p style={{alignSelf:'start'}} >Description: ncjdnndnc ncebcebc becbebceubcebcebcuebcbe</p>
      <p style={{alignSelf:'start'}}>colour:</p>
      <p style={{alignSelf:'start'}}>Stock available:</p>
      <Button style={{alignSelf:'start'}}>Buy Now</Button> 
    </Container>
    <ReviewContainer>
      <h5>Reviews:</h5>
    <div style={{display:'flex',alignSelf:'start',flexDirection:'column',width:'100%'}}>
      <p style={{alignSelf:'start'}}>Review text is displayed in this paragraph tag</p>
      <p style={{alignSelf:'start'}}>email:abcdefg@gmail.com</p>
      <hr></hr>
    </div>
    <div style={{display:'flex',alignSelf:'start',flexDirection:'column',width:'100%'}}>
      <p style={{alignSelf:'start'}}>Review text is displayed in this paragraph tag</p>
      <p style={{alignSelf:'start'}}>email:abcdefg@gmail.com</p>
      <hr></hr>
    </div>
    <div style={{display:'flex',alignSelf:'start',flexDirection:'column',width:'100%'}}>
      <p style={{alignSelf:'start'}}>Review text is displayed in this paragraph tag</p>
      <p style={{alignSelf:'start'}}>email:abcdefg@gmail.com</p>
      <hr></hr>
    </div>
    <form>
      <div style={{display:'flex'}}>
      <input type='text' placeholder='review' className='form-control' style={{backgroundColor:'#e0dede'}}/>
      <Button type='submit'>Post</Button>
      </div>
    </form>
    </ReviewContainer>
    
    </center>
  );
};

export default Productdetails;

const Container = styled.div`
  background-color: none;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  border:1px solid black;
  text-wrap:wrap;
  height:100%;
`;

const ReviewContainer=styled.div`
display:flex;
flex-direction:column;
padding:15px;
`

const Productimg = styled.img`
  height: 40%;
  width: 50%;
`;
