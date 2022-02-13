import React,{useState,useRef} from 'react'
import styled from 'styled-components'
import {Button,Form} from 'react-bootstrap'
import img from './img2.jpg'

const AddProduct = () => {

    const [colors,setColors]=useState([]);
    const colorInputRef=useRef(null);

    const addColor=()=>{
        if(colorInputRef.current.value!="")
        {
            setColors((pre)=>[...pre,colorInputRef.current.value])
        }
        
    }

    
    return (
        <>
        <center>
        <div style={{display:'flex',flexDirection:'row',justifyContent: 'space-evenly',flexWrap:'wrap'}}>
        <Container>
            <center style={{color:'green',fontSize:'25px',alignSelf:'center'}}>Product Details</center>
            <input  style={{margin:'5px'}}type='text' className='form-control' placeholder='Product Name'></input>
            <input style={{margin:'5px'}} className='form-control' min='0' type='number' placeholder='price' ></input>
            <input style={{margin:'5px'}} type='text' placeholder='Company name' className='form-control'/>
            <input style={{margin:'5px'}} type='number' placeholder='quantity' min='0' className='form-control' />
            <label style={{alignSelf:'flex-start'}}> Category:</label>
            <select style={{margin:'10px',alignSelf:'flex-start',borderRadius:'0',border:'none'}}>
                <option>Stationary</option>
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Clothing</option>
            </select>
            <input style={{margin:'5px'}} type='number' min='0' className='form-control' placeholder='warenty in years' />
            <label style={{alignSelf:'start'}}>colors:</label>
            <div style={{display:'flex',justifyContent:'flex-start',flexWrap:'wrap',width:'100%'}}>
            {
                colors.map(c=><ColorIndicator>{c}</ColorIndicator>)
            }
            
            </div>
            <div style={{width:'100%',display: 'flex'}}>
            <input ref={colorInputRef} type='text' className='form-control' placeholder='colours available' />
            <Button onClick={addColor} style={{margin:'2px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
            </Button>
            </div>
            <textarea  style={{margin:'10px'}} className='form-control' placeholder='Product specific Description'>
            </textarea>
        </Container>
        <div>
        <img src={img} style={{height:'80%',width:'80%',margin:'10px'}}/>
        </div>
        </div>
        </center>
        </>
    )
}

export default AddProduct

const Container = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 5px;
  margin:10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    width:80vw
`;

const ColorIndicator=styled.div`
width:auto;
padding:5px;
margin:1px;
border-radius:5px;
background-color:#69a2ff;
`
