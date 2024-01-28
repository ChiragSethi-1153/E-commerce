import React from 'react'
import './Testimonials.css'
import testi1 from '../../assets/images/test-i1.jpg'
import Stars4 from '../../assets/images/4stars.jpg'
import testi2 from '../../assets/images/testi2.jpg'
import testi3 from '../../assets/images/testi3.jpg'
import Stars5 from '../../assets/images/5Stars.jpg'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className='testimonials-title'>
        <h1>Testimonials</h1>
        <p>Some quotes from our happy customers</p>
      </div>
        <div className='testimonial-cards'>
            <div className='testimonial-card'>
            <img src={testi1} />
            <img src={Stars4} style={{width: '10.135vw', height: '3.077vh', marginTop: '1.795vh'}} />
            <h6>“I love it! No more air fresheners”</h6>
            <p>Luisa</p>
            </div>
            <div className='testimonial-card'>
            <img src={testi2} />
            <img src={Stars5} style={{width: '10.135vw', height: '3.077vh', marginTop: '1.795vh'}} />
            <h6>“Raccomended for everyone”</h6>
            <p>Edoardo</p>
            </div>
            <div className='testimonial-card'>
            <img src={testi3} />
            <img src={Stars4} style={{width: '10.135vw', height: '3.077vh', marginTop: '1.795vh'}} />
            <h6>“Looks very natural, the smell is awesome”</h6>
            <p>Mart</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
