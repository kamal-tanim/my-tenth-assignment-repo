import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // 
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ model }) => {
    const [modelData, setModelData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleOpen = async (e) => {
        e.stopPropagation(); 
        setIsOpen(true);
        setTimeout(() => {
            setModelData({
                name: model.name || "NEURAL-GEN X1",
                framework: model.framework || "PyTorch",
                useCase: model.useCase || "NLP",
                dataset: "CommonCrawl 70B", 
                purchased: model.purchased || "0",
                createdBy: "Alpha Research",
                createdAt: "2025-01-10",
                description: "This architecture is engineered for high-performance inference. It utilizes a custom attention mechanism to reduce latency by 40% while maintaining state-of-the-art accuracy.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600"
            });
        }, 300);
    };
    const ModalContent = () => (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-[90vw] h-[85vh] bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
            >
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 z-50 w-10 h-10 bg-white/10 hover:bg-red-500 rounded-full text-white transition-colors flex items-center justify-center"
                >
                    ✕
                </button>

                {modelData ? (
                    <>
                        <div className="md:w-1/2 relative h-1/3 md:h-full bg-black">
                            <img 
                                src={modelData.image} 
                                className="w-full h-full object-cover opacity-70"
                                alt="Visual"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10">
                                <span className="bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white rounded mb-2 inline-block">
                                    {modelData.framework}
                                </span>
                                <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                                    {modelData.name}
                                </h2>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 text-white flex flex-col overflow-y-auto">
                            <div className="mb-8">
                                <h3 className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-2">Specifications</h3>
                                <p className="text-2xl font-light leading-snug">
                                    Optimized for <strong className="text-white font-bold">{modelData.useCase}</strong> workflows.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/10 mb-8">
                                <div>
                                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Dataset</p>
                                    <p className="text-xl font-bold">{modelData.dataset}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Purchased</p>
                                    <p className="text-xl font-bold">{modelData.purchased}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Creator</p>
                                    <p className="text-lg">{modelData.createdBy}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Date</p>
                                    <p className="text-lg">{modelData.createdAt}</p>
                                </div>
                            </div>

                            <p className="text-gray-400 italic mb-8">
                                "{modelData.description}"
                            </p>

                            <div className="mt-auto flex gap-3">
                                <button className="flex-1 py-4 bg-white text-black font-black uppercase text-sm rounded-xl hover:bg-gray-200 transition-colors">
                                    Purchase Access
                                </button>
                                <button onClick={() => setIsOpen(false)} className="px-6 py-4 border border-white/20 text-white font-bold uppercase text-xs rounded-xl hover:bg-white/5">
                                    Close
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                    </div>
                )}
            </motion.div>
        </div>
    );

    return (
        <>
            <button 
                onClick={handleOpen}
                className="w-full py-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all rounded-lg font-bold uppercase text-xs tracking-widest"
            >
                View Details
            </button>
            {mounted && isOpen && createPortal(
                <AnimatePresence mode="wait">
                    <ModalContent />
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default Modal;