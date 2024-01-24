import React from 'react'
import "./Home.css"
import { Button } from '@mui/material'

const Home = () => {
  return (
    <div className='hero'>
      <div className='box'>
        <div>
          <img src="../assets/images/sapling.png" alt="" />
        </div>
        <div><h1>The nature candle</h1></div>
        <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
        <Button variant='contained' >Discovery our collection</Button>
      </div>
    </div>
  )
}

export default Home
