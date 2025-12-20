import { motion } from 'framer-motion';
import { CreditCard, Trash2, ShoppingCart, ShieldCheck } from 'lucide-react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';




const Purchase = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [purchasedModels, setPurchasedModels] = useState([])
    const email = user?.email;
    console.log(email);
    useEffect(() => {
        axiosSecure.get(`/cartModels/email/${email}`)
            .then(res => {
                
                setPurchasedModels(res.data);
            })
            .catch(err => {
                console.error("Error fetching cart models:", err);
            });
    
    }, [axiosSecure, email]);

    const handleCartDelete = (id) => {
        // console.log('clicked',id)

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
                axiosSecure.delete(`/cartModel/${id}`)
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                        const remainingCartModels = purchasedModels.filter(cartModel => cartModel._id !== id);
                        setPurchasedModels(remainingCartModels)
                    })
                    .catch(err => {
                        console.log(err);
                    })

            }
        });

    }


    return (

        <div className="w-full bg-[#0d1117] border border-white/10  overflow-hidden shadow-2xl pt-30">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        <ShoppingCart className="text-blue-500" size={20} />
                    </div>
                    <h2 className="text-lg font-semibold text-white">Purchase Queue</h2>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Total Items</span>
                    <span className="bg-white/10 text-white text-xs font-mono px-2 py-1 rounded">{purchasedModels.length}</span>
                </div>
            </div>

            {/* Table Area */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-0">
                    <thead>
                        <tr className="bg-white/[0.03]">
                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/40 border-b border-white/10 w-16">#</th>
                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/40 border-b border-white/10">Model Details</th>
                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/40 border-b border-white/10 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {
                            purchasedModels.map((model, index) =>
                                <tr key={index}
                                    className="hover:bg-white/[0.02] transition-colors group border-b border-white/5">
                                    {/* Index Number */}
                                    <td className="px-6 py-5 text-sm font-mono text-white/20 align-top text-xl">{index + 1}</td>

                                    {/* Main Content Area */}
                                    <td className="px-6 py-5">
                                        <div className="flex items-start gap-4">
                                            {/* 1. Model Image */}
                                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-white/10">
                                                <img
                                                    src={model.image}
                                                    alt={model.name}
                                                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* 2. Model Details */}
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                                                        {model.name}
                                                    </span>
                                                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-wider">
                                                        {model.useCase}
                                                    </span>
                                                </div>

                                                {/* Creator and Uploader Info */}
                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/50">
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-white/30 text-[10px] uppercase">By:</span>
                                                        <span className="text-blue-300/70">{model.createdBy}</span>
                                                    </div>
                                                    <div className="h-1 w-1 rounded-full bg-white/20 hidden sm:block" />
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-white/30 text-[10px] uppercase">Upload:</span>
                                                        <span className="truncate max-w-[120px]" title={model.uploadedBy}>{model.uploadedBy}</span>
                                                    </div>
                                                </div>

                                                {/* Timestamp */}
                                                <div className="text-[10px] text-white/30 font-mono mt-1 uppercase flex items-center gap-1.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/40 animate-pulse"></span>
                                                    Added: {model.addedAt}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-5 text-right align-top">
                                        <div className="flex justify-end gap-3">
                                            <button
                                                title="Checkout"
                                                className="p-2.5 text-green-500 hover:bg-green-500/10 border border-green-500/20 rounded-xl transition-all shadow-lg shadow-green-900/10"
                                            >
                                                <CreditCard size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleCartDelete(model._id)}
                                                title="Remove from Cart"
                                                className="p-2.5 text-red-500 hover:bg-red-500/10 border border-red-500/20 rounded-xl transition-all shadow-lg shadow-red-900/10"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

            {/* Footer Area */}
            {/* <div className="p-6 bg-white/[0.03] border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-[10px] text-white/20 uppercase font-bold tracking-widest">
                    <ShieldCheck size={14} className="text-green-500/50" />
                    Secure Payment Protocol Active
                </div>

                <div className="flex items-center gap-8">
                    <div className="text-right">
                        <span className="block text-[10px] text-white/40 uppercase font-bold tracking-widest text-right">Est. Total</span>
                        <span className="text-xl font-mono font-bold text-white">$298.00</span>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-10 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/40 uppercase tracking-[0.2em]">
                        Pay All
                    </button>
                </div>
            </div> */}
        </div>

    );
};

export default Purchase;