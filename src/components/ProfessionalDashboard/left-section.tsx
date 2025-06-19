
type BoxProps = {
  text: string;
};

const Box = ({ text }: BoxProps) => {
  return (
    <div className="w-[330px] h-[54px] border border-gray-500 pt-[1px] pb-[1px] pr-[10px] pl-[15px]">
      <p>{text}</p>
    </div>
  );
};

const LeftSection = () => {
  return (
    <div>
      <Box text="My Details" />
    </div>
  );
};

export default LeftSection;