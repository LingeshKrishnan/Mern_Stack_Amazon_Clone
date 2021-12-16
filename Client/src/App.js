import React, { Fragment, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import ProductForm from './Components/ProductForm/ProductForm';
import  { useDispatch } from 'react-redux'
import { getLogin} from './actions/login'
import { getProduct } from './actions/products'
// import { getProducts } from './actions/prodcuts'

function App() {
  const dispatch  = useDispatch();
  useEffect(() => {
    dispatch(getLogin())
    },[dispatch]);
  useEffect(() => {
    dispatch(getProduct())
  },[dispatch]);
  // useEffect(() => {
  //   dispatch(createLogin())
  // },[dispatch]);
  return (
    
    //BEM
    <Router>
        <div className="app">   

          <Routes> 

              <Route path="/postproduct" element ={
                    <ProductForm />
                }>
                </Route>

              <Route path="/registration" element= {
                <Registration />
              }>
              </Route>

              <Route path="/login" element={
                <Login />
              }>
              </Route>           
              <Route path="/checkout" element ={
                <>
                  <Header />
                  <Checkout />
                </>
              } >
              </Route>
              
              <Route path="/"  element={               
                <>
                  <Header />
                  <Home />
                </> }>
              </Route>
            
          </Routes>           
        
        </div>
    </Router>
    
  );
}

export default App;
