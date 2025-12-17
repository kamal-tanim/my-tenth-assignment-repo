import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaIdBadge, FaNetworkWired, FaEdit, FaRocket } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();

    // Mock data for the "Archive Stats"
    const stats = [
        { label: 'Models Deployed', value: '12', icon: <FaRocket className="text-blue-500" /> },
        { label: 'Neural Clearance', value: 'Level 4', icon: <FaShieldAlt className="text-purple-500" /> },
        { label: 'Active Sessions', value: '2', icon: <FaNetworkWired className="text-cyan-500" /> },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 relative overflow-hidden">
            
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-b border-white/5 pb-10">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-5xl font-black tracking-tighter uppercase italic"
                        >
                            Neural <span className="text-blue-500">Identity</span>
                        </motion.h2>
                        <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase font-bold mt-2">Personal Data Dossier // Encrypted Access</p>
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                        <FaEdit /> Modify Profile
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-1 p-8 bg-white/[0.03] border border-white/10 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden group"
                    >
                        <motion.div 
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-px bg-blue-500/20 z-0"
                        />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="relative mb-6">
                                <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
                                <div className="w-32 h-32 rounded-[2.5rem] border-2 border-blue-500/30 p-2 overflow-hidden bg-[#0a0a0a]">
                                    {user?.photoURL ? (
                                        <img src={user.photoURL} className="w-full h-full object-cover rounded-[2rem]" alt="Profile" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-[2rem]">
                                            <FaIdBadge size={40} className="text-white/20" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-1">{user?.displayName || "Anonymous Entity"}</h3>
                            <p className="text-xs text-white/40 font-medium italic mb-6">{user?.email}</p>
                            
                            <div className="w-full pt-6 border-t border-white/5 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Status</span>
                                    <span className="flex items-center gap-2 text-[10px] font-black text-green-500 uppercase tracking-widest">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                                        Linked
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">ID Hash</span>
                                    <span className="text-[10px] font-mono text-white/40 tracking-tighter">
                                        {user?.uid?.slice(0, 12)}...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Stats & Activity */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:border-white/20 transition-all"
                                >
                                    <div className="mb-4 text-xl">{stat.icon}</div>
                                    <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                                    <p className="text-2xl font-black tracking-tighter">{stat.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Recent Deployments / Activity placeholder */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="p-10 bg-white/[0.03] border border-white/10 rounded-[3rem] min-h-[300px] flex flex-col items-center justify-center text-center"
                        >
                            <div className="opacity-10 mb-6">
                                <FaRocket size={60} />
                            </div>
                            <h4 className="text-lg font-bold text-white/80 mb-2 tracking-tight">No Active Deployments</h4>
                            <p className="text-xs text-white/30 max-w-[250px] leading-relaxed uppercase tracking-widest font-bold">
                                Your neural archive is currently empty. Initialize your first model to begin.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;