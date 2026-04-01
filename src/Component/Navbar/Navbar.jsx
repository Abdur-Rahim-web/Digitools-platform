import React from 'react';
import { FiShoppingCart } from "react-icons/fi";


const Navbar = ({cart}) => {
    return (
        <div className='navbar flex justify-between items-center shadow-2xl mx-auto lg:px-40'>
            <h2 className='font-bold text-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>

            <div className='space-x-6 hidden md:flex lg:flex'>
                <a href="">Products</a>
                <a href="">Features</a>
                <a href="">Pricing</a>
                <a href="">Testimonials</a>
                <a href="">FAQ</a>
            </div>

            <div className='flex justify-between items-center gap-4'>
                <div className='relative'>
                <a href=""><span className='absolute -top-4 -right-1 text-red-500 font-bold'>{cart}</span><FiShoppingCart /></a>
                </div>
                <a href="">Login</a>
                <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-5'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;