import React, { useEffect,useState,useContext} from "react";
import styled from "styled-components";
import img from "./electronics.jpg";
import { Card,Button, Alert,Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import {CartContext} from '../App.js'
import useRazorpay from'react-razorpay'


const Productdetails = () => {
 
  const RazorPay=useRazorpay();
  const setCart=useContext(CartContext)
  const [product,setProduct]=useState({});
  const [reviewText,setText]=useState();
  const [review,setReview]=useState([]);
  const [orderId,setOrderId]=useState();
  const [quantity,setQuantity]=useState(1);
  const [show,setShow]=useState(false);
  const [address,setAddress]=useState();
  const [startPayment,setStartPayment]=useState(false)
  const {id}=useParams()


  //addCart
  const addCart=async ()=>{
    await axios.post(process.env.REACT_APP_BASE_API+"/api/addCart",{email:window.localStorage.getItem('email'),id:id})
    .then(res=>{
        if(res.data.ans)
        {
          setCart(pre=>pre+1)
        }
        else{
          alert(res.data.data)
        }
      
      })
    .catch(er=>console.log(er))
  }

  //get all the products available and generate product id
  useEffect(async ()=>{
   await axios.get(process.env.REACT_APP_BASE_API+"/api/getProductDetails/"+id)
   .then(async res=>{setProduct(res.data.data);setReview(res.data.data.reviews);})
   .catch(e=>console.log(e))
  },[])

  //addReview
  const addReview=async(e) =>{
    e.preventDefault()
    let email=window.localStorage.getItem('email');
    let newReview={email:email,text:reviewText}
    await axios.post(process.env.REACT_APP_BASE_API+"/api/addReview/"+id,{email:email,review:reviewText})
    .then(
      (res)=>
      {
        if(res.data.ans)
        {
        alert("Thanks for review!!!!!!");
        setReview(pre=>[...pre,newReview])
        }
        else{
          alert(res.data.data)
        }
      }).catch(()=>{alert("Unable to add Review")})
  }

    //reenter stock on payment failing
    const reEnter=async () => {
      setStartPayment(false);
      await axios.post(process.env.REACT_APP_BASE_API+"/api/addStock/"+id,{quantity:quantity})
      await axios.get(process.env.REACT_APP_BASE_API+"/api/getProductDetails/"+id)
          .then(async res=>{setProduct(res.data.data);setReview(res.data.data.reviews)});
      

    }

    //Make payment
    //Remember contains a bug:Stock is decreased if the tab is closed in between payment
    const makePayment=async ()=>{
      
      if((window.localStorage.getItem('firstname'))==null)
      {
        alert ("Plase Log In or Signup");

      }
      else{
        let res=await axios.post(process.env.REACT_APP_BASE_API+"/api/generateOrderId",{amount:quantity*product.price})
        let options={
        KEY_ID:process.env.REACR_APP_RAZOR_ID,
        name:"ShopOnline",
        description:"Poduct purchace",
        order_id: res.data.order.id,
        handler: async function (response) {
          alert("Payment id:"+response.razorpay_payment_id)
          setStartPayment(false);
          await axios.post(process.env.REACT_APP_BASE_API+"/api/addOrder",{paymentid:response.razorpay_payment_id,quantity:quantity,productId:id,productName:product.name,phone:window.localStorage.getItem('phone'),email:window.localStorage.getItem('email'),address:address})
          .then(res=>console.log(res)).catch(err=>console.log(err))
          
        },
        notes: {
          address: "Malad",
        },
        theme: {
          color: "#3399cc",
        },
        modal:{
          ondismiss:reEnter}
      }

      let rz=new RazorPay(options)
      rz.on("payment.failed", function  (response) {
        reEnter();
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      await axios.post(process.env.REACT_APP_BASE_API+"/api/stockRemove/"+id,{quantity:quantity})
      .then(async (res)=>{
        if(res.data.ans)
        { setStartPayment(true);
          
          rz.open();
          await axios.get(process.env.REACT_APP_BASE_API+"/getProductDetails/"+id)
          .then(async res=>{setProduct(res.data.data);setReview(res.data.data.reviews)});
        }
        else{
          alert("Can not place order.Please try again")
        }

      })
      // rz.open();

    }
  }




  return (

    <>
    <Modal variant='primary' show={show} onHide={()=>{setShow(false)}}>
      <Modal.Header closeButton>Delivery address</Modal.Header>
      <Modal.Body>
        <input type='text' onChange={e=>setAddress(e.target.value)} className='form-control' placeholder='Delivery address'/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={()=>{setShow(false);makePayment();}}>Confirm</Button>
      </Modal.Footer>
    </Modal>
    <center>
   
    <Container style={{margin:'2px'}}>
      <p style={{fontSize:'33px',alignSelf:'start'}}>{product.name}
      <svg style={{color:'blue'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
      </svg>
      </p>
      <Productimg src={process.env.REACT_APP_BASE_API+"/"+product.images} />
      <p style={{alignSelf:'flex-start',fontSize:'30px',color:'#0fd43d'}}>{product.price}Rs.</p>
      <p style={{fontSize:'15px',alignSelf:'flex-start',color:'red'}}>FREE DELIVERY AT YOUR DOOR STEP!!!!!</p>
      <p style={{alignSelf:'start',fontSize:'15px'}}><b>Company Name:</b>{product.company}
</p>
      <p style={{alignSelf:'start',fontSize:'15px'}} align='justify' ><b>Description:</b>{product.description}</p>
      <p style={{alignSelf:'start',fontSize:'15px'}}><b>Aailable colour:</b>{product.colors}</p>
      <p style={{alignSelf:'start',fontSize:'15px'}}><b>Stock available:</b>{product.stock}</p>
      <QuantityContainer>
      
        <Button variant='secondary' onClick={()=>{setQuantity(pre=>{return (pre>1?pre-1:pre)})}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
        </svg>
          </Button>
        <div style={{fontSize:'18px',width:'30px',height:'100%',borderTop:'1px solid black',borderBottom:'1px solid black',padding:'3.5px'}}>{quantity}</div>
        <Button variant='secondary' onClick={()=>setQuantity(pre=>pre+1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
        </Button>
      </QuantityContainer>
      <div style={{alignSelf:'start',display:'flex',justifyContent:'start'}}>
        <Button variant='success' onClick={()=>setShow(true)} style={{margin:'3px'}}>Buy Now</Button>
        <Button variant='primary'onClick={addCart} style={{margin:'3px'}}>Add to cart</Button>
      </div> 
    </Container>

    
    <ReviewContainer  style={{margin:'4px'}}>
    <hr/>
      <h5 style={{alignSelf:'start'}}>Product Reviews:</h5>

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
    </>
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
