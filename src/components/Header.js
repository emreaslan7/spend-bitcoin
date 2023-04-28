import React from "react";
import bitcoinAccepted from '../assets/bitcoin_accepted_here.png'
import  bitcoin  from '../assets/bitcoin.svg'


function Header(){
  return (
    <div className="flex justify-between items-center border-[#F7931A] border-b-2 p-4 bg-[#F7931A]">
        <img className="h-5" alt="" src={bitcoin}/>
        {/* <h1 className="text-4xl text-[#F7931A] font-extrabold">Spend 1 Bitcoin</h1> */}
        <div className=" text-slate-800 font-extrabold">
          Experience the Rise of Bitcoin! If you had 1 bitcoin in any year, what would you buy?
        </div>
        <img alt="" className="h-7" src={bitcoinAccepted} />
    </div>
  )
}

export default Header;
