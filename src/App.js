import logo from "./logo.svg";
import "./App.css";
import React,{useState,useEffect} from 'react'
import AddProduct from "./components/AddProduct";
import Footer from "./components/Footer";
import ProductsTypes from "./components/ProductsTypes";
// import Introduction from "./components/Introduction";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProducsList from "./components/ProducsList";
import Productdetails from "./components/Productdetails";
import Slider from "./components/Slider";
import Product from "./components/Product";
import Sidemenu from "./components/Sidemenu";
import NevigationMenu from "./components/NevigationMenu";
import AddStock from "./components/AddStock";
import CartIndicator from "./components/CartIndicator";
import axios from "axios";
import MyCart from "./components/MyCart";
import MyOrders from "./components/MyOrders";
import OrderStatus from "./components/OrderStatus";
import UpdateUserRole from "./components/UpdateUserRole";
import {Button} from 'react-bootstrap'

export const AuthenticateContext=React.createContext();
export const SetAuthenticatedContext=React.createContext();
export const CartContext=React.createContext();


function App() {

  const [authenticate,setAuthenticate]=useState(false);
  const [cartLength,setCartLength]=useState(0);
  useEffect(async() =>{
    if(window.localStorage.getItem('email')!=null)
    {
      await axios.post("http://localhost:8888/api/getCart",{email:window.localStorage.getItem('email')})
      .then(res=>{
        if(res.data.ans)
        { 
          setCartLength(res.data.cart.length)
        }
        else{
          alert("Unable to load cart please refresh try again!!!!!!!!!!")
        }

      })
    }
  },[])



  if(window.localStorage.getItem('logged')==true)
  {
    setAuthenticate(true);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Introduction /> */}
      
     
      {/* <Navigation /> */}

      {/* <AuthenticateContext.Provider value={authenticate}>
        <SetAuthenticatedContext.Provider value={setAuthenticate}> */}
    <CartContext.Provider value={setCartLength}>
      <BrowserRouter>
      <NevigationMenu style={{margin:'10px'}}/>
      <div style={{fontSize:'40px',fontFamily:'Times New Roman',backgroundColor:'#ff9900'}}>
        <i><center><div style={{display:'inline'}}>ShopOnline</div>
       </center></i>
        </div>
        <CartIndicator length={cartLength}/>
        <Route exact path="/">  
          <Slider/>
          {/* <div style={{display:'flex',flexDirection:'column',padding:'5px'}}>
            <div className='shadow' style={{alignSelf:'start',display:'flex',flexDirection:'column',width:'300px'}}>
              <p>Do not have an account?</p>
              <p>Register to our website in just minutes and start your shopping journey</p>
              <Button>SignUp</Button>
            </div>
            <div className='shadow' style={{alignSelf:'end',display:'flex',flexDirection:'column',width:'300px'}}>
              <p>Have an account?</p>
              <p>Login and your shopping journey</p>
              <Button>SignUp</Button>
              </div>
          </div> */}
          <ProductsTypes/>
          <Footer />
        </Route>
        <Route exact path="/Login">
          <Login />
          <Footer />
        </Route>
        <Route exact path="/SignUp">
          <Signup />
          <Footer />
        </Route>
        <Route exact path="/ProductsList">
          <ProducsList />
        </Route>
        <Route exact path="/Productdetails/:id">
          <Productdetails />
        </Route>
        <Route exact path="/Product">
          <Product />
        </Route>
        <Route exact path="/Sidemenu">
          <Sidemenu/>
        </Route>
        <Route exact path="/AddProduct">
          <AddProduct/>
        </Route>
        <Route exact path="/AddStock">
          <AddStock/>
        </Route>
        <Route exact path="/MyCart">
          <MyCart/>
        </Route>
        <Route exact path="/MyOrders">
          <MyOrders/>
        </Route>
        <Route exact path="/OrderStatus">
          <OrderStatus/>
        </Route>
        <Route exact path="/UpdateUserRole">
          <UpdateUserRole/>
        </Route>
      </BrowserRouter>
      </CartContext.Provider>
       {/* </SetAuthenticatedContext.Provider>
      </AuthenticateContext.Provider> */}
    </div>
  );
}

export default App;
