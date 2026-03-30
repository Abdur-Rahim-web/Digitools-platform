import React from 'react';
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
    return (
        <div className='banner flex flex-col md:flex-row justify-between items-center shadow-2xl mx-auto px-5 lg:px-40 py-20 gap-5'>

            <div className='space-y-4 md:w-1/2 lg:w-full order-2 md:order-1'>
                {/* badge form daigy ui */}
                <div className="badge badge-info rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                    <svg className="size-[1em] text-[#4F39F6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle></g></svg>
                    New: AI-Powered Tools Available
                </div>
        
                <h1 className='font-bold text-2xl md:text-4xl lg:text-6xl leading-snug'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-gray-500'>Access premium AI tools, design assets, templates, and productivity <br />
                   software—all in one place. Start creating faster today. <br />Explore Products</p>
                
                <div className='text-center md:text-left '>
                    <button className='btn btn-primary mr-3 mb-3 md:mb-0 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-5 ms:flex gap-3 items-center'>Explore Products</button>
                    <button className='btn rounded-full border-[#9514FA] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'><CiPlay1 className='text-[#4b087e]' />Watch Demo</button>
                </div>
            </div>

            <img className='md:w-90 lg:w-full order-1 md:order-2' src="/src/assets/banner.png" alt="Tools image" />
        </div>
    );
};

export default Banner;