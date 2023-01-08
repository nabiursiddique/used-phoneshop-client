import React from 'react';
import loadingAnimation from '../../assets/Loading Animation.gif';

const LoadingAnimation = () => {
    return (
        <div className='flex justify-center items-center h-[95vh]'>
            <img className=' w-32' src={loadingAnimation} alt="loading animation" />
        </div>
    );
};

export default LoadingAnimation;