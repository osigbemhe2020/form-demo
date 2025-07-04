import React from "react";

type IconProps = {
    size?: number;
    isActive?: boolean;
    className?: string;
};

const MessageIcon: React.FC<IconProps> = ({
    size = 24,
    isActive = false,
    className = "",
}) => {
    const strokeColor = isActive ? "#070F65" : "#6B6A6A";

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
                d="M3.464 16.828C2 15.657 2 14.771 2 11C2 7.229 2 5.343 3.464 4.172C4.93 3 7.286 3 12 3C16.714 3 19.071 3 20.535 4.172C21.999 5.344 22 7.229 22 11C22 14.771 22 15.657 20.535 16.828C19.072 18 16.714 18 12 18C9.49 18 8.2 19.738 6 21V17.788C4.906 17.625 4.101 17.338 3.464 16.828Z"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default MessageIcon;
