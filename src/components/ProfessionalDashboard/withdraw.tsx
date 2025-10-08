import { AiFillBank } from "react-icons/ai";
import { BiSolidWalletAlt } from "react-icons/bi";
import { ImPaypal } from "react-icons/im"
import { ImArrowRight } from "react-icons/im";



const simple = {
      borderTop: "1px grey solid"
    };

type props = {
  meth : string; 
  time:string;
  icon : React.ReactNode;
};

const Method = ({ meth, time, icon }: props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-[30px] p-4 sm:p-[10px] items-start sm:items-center bg-white rounded-md shadow-sm">
      {/* Icon */}
      <div className="text-gray-500 text-xl sm:text-2xl">
        {icon}
      </div>

      {/* Text + Button section */}
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center">
        <div className="mb-2 sm:mb-0">
          <h2 className="text-base font-medium">{meth}</h2>
          <p className="text-sm text-gray-400">{time}</p>
        </div>

        <button className="bg-blue-500 px-4 py-1 text-white text-sm rounded-md">
          Set up
        </button>
      </div>
    </div>
  );
};


const WithdrawMain = () => {
  return (
    <>
    <p className="mb-[16px] text-[#006A05]">Withdraw method:<br/>
        <span className="text-black text-[12px]">Tell us how you want to recieve your money:</span></p>
    <div className="mt-[40px]">
        <p className="mb-[20px]">Recommended</p>
        <div>
           <Method 
             meth="Bank Transfer"
             time ="(2-3 business days)"
             icon = {<div className='flex items-center text-[#82868C]'>
                    <AiFillBank className="h-[62px] w-[62px]" /><ImArrowRight />
                </div>}
           />
           <Method 
             meth="Mobile Wallet"
             time ="(2-3 business days)"
             icon = {<BiSolidWalletAlt className='w-[66px] h-[66px] text-[#82868C]'/>}
           />
           <Method 
             meth="PayPal"
             time ="(2-3 business days)"
             icon = {<ImPaypal className='w-[66px] h-[66px] text-[#82868C]'/>}
           />
        </div>
    </div>
    </>
  )
}

export default WithdrawMain