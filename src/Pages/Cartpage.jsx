import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Appcontext } from '../AppContext'
import { Footer } from '../Components/Footer'
import { Loading } from '../Components/Loading'
import { Navbar } from '../Components/Navbar'
import { Subnavbar } from '../Components/Subnavbar'
import '../Style/Cart.css'
export const Cartpage = () => {

    const {cart,handleAddproduct,handleRemoveproduct,handlecartRemoveproduct}=useContext(Appcontext)
    const[load,setLoad]=useState(true)
    useEffect(()=>{
      setInterval(()=>{
        setLoad(!true)
      },1000)
    },[])
       
    const totalPrice = cart.reduce(
      (price, item) => price + item.quantity * item.price,
      0
    );

    const checkout=()=>{
      alert("order successful")
      window.location.href="/"
    }
    return (
    <>
    <Navbar/>
    <Subnavbar/>
    {load ? <Loading/> :
    <div>

       {cart.length>0 ?  
       <div className='cart_container'>

<div className='left_cart'>
    {cart.map((e)=>(


        <div>
          
          <div className='left__div'>
<div className='left_cart_image_div'>
<NavLink to={`/detail/${e.id}`}>
    <img src={e.Image} alt="" /></NavLink>
    <div className='cart_button_add'>
        <button onClick={()=>handleRemoveproduct(e)}>-</button>
       {e.quantity}
        <button onClick={()=>handleAddproduct(e)}>+</button>
    </div>
</div>
</div>

   <div className='left_detail_div'>
    <h3>{e.brand}</h3>
   <h3>{e.name} ({e.color})</h3>
   <h2>₹{e.price}</h2>
   <p style={{textDecoration:"line-through",color:"grey"}}>₹{e.cutprice}</p>
   <p style={{color:"green",fontWeight:500}}>{e.offer}%off</p>
  
   </div>
<div className='left_last_div'>

  <button onClick={()=>handlecartRemoveproduct(e)}>
    Remove
  </button>
</div>
<div>



          </div>
          
            
            </div>
        ))}

</div>

<div className='right_cart'>
  <div className="ordersummery">
              <div className="ckeckbuton">
                <button onClick={()=>checkout()}>CHECK0UT </button>
              </div>
              <div className="summerydetail">
                <h1>PRICE DETAILS</h1>
                <div>
                  <p>{cart.length} ITEMS</p>
                  <p> ₹{totalPrice}</p>
                </div>
                <div>
                  <p>DELIVERY</p>
                  <p style={{color:"green"}}>FREE</p>
                </div>
                <div>
                  <p>TOATAL: </p>
                  <p>₹{totalPrice}</p>
                </div>
              </div>
            </div>
</div>

       </div>:
       <div className='empty_cart_div'>
             <h1>Cart is Empty!</h1>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png" alt="" />
 
       </div>

       }
        </div>}
       
        <Footer/>
    </>
  )
}
 