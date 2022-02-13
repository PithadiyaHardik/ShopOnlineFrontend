import React,{useEffect,useState} from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import electronics from "./electronics.jpg";
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ProducsList = () => {
  const [products,setProducts]=useState([])
  // useEffect(()=>{
  //   let productlist=await axios.get('localhost:8888')
  // },[])



  return (
    <>
    <Container>
      <Filters>
        Category:
        <select style={{width:'100px',heigth:'25px',border:'none',margin:'10px'}}>
          <option>ALL</option>
          <option>Furniture</option>
          <option>Clothing</option>
          <option>Stationary</option>
        </select>
      </Filters>
      <Productcontainer className='shadow'>
        <img src={electronics} style={{height:'20vh',width:'100%'}}></img>
        <h4>Product Name</h4>
        <font>Category</font>
        <font>Price</font>
        <Button as={Link} to={'/Productdetails/'+'1'}>Buy Now</Button>
      </Productcontainer>
      <Productcontainer>
      <img src={electronics} style={{height:'20vh',width:'100%'}}></img>
      <h4>Product Name</h4>
      <font>Category</font>
      <font>Price</font>
      <Button>Buy Now</Button>
    </Productcontainer>
    <Productcontainer>
    <img src={electronics} style={{height:'20vh',width:'100%'}}></img>
    <h4>Product Name</h4>
    <font>Category</font>
    <font>Price</font>
    <Button>Buy Now</Button>
  </Productcontainer>
  <Productcontainer>
  <img src={electronics} style={{height:'20vh',width:'100%'}}></img>
  <h4>Product Name</h4>
  <font>Category</font>
  <font>Price</font>
  <Button>Buy Now</Button>
</Productcontainer>
<Productcontainer>
  <img src={electronics} style={{height:'20vh',width:'100%'}}></img>
  <h4>Product Name</h4>
  <font>Category</font>
  <font>Price</font>
  <Button>Buy Now</Button>
</Productcontainer>
</Container>
</>
      
    
  );
};

export default ProducsList;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  width: 100%;
  justify-content:center
`;

const Productcontainer = styled(Card)`
  padding:10px;
  background-color: white;
  flex-direction:column;
  width:250px;
  box-shadow:5px black;
  min-height:300px;
  justify-content:space-between;
  margin:20px;
`;

const Filters=styled.div`
width:100%;
flex-direction:;
`
