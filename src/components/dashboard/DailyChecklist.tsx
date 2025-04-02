import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Battery, BarChart, AlertCircle, Plus } from "lucide-react";
import { QualityTimeline } from "./QualityTimeline";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
  progressValue?: number;
}

interface TimelineDataPoint {
  timeInterval: number;
  quality: number | null;
  hasSymptom: boolean;
}

export const DailyChecklist: React.FC = () => {
  // Sample timeline data for the quality review
  const timelineData: TimelineDataPoint[] = [
    { timeInterval: 6, quality: 0, hasSymptom: false },
    { timeInterval: 7, quality: 0, hasSymptom: false },
    { timeInterval: 8, quality: 0, hasSymptom: false },
    { timeInterval: 9, quality: 0, hasSymptom: false },
    { timeInterval: 10, quality: 0, hasSymptom: false },
    { timeInterval: 11, quality: 1, hasSymptom: false },
    { timeInterval: 12, quality: 1, hasSymptom: false },
    { timeInterval: 13, quality: 1, hasSymptom: false },
    { timeInterval: 14, quality: 0, hasSymptom: false },
    { timeInterval: 15, quality: 0, hasSymptom: false },
    { timeInterval: 25, quality: 0, hasSymptom: false },
    { timeInterval: 26, quality: 0, hasSymptom: false },
    { timeInterval: 27, quality: 0, hasSymptom: false },
    { timeInterval: 42, quality: 1, hasSymptom: false },
    { timeInterval: 43, quality: 1, hasSymptom: false },
    { timeInterval: 44, quality: 1, hasSymptom: false },
    { timeInterval: 45, quality: 0, hasSymptom: false },
    { timeInterval: 46, quality: 0, hasSymptom: false },
    { timeInterval: 47, quality: 0, hasSymptom: false },
    { timeInterval: 48, quality: 0, hasSymptom: false },
    { timeInterval: 68, quality: 0, hasSymptom: false },
    { timeInterval: 69, quality: 0, hasSymptom: false },
    { timeInterval: 70, quality: 0, hasSymptom: false },
  ];

  // Calculate quality hours (each interval represents 15 minutes)
  const qualityHours = timelineData
    .filter(point => point.quality === 0) // Count only good quality points
    .length * 0.25; // Convert to hours (15 min = 0.25 hours)

  const [isQualityReviewOpen, setIsQualityReviewOpen] = useState(false);
  
  // Check if there are symptoms logged
  const hasSymptoms = true; // This would be dynamic based on symptom log data

  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: "1",
      title: "Review data quality",
      description: `Your data quality is at 82/100 (${qualityHours.toFixed(1)} quality hours today)`,
      icon: <BarChart className="h-5 w-5 text-[#022C4E]" />,
      completed: false,
      progressValue: 82,
    },
    {
      id: "2",
      title: "Charge sensor",
      description: "Charge for 30 min to ensure a continuous monitoring experience",
      icon: <Battery className="h-5 w-5 text-[#022C4E]" />,
      completed: false,
      progressValue: 23,
    },
    {
      id: "3",
      title: hasSymptoms ? "Review Symptom Log" : "Log a symptom", 
      description: hasSymptoms ? "Review your logged symptoms" : "No symptoms logged today",
      icon: <Plus className="h-5 w-5 text-[#022C4E]" />,
      completed: false,
    },
    {
      id: "4",
      title: "Need Help?",
      description: "Access support options",
      icon: <AlertCircle className="h-5 w-5 text-[#022C4E]" />,
      completed: false,
    },
  ]);

  const handleCheckItem = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    
    // Close quality review when the item is checked
    if (id === "1" && !items.find(item => item.id === "1")?.completed) {
      setIsQualityReviewOpen(false);
    }
  };

  // Get visible items - show only non-completed items, max 2
  const visibleItems = items
    .filter((item) => !item.completed)
    .slice(0, 2);

  // Calculate progress
  const completedCount = items.filter((item) => item.completed).length;
  const progressPercentage = (completedCount / items.length) * 100;

  return (
    <div className="bg-white border rounded-lg border-[#F0F0F0] overflow-hidden">
      <div className="px-5 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-[#022C4E] text-[15px] font-bold leading-[22.5px]">
            Daily Checklist
          </div>
          <div className="text-[#355F81] text-[13px] leading-[19.5px]">
            {completedCount}/{items.length} completed
          </div>
        </div>
        <Progress value={progressPercentage} className="h-1.5 bg-[#E9EFF5]">
          <div
            className="h-full bg-[#4A73FB] rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </Progress>
      </div>

      {visibleItems.length === 0 ? (
        <div className="px-5 py-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span className="text-[#022C4E] text-[15px] leading-[22.5px]">
              All items completed!
            </span>
          </div>
        </div>
      ) : (
        visibleItems.map((item, index) => (
          <React.Fragment key={item.id}>
            {index > 0 && <Separator className="bg-[#F0F0F0]" />}
            <div className="px-5 py-4">
              {item.id === "1" ? (
                <Collapsible
                  open={isQualityReviewOpen}
                  onOpenChange={setIsQualityReviewOpen}
                  className="space-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5">
                      <Checkbox
                        id={`check-${item.id}`}
                        checked={item.completed}
                        onCheckedChange={() => handleCheckItem(item.id)}
                        className="border-[#022C4E] data-[state=checked]:bg-[#4A73FB] data-[state=checked]:border-[#4A73FB]"
                      />
                    </div>
                    <CollapsibleTrigger className="flex-1 text-left">
                      <div>
                        <div className="flex items-center gap-2">
                          <div>{item.icon}</div>
                          <div className="text-[#022C4E] text-[15px] font-bold leading-[22.5px]">
                            {item.title}
                          </div>
                        </div>
                        <div className="text-[#355F81] text-[13px] leading-[19.5px] mt-1">
                          {item.description}
                        </div>
                        {typeof item.progressValue === "number" && (
                          <Progress
                            value={item.progressValue}
                            className="h-1.5 bg-[#E9EFF5] mt-2"
                          >
                            <div
                              className={`h-full rounded-full transition-all duration-300 ease-in-out bg-[#4A73FB]`}
                              style={{ width: `${item.progressValue}%` }}
                            />
                          </Progress>
                        )}
                      </div>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <div className="pl-8 pr-1 pt-1">
                      <div className="bg-[#F9FAFC] rounded-md p-3">
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-[#022C4E] text-xs font-medium">Quality Timeline</div>
                          <div className="text-[#355F81] text-xs font-medium">
                            {qualityHours.toFixed(1)} quality hours
                          </div>
                        </div>
                        <QualityTimeline 
                          data={timelineData} 
                          className="w-full" 
                        />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <Checkbox
                      id={`check-${item.id}`}
                      checked={item.completed}
                      onCheckedChange={() => handleCheckItem(item.id)}
                      className="border-[#022C4E] data-[state=checked]:bg-[#4A73FB] data-[state=checked]:border-[#4A73FB]"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div>{item.icon}</div>
                      <div className="text-[#022C4E] text-[15px] font-bold leading-[22.5px]">
                        {item.title}
                      </div>
                    </div>
                    <div className="text-[#355F81] text-[13px] leading-[19.5px] mt-1">
                      {item.description}
                    </div>
                    {typeof item.progressValue === "number" && (
                      <Progress
                        value={item.progressValue}
                        className="h-1.5 bg-[#E9EFF5] mt-2"
                      >
                        <div
                          className={`h-full rounded-full transition-all duration-300 ease-in-out ${
                            item.progressValue < 25
                              ? "bg-red-500"
                              : "bg-orange-400"
                          }`}
                          style={{ width: `${item.progressValue}%` }}
                        />
                      </Progress>
                    )}
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        ))
      )}
    </div>
  );
};
