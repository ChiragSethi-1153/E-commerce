import React from 'react'
import './PaymentDetails.css'
import Breadcumb from '../../components/PaymentBreadcrum/Breadcumb'

import { useNavigate } from 'react-router-dom';
import {Button } from '@mui/material';


const PaymentDetails = () => {

    const navigate = useNavigate();

  return (
    <div className='payment-details'>

      <div className='pd-left'>
        <Breadcumb />


        <div className="contact-detail-div">
          <div className="contact-detail" >
            <p className="contact-text">
              Contact
            </p>
            <p style={{marginBottom: '0'}}>
              Do you have an account?{" "}
              <span>
                <button
                  className="login-btn"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </span>
            </p>
          </div>

          <form  className="contact-detail-form">
           
            <label htmlFor="email"></label>
            <br />
            <input
              type="email"
              name="email"
              className='contact-detail-form-input'
              placeholder="Email or Mobile phone number"
            //   value={email}
            //   onChange={handleEmail}
              required
            />
           <div className='newsletter'>
           <input type='checkbox' className='newsletter-checkbox' /> 
            <p style={{margin:'0', marginLeft:'10px', fontFamily: 'Roboto', fontSize: '14px' }}>Add me to Candleaf Newsletter for 10% discount</p>
            
           </div>
          </form>
          <br />
        </div>





      </div>
    <div className='pd-right'>
    xasxasx
    </div>
      




    </div>
  )
}

export default PaymentDetails



