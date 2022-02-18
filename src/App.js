import logo from "./logo.svg";
import "./App.css";
import React,{useState} from 'react'
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

export const AuthenticateContext=React.createContext();
export const SetAuthenticatedContext=React.createContext();


function App() {

  const [authenticate,setAuthenticate]=useState(false);
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

      <AuthenticateContext.Provider value={authenticate}>
        <SetAuthenticatedContext.Provider value={setAuthenticate}>
      <BrowserRouter>
      <NevigationMenu style={{margin:'10px'}}/>
      <div style={{fontSize:'40px',fontFamily:'Times New Roman',backgroundColor:'#ff9900'}}>
        <i><center><div style={{display:'inline'}}>C2CShopOnline</div>
       </center></i>
        </div>
        <CartIndicator/>
        <Route exact path="/">
            
          <Slider/>
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
      </BrowserRouter>
       </SetAuthenticatedContext.Provider>
      </AuthenticateContext.Provider>
    </div>
  );
}

export default App;
