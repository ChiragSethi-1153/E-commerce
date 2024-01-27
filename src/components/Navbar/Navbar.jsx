import * as React from 'react';
import Logo from '../../assets/images/bg.jpg'
import Wordmark  from "../../assets/images/wordmark.jpg";
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import ProfileIcon from '../../assets/images/Profile.jpg'




const Navbar = () => {

  const navigate = useNavigate(); 

  const currentUser = localStorage.getItem("user")

  function dropdownBtn() {
    document.getElementById("Dropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



const logout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("role")
  navigate('/login')
}

const role = JSON.parse(localStorage.getItem("role"));
 
 

  
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
            <button className='menu-btn' onClick={() => navigate('/about')}>About</button>
            <button className='menu-btn' onClick={() => navigate('/contactus')}>Contact us</button>
        </div>
        <div>

        <div className="dropdown">
        <button className='dropbtn' onClick={dropdownBtn}></button>
          <div id="Dropdown" className="dropdown-content">
            <button className='profile-btns'>Profile</button>
              {
                (role.role === 20)?<button className='profile-btns' onClick={() => navigate('/dashboard')}>Dashboard</button>: null
              }
            {
            currentUser?<button  className='profile-btns' onClick={logout}>Log Out</button>: <button onClick={() => {navigate('/login')}}>Log In</button>
           }

           </div>
        </div>




            <button className='cart-icon'></button> 
        </div>

    </div>
    </>
  )
}

export default Navbar
