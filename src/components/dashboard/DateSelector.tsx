import React, { useState } from "react";
import { format } from "date-fns";

export const DateSelector: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const formattedDate = format(currentDate, "EEE, MMMM d");

  return (
    <div className="w-full flex justify-between items-center bg-white border p-4 rounded-lg border-[#F0F0F0]">
      <button
        onClick={handlePreviousDay}
        className="flex p-1 focus:outline-none"
        aria-label="Previous day"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px]"
        >
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="black"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="flex items-center gap-2">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px]"
          >
            <g clipPath="url(#clip0_815_4802)">
              <path
                d="M17.5 4V4.5H18H19C19.8239 4.5 20.5 5.17614 20.5 6V20C20.5 20.8239 19.8239 21.5 19 21.5H5C4.16783 21.5 3.50009 20.8256 3.5 20.0002C3.5 20.0001 3.5 20.0001 3.5 20L3.505 13.0004L3.51 6.00036V6C3.51 5.17123 4.17103 4.5 5 4.5H6H6.5V4V2.5H7.5V4V4.5H8H16H16.5V4V2.5H17.5V4ZM19 20.5H19.5V20V9V8.5H19H5H4.5V9V20V20.5H5H19Z"
                fill="#003D78"
                stroke="#003D78"
              />
              <path
                d="M7.50001 12.5V11.5H8.50001V12.5H7.50001ZM11.5 12.5V11.5H12.5V12.5H11.5ZM15.5 12.5V11.5H16.5V12.5H15.5ZM7.5 15.5V14.5H8.5V15.5H7.5ZM11.5 15.5V14.5H12.5V15.5H11.5ZM15.5 15.5V14.5H16.5V15.5H15.5ZM7.50001 18.5V17.5H8.50001V18.5H7.50001ZM11.5 18.5V17.5H12.5V18.5H11.5ZM15.5 18.5V17.5H16.5V18.5H15.5Z"
                fill="#003D78"
                stroke="#003D78"
              />
            </g>
            <defs>
              <clipPath id="clip0_815_4802">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-[#003D78] text-xl font-bold leading-[30px] tracking-[0.1px]">
          {formattedDate}
        </div>
      </div>
      <button
        onClick={handleNextDay}
        className="flex p-1 focus:outline-none"
        aria-label="Next day"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px]"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="black"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
