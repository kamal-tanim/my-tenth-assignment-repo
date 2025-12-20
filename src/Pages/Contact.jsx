import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGlobe, FaDiscord, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';


const Contact = () => {
    const { user } = useAuth();

    const handleSubmit = () => {
        Swal.fire({
            title: 'Problem Submitted!',
            text: 'Your statement has been recorded. Our team will review it shortly.',
            icon: 'success',
            iconColor: '#4f46e5', // Aesthetic Indigo
            confirmButtonText: 'Great, thanks!',
            confirmButtonColor: '#4f46e5',
            background: '#ffffff',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic"
                    >
                        Get in <span className="text-blue-500 text-glow">Touch</span>
                    </motion.h2>
                    <p className="text-white/30 text-xs tracking-[0.5em] uppercase font-bold mt-4">Establish a Direct Neural Link</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                        {[
                            { icon: <FaEnvelope />, label: "Email Terminal", val: "support@ai-inventory.io", color: "text-blue-400" },
                            { icon: <FaDiscord />, label: "Community Hub", val: "discord.gg/ai-neural", color: "text-indigo-400" },
                            {icon: <FaLinkedin />,label: "Professional Net",val: "linkedin.com/in/ai-inventory",color: "text-blue-400"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl group hover:border-blue-500/50 transition-all cursor-pointer"
                            >
                                <div className={`${item.color} text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{item.label}</h4>
                                <p className="text-lg font-bold text-white/80">{item.val}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 backdrop-blur-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <FaGlobe size={120} />
                        </div>

                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Your Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-colors text-white" placeholder={user?.displayName} readOnly />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Your Email</label>
                                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-colors text-white" placeholder={user?.email} readOnly />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Problem statement</label>
                                <textarea className="w-full bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-colors text-white min-h-[150px]" minLength={10} placeholder="Type your problem message here..."></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="group relative px-12 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:pr-16 active:scale-95">
                                <span className="relative z-10">Send Transmission</span>
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default Contact;