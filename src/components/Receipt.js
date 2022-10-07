import React from 'react'
import { useSelector } from "react-redux";
// import { useState } from 'react';


const Receipt = () => {

    // const [boughtProducts, setBoughtProducts] = useState([])
    const products = useSelector((state) => state.budget.items);
    
    let boughtProducts=[];
    products.forEach(product =>{
        if(!(product.amount === 0)){
            boughtProducts.push(product);
        }
    })
  
    return (
        <div className='mx-3 lg:mx-0 mt-2 bg-white'>
            <div className='p-8'>
                <h1 className='font-bold text-3xl text-center'>Your Receipt</h1>
                <div>
                    {boughtProducts.map(product =>(
                        <div className='max-w-[280px] mx-auto text-center flex flex-row text-base '>
                            <div className='flex-1 text-left'>{product.name}</div>
                            <div className='w-12 text-left'>{product.amount}</div>
                            <div className='w-12 text-right'>{product.priceUSD}</div>
                        </div>
                    ))}
                    <div>total value</div>
                </div>
            </div>
        </div>
    )
}

export default Receipt;