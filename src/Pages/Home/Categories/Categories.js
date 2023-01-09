import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        {
            category: 'iphone'
        },
        {
            category: 'samsung'
        },
        {
            category: 'pixel'
        }
    ]
    return (
        <div>
            <h1 className="text-4xl text-center font-bold text-white uppercase">Product Categories</h1>
            <div className='mt-10 mx-5 grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                {
                    categories.map((category, ind) =>
                        <Link to='/'>
                            <div key={category.ind} className="card bg-neutral glass text-neutral-content">
                                <div className="card-body items-center text-center">
                                    <h2 className='text-2xl text-white uppercase font-bold'>{category.category}</h2>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;