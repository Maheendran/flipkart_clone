import React, { useEffect, useState } from 'react'
import { Navbar } from '../Components/Navbar'
import {commonlink} from '../Url'
import { Subnavbar } from '../Components/Subnavbar'
import "../Style/Home.css"
import { Slider } from '../Components/Slider';
import { Footer } from '../Components/Footer';
import axios from 'axios';
import { Banner } from '../Components/Banner'
export const Home = () => {
   
    const[fashionslider,setFashionslider]=useState([])
    const[dealsofday,setDealsofday]=useState([])
    const[mendealsofday,setMendealsofday]=useState([])
    
   
    // ///////////////////////////////////////
    useEffect(()=>{
      axios.get(commonlink).then((res)=>
      setDealsofday(res.data))

const filtering= dealsofday.filter((item)=> item.gender== "women")
 setFashionslider(filtering)

const cloth= dealsofday.filter((item)=> item.type== "shirt")
return setMendealsofday(cloth)


    },[dealsofday])

   
  return (
    <>
      <Navbar/>
      <Subnavbar/>
       {/* head slider start */}
   <Banner/>
{/* ...............slider......... */}
<div className='electro_slide_div'>
      <h2 id='heading'>Womens Trend</h2>
   <Slider data={fashionslider}/>
    </div>
{/* ////////////small banner///////////// */}
<div className='small_banner'>
  <img src="https://i.pinimg.com/originals/74/e5/62/74e562795e6ac1e3fee61307e09c3040.jpg" alt="" />
</div>

     {/* ////////deals of the day */}
     <div className='deals_of_day_div'>
      <h2 id='heading'>Deals of the day</h2>
    <Slider data={mendealsofday} />
    </div>
    {/* ............................. */}
    <div className='small_banner'>
  <img src="https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg" alt="" />
</div>

  {/* ///////////////////////////// */}
    <div className='home_bottom_descrp'> 
<h3>Flipkart: The One-stop Shopping Destination</h3>
<p>
E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.

What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from Flipkart when there are multiple options available to you, well, the below will answer your question.
</p>
<h3>Flipkart Plus</h3>
<p>A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!
What's more, you can even use the Flipkart supercoins for a number of exciting services, like:
An annual Zomato Gold membership
An annual Hotstar Premium membership
6 months Gaana plus subscription
Rupees 550 instant discount on flights on ixigo
Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.</p>
<h3>No Cost EMI</h3>
<p>
In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.
</p>
<h3>EMI on Debit Cards</h3>
<p>
Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.</p>
</div>
<Footer/>
    </>
  )
}
