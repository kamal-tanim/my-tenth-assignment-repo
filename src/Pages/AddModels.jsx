import React from 'react';
import { FaPlus, FaRocket, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { InputField } from '../assets/Styles/styles';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const AddModels = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()

    const handleAddModel = e => {
        e.preventDefault();
        const form = e.target;


        const modelImgFile = form.photo.files[0];
        const formData = new FormData();
        formData.append('image', modelImgFile)
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_host_key}`

        axios.post(image_API_URL, formData)
            .then(imgRes => {
                const imgUrl = imgRes.data.data.url;
                // console.log(imgUrl)

                const data = {
                    name: form.modelName.value,
                    framework: form.framework.value,
                    useCase: form.useCase.value,
                    dataset: form.dataset.value,
                    image: imgUrl,
                    createdBy: form.createdBy.value,
                    createdAt: form.createdAt.value,
                    rating: form.rating.value,
                    description: form.description.value,
                    insertedByEmail: form.insertedByEmail.value,
                }

                // console.log(data);
                axiosSecure.post('/model', data)
                    .then(res => {
                        console.log("Model initialized:", res.data)
                        alert("Model Successfully Uploaded to the Archive.");

                    })
                    .catch(error => {
                        console.log(error);
                    })
            })


    }

    return (
        <div className='min-h-screen bg-[#0d1117] pt-32 pb-20 px-4 flex justify-center items-center relative overflow-hidden'>

            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-5xl z-10"
            >
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
                        Deploy <span className="text-blue-500 text-glow">Intelligence</span>
                    </h2>
                    <p className="text-white/40 tracking-[0.3em] text-xs font-bold mt-3">ARCHIVE UPLOAD INTERFACE V3.1</p>
                </div>

                <form
                    onSubmit={handleAddModel}
                    className="p-8 md:p- bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] shadow-2xl grid grid-cols-2 max-sm:grid-cols-1 gap-x-12 gap-y-8 relative overflow-hidden "
                >
                    {/* Decorative Grid Lines */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                    <div className="col-span-full flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                        <FaInfoCircle className="text-blue-500" />
                        <span className="text-xs font-bold tracking-widest text-white/60 uppercase">System Metadata</span>
                    </div>


                    {/* Left Column */}
                    <InputField>
                        <div className="group !text-white">
                            <input required type="text" className="input !text-white border-white/20" name='modelName' />
                            <span className="highlight" />
                            <span className="bar !bg-blue-500" />
                            <label className="!text-white/50 group-focus:!text-blue-400">Model Name</label>
                        </div>
                    </InputField>

                    <InputField>
                        <div className="group">
                            <input required type="text" className="input !text-white border-white/20" name="framework" />
                            <span className="highlight" />
                            <span className="bar !bg-blue-500" />
                            <label className="!text-white/50">Core Framework</label>
                        </div>
                    </InputField>

                    <InputField>
                        <div className="group">
                            <input required type="text" className="input !text-white border-white/20" name="useCase" />
                            <span className="highlight" />
                            <span className="bar !bg-blue-500" />
                            <label className="!text-white/50">Primary Use Case</label>
                        </div>
                    </InputField>

                    <InputField>
                        <div className="group">
                            <input required type="text" className="input !text-white border-white/20" name="dataset" />
                            <span className="highlight" />
                            <span className="bar !bg-blue-500" />
                            <label className="!text-white/50">Training Dataset</label>
                        </div>
                    </InputField>

                    <InputField>
                        <div className="group relative">
                            <input
                                required
                                type="file"
                                name="photo"
                                className="input !text-white border-white/20 block w-full cursor-pointer file:mr-10"
                            />
                        </div>
                    </InputField>

                    {/* Right Column */}



                    <InputField>
                        <div className="group">
                            <input required type="text" className="input !text-white border-white/20" name="createdBy" />
                            <span className="highlight" />
                            <span className="bar !bg-blue-500" />
                            <label className="!text-white/50">Created By</label>
                        </div>
                    </InputField>

                     {/* here 7  */}
                     <InputField>
                        <div className="group">
                            <input required type="number" min='1' max='5' className="input !text-white border-white/20" name="rating" step="0.1" />
                            <span className="highlight" />
                            <span className="bar !bg-blue-500" />
                            <label className="!text-white/50">Performance Rating (1-5)</label>
                        </div>
                    </InputField>
                    

                    <InputField>
                        <div className="group">
                            <input required type="datetime-local" className="input !text-white border-white/20 [color-scheme:dark]" name="createdAt" />
                            <span className="highlight" />
                            <span className="bar !bg-blue-500" />
                        </div>
                    </InputField>


                        {/* here 9 */}
                        <InputField>
                        <div className="group">
                            <p className="!text-white/50 text-xl">Inserted By</p>
                            <input
                                required
                                type="email"
                                className="input !text-white border-white/20" name="insertedByEmail"
                                defaultValue={user.email}
                                readOnly
                            />    
                        </div>
                    </InputField>
                    

                    <div className="">
                        <InputField>
                            <div className="group">
                                <textarea required className="input !text-white border-white/20 min-h-[100px] pt-4" name="description"></textarea>
                                <span className="highlight" />
                                <span className="bar !bg-blue-500" />
                                <label className="!text-white/50">Technical Architecture Overview</label>
                            </div>
                        </InputField>
                    </div>

                    {/* Futuristic Submit Button */}
                    <div className="col-span-full flex justify-center mt-6">
                        <button
                            type='submit'
                            className="group relative px-12 py-4 bg-blue-600 rounded-full font-bold uppercase tracking-widest text-white overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className='flex items-center gap-3 relative z-10'>
                                <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Initialize Upload
                            </span>
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AddModels;