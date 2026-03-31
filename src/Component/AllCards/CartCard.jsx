import React from 'react';

const CartCard = () => {
    return (
        <div className='space-y-5'>
            <div className="card bg-base-100 w-full shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">Your Cart</h2>

                    <div>

                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-500 font-semibold'>Total</p>
                        <h2 className='font-semibold text-2xl'>$0</h2>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;