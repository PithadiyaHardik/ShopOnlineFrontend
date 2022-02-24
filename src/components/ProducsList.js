import React,{useEffect,useState,useRef} from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import electronics from "./electronics.jpg";
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ProducsList = () => {
  const [products,setProducts]=useState([])
  const [displayProduct,setDisplayProduct]=useState([])
  const filterRef1=useRef(null)
  const filterRef2=useRef(null)

  useEffect(async ()=>{
      await axios.get("http://localhost:8888/api/allProduct").then(res=>{setProducts(res.data.data);setDisplayProduct(res.data.data)}).catch(e=>console.log(e))
    
  },[])


    const filterHandler=()=>{
      
      var f1,f2;
      if(filterRef1.current.value=="all")
      {
         f1=products;
      }
      else
      {
         f1=products.filter(p=>p.category==filterRef1.current.value)
      }
      if(filterRef2.current.value=="all")
      {  
        f2=f1;
      }
      else{
        f2=f1.filter(p=>p.price<filterRef2.current.value)

      }
      
      setDisplayProduct(f2);
    }

  return (
    <>
    <Container>
      <Filters>
        <div>
        <label style={{margin:'15px'}}>Category:</label>
          <select ref={filterRef1} onChange={filterHandler} className='form-control' style={{margin:'15px',width:'200px'}}>
          <option selected value="all">ALL</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Stationary">Stationary</option>
          <option value="Electronics">Electronics</option>
        </select>
        </div>
        <div>
        <label  style={{margin:'15px'}}>Price:</label>
          <select ref={filterRef2}  onChange={filterHandler} className='form-control' style={{margin:'15px',width:'200px'}}>
          <option selected value="all">ALL</option>
          <option  value="1000">less than 1000</option>
          <option value="5000">less than 5000</option>
          <option value="10000">less than 10000</option>
          <option value="20000">less than 20000</option>
        </select>
        </div>
      </Filters>
      {
        displayProduct.map(p=>{ return (
        <Productcontainer className='shadow'>
        <img src={"http://localhost:8888/"+p.images} style={{height:'180px',width:'100%'}}></img>
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
flex-wrap:wrap;
justify-content:start;
flex-direction:row;
`
