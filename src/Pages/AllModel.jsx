import React from 'react';
import { motion } from 'framer-motion';
import { MyCard, MySearch } from '../assets/Styles/styles';
import { useLoaderData } from 'react-router';
 // Using the updated Portal Modal
import { Search, Box, Cpu, ShoppingBag } from 'lucide-react';
import Modal from '../Component/Modal';

const AllModel = () => {
    const models = useLoaderData();


    return (
        <div className='min-h-screen bg-[#050505] pt-32 pb-20 px-10 text-white'>
            <div className="fixed top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* --- HEADER SECTION --- */}
            <div className='flex flex-col md:flex-row items-center justify-between relative mb-20 gap-8'>
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col"
                >
                    <h2 className='text-6xl md:text-7xl font-black tracking-tighter uppercase italic italic'>
                        Neural <span className="text-blue-500">Archive</span>
                    </h2>
                    <p className="text-white/40 tracking-[0.3em] uppercase text-xs font-bold mt-2">
                        Exploring <span className='text-xl text-blue-500'>{models.length}</span> deployment-ready architectures
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full md:w-auto"
                >
                    <MySearch>
                        <div className="search-container !bg-white/5 !border-white/10 !backdrop-blur-md rounded-2xl p-1">
                            <input 
                                className="input text-white placeholder:text-white/20" 
                                type="text" 
                                placeholder="Search system ID..." 
                            />
                            <Search className="search__icon text-blue-500 mr-4" size={20} />
                        </div>
                    </MySearch>
                </motion.div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {models.map((model, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        key={model._id || index}
                    >
                        <MyCard>
                            <div className='card group !bg-[#0a0a0a] !border-white/10 hover:!border-blue-500/50 transition-all duration-500 rounded-[2rem] overflow-hidden relative'>
                                <div className="relative h-48 w-full bg-[#111] overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                                    <img 
                                        src={model.image}
                                        alt="" 
                                        className='w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700 group-hover:opacity-50' 
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-3 py-1 rounded-full">
                                        <p className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">{model.framework}</p>
                                    </div>
                                </div>
                                <div className='p-6 space-y-4 relative z-20'>
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                                            {model.name}
                                        </h3>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-white/60">
                                            <Box size={16} className="text-blue-500" />
                                            <p className='text-sm font-medium'>Use Case: <span className="text-white uppercase">{model.useCase}</span></p>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/60">
                                            <ShoppingBag size={16} className="text-blue-500" />
                                            <p className='text-sm font-medium'>Deployments: <span className="text-white">{model.purchased}</span></p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-white/5">
                                        <Modal model={model} />
                                    </div>
                                </div>

                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-600/10 blur-[50px] group-hover:bg-blue-600/20 transition-all" />
                            </div>
                        </MyCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AllModel;