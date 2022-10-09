import React from 'react'
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import millify from "millify";
import { useDispatch } from 'react-redux';
import { setTotal } from "../redux/budgetSlice"


const Receipt = () => {

    const products = useSelector((state) => state.budget.items);
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTotal(totalUSD))   
    })

    let boughtProducts=[];
    let totalUSD = 0;
    products.forEach(product =>{
        
        if(!(product.amount === 0)){
            boughtProducts.push(product);
            totalUSD += product.priceUSD * product.amount;

        }
    })
  
    return (
        <div className='mx-3 lg:mx-0 mt-2 bg-white'>
            <div className='p-8'>
                <h1 className='font-bold text-3xl text-center mb-4'>Your Receipt</h1>
                <div>
                    {boughtProducts.map(product =>(
                        <div key={product.id} className='max-w-[280px] mx-auto text-center flex flex-row text-base mt-1 font-semibold'>
                            <div className='flex-1 text-left'>{product.name}</div>
                            <div className='w-16 font-bold text-left'>x{millify(product.amount)}</div>
                            <div className='w-16 text-right'>${millify(product.priceUSD * product.amount)}</div>
                        </div> 
                    ))}
                    <div className='max-w-[280px] mx-auto border-t  mt-2.5 flex justify-between'>
                        <div className='border-gray-900 font-bold text-md'>TOTAL</div>
                        <div className='text-base font-semibold'>${millify(totalUSD,{precision: 3})}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Receipt;