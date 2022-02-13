import React from 'react'
import styled from 'styled-components'
import {Button,Table} from 'react-bootstrap'
const AddStock = () => {
  return (
    <div style={{padding: '10px'}}>
        <center><Heading>Add Stock</Heading></center>
        <div style={{display: 'flex',margin:'10px'}} className='shadow'>
            <select className='form-control' style={{margin:'5px'}} >
                <option> Category</option>
                <option>Furniture</option>
                <option>Clothing</option>
                <option>Stationary</option>
                <option>Electronics</option>
            </select>
            <select className='form-control' style={{margin:'5px'}} >
                <option>Company name</option>
                <option>Furniture</option>
                <option>Clothing</option>
                <option>Stationary</option>
                <option>Electronics</option>
            </select>
            <select className='form-control' style={{margin:'5px'}} >
                <option>Product Name</option>
                <option>Furniture</option>
                <option>Clothing</option>
                <option>Stationary</option>
                <option>Electronics</option>
            </select>
            {/* <input className='form-control' style={{margin:'5px'}} placeholder='Quantity' type='number' min='1' /> */}
        </div>
        {/* <center>
        <Button variant='success'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>    
        {" "}Add</Button>
        </center> */}
        <Table striped hover bordered variant='light'>
            <thead>
                <th>#</th>
                <th>Category</th>
                <th>Company</th>
                <th>Product Name</th>
                <th>stock to be added</th>
                <th></th>
            </thead>


            <tbody>
                <tr>
                    <td>1.</td>
                    <td>Electronics</td>
                    <td>Lenovo</td>
                    <td>Laptop</td>
                    <td><input className='form-control' style={{margin:'5px',width:'100%'}} placeholder='Quantity' type='number' min='1' /></td>
                    <td>
                    <Button variant='success'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>    
                    {" "}Add
                    </Button>
                    </td>
                    
                </tr>
                <tr>
                    <td>1.</td>
                    <td>Electronics</td>
                    <td>Lenovo</td>
                    <td>Laptop</td>
                    <td><input className='form-control' style={{margin:'5px'}} placeholder='Quantity' type='number' min='1' /></td>
                    <td>
                    <Button variant='success'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>    
                    {" "}Add
                    </Button>
                    </td>
                    
                </tr>
                <tr>
                    <td>1.</td>
                    <td>Electronics</td>
                    <td>Lenovo</td>
                    <td>Laptop</td>
                    <td><input className='form-control' style={{margin:'5px'}} placeholder='Quantity' type='number' min='1' /></td>
                    <td>
                    <Button variant='success'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>    
                    {" "}Add
                    </Button>
                    </td>
                    
                </tr>




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