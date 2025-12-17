import React from 'react';
import { Link } from 'react-router';
import { AuthInputField, InputField } from '../assets/Styles/styles';
import SocialAuthentication from '../Component/SocialAuthentication';


const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            {/* Main Container set to 10/12 width */}
            <div className="flex overflow-hidden bg-white rounded-[30px] shadow-2xl w-10/12 max-w-[900px] min-h-[500px]">

                {/* LEFT SIDE: Sign In Form */}
                <div className="w-1/2 flex flex-col items-center justify-center px-12 py-8 text-center bg-white">

                    <h1 className="text-3xl font-bold text-gray-800 mb-3">Login With</h1>

                    <div>
                        <SocialAuthentication></SocialAuthentication>
                    </div>

                    <span className="text-[13px] text-gray-400 mb-4">or use your email to login</span>
                    
                    {/* Inputs */}
                    <div className="w-full space-y-3">
                        <AuthInputField>
                            <input placeholder="Username" type="text" className="input" required />
                        </AuthInputField>
                        <AuthInputField>
                            <input placeholder="Password" type="Password" className="input" required />
                        </AuthInputField>

                    </div>

                    <button className="text-sm text-indigo-500 my-5 hover:text-indigo-700 transition font-medium">
                        Forgot your password?
                    </button>

                    {/* Gradient Sign In Button */}
                    <button className="px-14 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-bold text-xs uppercase tracking-widest active:scale-95 transition-all shadow-lg hover:shadow-indigo-200">
                        Login
                    </button>
                    <div>
                        <p>Don’t have an account? <Link to='/register'> <span className='text-blue-400'>Register here</span></Link></p>
                    </div>
                </div>

                {/* RIGHT SIDE: Purple Content */}
                <div className="w-1/2 bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 flex flex-col items-center justify-center text-center px-12 py-8 text-white">
                    <h2 className="text-3xl font-bold mb-4 leading-tight">Welcome to Our Platform!</h2>
                    <p className="text-sm mb-10 text-indigo-50 font-light leading-relaxed">
                        We’re excited to have you here. Please login or register to get started.
                    </p>

                    {/* Ghost Button */}



                </div>

            </div>
        </div>

    );
};

export default Login;