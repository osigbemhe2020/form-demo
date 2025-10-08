"use client"
import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa";

type props = {
  item: string;     
};

const clickedStyle = {
  backgroundColor:'blue',
  color:'white'
}

const defaultStyle ={
backgroundColor:'white',
color:'black'
}

const services = ["Renovations","Slab","Decking","Concrete","Remodelling","Roofing"]

const Eclipse = ({item}:props) =>{
    const [click,setClick] = useState(false);
    return(
        <div style={click ? clickedStyle : defaultStyle} onClick={()=> setClick(!click)} className ='w-[140px] h-[42px] border border-gray-500 rounded-full p-[9px]'>
          <p className="flex items-center justify-center gap-2 text-center">
            {item} <FaPlus/>
          </p>
        </div>
    )
}

const Service= () => {
  return (
    <div>
        <p className="my-[38px] text-[#006A05] font-semibold">Main services</p>
        <select className='border border-gray-500 bg-white w-full h-[58px] py-[17px] pl-[15px] rounded-[8px]'>
            <option>Building Materials</option>
        </select>
        <p className="my-[38px] text-[#006A05] font-semibold">sub services</p> 
           <div className="h-[320px]">
            <div className="flex flex-wrap justify-center sm:justify-start gap-[17px] h-[112px]">
                {services.map((item,index)=>{
                    return(
                    <Eclipse 
                    item={item}
                    key ={index}
                    />  
                    )
                })}            
            </div>
          </div>      
    </div>
  )
}

export default Service