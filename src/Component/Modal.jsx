import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // 
import { motion, AnimatePresence } from 'framer-motion';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';


const Modal = ({ model }) => {
    const [modelData, setModelData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const email = user?.email;



    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleOpen = async (e) => {
        e.stopPropagation();
        setIsOpen(true);
        setTimeout(() => {
            setModelData({
                name: model.name,
                framework: model.framework,
                useCase: model.useCase,
                dataset: model.dataset,
                rating: model.rating,
                createdBy: model.createdBy,
                createdAt: model.createdAt,
                description: model.description,
                image: model.image,
                uploadedBy: model.insertedByEmail
            });
        }, 300);
    };


    const cartData = {
        modelId: model._id,
        name: model.name,
        image: model.image,
        createdBy: model.createdBy,
        buyerEmail: user.email,
        uploadedBy: model.insertedByEmail
    }

    const handlePurchase = (uploaderEmail) => {
        // console.log('btn clicked')
        if (email !== uploaderEmail) {
            // console.log('you can make a purchase', cartData)
            axiosSecure.post('/cartModels', cartData)
            .then(res =>{
                console.log('successful added model:', res.data)
            })
        }
        else {
            console.log('what kind of idiot you are to want to purchase own uploaded model')
        }
    }
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
                                <div className='flex justify-between items-center mb-4'>
                                    <h3 className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-2">Specifications</h3>
                                    <div>
                                        <p className="text-xs text-gray-500 italic mt-1">
                                            Uploaded by: <span className="font-medium text-gray-700">{modelData.uploadedBy}</span>
                                        </p>
                                    </div>
                                </div>

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
                                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Rating</p>
                                    <p className="text-xl font-bold">{modelData.rating}</p>
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
                                <button
                                    onClick={() => handlePurchase(modelData.insertedByEmail)}
                                    className="flex-1 py-4 bg-white text-black font-black uppercase text-sm rounded-xl hover:bg-gray-200 transition-colors">
                                    Add to Cart
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