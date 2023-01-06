import React from 'react';
import { Link } from 'react-router-dom';
import mobile from '../../../assets/phone-background.jpg'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const OurMoto = () => {
    return (
        <div className="my-14 hero min-h-screen " style={{ backgroundImage: `url(${mobile})`, backgroundAttachment: "fixed" }}>
            <div className="hero-content text-center glass lg:p-10">
                <div className="max-w-md text-white">
                    <h1 className="text-5xl font-bold">Unbeatable Price and Quality</h1>
                    <p className="py-6">We are trying to give the best quality used phone to all of our customers.We always try to sell those used phones which are in a great condition and not used that much.</p>
                    <PrimaryButton><Link to='/login'>Join With Us</Link></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default OurMoto;