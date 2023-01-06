import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-wide hover:bg-gradient-to-r from-gray-400 to-gray-600 glass text-white">{children}</button>
    );
};

export default PrimaryButton;