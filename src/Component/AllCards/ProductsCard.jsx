import React from 'react';
import Card from './Card';

const ProductsCard = ({allCards}) => {
    // console.log(allCards);
    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {
                allCards.map((cards) => {
                    // console.log(cards)
                    return <Card cards={cards}/>;
                })
            }
            
        </div>
    );
};

export default ProductsCard;