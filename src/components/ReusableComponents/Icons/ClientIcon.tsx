import React from "react";

type IconProps = {
  size?: number;
  isActive?: boolean;
  className?: string;
};

const ClientIcon: React.FC<IconProps> = ({
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
        d="M12 13C13.0609 13 14.0783 12.5786 14.8284 11.8284C15.5786 11.0783 16 10.0609 16 9C16 7.93913 15.5786 6.92172 14.8284 6.17157C14.0783 5.42143 13.0609 5 12 5C10.9391 5 9.92172 5.42143 9.17157 6.17157C8.42143 6.92172 8 7.93913 8 9C8 10.0609 8.42143 11.0783 9.17157 11.8284C9.92172 12.5786 10.9391 13 12 13ZM12 13C10.4087 13 8.88258 13.6321 7.75736 14.7574C6.63214 15.8826 6 17.4087 6 19V22M12 13C13.5913 13 15.1174 13.6321 16.2426 14.7574C17.3679 15.8826 18 17.4087 18 19V22M13 5C13.404 3.336 15.015 2 17 2C19.172 2 20.98 3.79 21 6C20.98 8.21 19.172 10 17 10M17 10H16M17 10C20.288 10 23 12.686 23 16V18M11 5C10.596 3.336 8.985 2 7 2C4.828 2 3.02 3.79 3 6C3.02 8.21 4.828 10 7 10M7 10H8M7 10C3.712 10 1 12.686 1 16V18"
        stroke={fillColor}
        strokeWidth="2"
      />
    </svg>
  );
};

export default ClientIcon;
