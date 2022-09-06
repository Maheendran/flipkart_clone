
import { useState } from 'react';
import { Routing } from './Allrouting/Routing';
import './App.css';
import { Appcontext } from './AppContext';

function App() {

const[cart,setCart]=useState([])


// ///////////////////////////////////////////////////
const[wishlist,setWishlist]=useState([])
const[addtowishlist,setAddtowishlist]=useState(true)
const handleWishlist=(product)=>{
const whishlistExist=wishlist.find((items)=>items.id===product.id)
if(whishlistExist){
  if(whishlistExist.quantity==1){
    setWishlist(wishlist.filter((items)=>items.id !== product.id));
    setAddtowishlist(false)
   } 
}
else{
setWishlist([...wishlist,{...product,quantity:1}])
setAddtowishlist(!false)

}

}



// ?///////////////????

const cartlength=cart.length

const handleAddproduct = (product) => {
   const productExist = cart.find((items)=> items.id === product.id);
   if(productExist){
     setCart(cart.map((items)=>items.id === product.id ?
     {...productExist,quantity : productExist.quantity + 1}:items))
   }
   else{
     setCart([...cart,{...product,quantity:1}])
   }
}
const handleRemoveproduct = (product)=>{
  const productExist = cart.find((items)=> items.id === product.id);
  if(productExist.quantity === 1){
    setCart(cart.filter((items)=>items.id !== product.id));
  }
  else{
    setCart(
      cart.map((items)=>items.id === product.id ?
      {...productExist,quantity : productExist.quantity - 1}:items))
  }
}
const handlecartRemoveproduct = (product)=>{
  const productExist = cart.find((items)=> items.id === product.id);
  if(productExist.quantity ){
    setCart(cart.filter((items)=>items.id !== product.id));
  }
  else{
    setCart(
      cart.map((items)=>items.id === product.id ?
      {...productExist,quantity : productExist.quantity - 1}:items))
  }
}
////////////////////////////////


  return (
    <>
    <Appcontext.Provider value={{handleAddproduct,
      handleRemoveproduct,
      handlecartRemoveproduct,
      cartlength,
      cart,
      handleWishlist,
      wishlist,
      addtowishlist
     }}>
    <Routing/>
    </Appcontext.Provider>
     
    </>
  );
}

export default App;
