import * as React from 'react';
import Logo from '../../assets/images/bg.jpg'
import Wordmark  from "../../assets/images/wordmark.jpg";
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


const Navbar = () => {

  const navigate = useNavigate(); 

  const currentUser = localStorage.getItem("user")
const logout = () => {
  localStorage.removeItem("user")
  navigate('/login')
}

  return (
    <>
    <div className='navbar'>
        <div className='logo'>
          <button className='logo-btn' onClick={() => navigate('/home') } >
             <img src={Logo} alt='Logo' />
             <img src={Wordmark} alt='logo-text' className="logo-text" />
          </button>
            
        </div>
        <div className='menu'>
            <select name="discovery" id="" className='nav-discovery'> 
                <option value="">Discovery</option>
                <option>Products</option>
                <option value="">Most Searched</option>
                <option value="">Most Selled</option>
            </select>
            <button className='menu-btn'>About</button>
            <button className='menu-btn' >Contact us</button>
        </div>
        <div>
        <button className='profile-icon'>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
     
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Profile</Dropdown.Item>
        {
          currentUser?<Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>: <Dropdown.Item onClick={() => {navigate('/login')}}>Log In</Dropdown.Item>
        }
        
      </Dropdown.Menu>
      </Dropdown>

        </button>
            <button className='cart-icon'></button> 
        </div>

      {/*     <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
    </div>
    </>
  )
}

export default Navbar
