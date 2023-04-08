import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'
import './NavBar.css';

function MainNavbar() {
  const [isOpen, setOpen] = useState(false)

    const [click, setClick] = useState(false);


  const handleClick = () => {
     
     setOpen(!isOpen);
     setClick(!click);
  }

    return ( 
       <>

       <div className='navbar'>
       
       <NavLink className='nav-links' to='/shop' >فروشگاه</NavLink>
        <NavLink className='nav-links' to='/news' >اخبار</NavLink>
        <NavLink className='nav-links' to='/category' >دسته بندی</NavLink>
        <NavLink className='nav-links' to='/brands' >برندها</NavLink>
        <NavLink className='nav-links' to='/' >خانه</NavLink>

        {/* **************************Mobile*************************** */}
        <div className={click ? 'nav-menu' : 'nav-menu-closed'}>
        <NavLink onClick={()=> handleClick()} className='nav-links-mobile' to='/' >خانه</NavLink>
        <NavLink onClick={()=> handleClick()} className='nav-links-mobile' to='/brands' >برندها</NavLink>
        <NavLink onClick={()=> handleClick()} className='nav-links-mobile' to='/category' >دسته بندی</NavLink>
        <NavLink onClick={()=> handleClick()} className='nav-links-mobile' to='/shop' >فروشگاه</NavLink>
        <NavLink onClick={()=> handleClick()} className='nav-links-mobile' to='/news' >اخبار</NavLink>
        
        
        
        </div>
        <div className='hamberger'>
        <Hamburger 
         
         color="#4FD1C5"
         toggled={isOpen} 
         toggle={setOpen} 
         onToggle={toggled => {
          if (toggled) {
            handleClick()
          } else {
            handleClick()
          }
        }}
         />
        </div>
        
        
       </div>
        
            
            
       

        
       </>
     );
}

export default MainNavbar;