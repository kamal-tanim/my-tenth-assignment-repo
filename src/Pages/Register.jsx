import React from 'react';
import { Link } from 'react-router';
import { AuthInputField, GoogleBtn } from '../assets/Styles/styles';
import Checkbox from '../Component/Checkbox';
import SocialAuthentication from '../Component/SocialAuthentication';


const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen p-6 font-sans">
            {/* Main Container set to 10/12 width */}
            <div className="flex overflow-hidden bg-white rounded-[30px] shadow-2xl w-10/12 max-w-[900px] min-h-[500px]">

                {/* LEFT SIDE: Purple Content (Welcome Back) */}
                <div className="w-1/2 bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-800 flex flex-col items-center justify-center text-center px-12 py-8 text-white">
                    <h2 className="text-3xl font-bold mb-4 leading-tight">Hello, Friend!</h2>
                    <p className="text-sm mb-10 text-indigo-50 font-light leading-relaxed">
                        Ready to explore? Log in if you already have an account, or sign up to join us.
                    </p>
                </div>

                {/* RIGHT SIDE: Create Account Form */}
                <div className="w-1/2 flex flex-col items-center justify-center px-12 py-8 text-center bg-white">
                    <h1 className="text-3xl font-bold text-gray-800 mb-3">Create Account With</h1>

                    <div>
                        <SocialAuthentication></SocialAuthentication>
                    </div>

                    <span className="text-[13px] text-gray-400 mb-4">or use your email for registration</span>

                    {/* Inputs */}
                    <div className="w-full space-y-3">
                        <AuthInputField>
                            <input placeholder="Your Email" type="email" className="input" required />
                        </AuthInputField>
                        <AuthInputField>
                            <input placeholder="Password" type="Password" className="input" required />
                        </AuthInputField>
                        <AuthInputField>
                            <input placeholder="Image Url" className="input" required />
                        </AuthInputField>

                        <div className='flex items-center bg-blue-100  p-2 w-11/12 gap-x-2 rounded-2xl mx-auto'>
                            <Checkbox></Checkbox>
                            <p className=''>I agree to the Terms & Conditions.</p>
                        </div>

                    </div>
                    <button className="mt-6 px-14 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-bold text-xs uppercase tracking-widest active:scale-95 transition-all shadow-lg hover:shadow-purple-200">
                        Register
                    </button>
                    <div>
                        <p>Already have an account? <Link to='/login'> <span className='text-blue-400'>Login</span></Link></p>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Register;