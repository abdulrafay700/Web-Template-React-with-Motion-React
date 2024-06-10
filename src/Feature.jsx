import React  from "react";
import {motion} from "framer-motion"



const Feature = (propsfeatureImage)=>{


    return(
        <>
             {/* for features */}

             <motion.div initial={{y:-100 , opacity:0}}
                        animate={{y:0 , opacity:1}}
                        transition={{
                        delay:0.6,
                        x:{type: 'spring', stiffness:60}, 
                        opacity: {duration:1},
                        ease: "easeIn",
                        duration:1


                    }}
             
             className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto"  id="feature" >
                <div  className="flex flex-col lg:flex-row justify-between items-start gap-10" >
                    <div className="lg:w-1/4">
                        <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">why we are batter thean others</h3>
                        <p className="text-base text-tartiary">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                
                    {/* features card */}

                    <div className="w-full lg:w-3/4">
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">

                            {/* card 1 */}
                            <div className="card-feature">
                                <div>
                                        <img src={propsfeatureImage.featureImgCall} alt="" />
                                        <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5 ">convientient study schedule</h5>
                                </div>
                            </div>

                             {/* card 2 */}
                            <div className="card-feature md: mt-10">
                                <div>
                                        <img src={propsfeatureImage.featureImgCall} alt="" />
                                        <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5 ">convientient study schedule</h5>
                                </div>
                            </div>

                                {/* card 3 */}
                                <div className="card-feature">
                                        <div>
                                                <img src={propsfeatureImage.featureImgCall} alt="" />
                                                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5 ">convientient study schedule</h5>
                                        </div>
                                </div>

                        </div>
                    </div>


                
                </div>
            </motion.div>
        </>
    )
}
export default Feature