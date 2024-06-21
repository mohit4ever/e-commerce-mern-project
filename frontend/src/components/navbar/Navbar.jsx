import React, { useContext, useState } from 'react'
import "./Nvbar.css"
import logo from "../assets/Pngtreevector shopping bag icon_3782002.png"
import cart_icon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [menu, setmenu] = useState("shop")

  const { getTotalCartItems } = useContext(ShopContext)

  return (
    <>
      <div className='navbar'>
        <div className='nav_logo'>
          <img className='nav-logo' src={logo} alt='' />
          <p className='nav-text'>TrendTrove</p>
         
  
          
        </div>
        <ul className='nav_menu'>
          <li onClick={() => { setmenu("shop") }}><Link style={{ textDecoration: "none" }} to="/">shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={() => { setmenu("mens") }}><Link style={{ textDecoration: "none" }} to="/mens">men</Link> {menu === "mens" ? <hr /> : <></>}</li>
          <li onClick={() => { setmenu("womens") }}><Link style={{ textDecoration: "none" }} to="/women">women</Link> {menu === "womens" ? <hr /> : <></>}</li>
          <li onClick={() => { setmenu("kids") }}><Link style={{ textDecoration: "none" }} to="/kids">kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
        </ul>
        <div className='nav_login_cart'>
          {localStorage.getItem("auth-token") ? <button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Logout</button>:<Link to="/login"><button>login</button></Link>}
          
          <Link to="/cart"><img src={cart_icon} /></Link>
          <div className='nav_cart_count'>{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
