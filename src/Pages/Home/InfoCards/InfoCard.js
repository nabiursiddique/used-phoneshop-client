import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon } = card;
    return (
        <div className="card card-side glass  rounded-2xl">
            <figure><img className='w-2/3 rounded-2xl' src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;