import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { AuthInputField } from '../assets/Styles/styles';
import SocialAuthentication from '../Component/SocialAuthentication';
import useAuth from '../hooks/useAuth';
import { FaShieldAlt, FaKey } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {
    const { loginUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((result) => {
                // console.log('Access Granted:', result.user)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Logged in successfully"
                });
                navigate(location?.state || '/')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">

            {/* Dynamic Background Accents */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] w-full max-w-[1000px] min-h-[600px] z-10"
            >
                {/* LEFT SIDE: Form Section */}



                <div className="w-full md:w-7/12 flex flex-col items-center justify-center px-8 md:px-16 py-12 text-center relative order-2 md:order-1">
                    <div className="mb-8">
                        <h1 className="text-3xl font-black text-white mb-2 tracking-tight">ACCESS ARCHIVE</h1>
                        <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full" />
                    </div>

                    <div className="w-full mb-6">
                        <SocialAuthentication />
                    </div>

                    <form onSubmit={handleLogin}>

                        <div className="flex items-center w-full mb-8 gap-4">
                            <div className="h-px bg-white/10 flex-grow" />
                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Neural Link</span>
                            <div className="h-px bg-white/10 flex-grow" />
                        </div>

                        {/* Form Inputs */}
                        <div className="w-full space-y-4">
                            <AuthInputField>
                                <input placeholder="Neural ID (Email)" name='email' type="text" className="input !bg-white/5 !border-white/10 !text-white placeholder:text-white/20" required />
                            </AuthInputField>
                            <AuthInputField>
                                <input placeholder="Passkey" name='password' type="Password" className="input !bg-white/5 !border-white/10 !text-white placeholder:text-white/20" required />
                            </AuthInputField>
                        </div>

                        <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-blue-400/60 mt-4 hover:text-blue-400 transition-colors">
                            Recover Access Key
                        </button>

                        <button className="group mt-8 w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-blue-500/40 relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10 flex items-center justify-center gap-2 uppercase">
                                Authorize Login
                            </span>
                        </button>

                        <p className="mt-8 text-white/30 text-xs font-medium tracking-tight">
                            New entity? <Link state={location?.state} to='/register' className='text-blue-400 hover:underline'>Register identity</Link>
                        </p>
                    </form>
                </div>



                {/* RIGHT SIDE: Visual Info Panel */}
                <div className="w-full md:w-5/12 bg-gradient-to-br from-indigo-600 via-blue-700 to-black flex flex-col items-center justify-center text-center px-10 py-12 text-white relative order-1 md:order-2">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-2xl">
                            <FaShieldAlt size={35} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                        </div>
                        <h2 className="text-4xl font-black mb-4 leading-tight tracking-tighter uppercase italic">
                            Welcome <br /> Back.
                        </h2>
                        <p className="text-sm mb-10 text-blue-100/60 font-medium leading-relaxed max-w-[220px] mx-auto">
                            Re-initialize your session to manage your neural inventory.
                        </p>
                    </motion.div>

                    <div className="absolute bottom-10 text-[10px] font-bold text-white/20 tracking-[0.3em] uppercase">
                        System Secure v4.0.2
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default Login;