import React, { useEffect, useState,useContext } from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../Style/Detailpage.css'
import { singleproduct } from '../Url'
import { Subnavbar } from '../Components/Subnavbar'
import { AiTwotoneStar,AiFillThunderbolt } from 'react-icons/ai';
import { BsFillCartFill, BsHeartFill } from 'react-icons/bs';
import { Appcontext } from '../AppContext'
import { Loading } from '../Components/Loading'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../Firebase';
export const Detailpage = () => {
  const[user,loading,error]=useAuthState(auth)
  const {handleAddproduct,wishlist,handleWishlist}=useContext(Appcontext)
  const[setAddtowishlist]=useState(false)
    const params=useParams()
    const[details,setDetails]=useState([])
    const[load,setLoad]=useState(false)
    useEffect(()=>{

        axios.get(singleproduct+params.id).then((res)=>{
          setLoad(true)
            setDetails(res.data[0])
         
         })
        },[params.items])
        const popwindow=(e)=>{
          setAddtowishlist(e)   
        }
        useEffect(()=>{
          setInterval(()=>{
            setLoad(false)
          },1000)
        },[])
           
  return (
    <>
<Navbar/>
        <Subnavbar/>


{load ? <Loading/>:
        <div className='detail_container'>
            <div className='left_detail_container'>
            {user &&
<div>
 {wishlist.find((item)=>item.id===details.id) ? 
 <div >
  <div>
  <BsHeartFill onClick={()=>handleWishlist(details)}  id='like' size={"1.5rem"} />
  </div>
 </div>  : 
    <div>
   <BsHeartFill id='unlike' size={"1.4rem"}  onClick={()=>handleWishlist(details)} />
            </div>
    }
    </div>}

              <div className='left_image_div'>
              <img src={details.Image} alt="" />
              <img src={details.Image1} alt="" />
              </div>
              
              <div className='left_detail_button'>
                <button onClick={()=>handleAddproduct(details)}> <BsFillCartFill/>Add to Cart</button>
                <button> <AiFillThunderbolt/>Buy Now</button>
              </div>
            </div>
   
<div className='right_detail_container'>
  <h2 style={{color:"grey"}}>{details.brand}</h2>
        <p style={{fontSize:"1.2rem",fontWeight:500,lineHeight:"1rem"}}>{details.name} ({details.color})</p>
<p id='specialprice'>Special price</p>
<div className='right_price_div'>
<h2 style={{fontSize:"1.8rem",fontWeight:500}} >₹{details.price}</h2>
<p style={{fontSize:"1.3rem",fontWeight:500,textDecoration: "line-through",color:"grey"}} >₹{details.cutprice}</p>
<p style={{fontSize:"1.3rem",fontWeight:500,color:"green"}}>{details.offer}%off</p>
</div>
 <h3>Size: <span>{details.size}</span> </h3>

<div className='right_detail_rating'>
    <div className='rating_div'>
    <AiTwotoneStar id='star' size={"1.3rem"}/>
    <p>{details.rating}</p>

    </div>
    <p>1,510 ratings and 172 reviews</p>

<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" />
</div>
<div>
  <h3>Available offers</h3>
  <div className='avilable_offer'>
  <p>
    <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
 <span style={{fontWeight:500}}>Special Price</span> Get extra 6% off (price inclusive of cashback/coupon)<span style={{color:"blue",fontWeight:600}}>T&C</span>
  </p>

<p>
<img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /> 
 <span style={{fontWeight:500}}>Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card <span style={{color:"blue",fontWeight:600}}>T&C</span> </p>
<p>
<img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
<span style={{fontWeight:500}}>Partner Offer</span> Buy this product and Get Extra 10% Up to ₹500 off on Home & Kitchen Appliances<span style={{color:"blue",fontWeight:600}}>Know More</span></p>
<p>
<img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />
<span style={{fontWeight:500}}>Partner Offer</span> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500*<span style={{color:"blue",fontWeight:600}}>Know More</span></p>
  </div>
 
</div>
<div className='supercoin_div'>
  <img src="https://assets.mspimages.in/wp-content/uploads/2021/01/Flipkart-SuperCoin.png" alt="" />
  <h3>For every ₹100Spent, <br /> <br /> you earn 2superCoins</h3>
</div>

</div>
           
       
           </div>}
          
           <Footer/>

    </>
  )
}
