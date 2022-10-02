import React from "react";
import bitcoinAccepted from '../assets/bitcoin_accepted_here.png'
import  bitcoin  from '../assets/bitcoin.svg'


function Header(){
  return (
    <div className="flex justify-between items-center border-[#F7931A] border-b-2 p-4 bg-white">
        <img className="h-5" alt="" src={bitcoin}/>
        {/* <h1 className="text-4xl text-[#F7931A] font-extrabold">Spend 1 Bitcoin</h1> */}
        <img alt="" className="h-7" src={bitcoinAccepted} />
    </div>
  )
}

export default Header;
