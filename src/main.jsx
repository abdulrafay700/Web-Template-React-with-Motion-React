import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Home from './Home.jsx';
import About from "./About";
import Pricing from "./Pricing";
import Feature  from "./Feature.jsx";
import featureImage from "../src/assets/images/featureImage.png";
import NewsLatter from './NewsLatter.jsx';
import Footer from './components/Footer.jsx';
import "./Aos.jsx"

// import Pricing from "./Pricing.jsx";
import {BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
   {/* <BrowserRouter> */}
    {/* beacause header support navlink and its called in Brower Router */}
            {/* <Header/> 

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/feature" element={<Feature/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/pricing" element={<Pricing/>}></Route>
            </Routes>
    
        </BrowserRouter>  */}




        {/* ======without router navbar */}
        <BrowserRouter>
           <Header/>
        </BrowserRouter>

        <Home />
        <Feature featureImgCall={featureImage} />
        <About/>
        <Pricing/>
        <NewsLatter/>
        <Footer/>
      

    
  </React.StrictMode>
)


