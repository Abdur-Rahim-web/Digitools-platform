import React from 'react';
import Card from './Card';

const ProductsCard = ({allCards, setCart, cart, setCartCard, cartCard}) => {
    // console.log(allCards);
    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {
                allCards.map((cards,index) => {
                    // console.log(cards)
                    return <Card key={index} cards={cards} setCart={setCart} cart={cart} cartCard={cartCard} setCartCard={setCartCard}/>;
                })
            }
            
        </div>
    );
};

export default ProductsCard;