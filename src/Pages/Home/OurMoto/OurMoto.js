import React from 'react';
import { Link } from 'react-router-dom';
import mobile from '../../../assets/phone-background.jpg'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const OurMoto = () => {
    return (
        <div className="my-8 hero min-h-screen " style={{ backgroundImage: `url(${mobile})` }}>
            <div className="hero-content text-center glass lg:p-10">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Unbeatable Price and Quality</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton><Link to='/login'>Join With Us</Link></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default OurMoto;