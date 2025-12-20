import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { AuthInputField } from '../assets/Styles/styles';
import Checkbox from '../Component/Checkbox';
import SocialAuthentication from '../Component/SocialAuthentication';
import useAuth from '../hooks/useAuth';
import { FaUserPlus, FaFingerprint, FaShieldAlt, FaIdCard, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Register = () => {
    const { registerUser, updateUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = `${firstName} ${lastName}`.trim();


        registerUser(email, password)
            .then(() => {

                const userImage = form.photo.files[0];
                const formdata = new FormData();
                formdata.append('image', userImage)
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_host_key}`
                axios.post(image_API_URL, formdata)
                    .then(result => {
                        const imgUrl = result.data.data.url;
                        console.log(imgUrl);
                        const updatedUser = { displayName: name, photoURL: imgUrl }
                        updateUser(updatedUser)
                            .then(() => {
                                const userData = {
                                    email: form.email.value,
                                    image: imgUrl,
                                    firstName: form.firstName.value,
                                    lastName: form.lastName.value
                                }

                                axiosSecure.post('/users', userData)
                                    .then(() => {
                                        Swal.fire({
                                            title: "Access Granted",
                                            text: "Welcome to the Neural Archive. Your account is now active.",
                                            icon: "success",
                                            iconColor: "#3b82f6", // Blue-500 to match your theme
                                            background: "#0a0a0a", // Dark background
                                            color: "#ffffff",
                                            confirmButtonText: "Enter Dashboard",
                                            confirmButtonColor: "#2563eb", // Blue-600
                                            customClass: {
                                                popup: 'rounded-[2rem] border border-white/10 backdrop-blur-md',
                                                title: 'text-2xl font-black uppercase italic tracking-tighter',
                                            },
                                            showClass: {
                                                popup: 'animate__animated animate__zoomIn animate__faster'
                                            },
                                            hideClass: {
                                                popup: 'animate__animated animate__fadeOut animate__faster'
                                            }
                                        });
                                    })
                                navigate(location?.state || '/');
                            })
                            .catch(err => {

                            })

                    })

            })
            .catch((error) => {
                let errorMessage = "An unexpected neural interference occurred.";
                let errorTitle = "System Error";

                if (error.code === 'auth/email-already-in-use') {
                    errorTitle = "Identity Conflict";
                    errorMessage = "This Email is already registered in the archive. Please log in or use a different ID.";
                } else if (error.code === 'auth/weak-password') {
                    errorTitle = "Security Protocol";
                    errorMessage = "Password strength insufficient. Minimum 6 characters required.";
                } else if (error.code === 'auth/invalid-email') {
                    errorTitle = "Format Error";
                    errorMessage = "The provided email format is invalid.";
                }

                // 2. Execute the SweetAlert2 directly
                Swal.fire({
                    title: errorTitle,
                    text: errorMessage,
                    icon: "error",
                    iconColor: "#ef4444",
                    background: "#0a0a0a",
                    color: "#ffffff",
                    confirmButtonText: "Recalibrate",
                    confirmButtonColor: "#3b82f6",
                    customClass: {
                        popup: 'rounded-[2rem] border border-red-500/20 backdrop-blur-md shadow-[0_0_40px_rgba(239,68,68,0.1)]',
                        title: 'text-2xl font-black uppercase tracking-tighter text-red-500',
                    },
                    showClass: {
                        popup: 'animate__animated animate__headShake'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
                });
            });


    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">

            {/* Background Neural Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col md:flex-row overflow-hidden bg-[#0a0a0a] border border-white/10 backdrop-blur-3xl rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.7)] w-full max-w-[1100px] min-h-[750px] z-10"
            >
                {/* LEFT SIDE: Decorative Terminal */}
                <div className="w-full md:w-5/12 bg-gradient-to-br from-[#0D1117] to-[#050505] flex flex-col items-center justify-center text-center px-12 py-12 text-white relative border-r border-white/5 overflow-hidden">
                    <motion.div
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent z-20 pointer-events-none"
                    />

                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-blue-500/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border border-blue-500/20">
                            <FaFingerprint size={48} className="text-blue-500" />
                        </div>
                        <h2 className="text-5xl font-black mb-6 leading-none tracking-tighter italic uppercase">
                            Deploy <br /> <span className="text-blue-500">Identity.</span>
                        </h2>
                        <p className="text-[10px] text-white/30 font-bold tracking-[0.3em] uppercase leading-relaxed max-w-[200px] mx-auto">
                            System initialization required for neural model deployment.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE: Form Interface */}
                <div
                    className="w-full md:w-7/12 flex flex-col items-center justify-center px-10 md:px-20 py-16 bg-[#050505]/40"
                >
                    <div className="mb-10 w-full text-left">
                        <div className="flex items-center gap-2 mb-2 opacity-50">
                            <FaShieldAlt className="text-blue-500 text-[10px]" />
                            <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">New Protocol Establishment</span>
                        </div>
                        <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">Register Here</h1>
                    </div>

                    <div className="w-full space-y-6">
                        <SocialAuthentication />

                        <div className="flex items-center w-full gap-4 opacity-10">
                            <div className="h-px bg-white flex-grow" />
                            <span className="text-[8px] font-black text-white uppercase tracking-[0.5em]">Manual Entry</span>
                            <div className="h-px bg-white flex-grow" />
                        </div>


                        <form
                            onSubmit={handleRegister}>
                            {/* Inputs */}
                            <div className="space-y-4">
                                <div className='flex space-x-2'>
                                    <InputField icon={<FaIdCard />} placeholder="First Name" name="firstName" type="text" />
                                    <InputField icon={<FaIdCard />} placeholder="Neural Email" name="lastName" type="text" />
                                </div>
                                <InputField icon={<FaIdCard />} placeholder="Your Email" name="email" type="email" />
                                <InputField icon={<FaShieldAlt />} placeholder="Password" name="password" type="password" />
                                <InputField icon={<FaIdCard />} placeholder="Upload a Image" name="photo" type="file" />
                            </div>

                            <div className='flex items-center bg-white/[0.03] border border-white/5 p-5 w-full gap-x-4 rounded-3xl transition-all hover:bg-white/[0.05] mt-5'>
                                <Checkbox />
                                <p className='text-[10px] text-white/40 font-bold uppercase tracking-wider text-left'>
                                    Confirm neural signature storage and <span className="text-blue-500">Clearance Terms</span>.
                                </p>
                            </div>
                            <button className="group mt-10 w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all hover:bg-blue-600 hover:text-white shadow-xl hover:shadow-blue-600/20 active:scale-[0.98]">
                                <span className="flex items-center justify-center gap-3">
                                    <FaUserPlus /> Register
                                </span>
                            </button>
                        </form>


                    </div>



                    {/* THE LOGIN PATH: Now at the bottom of the form */}
                    <div className="mt-8 flex flex-col items-center gap-2">
                        <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Already have an account? </p>
                        <Link
                            to='/login'
                            state={location?.state}
                            className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-blue-500 hover:text-white transition-all duration-300"
                        >
                            Login here

                        </Link>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

// Sub-component for styled inputs
const InputField = ({ icon, ...props }) => (
    <div className="relative group">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-blue-500 transition-colors">
            {icon}
        </div>
        <input
            {...props}
            required
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white text-sm placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all"
        />
    </div>
);

export default Register;