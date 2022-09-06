import React from 'react'
import '../Style/Navbar.css'
import { BsSearch,BsFillCartFill } from 'react-icons/bs';
import { RiAccountCircleFill} from 'react-icons/ri';
import { TbTruckDelivery} from 'react-icons/tb';
import { BsHeartFill} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { Appcontext } from '../AppContext';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../Firebase';
import { FaCheckCircle } from 'react-icons/fa';
export const Navbar = () => {
  const[user,loading,error]=useAuthState(auth)
  const {cartlength,wishlist,addtowishlist}=useContext(Appcontext)
    const[inputvale,setInputvale]=useState("")
    const navigate=useNavigate()
    const logout=()=>{
      auth.signOut()
      navigate("/login")
      console.log("logo")
    }
  return (
    <>
<div className='Nav_container'>

  <div className='left_nav'>
    
 
    <Link to={"/"}>
    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
    </Link> 
     <input type="text" onChange={(e)=>setInputvale(e.target.value)}  placeholder="Search for products"/>

    {inputvale.length>0 && <Link to={`/search/${inputvale}`}>
    <BsSearch style={{marginLeft:"-1.5rem", fontSize:"1.2rem", color:"blue"}}/>
    </Link>} </div>

  <div  className='right_nav'>
    <div className='nav_login_div'>
   {user ?<button><p>{user.email}</p></button>:  <button>Login</button>}
    <div className='nav_login_hover_div'>
      <Link to={"/login"}>
        {user ? "":
<div className='nav_login_detail'>
  <p id='gap_btwn_word'>New customer?</p>  <p style={{color:"blue",fontWeight:600}}>Sign Up</p>
</div>}
</Link>
<div className='nav_login_detail'>
 <RiAccountCircleFill id='gap_btwn_word' style={{color:"#346fe2"}}/> <p>Profile</p>
</div>
<div className='nav_login_detail'>
 <TbTruckDelivery id='gap_btwn_word' style={{color:"#346fe2"}}/> <p>Orders</p>
</div>
<Link to={"/wishlist"}>
<div className='nav_login_detail'>
  <BsHeartFill id='gap_btwn_word' style={{color:"#346fe2"}}/>
  <p style={{marginRight:"1rem"}}>wishlist</p>
  ({wishlist.length})
</div>
</Link>
{user &&
<div className='nav_login_detail'>
  <button onClick={()=>logout()}>Log Out</button>
</div>}
<div>

</div>
    </div>
    </div>
 
<p>Become a Seller</p>
<p>More</p>
<Link to={"/cart"}>
<div className='nav_cart'>
  <BsFillCartFill/>Cart {cartlength>0 &&<p style={{color:"blue"}}>{cartlength}</p>}
</div></Link>
  </div>

    </div>
    </>
  )
}
