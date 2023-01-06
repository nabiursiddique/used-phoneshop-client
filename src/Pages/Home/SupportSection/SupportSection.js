import React from 'react';
import callIcon from '../../../assets/Icons/call.png';
import chatIcon from '../../../assets/Icons/chat.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const SupportSection = () => {
    return (
        <div className='my-14'>
            <div>
                <h1 className='text-4xl text-center font-bold text-white'>WELCOME TO OUR SUPPORT CENTER. WE'RE HERE TO HELP.</h1>
                <h2 className='lg:text-xl text-center font-semibold text-white tracking-widest mt-4'>ALWAYS ON YOUR SIDE WHEN YOU NEED HELP.</h2>
            </div>
            {/* Get Support card */}
            <div className='grid grid-cols-2 gap-8 my-8 mx-5'>
                <div className="card lg:card-side glass shadow-xl">
                    <figure><img className='w-1/3' src={callIcon} alt="Album" /></figure>
                    <div className="card-body w-full">
                        <p>HAVE ANY DOUBTS?</p>
                        <h2 className="card-title">CALL US NOW</h2>
                        <p>This Number is Toll Free</p>
                        <p>0000 - 123 - 456789</p>
                        <div className="card-actions justify-start">
                            <button className="btn hover:bg-gradient-to-r from-gray-400 to-gray-600 glass text-white">CALL NOW</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side glass shadow-xl">
                    <figure><img className='w-1/3' src={chatIcon} alt="Album" /></figure>
                    <div className="card-body w-full">
                        <p>WANNA TALK TO US?</p>
                        <h2 className="card-title">LIVE CHAT NOW</h2>
                        <p>If you need any help of us just call us or email</p>
                        <div className="card-actions justify-start">
                            <button className="btn hover:bg-gradient-to-r from-gray-400 to-gray-600 glass text-white">MESSAGE NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportSection;