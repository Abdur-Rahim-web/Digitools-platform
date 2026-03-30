import React from 'react';

const Workflow = () => {
    return (
        <div className='text-center  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 md:px-20 lg:px-40 mx-auto py-20'>
            <div className='text-center space-y-5 mb-10'>
                <h2 className='font-bold text-5xl'>Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                <button className='btn rounded-full mr-5'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>
                <button className='btn rounded-full bg-clip-text text-transparent'>View Pricing</button>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;