import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import OurMoto from '../OurMoto/OurMoto';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurMoto></OurMoto>
        </div>
    );
};

export default Home;