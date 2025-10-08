'use client'

import React, { useState } from "react";
import TopBox from '@/components/ProfessionalDashboard/topbox';
import LeftSection from '@/components/ProfessionalDashboard/left-section';
import Header from "@/components/ProfessionalDashboard/header";
import ButtonCase from "@/components/ProfessionalDashboard/button-case";
import MainForm from "@/components/ProfessionalDashboard/main-form";
import About from "@/components/ProfessionalDashboard/about-me";
import Service from "@/components/ProfessionalDashboard/services";
import Portfolio from "@/components/ProfessionalDashboard/portfolio";
import Upload from "@/components/ProfessionalDashboard/upload";
import PaymentMain from "@/components/ProfessionalDashboard/payment-main";
import Project from "@/components/ProfessionalDashboard/project";
import UploadId from "@/components/ProfessionalDashboard/upload-id";
import Help from "@/components/ProfessionalDashboard/help";
import One from "@/components/ProfessionalDashboard/payment-one";
import Request from "@/components/ProfessionalDashboard/request";
import Transactions from "@/components/ProfessionalDashboard/transactions";

// ✅ import your store
import useScreenStore from '@/store/firstStore';

export default function Page() {
  // 🔥 use Zustand instead of local state
  const { screen} = useScreenStore();

  const [prevScreen, setPrevScreen] = useState('');
  const [inner,setInner] = useState('one');
  const [showModal, setShowModal] = useState(false);

  const mystyle = {
    backgroundColor: "white"
  };

  return (
    <div className='ml-[-25px]'>
      <h2 className="ml-[40px] !my-[30px] text-[#006A05] !text-[24px] font-medium">Profile Settings</h2>
      <TopBox />
      <div className= "lg:mt-[35px]  mt-[10px] flex gap- lg:gap-[20px] pl-[20px]">
        {/* ✅ LeftSection only needs setInner now */}
        <LeftSection setInner={setInner}/>
        
        <div className="max-w-[732px]  h-auto pl-4 pr-1 overflow-hidden w-[57%] lg:w-[66.66%]"
          style = {
            screen === 'Transaction history' || screen === 'Withdrawl'
              ? mystyle
              : undefined
          }>
          <form>
            {screen !== "Project Preference" && <Header page={screen} date="Last update on August" />}

            {screen === "My Details" && <MainForm />}
            {screen === "About me" && <About />}
            {screen === "Services you can provide" && <Service />}
            {screen === "Portfolio" && <Portfolio />}
            {screen === "Add Portfolio" && <Upload/>}
            {screen === "Get Paid" && <One 
              // ⚡ no need to pass setScreen anymore if One also uses store
              setInner ={setInner} 
            />}
            {screen === "Transaction history" && <Transactions/>}
            {screen === "Withdrawl" && <PaymentMain
              inner ={inner}
              setInner ={setInner} 
            />}
            {screen === "Payment Request" && <Request/>}
            {screen === "Project Preference" && <Project />}
            {screen === "Help" && <Help 
              showModal={showModal}
              setShowModal={setShowModal}
            />}
            {screen === "Upload Id" && <UploadId 
              showModal= {showModal}
              setShowModal= {setShowModal}
            />}

            <ButtonCase 
                inner={inner}
                setInner={setInner}
                prevScreen={prevScreen}
                setPrevScreen={setPrevScreen}
                setShowModal={setShowModal}
              />
          </form>
        </div>
      </div>
    </div>
  );
}
