import React from "react";
import { cn } from "@/lib/utils";
interface TimelineDataPoint {
  timeInterval: number; // 0-95 representing time intervals in a day
  quality: number | null; // null = no data, 0 = good quality, 1 = poor quality
  hasSymptom: boolean;
}
interface QualityTimelineProps {
  data: TimelineDataPoint[];
  className?: string;
}
export const QualityTimeline: React.FC<QualityTimelineProps> = ({
  data,
  className
}) => {
  // Ensure we have 96 intervals (representing 15-minute intervals in a day)
  const filledData = Array.from({
    length: 96
  }, (_, i) => {
    const existingPoint = data.find(point => point.timeInterval === i);
    return existingPoint || {
      timeInterval: i,
      quality: null,
      hasSymptom: false
    };
  });
  return <div className={cn("w-full flex flex-col gap-1", className)}>
      
      
      <div className="relative w-full h-5">
        {/* Base timeline track */}
        <div className="absolute top-2 left-0 right-0 h-1.5 bg-gray-100 rounded-full"></div>
        
        {/* Time intervals with quality indicators */}
        <div className="absolute top-0 left-0 right-0 flex h-full">
          {filledData.map((point, index) => <div key={index} className="relative flex-1">
              {/* Quality indicator */}
              {point.quality !== null && <div className={cn("absolute top-2 h-1.5 w-full", point.quality === 0 ? "bg-emerald-400/40 shadow-[0_0_3px_rgba(52,168,83,0.5)]" // Good quality with subtle glow
          : "bg-amber-200/50" // Poor quality with subtle background
          )}></div>}
              
              {/* Symptom marker - only show for entries in the log */}
              {point.hasSymptom && <div className="absolute left-1/2 transform -translate-x-1/2 my-0 rounded">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3370AB]"></div>
                  <div className="h-2 w-[1px] bg-[#3370AB] mx-auto"></div>
                </div>}
            </div>)}
        </div>
        
        {/* Time indicators */}
        <div className="absolute -bottom-3.5 left-0 right-0 flex justify-between text-[10px] text-gray-500">
          <span>12 AM</span>
          <span>6 AM</span>
          <span>12 PM</span>
          <span>6 PM</span>
          <span>12 AM</span>
        </div>
      </div>
    </div>;
};