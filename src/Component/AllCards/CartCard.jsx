import React from 'react';
import Card from './Card';
import { toast } from 'react-toastify';

const CartCard = ({cartCard, setCartCard, setCart, cart}) => {
    // console.log(cartCard, "cartCard");

    // for remove card form cartBtn//
    const handleCartRemovedBtn = (card) => {
        // console.log(card);
        toast(`${card.name} is Removed.`);

        const filteredCard = cartCard.filter(selectedCard => selectedCard.name != card.name );

        setCartCard(filteredCard);

        setCart(cart - setCartCard.length)
    };
    
    return (
        <div>
            {cartCard.length === 0 ?
                <div className='text-center py-20'>
                    <h2 className='font-bold text-2xl'>No Card Selected Yet</h2>
                    <p className='text-gray-500 font-bold'>Go to Products  Tag to Selected Card</p>
                </div> 
                : <div className='space-y-5'>
                <div className="card bg-base-100 w-full shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Your Cart</h2>
    
                        <div>
                            {
                              cartCard.map((card,index) =>{
                                return (
                                        <div key={index} className='flex justify-between items-center rounded-md p-4 m-3 bg-base-300 '>
                                            <div className='flex justify-between items-center gap-4'>
                                                <img className='border rounded-full p-2 w-12 bg-white' src={card.icon} alt="Tools image" />
                                                <div>
                                                    <h2 className='font-bold text-2xl'>{card.name}</h2>
                                                    <p className='font-bold text-gray-500'>$ {card.price}</p>
                                                </div>
                                            </div>
    
                                            <button onClick={() => handleCartRemovedBtn(card)} className='btn text-red-500'>Remove</button>
                                        </div>
                                )
                              })
                            }
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
            </div>}
        </div>
    );
};

export default CartCard;