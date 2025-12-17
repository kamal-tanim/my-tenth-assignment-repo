import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { InputField } from '../assets/Styles/styles';

const AddModels = () => {

    const handleAddModel = e => {
        e.preventDefault();
           const framework = e.target.framework.value;
    const useCase = e.target.useCase.value;
    const dataset = e.target.dataset.value;
    const image = e.target.image.value;
    const createdBy = e.target.createdBy.value;
    const createdAt = e.target.createdAt.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;

    console.log({
      framework,
      useCase,
      dataset,
      image,
      createdBy,
      createdAt,
      rating,
      description
    });
    }

    return (
        <div className='max-w-10/12 mx-auto my-10'>
            <form
                onSubmit={handleAddModel}
                className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-md grid grid-cols-2 gap-6">
                <h2 className="col-span-2 text-2xl font-bold">Add New Model</h2>

                {/* Left Column */}
                <InputField >
                    <div className="group">
                        <input required type="text" className="input" name='modelName' />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Model name</label>
                    </div>
                </InputField>
                <InputField>
                    <div className="group">
                        <input required type="text" className="input" name="framework" />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Framework</label>
                    </div>
                </InputField>

                <InputField>
                    <div className="group">
                        <input required type="text" className="input" name="useCase" />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Use Case</label>
                    </div>
                </InputField>

                <InputField>
                    <div className="group">
                        <input required type="text" className="input" name="dataset" />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Dataset</label>
                    </div>
                </InputField>

                {/* Right Column */}
                <InputField>
                    <div className="group">
                        <input required type="text" className="input" name="image" />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Image URL</label>
                    </div>
                </InputField>

                <InputField>
                    <div className="group">
                        <input required type="email" className="input" name="createdBy" />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Your Email</label>
                    </div>
                </InputField>

                <InputField>
                    <div className="group">
                        <input required type="datetime-local" className="input" name="createdAt" />
                        <span className="highlight" />
                        <span className="bar" />
                        
                    </div>
                </InputField>

                <InputField>
                    <div className="group">
                        <input required type="number" className="input" name="rating" step="0.1" />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Rating</label>
                    </div>
                </InputField>

                <InputField>
                    <div className="group">
                        <textarea required className="input" name="description"></textarea>
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Description</label>
                    </div>
                </InputField>


                {/* Centered Submit Button */}
                <div className="col-span-2 flex justify-center">
                    <button type='submit' className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors ">
                        <span className='flex items-center'><FaPlus />Add model</span>
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddModels;