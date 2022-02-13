import logo from "./logo.svg";
import "./App.css";
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


function App() {



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
      <BrowserRouter>
      <NevigationMenu style={{margin:'10px'}}/>
      <div style={{fontSize:'40px',fontFamily:'Times New Roman',color:'white',backgroundColor:'black'}}><i><center>C2C ShopOnline</center></i></div>
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
    </div>
  );
}

export default App;
