import React from 'react'
import {motion} from "framer-motion"

 const Banner = (props) => {
  return (
   <>
   <motion.div       initial={{x:-500 , opacity:0}}
                        animate={{x:0 , opacity:1}}
                        transition={{
                        delay:0.4,
                        x:{type: 'spring', stiffness:60}, 
                        opacity: {duration:1},
                        ease: "easeIn",
                        duration:1


                    }}
    
   
   className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
                    <div className="flex flex-col md:flex-row-reverse  justify-between items-center gap-10 ">

                        {/* banner Image */}
                        <div>
                            <img src={props.bannerImg } alt="" className="lg:h-[386px]"/>
                        </div>

                           {/* banner content */}
                           <div className="md:w-3/5">
                            <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">{props.heading}</h2>
                            <p className="text-white text-2xl mb-8">{props.subheading}</p>
                            <div className="space-x-5 space-y-4">
                                <button className="btn-primary">{props.btn1}</button>
                                <button className="btn-primary">{props.btn2}</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
   </>
  )
}

export default Banner
