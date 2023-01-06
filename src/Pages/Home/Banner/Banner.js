import React from 'react';
import bannerImage from '../../../assets/Banner-Image.jpg'

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img className='lg:w-1/2 rounded-2xl' src={bannerImage} alt='mobile banner' />
                <div>
                    <h1 className="text-5xl font-bold">Get Used Phones</h1>
                    <p className="py-6">We can assure that you will find the best quality used phones.Our phones are all in almost new condition and just </p>
                    <button className="btn btn-wide ">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;