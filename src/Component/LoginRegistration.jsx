import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { NavLink } from 'react-router';

const LoginRegistration = () => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className='border rounded-full p-2'>
                    <FaUserTie className='h-6 w-6' />
                </div>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                <NavLink to='/profile'>Profile</NavLink>
                <li className='btn btn-primary'>Logout</li>
            </ul>
        </div>
    );
};

export default LoginRegistration;