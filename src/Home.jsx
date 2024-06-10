import React, { useEffect } from "react";
import Banner from "./shared/Banner";
import PostImage from "../src/assets/images/post.png";
import AOS from 'aos';
// import 'aos/dist/aos.css';
import {motion} from "framer-motion"

const Home = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init();
        // You can also customize AOS settings here if needed
             AOS.init({ duration: 2000 });
    }, []);


    // data-aos="zoom-in"
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-40" id="home"  initial={{x:-100 , opacity:0}}
        whileInview={{x:-0, opacity:1}} >
            {/* Ensure that the Banner component receives correct props */}
            <Banner 
                bannerImg={PostImage} 
                heading="Develop your skills without diligence" 
                subheading="A good example of a paragraph contains a topic sentence, details, and a conclusion. There are many different kinds of animals that live in China."
                btn1="Get Started"
                btn2="Discount"
            />

                    <motion.h1
                    
                        initial={{x:-100 , opacity:0}}
                        animate={{x:0 , opacity:1}}
                        transition={{
                        delay:0.4,
                        x:{type: 'spring', stiffness:60}, 
                        opacity: {duration:1},
                        ease: "easeIn",
                        duration:1


                    }}
                    ></motion.h1>
        </div>

        
    );
}

export default Home;


