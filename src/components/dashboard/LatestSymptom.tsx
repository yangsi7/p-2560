
import React from "react";

interface LatestSymptomProps {
  symptom: string;
  time: string;
  heartRate?: string;
  alert?: string;
  onClick?: () => void;
}

export const LatestSymptom: React.FC<LatestSymptomProps> = ({
  symptom,
  time,
  heartRate,
  alert,
  onClick,
}) => {
  return (
    <div className={`w-full bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] p-5 rounded-[15px] ${onClick ? 'hover:bg-gray-50 transition-colors duration-200 cursor-pointer' : ''}`} onClick={onClick}>
      <div className="flex items-center gap-2.5 pb-[15px]">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px]"
          >
            <path
              d="M11.0156 9V6.98438H12.9844V9H11.0156ZM6.32812 17.6719C7.92188 19.2344 9.8125 20.0156 12 20.0156C14.1875 20.0156 16.0625 19.2344 17.625 17.6719C19.2188 16.0781 20.0156 14.1875 20.0156 12C20.0156 9.8125 19.2188 7.9375 17.625 6.375C16.0625 4.78125 14.1875 3.98438 12 3.98438C9.8125 3.98438 7.92188 4.78125 6.32812 6.375C4.76562 7.9375 3.98438 9.8125 3.98438 12C3.98438 14.1875 4.76562 16.0781 6.32812 17.6719ZM4.92188 4.96875C6.89062 3 9.25 2.01562 12 2.01562C14.75 2.01562 17.0938 3 19.0312 4.96875C21 6.90625 21.9844 9.25 21.9844 12C21.9844 14.75 21 17.1094 19.0312 19.0781C17.0938 21.0156 14.75 21.9844 12 21.9844C9.25 21.9844 6.89062 21.0156 4.92188 19.0781C2.98438 17.1094 2.01562 14.75 2.01562 12C2.01562 9.25 2.98438 6.90625 4.92188 4.96875ZM11.0156 17.0156V11.0156H12.9844V17.0156H11.0156Z"
              fill="#3370AB"
            />
          </svg>
        </div>
        <div className="text-[#3370AB] text-lg font-semibold">
          Latest Symptom
        </div>
      </div>
      <div className="pl-[34px]">
        <div className="flex flex-col gap-0.5">
          <div className="flex justify-between items-start">
            <div className="text-[#001E3C] text-base font-bold leading-6 tracking-[0.08px]">
              {symptom}
            </div>
            {heartRate && (
              <div className="text-gray-800 text-sm">{heartRate}</div>
            )}
          </div>
          <div className="text-[#022C4E] text-[13px] leading-[18.2px]">
            {time}
          </div>
          {alert && (
            <div className="bg-slate-50 mt-2 p-3 rounded-lg">
              <div className="flex items-start gap-3.5">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[16px] h-[16px]"
                  >
                    <path
                      d="M2.6665 9.33328C2.54034 9.33371 2.41665 9.29833 2.3098 9.23126C2.20295 9.1642 2.11732 9.06818 2.06287 8.95438C2.00841 8.84059 1.98736 8.71367 2.00217 8.58838C2.01697 8.4631 2.06702 8.34459 2.1465 8.24661L8.7465 1.44661C8.79601 1.38947 8.86347 1.35085 8.93782 1.3371C9.01217 1.32335 9.08898 1.33529 9.15565 1.37095C9.22232 1.40661 9.27489 1.46388 9.30472 1.53335C9.33456 1.60283 9.33988 1.68038 9.31983 1.75328L8.03983 5.76661C8.00209 5.86763 7.98941 5.97629 8.00289 6.08328C8.01637 6.19028 8.05561 6.2924 8.11723 6.3809C8.17885 6.46939 8.26101 6.54162 8.35668 6.59139C8.45235 6.64115 8.55866 6.66696 8.6665 6.66661H13.3332C13.4593 6.66618 13.583 6.70156 13.6899 6.76863C13.7967 6.8357 13.8823 6.93171 13.9368 7.04551C13.9913 7.15931 14.0123 7.28622 13.9975 7.41151C13.9827 7.53679 13.9326 7.65531 13.8532 7.75328L7.25317 14.5533C7.20366 14.6104 7.13619 14.649 7.06184 14.6628C6.9875 14.6765 6.91068 14.6646 6.84401 14.6289C6.77734 14.5933 6.72478 14.536 6.69494 14.4665C6.66511 14.3971 6.65978 14.3195 6.67983 14.2466L7.95983 10.2333C7.99758 10.1323 8.01025 10.0236 7.99677 9.91661C7.98329 9.80962 7.94406 9.70749 7.88244 9.619C7.82082 9.5305 7.73865 9.45827 7.64298 9.40851C7.54731 9.35874 7.441 9.33293 7.33317 9.33328H2.6665Z"
                      stroke="#6366F1"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-slate-500 text-sm font-medium">
                  {alert}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
