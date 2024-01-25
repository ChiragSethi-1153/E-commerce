import React from 'react'
import './Footer.css'
import FooterLogo from '../../assets/images/footer-logo.jpg'


const Footer = () => {
  return (
    <div className='footer'>
      <hr className='footer-line' />

    <div className='footer-content'>

        <div className='footer-left'>
            <img src={FooterLogo} alt="footerLogo" />
            <p className='footer-text'>Your natural candle made for your home and for your wellness.</p>
             
        </div>

        <div className='footer-right'>

            <div className='discovery'>
                <button className='disc'>Discovery</button>
                <button className='btns' >New season</button>
                <button className='btns' >Most Searched</button>
                <button className='btns' >Most Selled</button>
            </div>

            <div className='about'>

            <button className='disc' >About</button>
            <button className='btns' >Help</button>
            <button className='btns' >Shipping</button>
            <button className='btns' >Affiliate</button>
            </div>

            <div className='info '>
            <button className='disc' >Info</button>
            <button className='btns' >Contact Us</button>
            <button className='btns' >Privacy Policies</button>
            <button className='btns' >Terms & Conditions</button>
            </div>
        </div>
        
    </div>

    </div>
  )
}

export default Footer
