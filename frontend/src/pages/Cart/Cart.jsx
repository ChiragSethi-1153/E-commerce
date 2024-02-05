import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';



const Cart = () => {
  return (
    <div className='cart'>
    <div className='cart-title'>
    <h1>Your cart items</h1>
    </div>
    
    <div className='home-link'>
    <h5><Link to={'/'} style={{color: 'var(--green, #56B280)'}}>Back to Shopping</Link></h5>
    </div>

    <div>
        <table className='cart-table'>
           <thead className='cart-table-header'>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
           </thead>

          <tbody className='cart-table-body'>
           
          { // data?.map()
             <tr>
                <td style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '27vw'}}>
                  image
                  <td style={{display: 'flex', flexDirection:"column", marginLeft: '30px'}}>
                  name
                  <button className='cart-remove-btn'>Remove</button>
                  </td>
                </td>
                <td>$Price</td>
                <td> <Button>+</Button>
              
              <Button>-</Button></td>
              <td>
                $Price*Quantity
              </td>
           </tr>
}






          </tbody>
        </table>

        <div>
          <h4>Sub-total</h4>
          <h4>$ Price</h4>
          <Button>Check-out</Button>
        </div>
    </div>
      
    </div>
  )
}

export default Cart
