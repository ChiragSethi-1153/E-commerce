import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import UserSignup from "../pages/UserSignup/UserSignup";
import UserLogin from "../pages/UserLogin/UserLogin";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import  Dashboard  from "../components/Dashboard/Dashboard";

const Routing = () => {
  return (

      <Routes>        
        <Route exact path="/" Component={Home} />
        <Route exact path="/home" element={<Home/>}/>
        <Route path="/signup" Component={UserSignup} />
        <Route path="/login" Component={UserLogin} />
        <Route path="/about" Component={About} />
        <Route path="/contactus" Component={ContactUs} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>

  );
};

export default Routing;
