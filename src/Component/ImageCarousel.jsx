import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from 'framer-motion';

import homeNavImg1 from "../assets/images/homeNav-1.png"
import homeNavImg2 from "../assets/images/homeNav-2.png"
import homeNavImg3 from "../assets/images/homeNav-3.png"

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}

      
    >
      <SwiperSlide className="p-5 bg-gradient-to-r from-orange-400 via-amber-300 to-red-400 rounded-xl" >
        <motion.div
          className="flex gap-x-20 rounded-xl"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className='text-white flex flex-col justify-center gap-y-10 items-center text-center'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className='text-white  font-bold text-7xl'>Well come to <br /> <span className="text-8xl">
              AI Inventory.</span></span>
            <p className=" border p-5 rounded-xl bg-white/10 font-semibold ">
              Welcome to AI Inventory Manager – the all-in-one platform to organize, track, and monitor your AI models. Gain real-time insights, manage versions effortlessly, and streamline your AI workflows for smarter, faster decision-making.
            </p>
          </motion.div>

          <motion.img src={homeNavImg1}
            className="rounded-xl h-120"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          />

        </motion.div>
      </SwiperSlide>


      <SwiperSlide className=" p-5 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 rounded-xl " >
        <motion.div className="flex gap-5 justify-center items-center"
        >
          <motion.div
            className=" text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className=' font-bold text-7xl'>Monitor Your AI Models in One Place</span>
            <div className="flex justify-center items-center gap-5 text-center mt-10 ">
              <motion.div
                className="border rounded-xl bg-white/20 py-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h4 className="font-semibold text-[18px] text-center">1. Real-Time Performance Tracking</h4>
                <ol>
                  <li>✨Track accuracy & speed</li>
                  <li>✨Detect errors instantly</li>
                </ol>
              </motion.div>
              <motion.div
                className="border rounded-xl bg-white/20 py-3"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: false, amount: 0.4 }}
              >
                <h4 className="font-semibold text-[18px] text-center" >2. Version & Update Management</h4>
                <ol>
                  <li>✨Organize versions</li>
                  <li>✨Automated updates</li>
                  <li>✨Rollback easily</li>
                  <li>✨Track changes</li>
                </ol>
              </motion.div>
              <motion.div
                className="border rounded-xl bg-white/20 py-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="font-semibold text-[18px] text-center">3.Centralized Dashboard & Insights</h4>
                <ol>
                  <li>✨All models in one view</li>
                  <li>✨Visualize performance trends</li>
                  <li>✨Alerts & notifications</li>

                </ol>
              </motion.div>
            </div>
          </motion.div>
          <motion.img src={homeNavImg2}
            className="rounded-lg h-120"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </motion.div>
      </SwiperSlide>


      <SwiperSlide className=" p-5 bg-gradient-to-r from-[#0D4671] via-teal-300 to-[#92e1e2] rounded-xl " >
        <div className="flex gap-5 justify-center items-center">


          <motion.div
            className=" text-white text-center"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span
              className='font-bold text-7xl '
            >Optimize Your Workflow</span>
            <div className="space-y-3 mt-10">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className=" border w-85 p-2 rounded-xl bg-white/10 font-semibold  ">
                Track and manage all your AI models easily
              </motion.p>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className=" border p-5 rounded-xl bg-white/10 font-semibold ">
                Gain real-time insights into each AI model’s performance, usage statistics, and version updates. Simplify team collaboration, automate monitoring, and make data-driven decisions to optimize productivity across all your AI projects.
              </motion.p>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false, amount: 0.3 }}
                className=" border p-5 w-105 rounded-xl bg-white/10 font-semibold ">
                Boost efficiency, save time, and streamline AI model <br /> management with ease and precision.
              </motion.p>
            </div>
          </motion.div>
          <motion.img
            src={homeNavImg3}
            className="rounded-lg h-110"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>
      </SwiperSlide>


    </Swiper>
  );
};

export default ImageCarousel;
