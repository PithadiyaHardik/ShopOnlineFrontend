import React,{useEffect,useState} from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import electronics from "./electronics.jpg";
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ProducsList = () => {
  const [products,setProducts]=useState([])

  useEffect(async ()=>{
      await axios.get("http://localhost:8888/api/allProduct").then(res=>setProducts(res.data.data)).catch(e=>console.log(e))
    
  },[])



  // useEffect(()=>{
  //   let productlist=await axios.get('localhost:8888')
  // },[])



  return (
    <>
    <Container>
      <Filters>
        <label style={{margin:'15px'}}>Category:</label>
        {/* <select className='form-control' style={{width:'100px',heigth:'25px',border:'none',margin:'10px'}}> */}
          <select className='form-control' style={{margin:'15px',width:'200px'}}>
          <option>ALL</option>
          <option>Furniture</option>
          <option>Clothing</option>
          <option>Stationary</option>
        </select>
        <label style={{margin:'15px'}}>Price:</label>
        {/* <select className='form-control' style={{width:'100px',heigth:'25px',border:'none',margin:'10px'}}> */}
          <select className='form-control' style={{margin:'15px',width:'200px'}}>
          <option>ALL</option>
          <option>less than 1000</option>
          <option>1000-5000</option>
          <option>5000-10000</option>
          <option>More than 10000</option>
        </select>
      </Filters>
      {
        products.map(p=>{ console.log(p);return (
        <Productcontainer className='shadow'>
        <img src={"http://localhost:8888/"+p.images} style={{height:'20vh',width:'100%'}}></img>
        <p style={{fontSize:'15px'}}><b>Product Name:</b>{p.name}</p>
        <p style={{fontSize:'15px'}}><b>Category:</b>{p.category}</p>
        <p style={{fontSize:'15px'}}><b>Price</b>:{p.price}</p>
        <Button as={Link} to={'/Productdetails/'+p._id}>Buy Now</Button>
      </Productcontainer>

        )})
      }



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
display:flex;
flex-direction:row;
`
