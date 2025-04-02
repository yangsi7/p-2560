
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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
      className="flex flex-col gap-3 p-4 bg-white rounded-xl shadow-sm cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Badge 
            variant="outline" 
            className="border-[#6D2CCE] bg-[#EEE2FF] text-[#6D2CCE] rounded-lg px-2 py-1"
          >
            New
          </Badge>
          <h3 className="text-xl font-semibold text-[#022C4E]">{symptom}</h3>
        </div>
        <span className="text-sm text-neutral-500">{time}</span>
      </div>
      
      {heartRate && (
        <div className="flex gap-2 items-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.4474 7.48706L14.0345 12.8835L14.9668 11.3073H17.3241V12.8073H15.8223L13.896 16.0643L11.3378 10.7282L10.1621 12.8073H6.67578V11.3073H9.28711L11.4474 7.48706Z" fill="#022C4E" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.3414 18.9874L12.3462 18.983L12.441 18.8977C12.4418 18.897 12.4427 18.8962 12.4435 18.8954C15.1 16.4819 17.1695 14.5997 18.5782 12.8527C19.9659 11.1317 20.5522 9.73195 20.5006 8.30203L20.5006 8.30085C20.4569 7.06174 19.8172 5.87987 18.8155 5.19784L18.8115 5.1951C16.902 3.88597 14.4831 4.46045 13.1401 6.0323L11.9997 7.36714L10.8592 6.0323C9.51939 4.46409 7.09876 3.89222 5.18467 5.19728C4.18329 5.87907 3.54292 7.06089 3.49878 8.29952C3.45119 9.73169 4.03935 11.1327 5.42462 12.8499C6.83181 14.5942 8.89963 16.4722 11.556 18.8756L11.5587 18.878L11.6759 18.9846C11.8627 19.1567 12.1544 19.1572 12.3414 18.9874Z" fill="#022C4E" />
          </svg>
          <span className="text-sm text-[#022C4E]">{heartRate}</span>
        </div>
      )}
      
      {alert && (
        <div className="mt-1 p-3 bg-[#FFF8F9] border border-[#FFCCD5] rounded-lg text-sm text-[#022C4E]">
          {alert}
        </div>
      )}
    </div>
  );
};
