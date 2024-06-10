import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
   <>
      <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white '> 
          <div className='my-12 flex flex-col md:flex-row gap-10   '>

                {/* footer logo */}
            <div className='md:w-1/2 space-y-8'>    
                  <div className='logo space-x-3'>
                    <a href="/"><img src="./images/logo.png" alt="" /></a>
                  </div>

                  <p className='md:w-1/2'>A simple paragraph is compromised of three major components. The first sentense, which is often a declerative sentence, is called the topic sentence.</p>
                  
                  <div>
                      <input type="email" placeholder='Your email' name='email' id='email' 
                      className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                      <input type="submit" value="subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer 
                      hover:bg-white  hover:text-primary duration-300 transition-all'/>
                  </div>
            </div>

                  {/* footer navigation */}


                  <div className='md:w-1/2  flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-4 mt-5'>
                      <h4 className='text-xl'>Plateform</h4>
                      <ul className='space-y-3'>
                        <a href="/"  className='block hover:text-gray-300'>OVerview</a>
                        <a  href="/" className='block hover:text-gray-300'>Features</a>
                        <a href="/"  className='block hover:text-gray-300'>About</a>
                        <a href="/"  className='block hover:text-gray-300'>Pricing</a>
                      </ul>
                    </div>

                    <div className='space-y-4 mt-5'>
                      <h4 className='text-xl'>Help</h4>
                      <ul className='space-y-3'>
                        <a href="/"  className='block hover:text-gray-300'>How does it works?</a>
                        <a  href="/" className='block hover:text-gray-300'>Where to ask questions?</a>
                        <a href="/"  className='block hover:text-gray-300'>How to play?</a>
                        <a href="/"  className='block hover:text-gray-300'>What is needed for this?</a>
                      </ul>
                    </div>


                    <div className='space-y-4 mt-5'>
                      <h4 className='text-xl'>Contacts</h4>
                      <ul className='space-y-3'>
                        <a href="/"  className='block hover:text-gray-300'>0312-964856</a>
                        <a  href="/" className='block hover:text-gray-300'>123 Xyz</a>
                        <a href="/"  className='block hover:text-gray-300'>Karachi</a>
                        <a href="/"  className='block hover:text-gray-300'>Pakistan</a>
                      </ul>
                    </div>
                  </div>
    
             
          </div>
                  <hr />
                  <div className='mt-5 flex md:flex-row flex-wrap gap-10  justify-between  text-2xl'>
                         <p className='text-white'>Design by Abdul Rafay</p>
                         <div className='flex flex-row gap-5'>
                            <FaFacebookSquare  className='footerIcon' />
                            <FaSquareInstagram className='footerIcon' />
                            <FaSquareXTwitter className='footerIcon' />
                            <FaLinkedin  className='footerIcon'/>
                         </div>
                  </div>

      </div>
   </>
  )
}

export default Footer