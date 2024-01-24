import * as React from 'react';
import Logo from '../assets/images/bg.jpg'
import Wordmark  from "../assets/images/wordmark.jpg";
import './Navbar.css'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  // const navigate = useNavigate(); onClick={() => navigate('/') }
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
          <button className='logo-btn' >
             <img src={Logo} alt='Logo' />
             <img src={Wordmark} alt='logo-text' className="logo-text" />
          </button>
            
        </div>
        <div className='menu'>
            <select name="discovery" id="" className='discovery'> 
                <option value="">Discovery</option>
                <option>Products</option>
                <option value="">Most Searched</option>
                <option value="">Most Selled</option>
            </select>
            <button className='menu-btn'>About</button>
            <button className='menu-btn' >Contact us</button>
        </div>
        <div>
            <button className='profile-icon'></button>
            <button className='cart-icon'></button> 
        </div>

    </div>
    </>
  )
}

export default Navbar
