import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const AllCard = ({toolsPromise}) => {
    // console.log(toolsPromise)
    const allCards = use(toolsPromise)
    // console.log(allCard)
    return (
        <div className='px-5 md:px-20 lg:px-40'>
            gjklkfjk{allCards.length}

            
            <ProductsCard allCards={allCards}/>
        </div>
    );
};

export default AllCard;