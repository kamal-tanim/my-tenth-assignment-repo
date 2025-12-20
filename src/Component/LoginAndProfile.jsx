import React from 'react';
import { FaUserTie, FaSignOutAlt, FaShieldAlt, FaIdBadge, FaCogs } from 'react-icons/fa';
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';

const LoginAndProfile = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout()
            .then(() => console.log('Neural Session Terminated'))
            .catch(error => console.log(error));
    };

    return (
        <div className="dropdown dropdown-end ">
            {user ? (
                <div className="flex items-center gap-4">
                    {/* AVATAR TRIGGER */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        tabIndex={0} 
                        role="button" 
                        className="relative group cursor-pointer"
                    >
                        {/* Dynamic Scanning Ring */}
                        <div className="absolute -inset-1.5 border border-blue-500/30 rounded-full animate-[spin_4s_linear_infinite] group-hover:border-blue-500 transition-colors" />
                        
                        <div className='relative h-10 w-10 bg-[#0a0a0a] border border-white/20 rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]'>
                                <img src={user?.photoURL} className="h-full w-full object-cover" alt="" />
                        </div>
                    </motion.div>

                    {/* DROPDOWN MENU - mt-12 pushes the whole card down from the avatar */}
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[100] mt-50 w-80 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#070707]/95 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-6 "
                    >
                        {/* USER INFO HEADER - pt-12 pushes text down inside the box */}
                        <div className="relative mb-3 p-6 pt-12 bg-white/5 border border-white/5 rounded-3xl overflow-hidden flex flex-col gap-1">
                            {/* Decorative Icon */}
                            <div className="absolute top-3 right-3 opacity-10">
                                <FaShieldAlt size={28} className="text-blue-500" />
                            </div>
                            
                            {/* Scanning Line Effect */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-[pan_3s_infinite]" />

                            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-500 mb-1">
                                Clearance: Level 4
                            </p>
                            <h4 className="text-white font-bold text-base truncate">
                                {user?.displayName || "Authorized User"}
                            </h4>
                            <p className="text-[11px] text-white/30 font-medium truncate italic">
                                {user?.email}
                            </p>
                            <Link to='/profile'><button className="text-blue-600">Profile</button> </Link>
                        </div>

                        {/* NAVIGATION LINKS */}
                        <div className="space-y-1.5 list-none">
                            
                            
                            {/* LOGOUT ACTION */}
                            <div className="pt-4 border-t border-white/5 mt-4">
                                <button 
                                    onClick={handleLogout}
                                    className="flex items-center justify-between w-full p-4 rounded-2xl bg-red-500/5 border border-red-500/10 text-red-400/70 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/30 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <FaSignOutAlt className="group-hover:-translate-x-1 transition-transform" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Logout</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </ul>
                </div>
            ) : (
                /* LOGIN BUTTON */
                <Link to='/login' className="group relative block">
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <FaShieldAlt className="text-blue-600" />
                        Login
                    </motion.div>
                </Link>
            )}
        </div>
    );
};

// Helper component for cleaner menu items
const MenuLink = ({ to, icon, label, color }) => {
    const colorClasses = {
        blue: "text-blue-500",
        purple: "text-purple-500",
        red: "text-red-500"
    };

    return (
        <li className='list-none'>
            <Link to={to} className="flex items-center gap-4 w-full p-4 rounded-2xl hover:bg-white/5 text-white/50 hover:text-white transition-all group border border-transparent hover:border-white/5">
                <span className={`${colorClasses[color] || 'text-white'} group-hover:scale-125 transition-transform duration-300`}>
                    {icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
            </Link>
        </li>
    );
};

export default LoginAndProfile;