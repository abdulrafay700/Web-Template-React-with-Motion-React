import React from "react";
import AboutImg  from  "./assets/images/reading.png";
import AboutImg2  from  "./assets/images/about2.png";

const About = ()=>{
    return(
        <>
            <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">

                
                {/* first section */}

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    {/* about Image */}
                    <div className="md:w-1/2">
                        <img src={AboutImg} alt="" />
                    </div>

                    {/* about content */}
                    <div className="md:w-2/5">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                            We have been improving our product  <span className="text-secondary">for many years.</span> </h2>
                        <p className="text-tartiary text-lg mb-7">A good example of paragraph contains a topic conclusion. There are many different kind
                            of animals that lives in china.
                        </p>
                        <button className="btn-primary">Get Started</button>
                    </div>
                </div>

                {/* second section */}
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 ">
        
                         {/* about Image */}
                         <div className="md:w-1/2">
                                <img src={AboutImg2} alt="" />
                         </div>

                    {/* about content */}
                    <div className="md:w-2/5">
                        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                            We have been improving our product  <span className="text-secondary">for many years.</span> </h2>
                        <p className="text-tartiary text-lg mb-7">A good example of paragraph contains a topic conclusion. There are many different kind
                            of animals that lives in china.
                        </p>
                        <button className="btn-primary">Get Started</button>
                    </div>

                      
                </div>


                    

            </div>
        </>
    )
}

export default About;