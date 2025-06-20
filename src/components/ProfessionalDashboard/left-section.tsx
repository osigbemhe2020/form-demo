
import React from 'react';

type BoxProps = {
  text: string;
  icon: string | React.ReactNode;
};

type Status = 'clicked' | 'unclicked';

interface ListItem {
  name: string;
  icon: string | React.ReactNode;
  status: Status;
}

const list: ListItem[] = [
  { name: 'My Details',                icon: '👤', status: 'clicked' },
  { name: 'About me',                  icon: 'ℹ️', status: 'unclicked' },
  { name: 'Services you can provide',  icon: '🛠️', status: 'unclicked' },
  { name: 'Portfolio',                 icon: '🖼️', status: 'unclicked' },
  { name: 'Payment',                   icon: '💳', status: 'unclicked' },
  { name: 'Project Preference',        icon: '📌', status: 'unclicked' },
  { name: 'Help',                      icon: '❓', status: 'unclicked' },
];

const Box = ({ text, icon }: BoxProps) => (
  <div className="w-full h-[54px] border border-gray-300 px-4 rounded-md flex items-center gap-3 hover:bg-gray-50 transition">
    <span className="text-xl">{icon}</span>
    <p className="text-gray-700 font-medium text-sm sm:text-base">{text}</p>
  </div>
);

const LeftSection = () => (
  <div className="bg-white px-4 sm:px-6 md:px-8 py-4 w-full max-w-[330px] mx-auto space-y-4">
    {list.map((item, index) => (
      <Box key={index} text={item.name} icon={item.icon} />
    ))}
  </div>
);

export default LeftSection;