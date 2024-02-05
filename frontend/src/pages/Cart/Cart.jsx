import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { Button, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const navigate = useNavigate()

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

        <div className='cart-subsection'>

          <div style={{display:'flex', alignItems: 'flex-end', flexDirection: 'column', margin: '3vw', marginRight: '8vw'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', width: '17vw'}}>
              <h4>Sub-total</h4>
              <h4>$ Price</h4>
          </div>
          
          <p>Tax and shipping cost will be calculated later</p>
          
          </div>
       
          <Button  variant='contained' className='checkout-btn' onClick={() => navigate('/paymentdetails')}>Check-out</Button>
        </div>
        
        </div>
      
    </div>
  )
}

export default Cart
