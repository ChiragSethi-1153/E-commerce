import React, { useEffect } from 'react'
import SideBar from '../Dashboard/SideBar'
import './ViewProduct.css'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from '../../redux/slices/productSlice'



const ViewProducts = () => {

  const dispatch = useDispatch()
  const state = useSelector((state) => state.product.data)
  console.log(state)
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])




  return (
    <div className='viewProducts'>

      <div className="viewProduct-left">
        <SideBar />
      </div>

      <div className='viewProduct-right'>
          All Products
          <table>
            <thead>
              <th>Product Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock Remaining</th>
              <th>Description</th>
            </thead>

            <tbody>
              {
                state?.map((item) => {
                  return(
                    <tr>
                      <td>{item.image}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.description}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

            
      </div>
    
    
    </div>
  )
}

export default ViewProducts
