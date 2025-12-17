import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-[#050505] text-white overflow-hidden border-t border-white/5">
            {/* Subtle Gradient Glow behind the footer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                
                {/* Brand Section */}
                <aside className="space-y-6">
                    <div className='flex items-center gap-3'>
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                            <div className="w-5 h-5 bg-white rounded-sm rotate-45" />
                        </div>
                        <h2 className='font-black text-2xl tracking-tighter'>
                            AI<span className="text-blue-500">.</span>
                        </h2>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
                        The world's premier neural network inventory. 
                        Deploying intelligence since 2025.
                    </p>
                    <div className="flex gap-4 text-white/30">
                        <FaGithub className="hover:text-blue-500 cursor-pointer transition-colors" size={20} />
                        <FaTwitter className="hover:text-blue-500 cursor-pointer transition-colors" size={20} />
                        <FaLinkedin className="hover:text-blue-500 cursor-pointer transition-colors" size={20} />
                        <FaDiscord className="hover:text-blue-500 cursor-pointer transition-colors" size={20} />
                    </div>
                </aside>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-4">
                    <h6 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Architectures</h6>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">LLM Models</a>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">Computer Vision</a>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">Voice Synthesis</a>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">Neural Engines</a>
                </nav>

                <nav className="flex flex-col gap-4">
                    <h6 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Ecosystem</h6>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">Documentation</a>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">API Reference</a>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">Community</a>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">Changelog</a>
                </nav>

                <nav className="flex flex-col gap-4">
                    <h6 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Legal</h6>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">Privacy Protocol</a>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">Terms of Service</a>
                    <a className="text-sm text-white/50 hover:text-white transition-all hover:translate-x-1 cursor-pointer">Security</a>
                </nav>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 py-8 px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                    <p>© 2025 AI INVENTORY LTD. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                            SYSTEMS ONLINE
                        </span>
                        <span>LATENCY: 14MS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;