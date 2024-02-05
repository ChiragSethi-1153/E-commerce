import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import UserSignup from "../pages/UserSignup/UserSignup";
import UserLogin from "../pages/UserLogin/UserLogin";
import About from "../pages/About";
import ContactUs from "../pages/Contact/ContactUs";
import  Dashboard  from "../components/Dashboard/Dashboard";
import AddProducts from "../components/AddProducts/AddProducts";
import ViewProducts from "../components/ViewProducts/ViewProducts";
import Product from "../pages/Product/Product";
import AboutSection from "../pages/AboutSection/AboutSection";
import  Cart  from '../pages/Cart/Cart'
import PaymentDetails from "../pages/PaymentDetails/PaymentDetails";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Routing = () => {

  const location = useLocation()

  return (


    <>
        {
            location.pathname != '/paymentdetails' && <Navbar />
        }
    <Routes>        
        
        <Route exact path="/" Component={Home} />
        <Route exact path="/home" element={<Home/>}/>
        <Route path="/signup" Component={UserSignup} />
        <Route path="/login" Component={UserLogin} />
        <Route path="/about" Component={About} />
        <Route path="/contactus" Component={ContactUs} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/addProducts" Component={AddProducts} />
        <Route path="/viewProducts" Component={ViewProducts} />
        <Route path="/product" Component={Product} />
        <Route path="/cart" Component={Cart} />
        <Route path="/paymentdetails" Component={PaymentDetails} />
        {/* <Route path='/aboutsection' Component={AboutSection} /> */}
      
      </Routes>
      {
            location.pathname != '/paymentdetails' && <Footer />
        }
    </>

     
  );
};

export default Routing;
