import React, { useEffect ,useState} from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'

const MyOrders = () => {
    const[orders,setOrders]=useState([]);

    useEffect(async ()=>{
        await axios.post("http://localhost:8888/api/getUsersOrders",{email:window.localStorage.getItem('email')})
        .then(res=>{
            if(res.data.ans)
            {   console.log(res.data)
                setOrders(res.data.orders)
            }
            else{
                alert("Unable to load orders please try gain")
            }
        }).catch(err=>console.log(err))

    },[])


  return (
    <div style={{padding:'5px'}}>
        <div style={{fontSize:'25px'}}>Order History</div>
        <hr></hr>
        <Table responsive striped bordered hover>
            <thead>
                <th>#</th>
                <th>Order Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Order Date</th>
                <th>Status</th>
            </thead>
            <tbody>
                {
                    orders.map((order,index)=>{
                        // console.log(new Date(order.date))
                        
                        return(<tr>
                        <td>{index+1}</td>
                        <td>{order._id}</td>
                        <td>{order.productName}</td>
                        <td>{order.quantity}</td>
                        <td>{new Date(order.date).getDate()+"/"+new Date(order.date).getMonth()+"/"+new Date(order.date).getYear()}</td>
                        {order.status.toLowerCase()=="pending"?
                        <td style={{color:'red'}}>{order.status}</td>:
                        <td style={{color:'green'}}>{order.status}</td>
                        }
                    </tr>)
                    })

                }

            </tbody>


        </Table>

    </div>
  )
}

export default MyOrders