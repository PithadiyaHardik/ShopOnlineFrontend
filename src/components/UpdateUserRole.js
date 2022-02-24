import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import {Table,Button} from 'react-bootstrap'

const UpdateUserRole = () => {

    const [users,setUsers]=useState([]);
    // const [users,setUsers]=useState([]);
    const [displayUsers,setDisplayUsers]=useState([]);

    useEffect(async ()=>{
        await axios.get("http://localhost:8888/api/allUsers")
        .then(res=>{
            
            if(res.data.ans)
            {
                setUsers(res.data.users)
                setDisplayUsers(res.data.users)
            }
            else{
                alert(res.data.data)
            }
        }).catch((err)=>{console.log(err)})
        
    },[])


    const searchHandler = (e) => {
        let text=e.target.value;
        console.log(text)
        let arr=users.filter(u=>u.email.includes(text)||u.first_name.includes(text)||u.last_name.includes(text))
        setDisplayUsers(arr);

    }

    const makeAdmin=(e)=>{
        let id=e.target.id;
        axios.post("http://localhost:8888/api/updateRole",{id:id,role:"admin"})
        .then(async (res)=>{
            if(res.data.ans)
            {
                alert("Created admin successfully!");
                await axios.get("http://localhost:8888/api/allUsers")
                     .then(res=>{
                        if(res.data.ans)
                        {
                        setUsers(res.data.users)
                        setDisplayUsers(res.data.users)
                        }
                        else{
                        alert(res.data.data)
                        }
                        }).catch((err)=>{console.log(err)})
            }
            else{
                alert(res.data.data);
            }
        }).catch(()=>{alert("Unable to update role")})

    }
    const removeAdmin=(e)=>{
        let id=e.target.id;
        axios.post("http://localhost:8888/api/updateRole",{id:id,role:"regular"})
        .then(async (res)=>{
            if(res.data.ans)
            {
                alert("Removed admin successfully!");
                await axios.get("http://localhost:8888/api/allUsers")
        .then(res=>{
            
            if(res.data.ans)
            {
                setUsers(res.data.users)
                setDisplayUsers(res.data.users)
            }
            else{
                alert(res.data.data)
            }
        }).catch((err)=>{console.log(err)})

            }
            else{
                alert(res.data.data);
            }
        }).catch(()=>{alert("Unable to update role")})
    }
  return (
    <div>
        <div style={{fontSize:'25px'}}>Update the User</div>
        <hr></hr>
        <div>
            <div style={{display:'flex',flexDirection:'row-reverse',margin:'5px'}}><input onChange={searchHandler} className='form-control' type='text' style={{width:'200px'}} placeholder='search'/></div>
            <Table responsive striped hover bordered>
                <thead>
                    <th>#</th>
                    <th>User email</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>Role</th>
                    <th>Action</th>
                </thead>
                <tbody>

                    {
                        displayUsers.map((user,index)=>{
                            return(
                            <tr>
                            <td>{index+1}</td>
                            <td>{user.email}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.role}</td>
                            <td>{user.role.toLowerCase()=="regular"?<Button iid={user._id} onClick={makeAdmin} variant='secondary'>Make Admin</Button>:
                            <Button id={user._id} onClick={removeAdmin} variant='success'>Remove Admin</Button>}</td>
                            </tr>
                            )
                        })
                    }

                    <tr>
                    <td>#</td>
                    <td>User email</td>
                    <td>firstname</td>
                    <td>lastname</td>
                    <td>Role</td>
                    </tr>
                    <tr>
                    <td>#</td>
                    <td>User email</td>
                    <td>firstname</td>
                    <td>lastname</td>
                    <td>Role</td>
                    </tr>
                    <tr>
                    <td>#</td>
                    <td>User email</td>
                    <td>firstname</td>
                    <td>lastname</td>
                    <td>Role</td>
                    </tr>
                    <tr>
                    <td>#</td>
                    <td>User email</td>
                    <td>firstname</td>
                    <td>lastname</td>
                    <td>Role</td>
                    </tr>
                </tbody>

            </Table>
        </div>
    </div>
  )
}

export default UpdateUserRole