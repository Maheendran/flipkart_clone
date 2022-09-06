import React from 'react'
import "../Style/Subnavbar.css"
import { FaAngleUp } from 'react-icons/fa';
import { NavLink} from 'react-router-dom'
export const Subnavbar = () => {
  return (
    <>
 <div className='head_banner'>
<div>
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" />
  <p>Top Offers</p>
</div>
<div>
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" />
  <p>Grocery</p>
</div>
<div >
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
  <p>Mobiles</p>

</div>
<div className='fashion_slider'>
<NavLink to="/products/fashions">

  <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="" />
  </NavLink>
<div className='sliderbtm'>
<p>Fashions </p>
  <FaAngleUp size={"1rem"}id="downarrow"/>
</div>

  <div className='hover_fashion'>
     <ul>
     <NavLink to="/products/fashions">
<li>  Men's Top Wear</li>
<li>Men's Bottom Wear</li>
<li>Women Ethnic</li>
<li>Women Western</li>
<li>Men Footwear</li>
<li>Women Footwear</li>
<li>Watches and Accessories</li>
</NavLink>
 </ul>
     
     
    </div>
</div>

<div className='electro_slider'>
<NavLink to="/products/electronics">

  <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
  </NavLink>
  <div className='sliderbtm'>
  <p>Electronics</p>
    <FaAngleUp size={"1rem"} id="downarrow"/>
  </div>
  <div className='hover_electro'>
     <ul>
     <NavLink to="/products/electronics">
<li>Bluetooth Headphones</li>
<li>Wired Headphones</li>
<li>True Wireless Earbuds</li>
<li>Bluetooth Speakers</li>
<li>
Soundbars</li>
<li>Home Theatres</li>
<li>TV Streaming Device</li>
<li>Remote Control</li>
</NavLink>
     </ul>
     
     
    </div>
</div>

<div className='Home_slider'>

<NavLink to="/products/homeappliance">
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
  </NavLink>
  <div className='sliderbtm'>
  <p>Home</p>
  <FaAngleUp size={"1rem"} id="downarrow"/>
  </div>
  <div className='hover_home'>

     <ul>  <NavLink to="/products/homeappliance">
      <li>Bed</li>
<li>  Bed Linens</li>
<li>Bedsheets</li>
<li>Blankets</li>
<li>Curtains & Accessories</li>
</NavLink>
     </ul>
    </div>

</div>
<div>
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
  <p>Appliances</p>
</div>
<div>
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" />
  <p>Travel</p>
</div>
<div>
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" />
  <p>Beauty,Toys & More</p>
</div>
    </div>
    </>
  )
}
