import React, { useState } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  Box,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";

const UserLogin = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleRole = (event) => {
    setRole(event.target.value);
  };
  

  const handleLogin = (e) => {
    e.preventDefault();
    let loggedUser
    if(role == 10){
      loggedUser = JSON.parse(localStorage.getItem("users"));
    }
    else {
      loggedUser = JSON.parse(localStorage.getItem("admins"));
    }
     
      console.log(loggedUser);
      let flag = false;
      if (loggedUser == null) {
        alert("You do not have an account kindly sign up");
        navigate("/signup");
      } 
      else {
        loggedUser.map((item) => {
          console.log(item)
          if (email === item.email && password === item.password) {
            flag = true;
          }
        });

        if (flag) {
          localStorage.setItem("user", JSON.stringify({ email, password }));
          localStorage.setItem('role', JSON.stringify({ role }));
          navigate("/");
        } else {
          alert("Invalid Credentails");
        }
      }
  }

  return (
    <div className="login">
      <div className="Login-form-box">
        <div className="login-text-div">
          <p className="login-text">Login</p>
          <p>
            Don't have an account?
            <span className="signup-span">
              <button
                className="signup-btn"
                onClick={() => navigate("/signup")}
              >
                Sign Up!
              </button>
            </span>
          </p>
        </div>

        <form onSubmit={handleLogin} className="login-form">

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                style={{ display: "flex", alignItems: "center" }}
                required
              >
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                style={{ backgroundColor: "#fff", height: "5.128vh" }}
                id="demo-simple-select"
                value={role}
                label="Role"
                onChange={handleRole}
              >
                <MenuItem value={10}>Customer</MenuItem>
                <MenuItem value={20}>Admin</MenuItem>
                {/* <MenuItem value={30}></MenuItem> */}
              </Select>
            </FormControl>
          </Box>
          <label htmlFor="email"></label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password"></label>
          <br />
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <Button variant="contained" type="submit" className="login-btn">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
