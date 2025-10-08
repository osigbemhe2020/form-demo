"use client"
import React,{useState} from "react";
import Withdraw from "./withdraw-one";
import WithdrawMain from "./withdraw";

type props = {
  inner:string;
  setInner: (inner: string) => void;
}


const PaymentMain = ({inner,setInner}:props) => {

  return (
    <div className="bg-white">
        <p className="mt-[40px] text-[16px]">Amout</p>
        <div className='h-[69px] w-full flex justify-center items-center mt-[16px] rounded-[8px] border-[#006A05] border-[1px]' >
            <h1 className="text-center  text-[32px] text-[#006A05] font-semibold"> #4000</h1>
        </div>
        <div className="mt-[40px]">
        
        {inner === 'two' && <Withdraw onClick={() => setInner('three')} />}
          {inner ==='three' && (
            <WithdrawMain/>
          )}
        </div>
    </div>

  )
}

export default PaymentMain