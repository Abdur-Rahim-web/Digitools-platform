import React from 'react';


const Steps = () => {
    return (
        <div className='px-5 md:px-20 lg:px-40 py-20 bg-base-200'>
            <div className='text-center space-y-3 mb-10'>
                <h2 className='font-bold text-6xl'>Get Started in 3 Steps</h2>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='card grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card bg-base-100 card-xl shadow-2xl relative">
                    <div className="badge badge-primary rounded-full font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 absolute top-5 right-5">01</div>
                    <div className="card-body text-center flex flex-1 items-center">
                        <img className='w-1/3 border-2 border-[#4F39F6] bg-[#655e9d2f] rounded-full p-4 ' src="/src/assets/user.png" alt="user image" />
                        <h2 className="card-title font-bold text-3xl">Create Account</h2>
                        <p className='text-gray-500 '>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                <div className="card bg-base-100 card-xl shadow-2xl relative">
                    <div className="badge badge-primary rounded-full font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 absolute top-5 right-5">02</div>
                    <div className="card-body text-center flex flex-1 items-center">
                        <img className='w-1/3 border-2 border-[#4F39F6] bg-[#655e9d2f] rounded-full p-4 ' src="/src/assets/package.png" alt="user image" />
                        <h2 className="card-title font-bold text-3xl">Choose Products</h2>
                        <p className='text-gray-500 '>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>

                <div className="card bg-base-100 card-xl shadow-2xl relative">
                    <div className="badge badge-primary rounded-full font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 absolute top-5 right-5">03</div>
                    <div className="card-body text-center flex flex-1 items-center">
                        <img className='w-1/3 border-2 border-[#4F39F6] bg-[#655e9d2f] rounded-full p-4 ' src="/src/assets/rocket.png" alt="user image" />
                        <h2 className="card-title font-bold text-3xl">Start Creating</h2>
                        <p className='text-gray-500 '>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;