import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from '../Component/ImageCarousel';
import AnimatedNumber from '../Component/AnimatedNumber';
import card_img_1 from "../assets/images/card_img_1.png"
import card_img_2 from "../assets/images/card_img_2.png"
import card_img_3 from "../assets/images/card_img_3.png"
import card_img_4 from "../assets/images/card_img_4.png"
import card_img_5 from "../assets/images/card_img_5.png"
import LineGraph from '../Component/TinyLineChart';





const Home = () => {
    const [hovered, setHovered] = useState(false)
    return (
        <div className=''>
            {/* welcome sliders */}
            <div className='mx-auto p-7 '>
                <ImageCarousel></ImageCarousel>
            </div>

            <div className='px-10'>
                {/* AI Model Inventory Manager */}

                <div
                    className="flex flex-col items-center justify-center h-[500px] rounded-4xl shadow-2xl bg-gradient-to-r from-[#036febef] via-[#8cd4ea] via-[#3acf82] to-[#065dffa1] shadow-gray-500 text-white "
                    // style={{
                    //     backgroundImage: `url(${bg2})`,
                    //     backgroundSize: "cover",
                    //     backgroundPosition: "center",
                    // }}
                    onMouseEnter={() => setHovered(true)}
                >

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="mt-10 border-white/30 bg-white/20  backdrop-blur-lg rounded-full p-10">
                        <h3 className="text-5xl text-center font-bold">
                            AI Model Inventory Manager
                        </h3>
                    </motion.div>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className='text-center px-30  mt-6 font-semibold  '>The AI Model Inventory Manager lets you easily organize, track, and monitor 30+ AI models in one dashboard. View real-time performance, manage the latest models, control versions, and receive automated updates. A modern, efficient system designed to simplify AI workflows for teams and professionals.</motion.p>
                    <div className='flex mt-10 items-center'>
                        <motion.p
                            className=' text-4xl text-center font-semibold'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        ><span className='text-[60px] font-bold'><AnimatedNumber value={300} trigger={hovered} />+</span><br />Ai Models</motion.p>


                        <motion.span
                            className='h-20 w-0.5 bg-white rounded-full mx-25'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        ></motion.span>
                        <motion.p
                            className=' text-4xl text-center font-semibold'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        ><span className='text-[60px] font-bold'><AnimatedNumber value={40000} trigger={hovered} />+</span><br />Active Users</motion.p>

                        <motion.span
                            className='h-20 w-0.5 bg-white rounded-full mx-25'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        ></motion.span>

                        <motion.p
                            className=' text-4xl text-center font-semibold'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        ><span className='text-[60px] font-bold'><AnimatedNumber value={28} trigger={hovered} />+</span><br />Countries</motion.p>

                    </div>
                </div>

                {/*  key features */}

                <div className='mt-20 p-5 space-y-8'
                >
                    <motion.h3
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: false, amount: 0 }}
                        className='text-8xl text-white text-center font-semibold'>Key Features</motion.h3>
                    <motion.div className='grid grid-cols-3 gap-5 text-center mt-10'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className=' bg-white text-black shadow-2xl rounded-3xl p-5 space-y-2'>
                            <img src={card_img_1} alt="" className='h-40 w-full mx-auto rounded-xl' />
                            <h3 className=' text-2xl font-semibold'>Real-time Analytics</h3>
                            <p>
                                Access live metrics and insights for your models. Track performance trends, detect anomalies, and visualize important statistics instantly with interactive charts and dashboards.
                            </p>
                        </div>
                        <div className=' bg-white text-black shadow-2xl rounded-3xl p-5 space-y-2 '>

                            <img src={card_img_4} alt="" className='h-40 w-full mx-auto rounded-xl' />
                            <h3 className=' text-2xl font-semibold'>Model Tracking <br />& <br />Monitoring</h3>
                            <p>
                                Easily track all your AI models in one place. Monitor their performance, accuracy, and usage statistics in real time. Keep a complete version history to see how each model evolves over time.
                            </p>
                        </div>
                        <div className=' bg-white text-black shadow-2xl rounded-3xl p-5 space-y-2 '>
                            <img src={card_img_2} alt="" className='h-40 w-full mx-auto rounded-xl' />
                            <h3 className=' text-2xl font-semibold'>Secure Authentication 🔒</h3>
                            <p>
                                Protect your AI inventory with modern authentication methods and encrypted security layers. Ensure that only authorized users can access, edit, or deploy your models.
                            </p>
                        </div>
                        <div className=' bg-white text-black shadow-2xl rounded-3xl p-5 space-y-2 '>
                            <img src={card_img_5} alt="" className='h-40 w-full mx-auto rounded-xl' />
                            <h3 className=' text-2xl font-semibold'>Role-based Access Control (RBAC)</h3>
                            <p>
                                Assign permissions and roles to different team members. Control who can view, edit, or deploy models based on their responsibilities. Customize access levels to match organizational hierarchy.
                            </p>
                        </div>
                        <div className=' bg-white text-black shadow-2xl rounded-3xl p-5 space-y-2 '>
                            <img src={card_img_3} alt="" className='h-40 w-full mx-auto rounded-xl' />
                            <h3 className=' text-2xl font-semibold'>Version Control & Deployment</h3>
                            <p>
                                Manage different versions of AI models efficiently and deploy updates seamlessly without disrupting ongoing workflows. Keep track of changes to ensure reproducibility and reliability.
                            </p>
                        </div>

                    </motion.div>




                </div>


                {/* top models  */}

                <div>
                    <h2 className='text-5xl font-bold text-amber-100 text-center px-6'>Explore the Top AI Models Powering Smarter Inventory Management</h2>
                    <div>
                        
                    </div>
                </div>

                {/* ai category  */}

                {/* <div className='h-auto mt-20 '>

                    <div className='h-100 w-full bg-white rounded-3xl'>
                        <LineGraph></LineGraph>
                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default Home;
