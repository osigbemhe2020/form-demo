const MainOne = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[7320px] gap-8 ">
      <div>
        <p className="font-semibold">Personal</p>

        {/* Row: First name + Surname */}
        <div className="flex flex-row gap-4 mt-6 h-[75px]">
          <div className="flex flex-col gap-2 w-full">
            <label>First name</label>
            <input
              type="text"
              name="fname"
              placeholder="daniel"
              className="h-12 w-full border px-2"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Sur name</label>
            <input
              type="text"
              name="sname"
              placeholder="okoro"
              className="h-12 w-full border px-2"
            />
          </div>
        </div>

        {/* More inputs */}
        
          <div  className="flex flex-col gap-2 mt-6">
            <label>Mobile Number</label>
            <input
              type="number"
              name="phone-no"
              className="h-12 w-full border px-2"
            />
          </div>

          <div  className="flex flex-col gap-2 mt-6">
            <label>Date of birth</label>
            <input
              type="text"
              name="birth"
              className="h-12 w-full border px-2"
            />
          </div>

          <div  className="flex flex-col gap-2 mt-6">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              className="h-12 w-full border px-2"
            />
          </div>
        
      </div>

      <div>
        <p className="font-semibold"></p>
        {/* Extra inputs for right column */}
        <div className="flex flex-col gap-2 mt-6">
          <label>Mobile Number</label>
          <input type="number" name="phone-no-right" className="h-12 w-full border px-2" />
        </div>

        <div className="flex flex-row gap-4 mt-6 h-[75px]">
          <div className="flex flex-col gap-2 w-full">
            <label>Phone no.</label>
            <input type="text" name="fname-right" placeholder="daniel" className="h-12 w-full border px-2" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Sur name</label>
            <input type="text" name="sname-right" placeholder="okoro" className="h-12 w-full border px-2" />
          </div>
        </div>

        <div  className="flex flex-col gap-2 mt-6">
            <label>Mobile Number</label>
            <input
              type="number"
              name="phone-no"
              className="h-12 w-full border px-2"
            />
          </div>

          <div  className="flex flex-col gap-2 mt-6">
            <label>Date of birth</label>
            <input
              type="text"
              name="birth"
              className="h-12 w-full border px-2"
            />
          </div>

          <div  className="flex flex-col gap-2 mt-6">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              className="h-12 w-full border px-2"
            />
          </div>
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <div className="max-w-[732px] w-full h-auto px-4 overflow-hidden">
      <div className="w-full mb-10 flex justify-between">
        <p className="text-lg font-semibold">My Details</p>
        <p className="text-sm text-gray-500">Last update on August</p>
      </div>

      <form className="w-full">
        <MainOne />
        <input
          type="submit"
          value="Submit"
          className="mt-8 h-12 w-full bg-blue-600 text-white font-medium rounded"
        />
      </form>
    </div>
  );
};

export default Details;
