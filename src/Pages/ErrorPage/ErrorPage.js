import React from 'react';
import { Link } from 'react-router-dom';
import errorGIF from '../../assets/error 404.gif'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const ErrorPage = () => {
    return (
        <div >
            <img className='mx-auto w-1/3 h-1/2' src={errorGIF} alt="" />
            <div className='flex justify-center'>
                <PrimaryButton><Link to='/'>Go Home</Link></PrimaryButton>
            </div>
        </div>
    );
};

export default ErrorPage;