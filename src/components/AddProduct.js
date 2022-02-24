import React,{useState,useRef} from 'react'
import styled from 'styled-components'
import {Button,Form} from 'react-bootstrap'
import img from './img2.jpg'
import axios from 'axios'

const AddProduct = () => {

    const formRef=useRef(null)
    const [colors,setColors]=useState([]);
    const colorInputRef=useRef(null);
    const [name,setName]=useState();
    const [company,setCompany]=useState();
    const [price,setPrice]=useState();
    const [warrenty,setWarrenty]=useState();
    const [description,setDescription]=useState()
    const [quantity,setQuantity]=useState()
    const [image,setImage]=useState();
    const [category,setCategory]=useState("Stationary")

    const changeHandler=(event)=>{
        if(event.target.id=='name')
        {
            setName(event.target.value)
        }
        else if(event.target.id=='company')
        {
            setCompany(event.target.value)
        }
        else if(event.target.id=='price'){
            setPrice(event.target.value)
        }
        else if(event.target.id=='warrenty'){
            setWarrenty(event.target.value)
        }
        else if(event.target.id=='image'){
            setImage(event.target.files[0])
        }
        else if(event.target.id=='description'){
            console.log(description)
            setDescription(event.target.value)
        }
        else if(event.target.id=='category')
        {
            setCategory(event.target.value)
        }
        else{
            setQuantity(event.target.value)
        }
    }

    //submit Details
    const submitHandler=async (e) => {
        e.preventDefault();
        var formdata=new FormData()
        formdata.append("name", name)
        formdata.append("company",company)
        formdata.append("image", image)
        formdata.append("price",price)
        formdata.append("description", description)
        formdata.append("colors",colors)
        formdata.append("Stock",quantity)
        formdata.append("warrenty",warrenty)
        formdata.append("category",category)
        formdata.append("admin",window.localStorage.getItem('admin'))
        await axios.post("http://localhost:8888/api/addProduct",formdata)
        .then((res)=>{
            if(res.data.ans)
            {
            alert("Added successfully");formRef.current.reset();setColors([])}
               else{
                   alert(res.data.data);
               } 
            })
        .catch(e=>console.log(e))

    }




    const addColor=()=>{
        if(colorInputRef.current.value!="")
        {   let c=colorInputRef.current.value
            setColors((pre)=>[...pre,c])
            colorInputRef.current.value=""
        }
        
    }

    
    return (
        // if(window.localStorage.getItem('admin')==null)
        // {

        // }
        // else{

        // }
        <>
        <center>
        <div style={{display:'flex',flexDirection:'row',justifyContent: 'space-evenly',flexWrap:'wrap'}}>
        <form ref={formRef}>
        <Container className='shadow'>
            <center style={{color:'green',fontSize:'25px',alignSelf:'center'}}>Product Details</center>
            <input onChange={changeHandler}id='name' required  style={{margin:'5px'}}type='text' className='form-control' placeholder='Product Name'></input>
            <input onChange={changeHandler}id='price' required style={{margin:'5px'}} className='form-control' min='0' type='number' placeholder='price' ></input>
            <input onChange={changeHandler}id='company' required style={{margin:'5px'}} type='text' placeholder='Company name' className='form-control'/>
            <input onChange={changeHandler}id='quantity' required style={{margin:'5px'}} type='number' placeholder='quantity' min='0' className='form-control' />
            <label  style={{alignSelf:'flex-start'}}> Category:</label>
            <select onChange={changeHandler}id='category' style={{margin:'10px',alignSelf:'flex-start',borderRadius:'0',border:'none'}}>
                <option>Stationary</option>
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Clothing</option>
            </select>
            <label style={{alignSelf:'start'}}>Product Image:</label>
            <input onChange={changeHandler}id='image' required style={{margin:'5px',alignSelf:'start'}} type='file'/>
            <input onChange={changeHandler}id='warrenty' required style={{margin:'5px'}} type='number' min='0' className='form-control' placeholder='warrenty in years' />
            <label style={{alignSelf:'start'}}>colors:</label>
            <div style={{display:'flex',justifyContent:'flex-start',flexWrap:'wrap',width:'100%'}}>
            {
                colors.map(c=><ColorIndicator>{c}</ColorIndicator>)
            }
            
            </div>
            <div style={{width:'100%',display: 'flex'}}>
            <input required ref={colorInputRef} type='text' className='form-control' placeholder='colours available' />
            <Button onClick={addColor} style={{margin:'2px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
            </Button>
            </div>
            <textarea onChange={changeHandler} id='description' style={{margin:'10px'}} className='form-control' placeholder='Product specific Description'>
            </textarea>
            <Button type='submit' onClick={submitHandler}>Add Product</Button>
        </Container>
        </form>
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
  padding: 15px;
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
