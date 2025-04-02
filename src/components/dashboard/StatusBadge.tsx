import React from "react";

type BadgeType = "above" | "typical" | "high" | "normal";

interface StatusBadgeProps {
  type: BadgeType;
  text: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ type, text }) => {
  const getBadgeStyles = () => {
    switch (type) {
      case "above":
        return "bg-[#EEE2FF] border-[#6D2CCE] text-[#6D2CCE]";
      case "typical":
        return "bg-[#EEF4FB] border-[#788DA1] text-[#022C4E]";
      case "high":
        return "bg-[#EEE2FF] border-[#6D2CCE] text-[#6D2CCE]";
      case "normal":
        return "bg-[#E6F4EA] border-[#34A853] text-[#34A853]";
      default:
        return "bg-[#EEF4FB] border-[#788DA1] text-[#022C4E]";
    }
  };

  const getIconByType = () => {
    switch (type) {
      case "above":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[15px]"
          >
            <path
              d="M8.00017 3.58521V12.4633M8.00017 3.58521L12.6669 8.02423M8.00017 3.58521L3.3335 8.02423"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "typical":
        return (
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[13px]"
          >
            <path
              d="M13.3332 3.87793L5.99984 9.78034L2.6665 7.09744"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "high":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[15px]"
          >
            <path
              d="M8.00017 3.58521V12.4633M8.00017 3.58521L12.6669 8.02423M8.00017 3.58521L3.3335 8.02423"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return (
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[13px]"
          >
            <path
              d="M13.3332 3.87793L5.99984 9.78034L2.6665 7.09744"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`border flex items-center gap-2 px-4 py-2 rounded-lg ${getBadgeStyles()}`}
    >
      <div>{getIconByType()}</div>
      <div className="text-[15px] leading-[22.5px]">{text}</div>
    </div>
  );
};
