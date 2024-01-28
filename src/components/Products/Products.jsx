import React from 'react'
import './Products.css'
import Card from '../Card/Card'


const Products = () => {
  return (
    <div className='Products'>
      
      <div className='Products-title'>
        <h1>Products</h1>
        <p>Order it for you or for your beloved ones </p>
      </div>
      
      <div className='product-cards'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </div>


    </div>
  )
}

export default Products
