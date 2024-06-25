import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'


import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/Shopcontext'
import drop_downicon from '../Assets/nav_dropdown.png'

{/* <Route path='/' element={<Shop/>} /> */}
//<Route path='/mens' element={<ShopCategory banner={mens_banner} category="men"/>}  /> 
  //<Route path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>}  /> 
  // <Route path='/kids' element={<ShopCategory banner={kids_banner}  category="kid"/>}

const Navbar = () => {

  const [menu,setMenu]=useState("shop") //used to move red underline among the navbar
  const {getTotalCartItems}=useContext(ShopContext)
  const menuRef=useRef() //we use menuRef to toggle the classsname in ul tag


  //done for media queries
  const dropdown_toggle=(e)=>{ //here e is the image event
    //this is executed onClick of the img
    // (e): The function takes a single parameter e, which is the event object passed by the event listener when the image is clicked.
    //  This object contains details about the event, including the target element that was clicked. 
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }
  return (
    <div className='navbar'>

      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      {/* <img className='nav_dropdown' onClick={dropdown_toggle} src={drop_downicon} alt="" /> */}
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop </Link>{menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Mens </Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Womens </Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      {/* {menu==="shop"?<hr/>:<></>} for red Hle line */}
      <div className="nav-login-cart">
      
      {/* if user has logged in already, in localstorage there will be auth-toekn present for him so we get that key and 
      remove it form localstorage to logout */}
      {/* if auth-token is presesnt logout button will be displayed
      if not present login button will be displayed */}


{/* to   login and logout the user */}
      {localStorage.getItem('auth-token') //getting token from broser localstorage
      ?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace("/")}}>Logout</button>
      :<Link to='/login'><button>Login</button></Link>} 
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        {/* from shopContext getTotalCartItems() is called */}
     </div>
      
    </div>
  )
}

export default Navbar


// menuRef.current: Accesses the current DOM node referenced by menuRef. useRef creates a mutable object with a current property that holds the DOM element.
// .classList.toggle('nav-menu-visible'): Uses the classList API to toggle the class nav-menu-visible on the referenced DOM node. If the class is already present, 
// it removes it; if it's not present, it adds it.
//  This toggles the visibility of the dropdown menu.


// e.target: Refers to the target element of the event, which in this case is the image that was clicked.
// .classList.toggle('open'): Uses the classList API to toggle the class open on the target element. 
// If the class is already present, it removes it; if it's not present, it adds it. This can be used, for example, 
// to apply a different style to the image when the menu is open (like rotating the icon).