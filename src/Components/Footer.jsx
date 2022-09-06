import React from 'react'
import '../Style/Footer.css'
import { BsFillBagFill } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdStars ,MdCardGiftcard} from "react-icons/md";
import '../Style/Footer.css'
export const Footer = () => {
  return (
    <>
 <div className="footer_main">

 
<div className="footer_container">
  <div className="left_footer_div">
    <div>
      <p>ABOUT</p>
      <ul>
        {" "}
        <li>Contact Us </li>
        <li>About Us </li>
        <li>Careers </li>
        <li>Flipkart Stories </li>
        <li>Press </li>
        <li>Flipkart Wholesale </li>
        <li>Corporate Information </li>
      </ul>
    </div>
    <div>
      <p>POLICY</p>
      <ul>
        {" "}
        <li> Return Policy </li>
        <li>Terms Of Use </li>
        <li>Security </li>
        <li>Privacy</li>
        <li>Sitemap</li>
        <li>EPR Compliance</li>
      </ul>
    </div>
    <div>
      <p>HELP</p>
      <ul>
        {" "}
        <li>Payments </li>
        <li> Shipping </li>
        <li>Cancellation & Returns </li>
        <li>FAQ</li>
        <li>Report Infringement </li>
      </ul>
    </div>
    <div>
      <p>SOCIAL</p>
      <ul>
        {" "}
        <li>Facebook </li>
        <li> Twitter </li>
        <li>YouTube</li>
      </ul>
    </div>
  </div>
<div className="right_footer_div">
  <div>
    <p>Mail Us:</p>
    <p style={{color:"white",fontSize:"0.8rem"}}>
      Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
      Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
      Bengaluru, 560103, Karnataka, India
    </p>
  </div>

  <div>
      <p >Registered Office Address:</p>
      <p style={{color:"white",fontSize:"0.8rem"}}>
Flipkart Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India

CIN : U51109KA2012PTC066107

Telephone: 044-45614700</p>
  </div>
  </div>
</div>
<div className="footer_bottom">
 
      <p> <span><BsFillBagFill size={"1.5rem"} style={{color:"gold"}}/></span> Become a Seller</p>
      <p> <span><MdStars size={"1.5rem"} style={{color:"gold"}}/></span> Advertise</p>
      <p> <span><MdCardGiftcard size={"1.5rem"} style={{color:"gold"}}/></span> Gift Cards</p>
      <p> <span><AiFillQuestionCircle size={"1.5rem"} style={{color:"gold"}}/></span> Help Center</p>
      <p>© 2007-2022 Flipkart.com</p>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" />
 
</div>
</div>
    </>
  )
}
