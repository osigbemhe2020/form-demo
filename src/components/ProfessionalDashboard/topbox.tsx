import { FaCamera } from 'react-icons/fa';

const Topbox = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white px-4 sm:px-[60px] py-4 flex flex-col sm:flex-row items-center gap-4">
      {/* Avatar block */}
      <div className="relative shrink-0">
        <img
          src="/images/profile-image.jpg"
          className="w-24 h-24 sm:w-[150px] sm:h-[150px] border-2 border-[#006A05] rounded-full object-cover"
        />
        {/* Camera icon overlay */}
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-8 h-8 bg-[#006A05] rounded-full flex items-center justify-center">
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
