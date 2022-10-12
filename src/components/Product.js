
import { useState, useEffect, useRef} from "react";
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';
import { buyAmount } from '../redux/budgetSlice'

function Product() {

    const products = useSelector(state => state.budget.items);  
    const year = useSelector(state => state.budget.selectedYear);
    const budgetAmount = useSelector(state => state.budget.budgetAmount);
    const total = useSelector(state => state.budget.total);

    
    const [itemAmount, setItemAmount] = useState(0);
    const [itemId, setItemId] = useState(null);

    const inputAddSell = useRef();
    const dispatch = useDispatch();

    const disabledBuy = (item) => {
        
        let disabled=false;
        let img;
        try {
            img = inputAddSell.current.childNodes[item.id].firstChild;
            
            if (budgetAmount-total < item.priceUSD) {
                disabled = true;
                img.classList.add('grayscale');
                
            } else if (img.classList.contains('grayscale')) {
                img.classList.remove('grayscale');
            };


        } catch (error) {}
        return disabled;
    }
    
    // İNPUT'A fazla değer girildiğinde max olanı kabul edecek

    // const maxAmount = (item) =>{
    //     const inputAmount = inputAddSell.current.children[item.id].lastChild.children[1];
        
    //     if(inputAmount.value > budgetAmount/item.priceUSD ){

    //         if(Math.floor(budgetAmount/item.priceUSD) >= 0 && inputAmount.value <10){
                
    //             const maxAmount = Math.floor((budgetAmount-total)/item.priceUSD);
    //             inputAmount.value = maxAmount;
                
    //             setItemId(item.id);
    //             setItemAmount(Number(maxAmount))

    //         }else if(Math.floor(budgetAmount/item.priceUSD) >= 0 && inputAmount.value >10){
    //             let newTotal=0;
    //             newTotal = total - item.amount.priceUSD;
    //             const maxAmount = Math.floor((budgetAmount-newTotal)/item.priceUSD);
    //             inputAmount.value = Number(maxAmount);
                
    //             setItemId(item.id);
    //             setItemAmount(Number(maxAmount))
    //         }
    //     }else{
    //         setItemId(item.id);
    //         setItemAmount(Number(inputAmount.value));
    //     }
    // }

    const disabledSell = (item) =>{
        let disabled=false;
        if(item.amount === 0){disabled = true};
        return disabled;
    }
    

    const sellorBuy = (item,tradekey) => {

        const inputAmount = inputAddSell.current.children[item.id].lastChild.children[1];

        if(tradekey === 'buy' && budgetAmount - total >= item.priceUSD){
            inputAmount.value = Number(inputAmount.value) +1
        }else if(tradekey === 'sell'){
            inputAmount.value = Number(inputAmount.value) -1;
        }

        setItemAmount(Number(inputAmount.value));
        setItemId(Number(item.id));
    }

    
 

    useEffect(() => {
        dispatch(buyAmount({itemId, itemAmount}))       
    },[itemAmount]);

    useEffect(()=>{
        for(let i=0; i<products.length; i++){
            const inputAmounts = inputAddSell.current.children[i].lastChild.children[1];
            inputAmounts.value = 0;
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

                            <button disabled={disabledSell(item)} onClick={() => sellorBuy(item,'sell')} type="button" className="disabled:bg-gray-300 w-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-sm leading-tight uppercase rounded enabled:shadow-md hover:bg-red-700 disabled:hover:shadow-none disabled:focus:shadow-none  enabled:hover:shadow-lg enabled:focus:shadow-lg focus:outline-none focus:ring-0">SELL</button>

                            <input
                                readOnly={disabledBuy(item)}
                                id={item.id}
                                onChange={(e) => {
                                    setItemId(item.id);
                                    setItemAmount(Number(e.target.value));
                                    // maxAmount(item,e);
                                }}
                                placeholder={0}
                                type="number"
                                className="w-full px-2.5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 read-only:focus:border-gray-300 focus:outline-none"
                            />

                            <button disabled={disabledBuy(item)} onClick={() => sellorBuy(item,'buy')} type="button" className="disabled:bg-gray-300 w-full inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-sm leading-tight uppercase rounded enabled:shadow-md enabled:hover:bg-green-700 enabled:hover:shadow-lg enabled:focus:shadow-lg enabled:focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Buy</button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Product;