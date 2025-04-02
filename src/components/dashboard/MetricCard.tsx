import React, { ReactNode } from "react";
import { StatusBadge } from "./StatusBadge";

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  description: string;
  icon: ReactNode;
  statusType: "above" | "typical" | "high" | "normal";
  statusText: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  description,
  icon,
  statusType,
  statusText,
}) => {
  return (
    <div className="bg-white border flex flex-col gap-2 px-5 py-4 rounded-lg border-[#F0F0F0]">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-1">
          <div>{icon}</div>
          <div className="text-[#022C4E] text-[13px] font-bold leading-[19.5px] tracking-[1.04px] uppercase">
            {title}
          </div>
        </div>
        <StatusBadge type={statusType} text={statusText} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <div className="text-[#022C4E] text-[34px] font-bold leading-[51px] tracking-[0.34px]">
            {value}
          </div>
          <div className="text-[#022C4E] text-base font-bold leading-6 tracking-[0.08px]">
            {unit}
          </div>
        </div>
        <div className="text-[#355F81] text-[15px] leading-[21.75px]">
          {description}
        </div>
      </div>
    </div>
  );
};
