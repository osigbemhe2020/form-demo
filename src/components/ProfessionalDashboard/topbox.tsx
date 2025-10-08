import { FaCamera } from 'react-icons/fa';

const Topbox = () => {
  return (
    <div className="w-[102%] lg:h-[178px] bg-white px-4 sm:px-6 lg:px-[60px] py-3 flex flex-col lg:flex-row items-center lg:items-center gap-4">
      <div className="relative flex-shrink-0">
        <img
          src="/images/windows.jpeg"
          alt="placeholder"
          className="w-24 h-24 sm:w-[150px] sm:h-[150px] border-2 border-[#006A05] rounded-full object-cover"
        />
        {/* Camera icon overlay */}
        <div className="absolute bottom-1 right-4 translate-x-1/4 translate-y-1/4 w-8 h-8 bg-[#006A05] rounded-full flex items-center justify-center">
          <FaCamera className="text-white text-sm" />
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
