import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/Pngtreevector shopping bag icon_3782002.png"
import navprofile from "../../assets/nav-profile.svg"



const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt='' className='nav-logo'  />
      <div className='div'><span className='navbar-title'>Trend Trove</span>
      <p>admin panel</p></div>
      <img src={navprofile} alt='' className='nav-profile' />
    </div>
  )
}

export default Navbar
