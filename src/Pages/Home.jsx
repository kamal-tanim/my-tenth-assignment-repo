import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowUpRight, Activity, Shield, Users, Layers, Zap, Star, Quote } from 'lucide-react';

import ImageCarousel from '../Component/ImageCarousel';
import AnimatedNumber from '../Component/AnimatedNumber';
import card_img_1 from "../assets/images/card_img_1.png";
import card_img_2 from "../assets/images/card_img_2.png";
import card_img_3 from "../assets/images/card_img_3.png";
import card_img_4 from "../assets/images/card_img_4.png";
import card_img_5 from "../assets/images/card_img_5.png";

const Home = () => {
    const [hovered, setHovered] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                // Assuming experience.json is in your /public folder
                const res = await fetch('/experience.json');
                const data = await res.json();
                setExperiences(data);
            } catch (error) {
                console.error("Error loading neural signatures:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    return (
        <div className='relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-blue-500 selection:text-white pt-2.5'>
            
            {/* BACKGROUND NEURAL GLOWS */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className='relative z-10 container mx-auto px-6 py-20'>
                
                {/* HERO SECTION: CAROUSEL */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className='rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative group'
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 pointer-events-none" />
                    <ImageCarousel />
                </motion.div>

                {/* STATS & MAIN HEADING */}
                <div className='mt-32 relative'>
                    <motion.div
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="relative overflow-hidden rounded-[4rem] bg-[#0a0a0a] border border-white/10 p-12 md:p-24 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] group"
                    >
                        <div className="absolute inset-0 z-0 opacity-20" 
                             style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
                            >
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-500">Live Neural Link</span>
                            </motion.div>

                            <h3 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-8 italic">
                                AI Inventory<br />Manager
                            </h3>

                            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 w-full max-w-5xl'>
                                <StatItem label="Active Models" value={300} suffix="+" hovered={hovered} />
                                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                <StatItem label="Neural Entities" value={40000} suffix="+" hovered={hovered} />
                                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                <StatItem label="Data Nodes" value={28} suffix="" hovered={hovered} />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- 15+ USER EXPERIENCES MARQUEE --- */}
                <div className='mt-40'>
                    <div className='text-center mb-16'>
                        <h2 className='text-[10px] font-black tracking-[0.5em] text-blue-500 uppercase mb-4'>Verified Experiences</h2>
                        <h3 className='text-4xl md:text-6xl font-bold italic tracking-tighter'>Neural Signatures</h3>
                    </div>

                    <div className="flex overflow-hidden group py-10 relative">
                        {isLoading ? (
                            <div className="w-full text-center text-white/20 italic">Synchronizing Neural Data...</div>
                        ) : (
                            <motion.div 
                                animate={{ x: [0, -2500] }} 
                                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                                className="flex flex-nowrap gap-6 min-w-max"
                            >
                                {/* Double the data for infinite loop effect */}
                                {[...experiences, ...experiences].map((exp, i) => (
                                    <ExperienceCard key={i} exp={exp} />
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* --- CORE CAPABILITIES GRID --- */}
                <div className='mt-40 space-y-20'>
                    <div className='text-center'>
                        <h2 className='text-[10px] font-black tracking-[0.5em] text-blue-500 uppercase mb-4'>Capabilities</h2>
                        <h3 className='text-4xl md:text-7xl font-bold italic tracking-tighter'>Core Protocols</h3>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <FeatureCard title="Real-time Analytics" desc="Access live metrics and insights. Track performance trends instantly." img={card_img_1} icon={<Activity />} />
                        <FeatureCard title="Tracking & Monitoring" desc="Monitor accuracy and usage. Keep a complete version history." img={card_img_4} icon={<Layers />} />
                        <FeatureCard title="Secure Authentication" desc="Encrypted security layers ensuring only authorized access." img={card_img_2} icon={<Shield />} />
                        <FeatureCard title="Role-based Access" desc="Granular permissions control to match your organizational needs." img={card_img_5} icon={<Users />} />
                        <FeatureCard title="Version Control" desc="Seamless deployment pipelines. Rollback without disruption." img={card_img_3} icon={<Zap />} />
                    </div>
                </div>

                {/* FOOTER BANNER */}
                <div className='mt-60 mb-20 text-center relative'>
                    <div className="absolute inset-0 bg-blue-500/10 blur-[120px] -z-10" />
                    <h2 className='text-5xl md:text-8xl font-black italic tracking-tighter leading-none'>
                        <span className="text-white/20 uppercase text-3xl block mb-4">Neural Hub v4.0</span>
                        Powering Smarter <span className="text-blue-500">Inventory.</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

// HELPER COMPONENTS
const StatItem = ({ label, value, suffix, hovered }) => (
    <div className='flex flex-col items-center justify-center text-center space-y-2'>
        <div className='text-5xl md:text-7xl font-black tracking-tighter text-white'>
            <AnimatedNumber value={value} trigger={hovered} />
            <span className="text-blue-600">{suffix}</span>
        </div>
        <p className='text-[10px] font-black uppercase tracking-[0.3em] text-white/30'>{label}</p>
    </div>
);

const ExperienceCard = ({ exp }) => (
    <div className="w-[380px] p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-blue-500/30 transition-all group cursor-default">
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-black italic">
                {exp.name.charAt(0)}
            </div>
            <div className="text-left">
                <h4 className="text-sm font-black text-white tracking-tight">{exp.name}</h4>
                <p className="text-[9px] text-blue-500/60 font-black uppercase tracking-widest">{exp.role}</p>
            </div>
            <Quote className="ml-auto text-white/5 group-hover:text-blue-500/20 transition-colors" size={24} />
        </div>
        <p className="text-sm text-white/50 leading-relaxed font-medium italic mb-6">
            "{exp.text}"
        </p>
        <div className="flex gap-1">
            {[...Array(5)].map((_, j) => (
                <Star key={j} size={10} className="fill-blue-600 text-blue-600" />
            ))}
        </div>
    </div>
);

const FeatureCard = ({ title, desc, img, icon }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/40 transition-all duration-500'
    >
        <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 h-full flex flex-col overflow-hidden relative">
            <div className="mb-8 flex items-center justify-between">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {icon}
                </div>
                <ArrowUpRight className="text-white/10 group-hover:text-white transition-colors" />
            </div>

            <h3 className='text-2xl font-black italic mb-4 text-white tracking-tight text-left'>{title}</h3>
            <p className='text-white/40 text-sm leading-relaxed mb-10 group-hover:text-white/60 transition-colors text-left'>
                {desc}
            </p>

            <div className="mt-auto rounded-3xl overflow-hidden h-44 w-full relative border border-white/5">
                <img src={img} alt={title} className='h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700' />
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-all" />
            </div>
        </div>
    </motion.div>
);

export default Home;