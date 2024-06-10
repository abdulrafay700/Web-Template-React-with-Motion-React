import React, { useState } from "react";


const Pricing = ()=>{
    const[isYearly, setYearly] = useState(false);

    const pakages = [
        {name: 'Start',
        monthlyPrice:19,
        yearlyPice :199,
        description:'A common  form of loreum reads: lorem ipsum'
        },

        {name: 'Advanced',
        monthlyPrice:39,
        yearlyPice :499,
        description:'A common  form of loreum reads: lorem ipsum'
        },

        {name: 'Premium',
        monthlyPrice:59,
        yearlyPice :899,
        description:'A common  form of loreum reads: lorem ipsum'
        },
    ]
    return(
        <>
            <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
                <div className="text-center">
                    <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Here all our plans</h2>
                    <p>A simple paragraph is compromised of three major components.</p>
                
                
                    {/* toggle pricing */}


                            {/* toggle button 1 */}
                        <div className="mt-16 hidden">
                            <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                                <span className="mr-8 text-2xl font-semibold">Monthly</span>
                                {/* toogle button */}
                                
                                <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                                    <div className={`absolute w-6 h-6 rounded-full transition duration-200 ease-in-out 
                                    ${isYearly ?  'bg-primary transform translate-x-full  card-position' : 'bg-gray-500'}`}></div>
                                </div>
                                <span className="ml-8 text-2xl font-semibold">Yearly</span>

                                <input type="checkbox" id="toggle" checked={isYearly} 
                                onChange={()=>{setYearly(!isYearly)}} />
                            </label>

                        </div>



                        {/* toggle button 2 */}


                        <div className="mt-16">
                                <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                                    <span className={`mr-8 text-2xl font-semibold ${isYearly ? 'text-gray-500' : 'text-primary'}`}>Monthly</span>
                                    {/* toggle button */}
                                        <div className=" w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                                            <div className={` w-6 h-6 rounded-full transition duration-200 ease-in-out 
                                            ${isYearly ?  'bg-primary transform translate-x-full card-position' : 'bg-gray-500 '}`}></div>
                                        </div>
                                    <span className={`ml-8 text-2xl font-semibold ${isYearly ? 'text-primary' : 'text-gray-500'}`}>Yearly</span>

                                    <input type="checkbox" id="toggle" checked={isYearly} onChange={() => setYearly(!isYearly)} className="hidden" />
                                </label>
                        </div>
                </div>


                          {/* pricing cards */}

                          <div className="card-grid">
                            {
                                pakages.map((pkge,index)=>{
                                        return (<div key={index} className="card-body ">
                                            <h3 className="card-Heading">{pkge.name}</h3>
                                            <p className="card-para">{pkge.description}</p>
                                            <p className="card-price" > $ {isYearly ? `${pkge.yearlyPice}` : `${pkge.monthlyPrice}`}
                                                <span >{isYearly ? "/Yearly" :"/Monthly"}</span>
                                            </p> 

                                            <ul>
                                                <li className="">Video Of lessons</li>
                                                <li className="">Daily Assignment</li>
                                                <li className="">Home Work Check</li>
                                                <li className="">Monthly Report</li>
                                                <li className="">Career Counsling</li>
                                            </ul>

                                        </div>)
                                })
                            }
                        </div>

            </div>

            
        </>
    )
}
export default Pricing