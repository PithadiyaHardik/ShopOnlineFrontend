import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import { Link,useHistory} from "react-router-dom";
import {Button} from 'react-bootstrap'
import img from "./logo.png";
import img2 from "./logo2.png";
import {CartContext} from '../App.js'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const Sidemenu = () => {

   
    const setCart=useContext(CartContext)
    const [firstname,setFirstname]=useState();
    const [lastname,setLastname]=useState();
    const [admin,setAdmin]=useState();
    const handleClick=()=>{
        var x = document.getElementById("side");
        var y=document.getElementById("side2");
        if (x.style.display === "inline-block") {
          x.style.display = "none";
          y.style.display="block"
        } else {
          setFirstname(window.localStorage.getItem("firstname"))
          setLastname(window.localStorage.getItem("lastname"))
          if(window.localStorage.getItem('admin'!=null))
          {
              setAdmin(true);
          }
          x.style.display = "inline-block";
          y.style.display='none'
        }
    }
    
    
    const LoginSignup=<><Item 
    onClick={handleClick}
    as={Link}
    to={"/Login"} style={{padding:'5px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
     <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
    </svg> {" "}
        LogIn
    </Item>
    <Item 
    onClick={handleClick}
    as={Link}
    to={"/SignUp"} style={{padding:'5px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
     <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
    </svg> {" "}
        SignUP
    </Item></>

    const history=useHistory();
    const logout=() => {
        setCart(0);
        window.localStorage.clear();
        handleClick();
        history.push("/")

    }
    

    const indicator= <Indicator style={{padding:'5px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg>{" Hey, "}{firstname}{" "}{lastname}{" "}
        <Button onClick={logout} variant='danger'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
        </Button>  
    </Indicator>
    return (
    
        <>
        <div id='side2' style={{display:'block',margin:'10px',height:'25px'}}><button style={{backgroundColor:'transparent',border:'None'}} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button></div>
            
            <MenuContainer id='side' style={{height:'100vh'}} >

            <button style={{backgroundColor:'transparent',border:'None'}} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
            </svg></button>
            <img
            src={img2}
            style={{ height: "150px", width: "180px" }}
            alt="React Bootstrap logo"
          />
            {window.localStorage.getItem('firstname')!=null?indicator:null}
           
            <Item 
            onClick={handleClick}
            as={Link}
            to={"/"} style={{padding:'5px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg> {" "}
                Home
            </Item>
            {window.localStorage.getItem('firstname')==null?LoginSignup:null}
            {window.localStorage.getItem('firstname')!=null?
            <>
            <Item 
            onClick={handleClick}
            as={Link}
            to={"/MyCart"} style={{padding:'5px'}}>
                <ShoppingCartIcon/> {" "}
                MyCart
            </Item>
            <Item 
            onClick={handleClick}
            as={Link}
            to={"/MyOrders"} style={{padding:'5px'}}>
                <ShoppingCartIcon/> {" "}
                MyOrders
            </Item>
            </>:null
            }
            <Item 
            onClick={handleClick}
            as={Link}
            to={"/ProductsList"} style={{padding:'5px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <             path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                </svg> {" "}
                AllProducts
            </Item>
            {window.localStorage.getItem("admin")!=null?<>
            <Item 
            onClick={handleClick}
            as={Link}
            to={"/AddProduct"} style={{padding:'5px'}}>
               <AddShoppingCartIcon/> {" "}
                AddProduct
            </Item>
            <Item 
            onClick={handleClick}
            as={Link}
            to={"/Addstock"} style={{padding:'5px'}}>
                <AddShoppingCartIcon/> {" "}
                AddStock
            </Item>
            <Item 
            onClick={handleClick}
            as={Link}
            to={"/OrderStatus"} style={{padding:'5px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                </svg> {" "}
                OrderStatus
            </Item>
            </>:null}
            {window.localStorage.getItem('superadmin')!=null?<><Item 
            onClick={handleClick}
            as={Link}
            to={"/UpdateUserRole"} style={{padding:'5px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg> {" "}
            UpdateUserRole
            </Item></>:null}
            </MenuContainer>
        </>
    )
}

export default Sidemenu

const Item= styled.div`
color:white;
font-size:15px;
// margin:10px;
padding:10px;
display:block;
border-bottom:2px solid black;
margin-bottom:0px;
margin-top:0px;
text-decoration:none;
:hover{
    background-color:grey
}
`
const Indicator=styled.div`
color:white;
font-size:15px;
// margin:10px;
padding:10px;
display:block;
border-bottom:2px solid black;
margin-bottom:0px;
margin-top:0px;
text-decoration:none;
`

const MenuContainer=styled.div`
display:none;
background-color:#0a4779;
width:25vw;
height:100%;
// border-radius:10px;

@media (max-width:600px){
    width:50vw;
}

`



