import React from 'react';
import { motion } from 'framer-motion';

import { Plus, Database, Cpu, Activity } from 'lucide-react'
import { NavLink } from 'react-router';

const EmptyModelPage = () => {
    return (
        <div className="min-h-[85vh] w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#05070a]">
      
      {/* 1. Animated Moving Grid Background */}
      <motion.div 
        initial={{ backgroundPosition: "0 0" }}
        animate={{ backgroundPosition: ["0 0", "0 40px"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, #1e40af 1px, transparent 1px), 
                            linear-gradient(to bottom, #1e40af 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle, black, transparent 80%)'
        }}
      />

      {/* 2. Floating Neural Core (Main Animation) */}
      <div className="relative z-10 flex flex-col items-center">
        
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative mb-12"
        >
          {/* Glass Hexagon */}
          <div className="w-32 h-32 bg-blue-500/5 border border-blue-500/20 backdrop-blur-3xl rounded-[2rem] flex items-center justify-center relative shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            
            {/* Inner Glowing Icon */}
            <Database size={48} className="text-blue-500/40" />
            
            {/* Spinning Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-15px] border-t-2 border-b-2 border-blue-500/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-5px] border-l-2 border-r-2 border-white/5 rounded-full"
            />
          </div>

          {/* Glitch Status Tag */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute -bottom-2 -right-12 bg-blue-600 px-3 py-1 rounded-md skew-x-[-12deg] shadow-lg shadow-blue-900/40"
          >
            <span className="text-[9px] font-black text-white uppercase italic tracking-widest flex items-center gap-1">
              <Activity size={10} /> No_Data
            </span>
          </motion.div>
        </motion.div>

        {/* 3. Aesthetic Text with Letter Animation */}
        <div className="text-center space-y-3 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic"
          >
            Archive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">Empty</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/30 text-[11px] max-w-150 mx-auto font-mono uppercase tracking-[0.2em] leading-relaxed"
          >
          You haven't uploaded any AI models to your library yet. To see your work here, you need to upload your model files first.
          </motion.p>
        </div>
      </div>
    </div>
    );
};

export default EmptyModelPage;