import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuToggleBtn } from '../assets/Styles/styles';
import Theme from './Theme';
import Cart from './Cart';
import LoginAndProfile from './LoginAndProfile';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Effect to handle background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = (
        <>
            <li className="relative group">
                <NavLink to='/' className={({ isActive }) => 
                    `px-3 py-2 transition-all duration-300 ${isActive ? 'text-blue-400' : 'text-white/70 hover:text-white'}`
                }>
                    Home
                </NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group">
                <NavLink to='/allModels' className={({ isActive }) => 
                    `px-3 py-2 transition-all duration-300 ${isActive ? 'text-blue-400' : 'text-white/70 hover:text-white'}`
                }>
                    All Models
                </NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group">
                <NavLink to='/addModels' className={({ isActive }) => 
                    `px-3 py-2 transition-all duration-300 ${isActive ? 'text-blue-400' : 'text-white/70 hover:text-white'}`
                }>
                    Add Model
                </NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group">
                <NavLink to='/myModels' className={({ isActive }) => 
                    `px-3 py-2 transition-all duration-300 ${isActive ? 'text-blue-400' : 'text-white/70 hover:text-white'}`
                }>
                    My Models
                </NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group">
                <NavLink to='/contact' className={({ isActive }) => 
                    `px-3 py-2 transition-all duration-300 ${isActive ? 'text-blue-400' : 'text-white/70 hover:text-white'}`
                }>
                    Contact Us
                </NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </li>
        </>
    );

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
            scrolled ? 'py-3 px-10' : 'py-6 px-5'
        }`}>
            <div className={`mx-auto flex justify-between items-center px-8 py-3 transition-all duration-500 rounded-full border border-white/10 ${
                scrolled 
                ? 'bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]' 
                : 'bg-transparent'
            }`}>
                
                {/* LEFT: Mobile Menu & Logo */}
                <div className='flex items-center gap-6'>
                    <div className="relative lg:hidden">
                        <MenuToggleBtn>
                            <label className="hamburger">
                                <input
                                    type="checkbox"
                                    checked={open}
                                    onChange={() => setOpen(!open)}
                                />
                                <svg viewBox="0 0 32 32" className="stroke-white">
                                    <path
                                        className="line line-top-bottom"
                                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                    />
                                    <path className="line" d="M7 16 27 16" />
                                </svg>
                            </label>
                        </MenuToggleBtn>
                        
                        <AnimatePresence>
                            {open && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    className="absolute left-0 mt-6 bg-[#0a0a0a]/95 border border-white/10 backdrop-blur-2xl p-6 shadow-2xl rounded-[2rem] min-w-[240px] z-50"
                                >
                                    <ul className='flex flex-col gap-4'>
                                        {navLinks}
                                        <div className="h-px bg-white/10 my-2" />
                                        <li className="text-white/70 hover:text-blue-400 font-semibold cursor-pointer">My Purchase</li>
                                        <li className="text-white/70 hover:text-blue-400 font-semibold cursor-pointer">Profile</li>
                                        <li className="text-red-400/80 hover:text-red-400 font-bold cursor-pointer transition-colors">Logout</li>
                                        <li className="pt-2"><Theme /></li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
                        </div>
                        <h2 className='font-black text-2xl tracking-tighter text-white'>
                            AI<span className="text-blue-500">.</span>
                        </h2>
                    </div>
                </div>

                {/* CENTER: Desktop Links */}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-8 text-sm font-bold uppercase tracking-widest'>
                        {navLinks}
                    </ul>
                </div>

                {/* RIGHT: Actions */}
                <div className='flex items-center gap-2 md:gap-4'>
                    <div className='hidden sm:block hover:scale-110 transition-transform'>
                        <Cart />
                    </div>
                    <div className='hidden sm:block hover:scale-110 transition-transform'>
                        <Theme />
                    </div>
                    <div className="pl-2 border-l border-white/10">
                        <LoginAndProfile />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;