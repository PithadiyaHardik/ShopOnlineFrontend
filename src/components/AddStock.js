import React from 'react'
import styled from 'styled-components'
import {Button,Table} from 'react-bootstrap'
import { useEffect,useState,useRef } from 'react'
import axios from 'axios'
const AddStock = () => {
    const [products,setProducts]=useState([]);
    const [displayProduct,setDisplayProduct]=useState([]);

    useEffect(async ()=>{
        await axios.get(process.env.REACT_APP_BASE_API+"/api/allProduct").then(res=>{
            setProducts(res.data.data);
            setDisplayProduct(res.data.data);
        }).catch(err=>{console.log(err)})

    },[])

    const filterRef=useRef(null);

    const filterProduct=(e) => {
        if(e.target.value=="all")
        {
            setDisplayProduct(products);

        }
        else{
            let f1=products.filter(p=>p.category==e.target.value)
            setDisplayProduct(f1);
        }
    }



    const uploadStock= async(e) => {
        e.preventDefault();
        let id=e.target.elements[0].id;
       
        let quantity=e.target.elements[0].value;
 
        if(quantity>0)
        {
        await axios.post(process.env.REACT_APP_BASE_API+"/api/addStock/"+id,{quantity:Number(quantity),email:window.localStorage.getItem('email'),admin:window.localStorage.getItem('admin')})
        .then(res=>{
            
            if(res.data.ans)
            { 
                alert("Added stock successfully")
                e.target.elements[0].value=""
            }
            else{
                alert(res.data.data)
            }
        })
            
        }
        else{
            alert("quantity must be grater than zero");
        }
        
    }


  return (
    <div style={{padding: '10px'}}>
        <Heading>Add Stock</Heading>
        <hr></hr>
        <div style={{display: 'flex',margin:'10px',justifyContent:'start',width:'100%',flexWrap:'wrap'}}>
            <div>
            <label style={{margin:'10px'}} >Category</label>
            <select onChange={filterProduct} className='form-control' style={{margin:'15px',width:'200px'}} >
                <option selected value="all"> All</option>
                <option value="Furniture">Furniture</option>
                <option value="Electronics">Clothing</option>
                <option value="Stationary">Stationary</option>
                <option value="Electronics">Electronics</option>
            </select>
            </div>
        </div>
        
        <Table striped responsive hover bordered variant='light'>
            <thead>
                <th>#</th>
                <th>Category</th>
                <th>Company</th>
                <th>Product Name</th>
                <th>stock to be added</th>
             
            </thead>


            <tbody>

                {
                    displayProduct.map((product,index)=>{

                        return(
                        <tr>
                        <td>{index+1}</td>
                        <td>{product.category}</td>
                        <td>{product.company}</td>
                        <td>{product.name}</td>
                        <td style={{display:'flex'}}>
                        <form style={{display:'flex',width:'100%'}} onSubmit={uploadStock}>
                        <input  id={product._id} className='form-control' style={{minWidth:'80px',margin:'5px',width:'100%'}} placeholder='Quantity' type='number' min='1' />
                        <Button variant='success' fid={product._id} type="submit" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>    
                        {" "}Add
                        </Button>
                        </form>
                        {/* onClick={uploadStock} */}
                        </td>
                        
                        
                      

                    </tr>)


                    })
                }
                
            </tbody>

        </Table>
    
    </div>
  )
}

export default AddStock

const Heading=styled.div`
color:green;
font-size:30px;
`