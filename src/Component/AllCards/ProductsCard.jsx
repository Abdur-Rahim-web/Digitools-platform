import React from 'react';

const ProductsCard = ({allCards}) => {
    // console.log(cards)
    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {
                allCards.map((cards) => {
                    // console.log(cards)
                    return <div className="card bg-base-100 shadow-sm">
                                <div className="card-body relative">
                                    <span className="badge badge-xs badge-warning absolute top-2 right-2">{cards.tagType}</span>
                                    <div className="space-y-3">
                                    <h2 className="text-3xl font-bold">{cards.name}</h2>
                                    <p>{cards.description}</p>
                                    <span className="text-xl">${cards.price}/{cards.period}</span>
                                    </div>
                                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{cards.features[0]}</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{cards.features[1]}</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{cards.features[2]}</span>
                                    </li>
                    
                                    </ul>
                                    <div className="mt-6">
                                    <button className="btn btn-primary btn-block">Buy Now</button>
                                    </div>
                                </div>
                           </div>
                })
            }
            
        </div>
    );
};

export default ProductsCard;