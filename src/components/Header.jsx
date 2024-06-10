import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from "react-scroll"
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";








const Header = () => {
  const [isMenuOPen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOPen)
    console.log(isMenuOPen)  
  }

  const navItems=[
    {link:"Home",path:"home"},
    {link:"Feature",path:"feature"},
    {link:"About",path:"about"},
    {link:"Pricing",path:"pricing"},
  ]
  return (
    <>
        <header className='bg-white md:px-14 border-b p-4 max-w-screen-2xl container mx-auto flex  justify-between text-primary fixed top-0 left-0 right-0 z-10'>
        <nav className=' flex space-x-14 items-center'>
            <NavLink to="/">
                <div className='logo'>
                <img src="./images/logo.png" alt="" />
                </div>
            </NavLink>
    

                {/* second method  show navaigation items using map */}
                  <ul className='md:flex  space-x-12 hidden' >
                      {navItems.map((item, index) => (
                          <Link spy={true} smooth={true} offset={-100}  key={index} className='block hover:text-gray-300 cursor-pointer'
                              to={item.path}> {item.link}</Link>
                          
                      ))}
                  </ul>
        
        </nav>
        

              {/* button and signup */}
              <div className='space-x-12 hidden md:flex items-center '>
                      <a href="/" className='hidden lg:flex items-center hover:text-secondary' ><GrLanguage className='mr-2' /><span>Language</span></a>
                      <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white
                      hover:bg-indigo-600'>Sign up</button>
                </div>
          
                {/* menu button display on  mobile screen  */}
               
                <div className='md:hidden flex items-center '>
                  <button onClick={()=>toggleMenu()} className='text-white focus:outline-none
                  focus:text-gray-300'>{
                      isMenuOPen?(<FaXmark className='w-6 h-6 text-primary'/>):(<RxHamburgerMenu className='w-6 h-6 text-primary'
                      />)
                  }</button>
                </div>
        </header>

                  {/* for mobile ul menu */}

        <div className={`lg:hidden space-y-4  px-4 pb-5 pt-40 bg-secondary ${isMenuOPen ?"block fixed top-0 right-0 left-0":"hidden"}`} >
           {navItems.map((item, index) => (
                <Link className="block hover:text-gray-300 cursor-pointer"  key={index} to={item.path}>{item.link}</Link>
                          
            ))
                      
            }
        </div>



        
    </>

  
  )
}

export default Header