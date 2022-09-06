import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Subnavbar } from '../Components/Subnavbar'
import { useContext } from 'react'
import { Appcontext } from '../AppContext'
import { BsHeartFill } from 'react-icons/bs'
import '../Style/Cart.css'
import { Footer } from '../Components/Footer'
export const Wishlistpage = () => {
  const {wishlist,handleWishlist,handleAddproduct}=useContext(Appcontext)
  return (
    <>
<Navbar/>
<Subnavbar/>
{wishlist.length>0 ?
<div className='cart_container'>

<div className='left_cart'>
    {wishlist.map((e)=>(
        <div>
          
          <div className='left__div'>
          {wishlist.find((item)=>item.id===e.id) ? 
 <div >
  <div>
  <BsHeartFill onClick={()=>handleWishlist(e)}  id='like' size={"1.8rem"} />
  </div>
 </div>  : 
    <div>
   <BsHeartFill id='unlike' size={"1.8rem"}  onClick={()=>handleWishlist(e)} />
            </div>
    }
<div className='left_cart_image_div'>

    <img src={e.Image} alt="" />

</div>
</div>
   <div className='left_detail_div'>
    <h3>{e.brand}</h3>
   <h3>{e.name} ({e.color})</h3>
   <h2>₹{e.price}</h2>
   <p style={{textDecoration:"line-through",color:"grey"}}>₹{e.cutprice}</p>
   <p style={{color:"green",fontWeight:500}}>{e.offer}%off</p>
  
   </div>
 <button className='wishlist_add_button' onClick={()=>handleAddproduct(e)}>add to cart</button>
          <div>

          </div>
          
            
            </div>
        ))}

</div>
       </div>:  <div className='empty_cart_div'>
             <h1>Wishlist is Empty!</h1>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png" alt="" />
 
       </div>}
       <Footer/>
    </>
  )
}
