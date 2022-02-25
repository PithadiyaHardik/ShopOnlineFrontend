import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import i from './offer2.jpg'
import axios from 'axios'
import {Link} from 'react-router-dom'


const MyCart = () => {

  const [cart,setCart]=useState([])
  
  useEffect(async () => {
    await axios.post(process.env.REACT_APP_BASE_API+"/api/getCart",{email:window.localStorage.getItem("email")})
    .then(res=>setCart(res.data.cart)).catch(err=>console.log(err))

  },[])

  const removeFromCart=async(e)=> {
    await axios.post(process.env.REACT_APP_BASE_API+"api/removeFromCart/"+e.target.id,{email:window.localStorage.getItem("email")})
    .then(res=>{
      if(res.data.ans)
      { 
      alert("Removed product from cart")
      setCart(res.data.cart)
      }
      else{
        alert("unable to remove from cart")
      }
    }
      ).catch(err=>console.log(err))
    

  }



  return (
    <div>
      <div style={{fontSize:'25px'}}>My Cart</div>
      <hr></hr>
        <Container>
          {
            cart.map(product => {
              return(
                <ProductContainer className='shadow'>
                <center><img src={process.env.REACT_APP_BASE_API+"/"+product.images} style={{height:'150px',width:'200px'}}/></center>
                <div style={{fontSize:'20px'}}>{product.name}</div>
                {/* <div></div> */}
                {product.stock>0?<div style={{fontSize:'20px',color:'green'}}>In the Stock</div>:<div style={{color:'red'}}>Out Of stock</div>}
                <div style={{display:'flex',flexDirection:'column'}}>
                <Button style={{margin:'2px'}} as={Link} to={'/Productdetails/'+product._id}>Buy Now</Button>
                <Button id={product._id}variant='danger' style={{margin:'2px'}} onClick={removeFromCart} >Remove</Button>
                </div>
                </ProductContainer>
              )
            })
          }
           
           
            
        </Container>
    </div>
  )
}

export default MyCart

const Container = styled.div`
display:flex;
flex-direction:row;
padding: 15px;
flex-wrap: wrap;
justify-content:center;


`
const ProductContainer=styled.div`
display:flex;
flex-direction:column;
border-radius:5px;
width:230px;
margin:5px;
justify-content:space-between;
padding:8px;
// width:100%;
// height:20vh;
// align-items: start

`