import React from "react";

type IconProps = {
  size?: number;
  isActive?: boolean;
  className?: string;
};

const ReviewIcon: React.FC<IconProps> = ({
  size = 24,
  isActive = false,
  className = "",
}) => {
  const fillColor = isActive ? "#070F65" : "#6B6A6A";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4.58 16.59L4 17.17V4H20V16ZM10.5 14H18V12H12.5L10.5 14ZM14.36 8.13C14.56 7.93 14.56 7.62 14.36 7.42L12.59 5.65C12.39 5.45 12.08 5.45 11.88 5.65L6 11.53V14H8.47L14.36 8.13Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ReviewIcon;
