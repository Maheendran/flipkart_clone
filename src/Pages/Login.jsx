import React, { useState } from 'react'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import '../Style/Login.css'
import { Navbar } from '../Components/Navbar'
export const Login = () => {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[togglechange,setTogglechange]=useState(false)
const navigate=useNavigate()

const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then((auth) =>
      navigate("/")
    );
  };

  const sigin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => navigate("/"))
      .catch((error) => console.error(error));
  };
  return (
    <>
<Navbar/>
<div className='dummy_div'></div>

<div className='Login_container'>
    <div className='left_login_div'>
 {togglechange ? <h2>Register</h2> :<h2>Login</h2>} 
<h3> Get access to your Orders, Wishlist and Recommendations</h3>
<img src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flipkart-1024.png" alt="" />
    </div>
{togglechange ? 
    <div className='right_login_div'>
        <label id='emaillabel'><h2>Enter email</h2></label>
    <input type="email" placeholder='email'onChange={(e)=>setEmail(e.target.value)} />
    <label id='emaillabel'><h2>Enter Password</h2></label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <button className='signuplogin_btn' onClick={() => signUp()} >sign Up regitser page</button>
        <button className='togglebutton' onClick={()=>setTogglechange(false)} >Existing User?Log in</button>
    </div>
    :
    <div className='right_login_div'>
        <label id='emaillabel'><h2>Enter email</h2></label>
    <input type="email" placeholder='email'onChange={(e)=>setEmail(e.target.value)} />
    <label id='emaillabel'><h2>Enter Password</h2></label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <button className='signuplogin_btn' onClick={()=>sigin()} >sign In</button>
        <button className='togglebutton' onClick={()=>setTogglechange(!false)} >New to Flipkart? Create an account</button>
    </div> 
    
    }

</div>
       

      
    </>
  )
}
