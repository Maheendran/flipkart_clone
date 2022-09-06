import React, { useEffect, useState } from 'react'
import {  banner} from '../Data';
export const Banner = () => {
    var timer;
    const[slider,setSlider]=useState(0)
    useEffect(()=>{
      
        timer=setInterval(()=>{
          setSlider(slider+1)
          if(slider==4){
            setSlider(0)
          }
        },2000)
        return()=>{
          clearInterval(timer)}
      },[slider])
  return (
    <>
 <div className='head_slider'>
    <img src={banner[slider]?.image} id="slider_image" alt=""/>
    </div>
    </>
  )
}
