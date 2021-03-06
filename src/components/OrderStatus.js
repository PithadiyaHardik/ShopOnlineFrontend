import React, { useEffect } from 'react'
import { Table,Button } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import { useRef } from 'react'
const OrderStatus = () => {
    const [orders,setorders]=useState([])
    const [displayOrders,setdisplayOrders]=useState([]);
    const [statusColor,setStatusColor]=useState(['danger','warning','success'])
    const [status,setStatus]=useState(['Pending','Dispatched','Delivered']);
    const filterRef1=useRef(null);
    const filterRef2=useRef(null);
    useEffect(async()=>{
        // process.env.REACT_APP_BASE_API
        await axios.post(process.env.REACT_APP_BASE_API+"/api/allOrders",{email:window.localStorage.getItem('email'),admin:window.localStorage.getItem('admin')})
        .then(res=>{
            if(res.data.ans)
            {   
                setorders(res.data.orders);
                setdisplayOrders(res.data.orders);
            }
            else{
                alert(res.data.data)
            }

        }).catch(err=>{console.log(err)})
    },[])


    const changeStatus=async(e)=>{
        let s=e.target.getAttribute("status");
        let id=e.target.id;
        if(s.toLowerCase()=="pending")
        {   await axios.post(process.env.REACT_APP_BASE_API+"/api/updateStatus",{id:id,status:"Dispatched",email:window.localStorage.getItem('email'),admin:window.localStorage.getItem('admin')})
        .then(async(res)=>{
            if(res.data.ans)
            {
                await axios.get(process.env.REACT_APP_BASE_API+"/api/allOrders",{email:window.localStorage.getItem('email'),admin:window.localStorage.getItem('admin')})
                .then(res=>{
                    if(res.data.ans)
                    {   
                        setorders(res.data.orders);
                        setdisplayOrders(res.data.orders);
                    }
                    else{
                        alert("Failed to load please try again")
                    }
        
                }).catch(err=>{console.log(err)})
            // e.target.style.backgroundColor='#ffc107'
            // e.target.style.borderColor='#ffc107'
            // e.target.setAttribute("status","dispatched");
            // e.target.innerHTML="Dispatched";
            }
            else{
                alert("Unable to update stus due to some internal error!!!!!!")
            }
        })
            
            
        }
        else if(s.toLowerCase()=="dispatched"){

            await axios.post(process.env.REACT_APP_BASE_API+"/api/updateStatus",{id:id,status:"Delivered",email:window.localStorage.getItem('email'),admin:window.localStorage.getItem('admin')})
            .then(async(res)=>{
                if(res.data.ans)
                {   await axios.get(process.env.REACT_APP_BASE_API+"/api/allOrders",{email:window.localStorage.getItem('email'),admin:window.localStorage.getItem('admin')})
                .then(res=>{
                    if(res.data.ans)
                    {   
                        setorders(res.data.orders);
                        setdisplayOrders(res.data.orders);
                    }
                    else{
                        alert("Failed to load please try again")
                    }
        
                }).catch(err=>{console.log(err)})
                   
                }
                else{
                    alert("Unable to update status due to some error!!!!!!!")
                }
            })
            

        }
        else{
            e.target.setAttribute("status","delivered");

        }

    }

    const filterHandler=()=>{
        
        let v2=filterRef2.current.value;
        let a1,a2;
        
        if(v2=="all")
        {
            a2=orders;
        }
        else{
            a2=orders.filter(o=>o.status===v2)
        }
        setdisplayOrders(a2)

    }
  return (
    <div style={{padding:'5px'}}>
        <div style={{fontSize:"25px"}}>Order Delivery Status</div>
        <hr></hr>
        <Filters>
 
            <div>
                <label style={{margin:'10px'}}>Status:</label>
                <select ref={filterRef2} onChange={filterHandler} style={{margin:'15px',width:'200px'}} className='form-control'>
                    <option value="all">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Dispatched">Dispatched</option>
                    <option value="Delivered">Delivered</option>
                </select>
            </div>
        </Filters>
        <div>Orders:</div>
        <Table responsive striped hover bordered>
            <thead>
                <th>#</th>
                <th>OrderId</th>
                <th>PaymentId</th>
                <th>Quantity</th>
                <th>Delivery Address</th>
                <th>User email</th>
                <th>User phone</th>
                <th>status</th>
            </thead>
            <tbody>
                {
                    displayOrders.map((order,index)=>{
                        let v;
                        if(order.status.toLowerCase()=='pending')
                        {
                            v='danger';
                        }
                        else if(order.status.toLowerCase()=='dispatched'){
                            v='warning';

                        }
                        else{
                            v='success'
                        }
                        return(
                            <tr>
                            <td>{index+1}</td>
                            <td>{order._id}</td>
                            <td>{order.paymentId}</td>
                            <td>{order.quantity}</td>
                            <td>{order.address}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>
                            <Button variant={v} id={order._id} onClick={changeStatus} status={order.status}>{order.status}</Button></td>
                            </tr>
                            
                        )
                    })
                }
                 
            </tbody>


        </Table>
    </div>
  )
}

export default OrderStatus

const Filters=styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:start;
flex-direction:row;
`