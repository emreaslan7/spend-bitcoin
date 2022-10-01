import React from "react";
import  bitcoin  from '../assets/bitcoin.svg'


function Header(){
  return (
    <div className="flex justify-between items-center border-[#F7931A] border-2 p-5">
        <img className="h-8" alt="" src={bitcoin}/>
        <h1 className="text-4xl text-[#F7931A] font-bold">Spend 1 Bitcoin</h1>


    </div>
  )
}

export default Header;
