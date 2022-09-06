import React, { useEffect, useState } from 'react'
import { Navbar } from '../Components/Navbar'
import { Subnavbar } from '../Components/Subnavbar'
import {useParams} from 'react-router-dom'
import { AiOutlineHeart, AiTwotoneStar } from 'react-icons/ai';
import {  BsHeartFill} from 'react-icons/bs';

import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { commonlink } from '../Url'
import '../Style/Products.css'
import { Footer } from '../Components/Footer';
import { useContext } from 'react';
import { Appcontext } from '../AppContext';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../Firebase';
import { Loading } from '../Components/Loading';
export const Showproducts = () => {
  const[user,loading,error]=useAuthState(auth)
const {handleWishlist,wishlist}=useContext(Appcontext)

    const param=useParams()
    const[products,setProducts]=useState([])
    const[allproduct,setAllproduct]=useState([])
  const[load,setLoad]=useState(false)
 
    useEffect(()=>{
      setLoad(true)
      axios.get(commonlink).then((res)=>{
        const Update=res.data.filter((item)=>{
          return  item.categorey===param.items;
         
          })
          setProducts(Update)
          setAllproduct(Update)
          SetSelectgender(Update)
        })
      },[param.items,setProducts])
      
     

      const handleSort=(nameBy, order)=> {
        if (nameBy === "name" && order === 1)
        setProducts((prev) => [...prev.sort((a, b) => (a.name > b.name ? 1 : -1))]);
        else if (nameBy === "name" && order === -1)
        setProducts((prev) => [...prev.sort((a, b) => (a.name > b.name ? -1 : 1))]);
        else if (nameBy === "price" && order === 1)
        setProducts((prev) => [...prev.sort((a, b) => (a.price > b.price ? 1 : -1))]);
        else if (nameBy === "price" && order === -1)
        setProducts((prev) => [...prev.sort((a, b) => (a.price > b.price ? -1 : 1))]);
      }
useEffect(()=>{
  setInterval(()=>{
    setLoad(false)

  },1000)
},[])
  //  //////////filtering/////////////////////
const[selectgender,SetSelectgender]=useState([])
  const handlegender=(e)=>{
    const gender= allproduct.filter((item)=>{
     return item.gender===e })
      setProducts(gender)
      SetSelectgender(gender)
   }

  const handlefilter=(e)=>{
    const color= selectgender.filter((item)=>{
     return item.color===e || item.rating>e || item.offer>e })
     
      setProducts(color)
   }

    ///////////////////////////////
    
  return (
    <>
      <Navbar/>
      <Subnavbar/>
    
{/* ....................................... */}

{load ?
<Loading/>:
<div>
{param.items==="fashions" ?

<div>

<div className='small_banner'>
  <img src="https://i.pinimg.com/originals/a0/04/7c/a0047c6fbe7355ce655176da3b4cba5e.jpg" alt="" />
</div>


<div className='products_container'>
 
  <div className='left_product_filter'>
<h2>Filters</h2>
<div className='filter_inner_div'>
  GENDER
  <div className='filter_hover_div'>
<p onClick={()=>handlegender("men")}>Men</p>
<p  onClick={()=>handlegender("women")}>women</p>
  </div>
</div>
<div className='filter_inner_div'>
  DISCOUNT
  <div className='filter_hover_div'>
<p onClick={()=>handlefilter(20)}>20%off or more</p>
<p onClick={()=>handlefilter(30)}>30%off or more</p>
<p onClick={()=>handlefilter(40)}>40%off or more</p>
<p onClick={()=>handlefilter(45)}>45%off or more</p>
  </div>
</div>
<div className='filter_inner_div'>
  COLOR
  <div className='filter_hover_div'>
<p onClick={()=>handlefilter("red")}>red</p>
<p onClick={()=>handlefilter("white")}>white</p>
<p onClick={()=>handlefilter("grey")}>grey</p>
<p onClick={()=>handlefilter("black")}>black</p>
  </div>
</div>
<div className='filter_inner_div'>
CUSTOMER RATINGS
  <div className='filter_hover_div'>
  <p onClick={()=>handlefilter(4)}>4* & above</p>
<p onClick={()=>handlefilter(3)}>3* & above</p>
<p onClick={()=>handlefilter(2)}>2* & above</p>
  </div>
</div>

{/* //////////////////// */}
  </div>

 <div>

 <div className='sort_div'> 
<h1>Sort</h1>
<button onClick={() => handleSort("name", 1)}>Popularity</button>
<button onClick={() => handleSort("price", 1)}>Price -- Low to High</button>
<button onClick={() => handleSort("price", -1)}>Price -- High to Low</button>
<button onClick={() => handleSort("name", -1)}>Newest First</button>
</div>

  <div className='right_product_list'>
 
 {products.map((e)=>(
  <div key={e.id}>
    {user &&
<div>
 {wishlist.find((item)=>item.id===e.id) ? 
 <div >
  <div>
  <BsHeartFill onClick={()=>handleWishlist(e)}  id='like' size={"1.5rem"} />
  </div>
 </div>  : 
    <div>
   <BsHeartFill id='unlike' size={"1.4rem"}  onClick={()=>handleWishlist(e)} />
            </div>
    }
    </div>}
    <NavLink to={`/detail/${e.id}`}>
    <div className='right_product_image'>
    <img src={e.Image} alt="" /> 
   <div className='right_product_image_hover'>
    <img src={e.Image1} alt="" />
   </div>
    </div>
<div className='right_product_details'key={e.id}>
  <div className='right_product_details_sub1'>
  <p>{e.name}</p> <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" />
  </div>
<div className='right_product_details_sub2' >
<h3>₹{e.price}</h3>
<p style={{textDecoration: "line-through",color:"grey"}}>₹{e.cutprice}</p>
<p style={{color:"green",fontWeight:600}}>{e.offer}%off</p>
</div>
<p>{e.company}</p>
<div className='right_size_div'>
<h4><span style={{color:"grey"}}> Size:</span> {e.size}</h4>
</div>
</div>
</NavLink>
</div>
 ))}
   
  </div>
  </div>
</div>
</div>

 :

 <div>

{param.items==="electronics" ?
<div className='small_banner'>
  <img src="https://th.bing.com/th/id/R.c3f284a3ba6b7bb746a8405162cca5ac?rik=G3l%2bPYmWkSCJsQ&riu=http%3a%2f%2fcdn.shopclues.com%2fimages%2fbanners%2foffers%2fpd%2fvoltage-sale2%2fhigh_voltage_banner.jpg&ehk=JdP0RefaD94AGnYwzoSfG%2ftYdKZerMszvvQgllL54rA%3d&risl=&pid=ImgRaw&r=0" alt="" />
</div>:
<div className='small_banner'>
  <img src="https://colfaxfurniture.com/wp-content/uploads/2020/07/Bedroom-banner-1.png" alt="" />
</div>}


<div className='electronic_product_container'>
{/* .............................. */}
<div className='left_electronic_div'>
<h2>Filters</h2>
<div className='filter_inner_div'>
  DISCOUNT
  <div className='filter_hover_div'>
<p onClick={()=>handlefilter(20)}>20%off or more</p>
<p onClick={()=>handlefilter(30)}>30%off or more</p>
<p onClick={()=>handlefilter(40)}>40%off or more</p>
<p onClick={()=>handlefilter(45)}>45%off or more</p>
  </div>
</div>
<div className='filter_inner_div'>
  COLOR
  <div className='filter_hover_div'>
  {param.items==="homeappliance" ?
  <p onClick={()=>handlefilter("wooden")}>wooden</p>:
<p onClick={()=>handlefilter("blue")}>blue</p>}
<p onClick={()=>handlefilter("black")}>black</p>
  </div>
</div>
<div className='filter_inner_div'>
CUSTOMER RATINGS
  <div className='filter_hover_div'>
  <p onClick={()=>handlefilter(4)}>4* & above</p>
<p onClick={()=>handlefilter(3)}>3* & above</p>
<p onClick={()=>handlefilter(2)}>2* & above</p>
  </div>
</div>
  </div>
{/* .................. */}
<div>
<div className='sort_div'> 
<h1>Sort</h1>
<button onClick={() => handleSort("name", 1)}>Popularity</button>
<button onClick={() => handleSort("price", 1)}>Price -- Low to High</button>
<button onClick={() => handleSort("price", -1)}>Price -- High to Low</button>
<button onClick={() => handleSort("name", -1)}>Newest First</button>
</div>


<div  className='right_electronic_div'>
  {
    products.map((e)=>(
   <div className='electrotic_outer_div'>
      <NavLink to={`/detail/${e.id}`}>
  <div className='single_prod_div'> 

  <div className='single_img_div'>
  <img src={e.Image} alt="" />
  </div>
  
  <div className='single_name_div'>
    <h3>{e.name}</h3>
    <div className='rating_div_review_section'>
    <div className='rating_div'>
      
      <AiTwotoneStar id='star' size={"1.3rem"}/>
      <p>{e.rating}</p>
      </div>
  <div className='rating_review'>
    <p>2,92,011 Rating & 28,276 Reviews</p>
  </div>
    </div>
    <div className='single_name_discription'>
<p>{e.discription}</p>
    </div>
  
  </div>
  <div className='single_price_div'>
    <div className='single_price_div_first'>
    <h2>₹{e.price}</h2>
  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" /> <br />
  </div>
  <p style={{fontWeight:600}}>Free Delivery</p>
 <div className='single_price_div_second'>
 <p style={{textDecoration:"Line-through",marginRight:"1rem",fontWeight:500,color:"grey"}}>₹{e.cutprice}</p>
 <p style={{fontWeight:600,color:"green"}}>{e.offer}%off</p>
 </div>
 <p style={{color:"green",fontWeight:600}}>Bank Offer</p>
    </div>

    
  </div>
  </NavLink>
  <div className='heart_wishlist_electronic'>
  {user &&
<div>
 {wishlist.find((item)=>item.id===e.id) ? 
 <div >
  <div>
  <BsHeartFill onClick={()=>handleWishlist(e)}  id='like' size={"1.5rem"} />
  </div>
 </div>  : 
    <div>
   <BsHeartFill id='unlike' size={"1.4rem"}  onClick={()=>handleWishlist(e)} />
            </div>
    }
    </div>}
  </div>
  </div>
 
  ))
  
}

</div>

</div>
</div>
</div>
}
</div>

}

{/* ....................................... */}
<Footer/>
    </>
  )
}
