import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import img from "./logo.png";

const Sidemenu = () => {

    const handleClick=()=>{
        console.log("Hello")
        var x = document.getElementById("side");
        var y=document.getElementById("side2");
        if (x.style.display === "inline-block") {
          x.style.display = "none";
          y.style.display="block"
        } else {
          x.style.display = "inline-block";
          y.style.display='none'
        }
    }
    return (
    
        <>
        <div id='side2' style={{display:'block'}}><button style={{color:'white',backgroundColor:'transparent',border:'None'}} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button></div>
        {/* <div id='side' style={{display:'none',width:'25vw',height:'100%',backgroundColor:'#0a4780',borderRadius:'10px'}}> */}
            
            <MenuContainer id='side' >

            <button style={{backgroundColor:'transparent',border:'None'}} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
            </svg></button>
            <img
            src={img}
            // className="d-inline-block align-top"
            style={{ height: "150px", width: "130px" }}
            alt="React Bootstrap logo"
          />
            <Item 
            onClick={handleClick}
            as={Link}
            to={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>{" "}<p style={{display:'inline',paddingBottom:'0',verticalAlign:'baseline'}}>Home</p>
            </Item>
            <Item 
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
            to={"/SignUp"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>{" "}
            SignUP</Item>
            
            </MenuContainer>
        </>
    )
}

export default Sidemenu

const Item= styled.div`
color:white;
font-size:20px;
margin:10px;
padding:10px;
display:block;
border-top:2px solid black;
margin-bottom:0px;
margin-top:0px;
text-decoration:none;
:hover{
    background-color:grey
}
`

const MenuContainer=styled.div`
display:none;
background-color:#0a4780;
width:25vw;
height:100%;
border-radius:10px;

@media (max-width:600px){
    width:50vw;
}

`



