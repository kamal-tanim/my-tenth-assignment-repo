import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';

const Cart = () => {
  return (
    <div className="dropdown dropdown-end">
      {/* Trigger Button */}
      <div 
        tabIndex={0} 
        role="button" 
        className="btn btn-ghost btn-circle hover:bg-white/5 transition-all relative group"
      >
        <div className="indicator">
          {/* Pulsing Aura for the Cart Icon */}
          <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <FaOpencart className='w-8 h-8 text-white/80 group-hover:text-blue-500 transition-colors relative z-10' />
          
          {/* Custom Styled Badge */}
          <span className="badge badge-sm indicator-item !bg-blue-600 !border-none !text-[10px] font-black text-white h-5 w-5 shadow-[0_0_10px_rgba(37,99,235,0.6)]">
            8
          </span>
        </div>
      </div>

      {/* Dropdown Content */}
      <div
        tabIndex={0}
        className="dropdown-content z-[100] mt-4 w-64 origin-top-right overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="p-6 space-y-4">
          {/* Header Section */}
          <div className="flex flex-col gap-1 border-b border-white/5 pb-3">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Neural Loadout</span>
            <span className="text-xl font-bold text-white tracking-tight">8 Models Queued</span>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <NavLink 
              to='/purchase' 
              className="group flex items-center justify-center gap-2 w-full py-3 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-blue-500 hover:text-white active:scale-95 overflow-hidden relative"
            >
               {/* Internal Button Shine Effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              
              <span className="relative z-10">Initialize Purchase</span>
            </NavLink>
          </div>
          
          {/* Security Footer */}
          <div className="flex items-center justify-center gap-2 opacity-20 text-[8px] font-black tracking-tighter uppercase">
            <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
            Secure Neural Transaction Enabled
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;