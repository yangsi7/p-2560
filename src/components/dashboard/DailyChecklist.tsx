
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Battery, CheckCircle, AlertCircle, BarChart, Plus } from "lucide-react";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
  progressValue?: number;
}

export const DailyChecklist: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: "1",
      title: "Review data quality",
      description: "Your data quality is at 82/100",
      icon: <BarChart className="h-5 w-5 text-[#022C4E]" />,
      completed: false,
      progressValue: 82,
    },
    {
      id: "2",
      title: "Charge sensor",
      description: "Battery at 23%, charge for 30 minutes",
      icon: <Battery className="h-5 w-5 text-[#022C4E]" />,
      completed: false,
      progressValue: 23,
    },
    {
      id: "3",
      title: "Log a symptom",
      description: "No symptoms logged today",
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
            <CheckCircle className="h-5 w-5 text-emerald-500" />
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
                          item.id === "1"
                            ? "bg-[#4A73FB]"
                            : item.progressValue < 25
                            ? "bg-red-500"
                            : "bg-orange-400"
                        }`}
                        style={{ width: `${item.progressValue}%` }}
                      />
                    </Progress>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))
      )}
    </div>
  );
};
