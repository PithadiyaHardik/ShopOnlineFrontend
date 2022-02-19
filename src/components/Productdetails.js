import React, { useEffect,useState,useContext} from "react";
import styled from "styled-components";
import img from "./electronics.jpg";
import { Card,Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import {AuthenticateContext} from '../App.js'
import useRazorpay from'react-razorpay'

const Productdetails = () => {
  const RazorPay=useRazorpay();
  const authenticate =useContext(AuthenticateContext)
  console.log(authenticate)
  const [product,setProduct]=useState({});
  const [reviewText,setText]=useState();
  const [review,setReview]=useState([]);
  const [orderId,setOrderId]=useState();
  const {id}=useParams()


  


  //get all the products available and generate product id
  useEffect(async ()=>{
   await axios.get("http://localhost:8888/api/getProductDetails/"+id)
   .then(async res=>{setProduct(res.data.data);setReview(res.data.data.reviews);
    await axios.post("http://localhost:8888/api/generateOrderId",{amount:(res.data.data.price)}).then(res=>setOrderId(res.data.order.id))
  })
   .catch(e=>console.log(e))
  },[])

  //addReview
  const addReview=async(e) =>{
    e.preventDefault()
    let email=window.localStorage.getItem('email');
    let newReview={email:email,text:reviewText}
    await axios.post("http://localhost:8888/api/addReview/"+id,{email:email,review:reviewText})
    .then(()=>{alert("Thanks for review!!!!!!");setReview(pre=>[...pre,newReview])})
  }


    //Make payment
    const makePayment=()=>{
      if((window.localStorage.getItem('firstname'))==null)
      {
        alert ("Plase Log In or Signup");

      }
      else{
      let options={
        KEY_ID:"rzp_test_DnK1IvY3O5N98N",
        name:"ShopOnline",
        description:"Poduct purchace",
        order_id: orderId,
        handler: function (response) {
          alert("Payment id:"+response.razorpay_payment_id)
        },
        notes: {
          address: "Malad",
        },
        theme: {
          color: "#3399cc",
        },
      }

      let rz=new RazorPay(options)
      rz.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
    
      rz.open();

    }
  }

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
   
    <Container  style={{margin:'2px'}}>
      <p style={{fontSize:'33px',alignSelf:'start'}}>{product.name}
      <svg style={{color:'blue'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
      </svg>
      </p>
      <Productimg src={"http://localhost:8888/"+product.images} />
      <p style={{alignSelf:'flex-start',fontSize:'30px',color:'#0fd43d'}}>{product.price}Rs.</p>
      <p style={{alignSelf:'start',fontSize:'15px'}}><b>Company Name:</b>{product.company}
</p>
      <p style={{alignSelf:'start',fontSize:'15px'}} align='justify' ><b>Description:</b>{product.description}</p>
      <p style={{alignSelf:'start',fontSize:'15px'}}><b>Aailable colour:</b>{product.colors}</p>
      <p style={{alignSelf:'start',fontSize:'15px'}}><b>Stock available:</b>{product.stock}</p>
      <QuantityContainer>
        <Button variant='secondary'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg></Button>
        <p style={{fontSize:'18px',width:'30px',height:'100%'}}>1</p>
        <Button variant='secondary'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
        </svg>
        </Button>
      </QuantityContainer>
      <div style={{alignSelf:'start',display:'flex',justifyContent:'start'}}>
        <Button variant='success'  onClick={makePayment} style={{margin:'3px'}}>Buy Now</Button>
        <Button variant='primary'style={{margin:'3px'}}>Add to cart</Button>
      </div> 
    </Container>

    
    <ReviewContainer  style={{margin:'4px'}}>
    <hr/>
      <h5 style={{alignSelf:'start'}}>Reviews:</h5>

     {review.map(r=>{

       return (
        <div style={{display:'flex',alignSelf:'start',flexDirection:'column',width:'100%'}}>
        <div style={{display:'flex',justifyContent:'start',alignItems:'center',fontSize:'18px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          <div style={{marginLeft:'5px'}}>{r.email}</div></div>
          <p style={{alignSelf:'start',display:'inline'}}>{r.text}</p>
        <hr></hr>
      </div>
       )
     })} 
    
    
    
    {window.localStorage.getItem('firstname')!=null?<form>
      <div style={{display:'flex'}}>
      <input type='text' onChange={(e)=>setText(e.target.value)} placeholder='review' className='form-control' style={{backgroundColor:'#e0dede'}}/>
      <Button type='submit' onClick={addReview}>Post</Button>
      </div>
    </form>:null}
    
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
  // border:1px solid black;
  text-wrap:wrap;
  height:100%;
`;

const ReviewContainer=styled.div`
display:flex;
flex-direction:column;
padding:15px;
`

const Productimg = styled.img`
  // height: 40%;
  // width: 50%;
  height:400px;
  width:400px
  
`;

const QuantityContainer=styled.div`
display:flex;
align-self=start;
justify-content:start;
width:100%;
align-items:center
`
