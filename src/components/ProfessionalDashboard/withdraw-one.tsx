import { AiFillBank } from "react-icons/ai";
import { ImArrowRight } from "react-icons/im";

const simple = {
      border: "1px grey solid ",
      borderRadius:"8px"
    };

type WithdrawProps = {
  onClick: () => void;
};
const Withdraw = ({ onClick }: WithdrawProps) =>{

    return(
      <>
    <p className="mb-[16px] ">Withdraw method:</p>
     <div>
        <div className=' h-[47px] border border-blue-400 border-[2px] flex justify-center items-center'
         onClick={onClick} >
            <h3 className="text-center">Add Method</h3>
        </div>
        <p className="mt-[44px]">Withdraw money to:</p>
        <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
  <div
    className="flex items-center gap-4 px-4 py-3 w-full bg-white rounded-md"
    style={simple}
  >
    <div className="flex items-center text-[#82868C]">
      <AiFillBank className="w-10 h-10 lg:w-[62px] lg:h-[62px]" />
      <ImArrowRight className="ml-2" />
    </div>
    <div className="text-left">
      <h4 className="text-sm lg:text-base font-semibold">Primary Bank Account</h4>
      <p className="text-sm text-gray-600">******** 1234</p>
    </div>
  </div>
  <div className="w-full lg:w-auto">
    <button className="w-full lg:w-[261px] h-[48px] lg:h-[52px] bg-blue-500 text-white text-sm rounded-md mt-2 lg:mt-[25px]">
      Add Beneficiary
    </button>
  </div>
</div>

      </div>
    </>
    )
}

export default Withdraw