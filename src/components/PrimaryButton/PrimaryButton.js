import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-wide rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 hover:glass">{children}</button>
    );
};

export default PrimaryButton;