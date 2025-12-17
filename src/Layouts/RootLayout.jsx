import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/footer';

const RootLayout = () => {
    return (
       <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
       </div>
    );
};

export default RootLayout;