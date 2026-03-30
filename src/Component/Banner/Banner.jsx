import React from 'react';
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
    return (
        <div className='banner flex justify-between items-center shadow-2xl mx-auto px-40 py-20 gap-5'>

            <div className='space-y-4'>
                <div className="badge badge-info">
                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle></g></svg>
                    New: AI-Powered Tools Available
                </div>
                
                <h1 className='font-bold text-6xl leading-snug'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-gray-500'>Access premium AI tools, design assets, templates, and productivity <br />
                   software—all in one place. Start creating faster today. <br />Explore Products</p>
                
                <div className=''>
                    <button className='btn btn-primary mr-3 rounded-full'>Explore Products</button>
                    <button className='btn rounded-full'><CiPlay1 />Watch Demo</button>
                </div>
            </div>

            <img src="/src/assets/banner.png" alt="Tools image" />
        </div>
    );
};

export default Banner;