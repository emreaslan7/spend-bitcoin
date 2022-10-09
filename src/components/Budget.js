import { useEffect} from "react"
import { useSelector , useDispatch} from "react-redux"
import { yearStats } from "../redux/budgetSliceData"
import { getBtcPriceAsync, createBudget } from "../redux/budgetSlice"
import CountUp from 'react-countup';




function Budget() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBtcPriceAsync())
  },[dispatch])

  // useEffect(()=>{
  //   dispatch(createBudget({choosedBtcPrice}))
  // })

  const budgetAmount = useSelector(state => state.budget.budgetAmount)
  const total = useSelector(state => state.budget.total)
  // const selectedYear = useSelector(state => state.budget.selectedYear)
  // const nowBtcPrice = useSelector(state => state.budget.nowBtcPrice)
  const isLoading = useSelector(state => state.budget.isLoading)

  // let choosedBtcPrice = null;
  // if(!(selectedYear === 'Now')){
  //   choosedBtcPrice = yearStats[Number(selectedYear.slice(2))-10]
  // }else{
  //   if(!(nowBtcPrice === null)){
  //     choosedBtcPrice = nowBtcPrice.market_data.current_price.usd;
  //   }
  // }
  

  return (
    <div className="text-white bg-gradient-to-r to-[#f69e33] from-[#F7931A] p-3 text-center mt-2 drop-shadow-md sticky top-0">
        <p className="text-xl font-bold">
            1 bitcoin
            <span className="text-2xl font-normal mx-3">≌</span>
            {isLoading === true ? <span>Loading...</span> :
            <CountUp  separator=" " decimals={2} start={budgetAmount} end={budgetAmount-total} />}
        </p> 
    </div>
  )
}

export default Budget