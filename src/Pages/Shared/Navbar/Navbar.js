import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar bg-base-100 text-white">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li className='font-bold uppercase'><Link to='/'>Home</Link></li>
                        <li className='uppercase font-bold' tabIndex={0}>
                            <Link to='/' className="justify-between uppercase font-bold">
                                Category
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2 font-bold">
                                <li className='font-bold uppercase'><Link to='/'>Samsung</Link></li>
                                <li className='font-bold uppercase'><Link to='/'>Iphone</Link></li>
                                <li className='font-bold uppercase'><Link to='/'>Google Pixel</Link></li>
                            </ul>
                        </li>
                        <li className='font-bold uppercase'><Link to='/blogs'>Blogs</Link></li>
                        {user?.uid ?
                            <li className='font-bold uppercase btn-secondary rounded'><button onClick={handleLogout}>LOGOUT</button></li> :
                            <li className='font-bold uppercase btn-secondary rounded'><Link to='/login'>Log In</Link></li>
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl font-bold ">USED PHONE SHOP</Link>
            </div>

            {/* For big screen devices  */}
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 z-10">
                    <li className='font-bold uppercase'><Link to='/'>Home</Link></li>
                    <li className='uppercase font-bold' tabIndex={0}>
                        <Link to='/'>
                            Category
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 font-bold">
                            <li className='font-bold uppercase'><Link to='/'>Samsung</Link></li>
                            <li className='font-bold uppercase'><Link to='/'>Iphone</Link></li>
                            <li className='font-bold uppercase'><Link to='/'>Google Pixel</Link></li>
                        </ul>
                    </li>
                    <li className='font-bold uppercase'><Link to='/blogs'>Blogs</Link></li>
                    {user?.uid ?
                        <li className='font-bold uppercase btn-secondary rounded ml-3'><button onClick={handleLogout}>LOGOUT</button></li> :
                        <li className='font-bold uppercase btn-secondary rounded ml-3'><Link to='/login'>Log In</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;