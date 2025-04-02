
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
      className={cn(
        "flex flex-col w-full bg-white rounded-xl p-4 shadow-sm border border-[#E5EDF5] cursor-pointer transition-all hover:shadow-md",
        onClick ? "cursor-pointer" : "cursor-default"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <div className="bg-[#F5F9FC] rounded-full p-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="#022C4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 4V8L10.6667 9.33333" stroke="#022C4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-[#022C4E] font-bold text-lg">{symptom}</span>
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span className="text-[#355F81] text-sm">Time:</span>
          <span className="text-[#022C4E] font-medium text-sm">{time}</span>
        </div>
        
        {heartRate && (
          <div className="flex justify-between">
            <span className="text-[#355F81] text-sm">Data:</span>
            <span className="text-[#022C4E] font-medium text-sm">{heartRate}</span>
          </div>
        )}
      </div>
      
      {alert && (
        <div className="mt-3 pt-3 border-t border-[#E5EDF5]">
          <div className="flex gap-2 items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00001 5.33337V8.00004M8.00001 10.6667H8.00668M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00004C1.33334 4.31814 4.31811 1.33337 8.00001 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z" stroke="#CE2C4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xs text-[#CE2C4B]">{alert}</span>
          </div>
        </div>
      )}
    </div>
  );
};
