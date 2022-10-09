
import { useState, useEffect, useRef} from "react";
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';
import { buyAmount } from '../redux/budgetSlice'

function Product() {
    
    const [itemAmount, setItemAmount] = useState(0);
    const [itemId, setItemId] = useState(null);

    const inputAddSell = useRef();
    const dispatch = useDispatch();

    

    const disabledButton = (item) =>{
        let disabled=false;
        if(item.amount === 0){disabled = true};
        return disabled;
    }
    

    const sellorBuy = (id,tradekey) => {
        const inputAmount = inputAddSell.current.children[id].lastChild.children[1];
        tradekey === 'buy' ? inputAmount.value = Number(inputAmount.value) +1 : Number(inputAmount.value) === 0 ? inputAmount.value = 0 : inputAmount.value = Number(inputAmount.value) -1;
        setItemAmount(Number(inputAmount.value));
        setItemId(Number(id));
    }

    useEffect(() => {
        dispatch(buyAmount({itemId, itemAmount}))        
    });

    const year = useSelector(state => state.budget.selectedYear);
    const products = useSelector(state => state.budget.items);

    
    
    useEffect(()=>{
        for(let i=0; i<5; i++){
            const inputAmounts = inputAddSell.current.children[i].lastChild.children[1];
            inputAmounts.value = 0;
            const disabledBtn =inputAddSell.current.children[i].lastChild.children[0];
            
        }
    },[year])


    return (
        <div className='mx-3 lg:mx-0 mt-2'>
            

            <div ref={inputAddSell} className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-4 ">

                {products.map(item => (
                    
                    <div key={item.id} className="w-full bg-white text-center">
                        <img className="mx-auto max-w-full mt-8 my-4 h-32" alt="" src={item.img} />
                        <h3>{item.name}</h3>
                        <p>{item.priceUSD} $</p>

                        <div className="flex justify-around items-center gap-x-3 p-5" >

                            <button disabled={disabledButton(item)} onClick={() => sellorBuy(item.id,'sell')} type="button" className="disabled:bg-gray-300 w-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-sm leading-tight uppercase rounded enabled:shadow-md hover:bg-red-700 disabled:hover:shadow-none disabled:focus:shadow-none  enabled:hover:shadow-lg enabled:focus:shadow-lg focus:outline-none focus:ring-0">SELL</button>

                            <input
                                id={item.id}
                                onChange={(e) => {
                                    setItemId(item.id);
                                    setItemAmount(Number(e.target.value));
                                }}
                                placeholder={0}
                                type="number"
                                className="w-full px-2.5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            />

                            <button onClick={() => sellorBuy(item.id,'buy')} type="button" className="w-full inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Buy</button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Product;