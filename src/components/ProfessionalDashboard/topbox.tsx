import { FaCamera } from "react-icons/fa";

const Topbox = () => {
  return (
    <div className="w-[1115px] h-[178px] bg-white !px-[60px] flex items-center">
      <div className="flex">
        <img
          src="/images/profile-image.jpg"
          alt="daniel-photo"
          className="w-[150px] h-[150px] border-[2px] border-[#006A05] rounded-full"
        />
        <div className="h-[30px] w-[30px] bg-[#006A05] flex items-center justify-center relative -bottom-[114px] right-[34px] rounded-full">
          <FaCamera className="text-[16px] text-white" />
        </div>

      </div>
      <div className="!m-[10px] text-left" >
        <h2 className="text-[24px] font-semibold ">Daniel Okoro</h2>
        <p className="text-gray-600 text-[16px]">Plumber</p>
      </div>
    </div>
  );
};

export default Topbox;