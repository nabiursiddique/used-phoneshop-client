import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import OurMoto from '../OurMoto/OurMoto';
import SupportSection from '../SupportSection/SupportSection';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurMoto></OurMoto>
            <SupportSection></SupportSection>
        </div>
    );
};

export default Home;