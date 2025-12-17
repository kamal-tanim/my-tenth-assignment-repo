import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Cart = () => {
  return (

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <FaOpencart className='w-10 h-7'></FaOpencart>
          <span className="badge badge-sm indicator-item border-blue-500 ">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Models </span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <NavLink to='/purchase'>Purchase</NavLink>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Cart;