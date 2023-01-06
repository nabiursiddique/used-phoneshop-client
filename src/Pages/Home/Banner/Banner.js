import React from 'react';
import bannerImage from '../../../assets/Banner-Image.jpg'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className='mx-5 '>
            <div className="hero glass rounded-2xl mt-4 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='lg:w-1/2 rounded-2xl' src={bannerImage} alt='mobile banner' />
                    <div className='text-white '>
                        <h1 className="text-5xl font-bold">GET USED PHONES</h1>
                        <p className="py-6">We can assure that you will find the best quality used phones.Our phones are all in almost new condition and just </p>
                        <PrimaryButton>Shop Now</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;