import React from 'react';

const Stats = () => {
    return (
        <div className='grid md:grid-cols-5 lg:grid-cols-5 gap-12 text-center flex-row items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 md:px-20 lg:px-40 mx-auto py-20'>
            <div>
                <h2 className='font-bold text-6xl pb-4'>50K+</h2>
                <p>Active Users</p>
            </div>

             <hr className='rotate-90 w-20 hidden md:flex'/>

            <div>
                <h2 className='font-bold text-6xl pb-4'>200+</h2>
                <p>Premium Tools</p>
            </div>

             <hr className='rotate-90 w-20 hidden md:flex'/>

            <div>
                <h2 className='font-bold text-6xl pb-4'>4.9</h2>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default Stats;