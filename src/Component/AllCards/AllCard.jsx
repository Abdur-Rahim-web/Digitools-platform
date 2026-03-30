import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const AllCard = ({toolsPromise}) => {
    // console.log(toolsPromise)
    const allCards = use(toolsPromise)
    // console.log(allCard)
    return (
        <div className='px-5 md:px-20 lg:px-40 py-20'>
            <div className='text-center space-y-5'>
                <h2 className='font-bold text-5xl'>Premium Digital Tools</h2>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='text-center mt-5'>
                <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-5'>Products</button>
                <button className='btn rounded-full'>Cart (2)</button>
            </div>
            gjklkfjk{allCards.length}

            
            <ProductsCard allCards={allCards}/>
        </div>
    );
};

export default AllCard;