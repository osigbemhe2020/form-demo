
'use client';

import { FaUserPlus } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { VscFolderActive } from "react-icons/vsc";
import { GrPin } from "react-icons/gr";
import { IoMdHelp } from "react-icons/io";
import { FaUpload } from "react-icons/fa";
import JobsIcon from "@/components/ReusableComponents/Icons/JobsIcon";
import PaymentIcon from "@/components/ReusableComponents/Icons/PaymentIcon";
import useScreenStore from '@/store/firstStore'; // ✅ default import

type BoxProps = {
  text: string;
  icon: React.ReactNode;
  style?: React.CSSProperties; 
  onClick: () => void;
};

type LeftSectionProps = {
  setInner: (inner: string) => void;
};

interface ListItem {
  name: string;
  icon: React.ReactNode;
  key: string;
}

// Updated list with unique `key` values
const list: ListItem[] = [
  { key: 'My Details', name: 'My Details', icon: <FaUserPlus /> },
  { key: 'About me', name: 'About me', icon: <AiOutlineInfoCircle /> },
  { key: 'Services you can provide', name: 'Service you can provide', icon: <JobsIcon /> },
  { key: 'Portfolio', name: 'Portfolio', icon: <VscFolderActive /> },
  { key: 'Get Paid', name: 'Payment', icon: <PaymentIcon /> },
  { key: 'Project Preference', name: 'Project Preference', icon: <GrPin /> },
  { key: 'Help', name: 'Help', icon: <IoMdHelp /> },
];

const Box = ({ text, icon, onClick, style }: BoxProps) => (
  <div
    onClick={onClick}
    className="cursor-pointer w-full h-[54px] px-[15px] rounded-[8px] flex items-center gap-2 hover:bg-gray-100 transition-colors"
    style={style}
  >
    <span className="text-gray-500 text-[20px]">{icon}</span>
    <p className="text-gray-500 text-[12px] lg:text-[16px]">{text}</p>
  </div>
);

const LeftSection = ({ setInner }: LeftSectionProps) => {
  const { setScreenAndKey, activeKey } = useScreenStore();

  return (
    <div className="space-y-3 bg-white pt-3 px-2 lg:px-4 w-[43%] lg:w-[33.33%]">
        <p>Explore all the buttons</p>
        {list.map((item) => (
        <Box
          key={item.key}
          text={item.name}
          icon={item.icon}
          onClick={() => {
            setScreenAndKey(item.key);
            setInner('one');
          }}
          style={{
            border: item.key === activeKey ? "1px solid blue" : "1px solid gray"
          }}
        />
      ))}

      <p className="mt-[20px] text-[10px] font-medium">
        <span className="text-[12px]">ID Card:</span> (Driver’s License, NIN, Voter’s Card, International Passport)
      </p>

      <div
        onClick={() => {
          setScreenAndKey("Upload Id");
          setInner('one');
        }}
        className="cursor-pointer w-full h-[54px] px-[15px] rounded-[8px] justify-between flex items-center gap-2 hover:bg-gray-100 transition-colors"
        style={{
          border: activeKey === "Upload Id" ? "1px solid blue" : "1px solid gray"
        }}
      >
        <p className="text-[#006A05] text-[12px] lg:text-[16px]">Upload Id</p>
        <span className="text-[#006A05]"><FaUpload /></span>
      </div>
    </div>
  );
};

export default LeftSection;
