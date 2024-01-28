import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'



const Cart = () => {
  return (
    <div className='cart'>
    <div className='cart-title'>
    <h1>Your cart items</h1>
    </div>
    
    <div className='home-link'>
    <h5><Link to={'/'}>Back to Shopping</Link></h5>
    </div>

    <div>
        <table>
            
        </table>
    </div>
      
    </div>
  )
}

export default Cart
