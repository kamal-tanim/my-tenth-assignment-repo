import React, { useState } from 'react';
import { motion } from "motion/react";
import bg2 from "../assets/images/bg-2.png";
import ImageCarousel from '../Component/ImageCarousel';
import AnimatedNumber from '../Component/AnimatedNumber';


const Home = () => {
    const [hovered, setHovered] = useState(false)
    return (
        <div className=''>

            <div className='mx-auto p-6'>
                <ImageCarousel></ImageCarousel>
            </div>

            <div className='p-10'
                onMouseEnter={() => setHovered(true)}
            >
                <div
                    className="flex flex-col items-center justify-center h-[500px] rounded-4xl "
                    style={{
                        backgroundImage: `url(${bg2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* <div>
                        <span className='text-white border p-3 rounded-full font-bold text-xl'>Well come to Inventory AI </span>
                    </div> */}

                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity:1}}
                        transition={{ duration: 1 }}
                        className="border mt-10 border-white/30 bg-white/20  backdrop-blur-lg rounded-full p-10">
                        <h3 className="text-5xl text-center bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent font-bold">
                            AI Model Inventory Manager
                        </h3>
                    </motion.div>
                    <p className='text-center px-30 text-white mt-6 font-semibold'>The AI Model Inventory Manager lets you easily organize, track, and monitor 30+ AI models in one dashboard. View real-time performance, manage the latest models, control versions, and receive automated updates. A modern, efficient system designed to simplify AI workflows for teams and professionals.</p>
                    <div className='flex mt-10 items-center'>
                        <p className='text-white text-4xl text-center font-semibold '><span className='text-[60px] font-bold'><AnimatedNumber value={30} trigger={hovered} />+</span><br />Ai Models</p>
                        <span className='h-20 w-0.5 bg-white rounded-full mx-25'></span>
                        <p className='text-white text-4xl text-center font-semibold '><span className='text-[60px] font-bold'><AnimatedNumber value={40000} trigger={hovered} />+</span><br />Active Users</p>
                        <span className='h-20 w-0.5 bg-white rounded-full mx-25'></span>
                        <p className='text-white text-4xl text-center font-semibold '><span className='text-[60px] font-bold'><AnimatedNumber value={28} trigger={hovered} />+</span><br />Countries</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
