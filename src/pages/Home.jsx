import React from 'react'
import "./Home.css"
import Sapling from "../assets/images/sapling.png"
import { Button } from '@mui/material'

const Home = () => {
  return (
    <div className='hero'>
      <div className='box'>
        <div>
          <img src={Sapling} className='sapling' />
        </div>
        <div className='hero-text'>The nature candle</div>
        <p className='hero-p'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
        <Button variant='contained' className='hero-btn' >Discovery our collection</Button>
      </div>
    </div>
  )
}

export default Home
