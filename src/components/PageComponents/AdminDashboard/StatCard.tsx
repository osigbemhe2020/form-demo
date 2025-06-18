import { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  footer: string;
};

const StatCard = ({
  icon,
  title,
  value,
  change,
  changeType,
  footer,
}: StatCardProps) => {
  return (
    <div className="bg-white p-4 flex justify-center flex-col items-center rounded-xl w-full">
      <div className="flex items-center gap-2 text-gray-600 text-sm font-semibold mb-3">
        {icon}
        <span>{title}</span>
      </div>
      <div className="flex items-end gap-3 mb-3">
        <div className="mt-2 text-3xl font-bold text-blue-900">{value}</div>
        <div
          className={`text-base font-semibold ${
            changeType === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {changeType === "up" ? "↑" : "↓"} {change}
        </div>
      </div>
      <div className="text-sm text-[#070F65] mt-1">{footer}</div>
    </div>
  );
};

export default StatCard;
