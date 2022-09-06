import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../Style/Slider.css'
import { Link, NavLink } from 'react-router-dom';
export const Slider = ({data}) => {
  return (
    <>
<div className='slider_main'>
<Splide options={{perPage:5,
   drag:'free'
  }}>
{data.map((e)=>(
 <SplideSlide >
  <NavLink to={`/detail/${e.id}`}>
  <div  key={e.id} className="slide_main">

  <div   className="slide_div" key={e.id}>
              <img src={e.Image} alt="" />
              </div>
              <div className='slide_bottom'>
                <p>{e.name}</p>
                <p style={{color:"green"}}>From ₹ {e.price}</p>
        
              </div>
  </div>
  </NavLink>
             </SplideSlide>
            ))}
</Splide>
</div>
    </>
  )
}
