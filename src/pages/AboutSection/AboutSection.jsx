import React from 'react'
import './AboutSection.css'
import AboutImage from '../../assets/images/aboutSection.jpg'
import { Button } from '@mui/material'

const AboutSection = () => {
  return (
    <div className='about-section'>
        <div className='aboutsection-left'>
            <h1>Clean and fragrant soy wax</h1>
            <p>
             Made for your home and for your wellness
            </p>
            <ul >
            <li><span style={{fontWeight: '600'}}>Eco-sustainable:</span> All recyclable materials, 0% CO2 emissions</li>
            <li><span style={{fontWeight: '600'}}>Hyphoallergenic:</span> 100% natural, human friendly ingredients </li>
            <li><span style={{fontWeight: '600'}}>Handmade:</span> All candles are craftly made with love.</li>
            <li><span style={{fontWeight: '600'}}>Long burning:</span> No more waste. Created for last long.</li>
            </ul>
            

            <Button variant='contained' className='aboutsection-btn' >Learn More</Button>
        </div>
        <div className='aboutsection-right'>
            <img src={AboutImage} className='aboutimage' />
        </div>
    </div>
  )
}

export default AboutSection
