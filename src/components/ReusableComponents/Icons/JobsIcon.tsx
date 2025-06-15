import React from "react";

type IconProps = {
    size?: number;
    isActive?: boolean;
    className?: string;
};

const JobsIcon: React.FC<IconProps> = ({
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
                d="M24 4.5V19.5H0V4.5H7.5V3C7.5 2.78906 7.53906 2.59375 7.61719 2.41406C7.69531 2.23438 7.80078 2.07812 7.93359 1.94531C8.06641 1.8125 8.22656 1.70312 8.41406 1.61719C8.60156 1.53125 8.79688 1.49219 9 1.5H15C15.2109 1.5 15.4062 1.53906 15.5859 1.61719C15.7656 1.69531 15.9219 1.80078 16.0547 1.93359C16.1875 2.06641 16.2969 2.22656 16.3828 2.41406C16.4688 2.60156 16.5078 2.79687 16.5 3V4.5H24ZM9 4.5H15V3H9V4.5ZM1.5 6V8.16797L9 11.9062V10.5H15V11.9062L22.5 8.16797V6H1.5ZM10.5 12V13.5H13.5V12H10.5ZM22.5 18V9.83203L15 13.5938V15H9V13.5938L1.5 9.83203V18H22.5Z"
                fill={fillColor}
            />
        </svg>
    );
};

export default JobsIcon;
