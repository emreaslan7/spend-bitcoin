import { useEffect, useRef} from "react"
import { useSelector , useDispatch} from "react-redux"
import { getBtcPriceAsync} from "../redux/budgetSlice"
import CountUp from 'react-countup';
import millify from "millify";




function Budget() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBtcPriceAsync())
  },[dispatch])


  const budgetAmount = useSelector(state => state.budget.budgetAmount)
  const total = useSelector(state => state.budget.total)
  const isLoading = useSelector(state => state.budget.isLoading)

  const prevtotal = usePrevious(total)




  return (
    <div className="z-50 text-white bg-gradient-to-r to-[#f69e33] from-[#F7931A] p-3 text-center mt-2 drop-shadow-md sticky top-0">
        <p className="text-xl font-bold">
            <CountUp  separator=" " decimals={6} start={(budgetAmount-prevtotal)/budgetAmount} end={((budgetAmount-total)/budgetAmount)} /> bitcoin
            <span className="text-2xl font-normal mx-3">≌</span>
            {isLoading === true ? <span>Loading...</span> :
            <CountUp  separator=" " decimals={2} start={budgetAmount-prevtotal} end={budgetAmount-total} />} $
        </p>
    </div>
    
  )
  
  
  
}

function usePrevious(value) {
 
  const ref = useRef();
 
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}


export default Budget