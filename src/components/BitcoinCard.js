import bitcoinlogoV3 from '../assets/bitcoin_V3.png'
// import bitcoinlogoV1 from '../assets/bitcoin-logo-2010-v1.png'
// import bitcoinlogoV2 from '../assets/bitcoin-logo-v2.png'
// import bitcoinAccepted from '../assets/bitcoin_accpeted_here.png'
import { useEffect, useState } from 'react';

import { yearStats } from "../redux/budgetSliceData"

import { useDispatch, useSelector } from 'react-redux';
import { selectYear, createBudget } from '../redux/budgetSlice'



function BitcoinCard() {

    const [selectedYear,setSelectedYear] = useState('Now');
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(selectYear(selectedYear));
    });

    useEffect(()=>{
        dispatch(createBudget({choosedBtcPrice}))
    })

    const nowBtcPrice = useSelector(state => state.budget.nowBtcPrice)

    let choosedBtcPrice = null;
    if(!(selectedYear === 'Now')){
        choosedBtcPrice = yearStats[Number(selectedYear.slice(2))-10]
    }else{
        if(!(nowBtcPrice === null)){
        choosedBtcPrice = nowBtcPrice.market_data.current_price.usd;
        }
    }



    return (
        <div className='bg-white py-10 mt-1'>
            <div className="flex flex-col items-center justify-center ">
                <img className='w-32 rounded-full mb-5' alt="" src={bitcoinlogoV3} />
                <h1 className='text-[#F7931A] font-bold text-2xl'>Spend 1 Bitcoin 
                {selectedYear === 'Now' ? "": ' in '+selectedYear}</h1>

                <div className='mt-4'>
                    <select onChange={(e)=> {
                        setSelectedYear(e.target.value);
                        }} id="years" className="bg-white border border-gray-300 text-gray-800 font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
                        <option defaultValue='Now'>Now</option>
                        {yearStats.map((price,index) =>(
                            <option key={index} value={index+2010}>{index+2010}</option>
                        ))}
                    </select>
                </div>

            </div>



        </div>

    )
}

export default BitcoinCard;
