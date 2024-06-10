import React from 'react'
import Banner from "./shared/Banner";
import NewsImage from "../src/assets/images/undraw_Newlatter.png"

 function NewsLatter() {
  return (
    <>
         <div className='md:px-14 p-4 max-w-screen-2xl  mx-auto my-12'>
            <Banner

            bannerImg={NewsImage} 
            heading="Share  their discount code with friends" 
            subheading="A simple paragraph is compromised of three major components. The first sentense, which is often a declerative
            sentence, is called the topic sentence."
            btn1="I hava code"
            btn2=""
            
            ></Banner>
        </div>   
    </>
  )
}


export default NewsLatter