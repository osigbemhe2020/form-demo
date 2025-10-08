import InputRow from "./input";

type props = {
  name : string;
  //holder: string;  
  label:string;
};


const MainForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[732px] gap-8 ">
      <div>
        <p className="font-semibold text-gray-500">Personal</p>

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
          <InputRow name="mobile-no" label="Mobile number" />
          <InputRow name="birth" label="Date of birth" />
          <InputRow name="gender" label="Gender" />
        
      </div>

      <div>
        <p className="font-semibold text-gray-500">Contact</p>
        {/* Extra inputs for right column */}
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
    </div>
  );
};

export default MainForm;