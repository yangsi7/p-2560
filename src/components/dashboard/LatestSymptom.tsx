
import React from "react";
import { cn } from "@/lib/utils";

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
  onClick
}) => {
  return (
    <div 
      className="w-full p-4 bg-white rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <div className="text-lg font-semibold text-[#022C4E]">{symptom}</div>
            <div className="text-sm text-gray-500">{time}</div>
          </div>
          <div className="rounded-full bg-[#EFF2F5] p-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071L10.7071 8.70711C11.0976 8.31658 11.0976 7.68342 10.7071 7.29289L6.70711 3.29289C6.31658 2.90237 5.68342 2.90237 5.29289 3.29289C4.90237 3.68342 4.90237 4.31658 5.29289 4.70711L8.58579 8L5.29289 11.2929Z" fill="#3370AB"/>
            </svg>
          </div>
        </div>
        
        {/* Show heart rate if provided */}
        {heartRate && (
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.23029 3.99161L8.00004 4.24482L7.76979 3.99161C6.90979 3.05535 5.55329 2.77308 4.45479 3.43862C3.35629 4.10409 2.92029 5.40001 3.28029 6.54348C3.64029 7.68695 5.75754 9.99348 8.00004 11.3078C10.2425 9.99348 12.3598 7.68695 12.7198 6.54348C13.0798 5.40001 12.6438 4.10409 11.5453 3.43862C10.4468 2.77308 9.09029 3.05535 8.23029 3.99161Z" stroke="#3370AB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{heartRate}</span>
          </div>
        )}
        
        {/* Show alert if provided */}
        {alert && (
          <div className="mt-1 p-2 bg-amber-50 rounded-lg text-xs text-amber-800">
            <div className="flex items-start gap-1.5">
              <svg className="h-4 w-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <span>{alert}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
