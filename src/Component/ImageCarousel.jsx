import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules"; 
import { motion } from 'framer-motion';

import homeNavImg1 from "../assets/images/homeNav-1.png"
import homeNavImg2 from "../assets/images/homeNav-2.png"
import homeNavImg3 from "../assets/images/homeNav-3.png"

const ImageCarousel = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]"
      >
        <SwiperSlide className="p-12 md:p-20 bg-[#050505] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]" />
          
          <motion.div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <motion.div
              className='text-left flex flex-col justify-center gap-y-6 flex-1'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-blue-500" />
                <span className="text-blue-500 uppercase tracking-[0.4em] text-xs font-bold">Protocol v4.0</span>
              </div>
              <h1 className='text-white font-black text-6xl md:text-8xl tracking-tighter leading-none italic uppercase'>
                Neural <br /> <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">Inventory.</span>
              </h1>
              <p className="border-l-4 border-blue-600/30 pl-6 py-2 text-white/50 font-medium text-lg leading-relaxed max-w-xl">
                The all-in-one platform to organize, track, and monitor your AI models. Gain real-time insights and manage versions effortlessly.
              </p>
              <button className="w-fit mt-4 px-8 py-4 bg-blue-600 rounded-full text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-blue-600/20">
                Initialize System
              </button>
            </motion.div>

            <motion.div 
               className="relative flex-1 flex justify-center"
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full" />
              <img src={homeNavImg1} className="rounded-3xl h-[450px] object-contain relative z-20 border border-white/10" alt="UI-1" />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="p-12 md:p-20 bg-[#050505] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <motion.div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <motion.div className="flex-1 space-y-8">
               <h2 className='font-black text-5xl md:text-7xl text-white tracking-tighter leading-tight italic uppercase'>
                 Monitor <span className="text-purple-500 underline decoration-indigo-500/50">Everything</span>
               </h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Real-Time Tracking", desc: "Track accuracy & speed instantly." },
                    { title: "Version Control", desc: "Organize and rollback versions." },
                    { title: "Smart Alerts", desc: "Visualize performance trends." },
                    { title: "Neural Insights", desc: "Deep metrics for every node." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md hover:border-purple-500/50 transition-colors"
                    >
                      <h4 className="text-purple-400 font-bold text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-white/40 text-xs">{item.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </motion.div>

            <motion.div 
               className="flex-1 relative flex justify-center"
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-purple-600/10 blur-[100px] rounded-full" />
              <img src={homeNavImg2} className="rounded-3xl h-[450px] object-contain relative z-20 grayscale hover:grayscale-0 transition-all duration-700" alt="UI-2" />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="p-12 md:p-20 bg-[#050505] relative">
          <motion.div className="flex flex-col lg:flex-row gap-16 items-center text-center lg:text-left">
            <motion.div className="flex-1 space-y-8">
               <h2 className='font-black text-5xl md:text-7xl text-white tracking-tighter italic uppercase'>
                 Optimize <span className="text-teal-400">Workflow</span>
               </h2>
               <p className="text-white/40 text-lg max-w-lg font-medium leading-relaxed">
                 Gain real-time insights into each AI model’s performance, usage statistics, and version updates. Simplify team collaboration and automate monitoring.
               </p>
               <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[10px] font-bold tracking-widest uppercase">Precision Tracking</span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold tracking-widest uppercase">Team Sync</span>
               </div>
            </motion.div>

            <motion.div 
               className="flex-1 flex justify-center relative"
               initial={{ rotate: 5, opacity: 0 }}
               whileInView={{ rotate: 0, opacity: 1 }}
               transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-teal-500/10 blur-[120px] rounded-full" />
              <img src={homeNavImg3} className="rounded-3xl h-[400px] relative z-20 shadow-2xl" alt="UI-3" />
            </motion.div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;