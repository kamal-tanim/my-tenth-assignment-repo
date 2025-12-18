import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import Loader from '../Component/Loader';


const MyModel = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [myModels, setMyModels] = useState([])
    const [loading, setLoading] = useState([true])
    const email = user?.email;

    axiosSecure.get(`/model/user/${email}`)
        .then(res => {
            setMyModels(res.data)
            setLoading(false)
        })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/model/${id}`)
                    .then(res => {
                        // console.log('deleted successful', res.data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your model has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });
    }

    return (




        <div className="w-full bg-[#0b0e14] min-h-screen pt-24 pb-10 px-6">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Model Registry</h2>
                    <p className="text-sm text-white/40 mt-1">
                        Managing <span className="text-blue-400 font-mono font-bold">{myModels.length}</span> active neural networks
                    </p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-900/20"
                >
                    <Link to='/addModels'>+ Add New Model</Link>
                </motion.button>
            </div>

            {/* Grid Section */}
            {
                loading ?
                    <div
                    className='inset-0 z-[100] flex justify-center mt-40'
                    ><Loader></Loader></div> :
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {myModels.map((model, index) => (
                                <motion.div
                                    key={model._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#0d1117] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all group shadow-xl"
                                >
                                    {/* Card Top: ID & Tag */}
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
                                            #{String(index + 1).padStart(3, '0')}
                                        </span>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-tighter bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            {model.useCase || "General"}
                                        </span>
                                    </div>

                                    {/* Card Body: Model Details */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                                            {model.name}
                                        </h3>
                                        <p className="text-xs text-white/40 mt-1">
                                            Created by <span className="text-white/60 font-medium">{model.createdBy}</span>
                                        </p>
                                    </div>

                                    {/* Card Footer: Actions */}
                                    <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                                        <div className="flex gap-2">
                                            {/* Pay/View Detail Icon */}
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                className="p-2 bg-white/5 rounded-lg text-white/40 hover:text-blue-400 hover:bg-blue-400/10 transition-all"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                            </motion.button>
                                        </div>

                                        <div className="flex gap-3">
                                            <motion.button
                                                whileHover={{ scale: 1.1, color: '#60a5fa' }}
                                                whileTap={{ scale: 0.9 }}
                                                className="flex items-center gap-1.5 text-white/30 text-xs font-bold uppercase tracking-wider"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                                                Edit
                                            </motion.button>

                                            <motion.button
                                                onClick={() => handleDelete(model._id)}
                                                whileHover={{ scale: 1.1, color: '#ef4444' }}
                                                whileTap={{ scale: 0.9 }}
                                                className="flex items-center gap-1.5 text-white/30 text-xs font-bold uppercase tracking-wider"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                                Delete
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
            }
        </div>


    );
};

export default MyModel;