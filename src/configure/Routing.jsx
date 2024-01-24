import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserSignup from "../pages/UserSignup";
import UserLogin from "../pages/UserLogin";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/signup" Component={UserSignup} />
        <Route path="/login" Component={UserLogin} />
      </Routes>
    </Router>
  );
};

export default Routing;
