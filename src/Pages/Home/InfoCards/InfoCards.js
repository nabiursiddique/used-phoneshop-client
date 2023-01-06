import React from 'react';
import InfoCard from './InfoCard';
import support from '../../../assets/Animated Icons/support.gif'
import truck from '../../../assets/Animated Icons/truck.gif'
import sales from '../../../assets/Animated Icons/sales.gif'

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Free Shipping',
            description: 'We provide worldwide free shipping at the door of yours',
            icon: truck
        },
        {
            id: 2,
            name: 'Official Discounts',
            description: "We provide The best deals and discounts that you can't even imagine",
            icon: sales
        },
        {
            id: 3,
            name: 'Customer Support',
            description: 'We provide 24/7 support for all of our customer',
            icon: support
        }
    ]
    return (
        <div className='my-14 mx-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white'>
            {
                cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;