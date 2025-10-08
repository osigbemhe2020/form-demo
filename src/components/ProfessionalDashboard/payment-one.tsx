import useScreenStore from '@/store/firstStore'; // ✅ default import

const simple = {
      border: "1px grey solid"
    };

type props = {
 item : string; 
  price :string;
  date :string;
};

    const Line = ({item, price,date}:props) =>{
        return(
            <div className="flex justify-between gap-[30px] p-[16px] text-[16px]" style ={simple}>
                <div>
                    <p>{item}</p>
                </div>
                <div>
                    <p>{price}</p>
                    <p>{date}</p>
                </div>
            </div>
        )
    }

type OneProps = {
  setInner: (inner: string) => void;
};

const One = ({setInner}:OneProps) => {

const { setScreenAndKey } = useScreenStore();

 const withdraw = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setScreenAndKey ('Withdrawl', 'Get Paid');          
    setInner('two');      
  };
  return (
    <div>
        <p className="my-[40px] text-[#006A05] text-[16px] font-semibold">Total Balance</p>
        <div>
            <div className="w-full bg-white rounded-[10px]  flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
            <div className="bg-[#006A05] text-white rounded-[8px] flex justify-center items-center p-4 lg:p-8 w-full lg:w-auto">
                <h2 className="text-[24px] lg:text-[32px] font-semibold">#12,000</h2>
            </div>
            <div className="flex justify-center lg:justify-end w-full">
                <button
                type="button"
                className="bg-blue-500 text-white text-[14px] px-6 py-3 rounded-[8px] w-full sm:w-auto"
                onClick={withdraw}
                >
                Withdraw
                </button>
            </div>
            </div>

            <div className='mt-[40px] bg-white p-[2px]'>
                <Line
                item="Total Earnings"
                price = "#5000"
                date =""
                />
                <Line
                item="Monthly Earnings"
                price = "#5000"
                date =""
                />
                <Line
                item="Pending Paymants"
                price = "#5000"
                date =""
                />
            </div>
             <p className='mt-[30px] text-[#006A05] font-semibold'>Transaction History</p>
             <div className='mt-[30px] bg-white p-[2px]'>
                <Line
                item="Total Earnings"
                price = ""
                date ="Feb5"
                />
                <Line
                item="Monthly Earnings"
                price = ""
                date ="Feb5"
                />
                <Line
                item="Pending payments"
                price = "#2500"
                date =""
                />
                
            </div>
        </div>
    </div>
  )
}

export default One