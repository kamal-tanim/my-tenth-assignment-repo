import Theme from './Theme';
import Cart from './Cart';
import LoginRegistration from './LoginRegistration';
import { NavLink } from 'react-router';
import { useState } from 'react';
import { MenuToggleBtn } from '../assets/Styles/styles';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navLinks = <>

        <li className="text-lg font-semibold"><NavLink to='/'>Home</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to='/allModels'>All Model</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to='/addModels'>Add Model</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to='/contact'>Contact</NavLink></li>
        {/* <li><Link to='/'></Link></li> */}

    </>
    return (
        <div className='flex justify-between items-center px-5 py-3 border-b-2'>
            <div className=' flex gap-2'>
                <div className="relative lg:hidden">
                    <MenuToggleBtn>
                        <label className="hamburger">
                            <input
                                type="checkbox"
                                checked={open}
                                onChange={() => setOpen(!open)}
                            />
                            <svg viewBox="0 0 32 32">
                                <path
                                    className="line line-top-bottom"
                                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                />
                                <path className="line" d="M7 16 27 16" />
                            </svg>
                        </label>
                    </MenuToggleBtn>
                    <div>
                        {open && (
                            <div className="absolute mt-3 bg-white text-black p-4 shadow-xl rounded-lg space-y-2 w-40 z-50">
                                <ul className='space-y-1'>

                                    {
                                        navLinks
                                    }
                                    <li className="text-lg font-semibold"><NavLink to='/purchase'>My Purchase</NavLink></li>
                                    <li className="text-lg font-semibold"><NavLink to='/profile'>Profile</NavLink></li>
                                    <li className="text-lg font-semibold">Logout</li>
                                    <li>
                                        <Theme></Theme>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-xl text-center max-sm:w-50 max-sm:absolute max-sm:left-1/2 max-sm:-translate-x-1/2'>AI Model Inventory Manager</h2>
                </div>
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 max-sm:hidden items-center'>
                <ul className='flex gap-3'>
                    {navLinks}

                </ul>
            </div>
            <div className='flex items-center gap-4'>
                <div className='max-sm:hidden'>
                    <Cart></Cart>
                </div>
                <div className='max-sm:hidden'>
                    <Theme></Theme>
                </div>
                <div>
                    <LoginRegistration></LoginRegistration>
                </div>

            </div>
        </div>
    );
};

export default Navbar;