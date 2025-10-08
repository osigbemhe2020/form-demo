import { FaCamera } from 'react-icons/fa';

const Topbox = () => {
  return (
    <div className="w-[102%] lg:h-[178px] bg-white px-4 sm:px-6 lg:px-[60px] py-3 flex flex-col lg:flex-row items-center lg:items-center gap-4">
      <div className="relative flex-shrink-0">
        <img
          src="/images/profile-image.jpg"
          alt="daniel-photo"
          className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] border-[2px] border-[#006A05] rounded-full object-cover"
        />
        <div className="h-[30px] w-[30px] bg-[#006A05] flex items-center justify-center absolute bottom-0  right-0 lg:right-4 rounded-full">
          <FaCamera className="text-[16px] text-white" />
        </div>
      </div>

      {/* Text block */}
      <div className="text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-semibold">Daniel Okoro</h2>
        <p className="text-gray-600 text-base">Plumber</p>
      </div>
    </div>
  );
};

export default Topbox;
