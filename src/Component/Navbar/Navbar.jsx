import React from 'react';
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {
    return (
        <div className='navbar flex justify-between items-center shadow-2xl mx-auto px-40'>
            <h2>DigiTools</h2>

            <div className='space-x-6'>
                <a href="">Products</a>
                <a href="">Features</a>
                <a href="">Pricing</a>
                <a href="">Testimonials</a>
                <a href="">FAQ</a>
            </div>

            <div className='flex justify-between items-center gap-4'>
                <a href=""><FiShoppingCart /></a>
                <a href="">Login</a>
                <button className='btn btn-primary'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;