import React from 'react'
import './Product.css'
import { Button } from '@mui/material'
import { BubbleChart } from '@mui/icons-material'

const Product = () => {
  return (
    <div className='product-page'>

      <div className='product-left'>

      <div className='product-img'>
        <img />
        img
      </div>

      <p className="product-img-text">
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments.
        </p>
        <p className='product-shipping'>🚚 FREE SHIPPING</p>
      </div>
      <div className='product-right'>
        <div className='product-name'>Product Name</div>
        
        <div className='product-details'>
          <div className='product-details-left'>
            <div className='product-price'>$ Price</div>
            <div className='product-quantity'>
              <p>Quantity</p>
              <Button>+</Button>
              
              <Button>-</Button>
            </div>
          </div>
          <div className='product-details-rifght'>
            <div className='product-purchase'>
              <input type='radio' />
              <p>One time purchase</p>
            </div>
            <div className='product-subscribe'>
              <input type='radio' />
              <p>Subscribe and delivery every </p>
            </div>
            <Button variant='contained'  > + Add to cart</Button>
          </div>
        </div>
        <div className='product-description'>Product description</div>
      </div>

    </div>
  )
}

export default Product
