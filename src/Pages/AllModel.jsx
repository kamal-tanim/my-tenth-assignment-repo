import React from 'react';
import demoModels from "../../public/demoModels.json"
import { MyCard, MySearch } from '../assets/Styles/styles';



const AllModel = () => {

    return (
        <div className='m-10'>
            <div className='flex items-center relative mb-20'>
                <h2 className='text-6xl absolute left-1/2 -translate-x-1/2 '>All of Our Models</h2>
                <div className="ml-auto">
                    <MySearch>
                        <div className="container">
                            <div className="search-container">
                                <input className="input" type="text" />
                                <svg viewBox="0 0 24 24" className="search__icon">
                                    <g>
                                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </MySearch>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-5'>
                {demoModels.map((model) => (
                    <MyCard><div className='card '>
                        <div className='p-3 space-y-2'>
                            <img src="" alt="" className='h-50 w-full rounded-lg bg-white ' />

                            <p className='text-lg font-semibold p-0.5 rounded '>Name:{model.name}</p>
                            <p className='text-lg font-semibold p-0.5 rounded '>Frame Work:{model.framework} </p>
                            <p className='text-lg font-semibold p-0.5 rounded '>Use Case:{model.useCase} </p>
                            <p className='text-lg font-semibold p-0.5 rounded '>Purchased:{model.purchased}</p>

                            <button className='w-full rounded-full bg-indigo-600 text-white px-5 py-2 transition duration-300 hover:bg-indigo-700  hover:scale-105 '>More details</button>
                        </div>


                    </div></MyCard>

                ))}
            </div>

        </div>
    );
};

export default AllModel;