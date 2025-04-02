import React from "react";
interface SymptomEntry {
  id: string;
  time: string;
  symptoms: string;
  hasWarning?: boolean;
  isHighlighted?: boolean;
}
interface SymptomLogProps {
  entries: SymptomEntry[];
  onViewAll: () => void;
  onSymptomClick: (symptom: string, time: string) => void;
}
export const SymptomLog: React.FC<SymptomLogProps> = ({
  entries,
  onViewAll,
  onSymptomClick
}) => {
  return <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <div className="text-[#022C4E] text-xl font-bold leading-[30px] tracking-[0.1px]">Symptom log</div>
        <button onClick={onViewAll} className="flex items-center focus:outline-none" aria-label="View all symptoms">
          <div className="text-[#022C4E] text-[13px] leading-[19.5px]">
            View All
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]">
              <path d="M9.98438 6L15.9844 12L9.98438 18L8.57812 16.5938L13.1719 12L8.57812 7.40625L9.98438 6Z" fill="#033761" />
            </svg>
          </div>
        </button>
      </div>
      <div className="bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] px-0 py-2 rounded-lg">
        <div className="pl-8 pr-4">
          {entries.map((entry, index) => <div key={entry.id} className="relative cursor-pointer hover:bg-gray-50" onClick={() => onSymptomClick(entry.symptoms, entry.time)}>
              {index === 0 && <div className="absolute left-[-20px] top-[18px] flex items-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-300"></div>
                </div>}
              {entry.isHighlighted && <div>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[12px] h-[12px] absolute left-[-20px] top-[18px]">
                    <circle cx="6" cy="6" r="6" fill="#7AA9D9" />
                  </svg>
                </div>}
              <div className={`${index < entries.length - 1 ? "border-b" : ""} px-0 py-3 ${index < entries.length - 1 ? "border-[#F0F0F0]" : ""}`}>
                <div className="flex items-center gap-5">
                  <div className="text-[#022C4E] text-[13px] font-bold leading-[19.5px] tracking-[1.04px] uppercase">
                    {entry.time}
                  </div>
                  <div className="flex justify-between items-center flex-1">
                    <div className={`text-[#022C4E] text-[15px] ${entry.hasWarning ? "font-bold" : ""} leading-[21.75px]`}>
                      {entry.symptoms}
                    </div>
                    {entry.hasWarning && <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]">
                          <path d="M12.9844 14.0156V9.98438H11.0156V14.0156H12.9844ZM12.9844 18V15.9844H11.0156V18H12.9844ZM0.984375 21L12 2.01562L23.0156 21H0.984375Z" fill="#471EE9" />
                        </svg>
                      </div>}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};