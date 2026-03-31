import React, { use, useState } from 'react';
import ProductsCard from './ProductsCard';
import CartCard from './CartCard';

const AllCard = ({toolsPromise, setCart, cart}) => {
    // console.log(toolsPromise)
    const allCards = use(toolsPromise)
    // console.log(allCard)

    //btn toggling//
    const [productsBtn, setProductsBtn] = useState("Products");
    // console.log(productsBtn,"productsBtn")

    // for CartBtn//
    const [cartCard, setCartCard] = useState([]);
    return (
        <div className='px-5 md:px-20 lg:px-40 py-20'>
            <div className='text-center space-y-5'>
                <h2 className='font-bold text-5xl'>Premium Digital Tools</h2>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='text-center my-8'>
                <button onClick={() => setProductsBtn("Products")} className={`btn rounded-full rounded-r-none ${productsBtn === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-5" : ""}`}>Products</button>
            <button onClick={() => setProductsBtn("Cart")} className={`btn rounded-full rounded-l-none ${productsBtn === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-5" : ""}`}>Cart ({cartCard.length})</button>
            </div>
            

            
            {productsBtn === "Products" ?
             <ProductsCard allCards={allCards} setCart={setCart} cart={cart} cartCard={cartCard} setCartCard={setCartCard} />
              :
             <CartCard cartCard={cartCard} setCartCard={setCartCard} setCart={setCart} cart={cart} />
            }
        </div>
    );
};

export default AllCard;