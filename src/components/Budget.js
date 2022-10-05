import { useSelector } from "react-redux"
import { yearStats } from "../redux/budgetSliceData"




function Budget() {
  const selectedYear = useSelector((state) => state.budget.selectedYear)

  let choosedBtcPrice;
  if(!(selectedYear === 'Now')){
    choosedBtcPrice = yearStats[Number(selectedYear.slice(2))-10]
  }
    

  return (
    <div className="text-white bg-gradient-to-r to-[#f69e33] from-[#F7931A] p-3 text-center mt-2 drop-shadow-md sticky top-0">
        <p className="text-xl font-bold">
            1 bitcoin
            <span className="text-2xl font-normal mx-3">≌</span>
            {choosedBtcPrice +" "}USD
        </p> 
    </div>
  )
}

export default Budget