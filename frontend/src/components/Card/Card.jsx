import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
const Card = () => {

    const navigate = useNavigate()

  return (
    <div className='Card' onClick={() => navigate('/product')}>

        <div className='card-image' >
            Image
        </div>
        <div className='card-details'>
            <div className='card-title'>
                Title
            </div>
            <div className='card-price'>
                $ Price
            </div>
        </div>



    </div>
  )
}

export default Card
