"use client"

import React, { useState, useRef, useEffect } from 'react';
import InputRow from './input';
import PopUp from './popup';

import Users from "@/lib/ProfessionalData/user-data";
import { FaFileImage } from "react-icons/fa";
import { ImPaypal } from "react-icons/im"

type Props = {
  title: string;
  children: React.ReactNode;
};


const SectionBox = ({ title, children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [children]);

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <div className="px-4 py-3">
      <h4 className="text-[16px] font-semibold text-[#006A05] underline decoration-2 mb-[5px]">
        {title}
      </h4>

      <div
        ref={contentRef}
        className={`text-gray-800 text-[14px] transition-all duration-300 ${
          expanded ? '' : 'max-h-[130px] overflow-hidden'
        }`}
      >
        {children}
      </div>

      {/* Conditional Button */}
      {isOverflowing && (
        <button
          onClick={toggleExpand}
          className="text-green-700 underline font-semibold mt-2"
        >
          {expanded ? 'Read Less' : 'Read More!'}
        </button>
      )}
    </div>
  );
};



const services: string[] = Users[0].services

const Review = () => {
  const [showModal, setShowModal] = useState(false);

  const popup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
     <>
     <div className="grid  grid-cols-[55%_45%] lg:grid-cols-[65%_35%] gap-6 p-13">
        <div>
          <p className='text-lg font-semibold text-[#006A05] mb-2'>Review Your Profile</p>
           <p className="text-[16px] text-gray-500"> Review all inputs and Selections</p>
        <div className="flex flex-row gap-4 mt-6 h-[75px]">
          <div className="flex flex-col gap-2 w-full">
            <label>First name</label>
            <input type="text"
              name="fname"
              placeholder="daniel"
              className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Sur name</label>
            <input
              type="text"
              name="sname"
              placeholder="okoro"
              className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
            />
          </div>
        </div>
         <InputRow name="birth" label="Date of birth" />
         <InputRow name="gender" label="Gender" />
         <InputRow name="gender" label="E-mail" /> 
         <div className="flex flex-col  gap-2 mt-6 ">  
            <label>Phone no.</label>
            <div className="flex flex-row gap-4 ">  
                <input type="text" 
                name="fname-right"  
                className="h-12 w-1/4 border px-2 rounded-[8px] border-gray-500" 
                placeholder="+234"
                />
                <input type="text"
                 name="sname-right"  
                 className="h-12 w-3/4 border px-2 rounded-[8px] border-gray-500" 
                 placeholder="0801 234 7695"
                 />
            </div>
         </div>  
          <InputRow name="country" label="Country" /> 
           <InputRow name="address" label="Address" /> 
           <InputRow name="exp" label="Years of Experience" /> 
            
        </div>
        <div className='px-2 mt-2'>
            <SectionBox title='About Me'>
                <p >{Users[0].about}</p>
            </SectionBox>
            <hr/>
            <SectionBox title='Services you provide'>
              <ul className="list-disc pl-5 space-y-1">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </SectionBox>
            <hr/>
            <SectionBox title='Portfolio'>
               <div className= 'flex flex-wrap gap-[12px]'>
                {services.map((service, index) => (
                    <div key={index} className='flex gap-[2px] py-[8px]'><FaFileImage className='text-[16px] text-[#CC0000]' /><p className='text-[11px]'>{service}.jpeg</p></div>
                  ))}
              </div>
            </SectionBox>
            <hr/>
            <SectionBox title='Payment Method'>
                <div  className='flex gap-[2px] py-[8px]'><ImPaypal className='text-[#82868C] text-[16px]' /><p className='text-[11px]'>payPal</p></div>
            </SectionBox>
            <hr/>
            <SectionBox title='Project prefrence'>
                <p>{Users[0].projectP}</p>
            </SectionBox>
            <hr/>
            <SectionBox title='Profile photo'>
                <div  className='flex gap-[2px] py-[8px]'><FaFileImage className='text-[16px]'  /><p className='text-[11px]'>daniel.jpeg</p></div>
            </SectionBox>
            <hr/>
            <SectionBox title='Id photo'>
                <div  className='flex gap-[2px] py-[8px]'><FaFileImage className='text-[16px]' /><p className='text-[11px]'>daniel.jpeg</p></div>
            </SectionBox>
            <hr/>
             <button
              className='mt-8 h-12 w-full bg-blue-600 text-white font-medium rounded'
              onClick = {popup}
             >Submit</button>
        </div>
    </div>
     <PopUp 
  msg="Submit Successfully" 
  desc={`Thank you for completing your profile. Our team is currently reviewing your details to ensure it meets our requirements.

    You will be notified once you're approved and ready to go live.

    Review time: typically 24–48 hours. 
    Keep an eye on your mail or in-app notifications for updates.`} 
  isOpen={showModal} 
  onClose={() => setShowModal(false)} 
/>

    </>
  )
}

export default Review