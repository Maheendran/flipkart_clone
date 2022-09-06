import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Cartpage } from '../Pages/Cartpage'
import { Detailpage } from '../Pages/Detailpage'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Searchpage } from '../Pages/Searchpage'
import { Showproducts } from '../Pages/Showproducts'
import { Wishlistpage } from '../Pages/Wishlistpage'
export const Routing = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:items' element={<Showproducts/>}/>
        <Route path='/detail/:id' element={<Detailpage/>}/>
        <Route path='/search/:name' element={<Searchpage/>}/>
        <Route path='/cart' element={<Cartpage/>}/>
        <Route path='/wishlist' element={<Wishlistpage/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}
