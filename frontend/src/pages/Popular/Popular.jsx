import React from 'react'
import './Popular.css'
import Card from '../../components/Card/Card'


const Popular = () => {
  return (
    <div className='popular'>
        <div className='popular-title'>
        <h1>Popular</h1>
        <p>Our top selling product that you may like</p>
      </div>

      <div className='popular-cards'>
          <Card />
          <Card />
          <Card />
          <Card />
      </div>

    </div>
  )
}

export default Popular
