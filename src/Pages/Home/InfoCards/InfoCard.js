import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon } = card;
    return (
        <div className="card card-side glass rounded-2xl">
            <figure>
                <img className='w-2/3 rounded-2xl' src={icon} alt="infocard" />
            </figure>
            <div className="card-body ">
                <h2 className="text-2xl font-bold p-0">{name}</h2>
                <p className='p-0'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;