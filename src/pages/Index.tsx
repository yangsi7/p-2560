
import React, { useState } from "react";
import { Header } from "@/components/dashboard/Header";
import { LatestSymptom } from "@/components/dashboard/LatestSymptom";
import { DateSelector } from "@/components/dashboard/DateSelector";
import { SymptomLog } from "@/components/dashboard/SymptomLog";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DailyChecklist } from "@/components/dashboard/DailyChecklist";
import { SymptomDialog } from "@/components/dashboard/SymptomDialog";

const Index = () => {
  const [userName] = useState("Edric");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSymptom, setSelectedSymptom] = useState({
    name: "",
    time: "",
  });

  // Sample symptom log entries
  const symptomEntries = [
    {
      id: "1",
      time: "12:43 AM",
      symptoms: "Dizziness, Headache",
      hasWarning: true,
      isHighlighted: false,
      timeInterval: 5, // Corresponds to around 1:15 AM
    },
    {
      id: "2",
      time: "01:06 AM",
      symptoms: "Fatigue, Cough",
      hasWarning: false,
      isHighlighted: true,
      timeInterval: 7, // Corresponds to around 1:45 AM
    },
    {
      id: "3",
      time: "03:56 AM",
      symptoms: "Cough, Chest discomfort/ tightness",
      hasWarning: false,
      isHighlighted: false,
      timeInterval: 15, // Corresponds to around 3:45 AM
    },
  ];
  
  // Enhanced timeline data - more filled with quality data
  const timelineData = Array.from({ length: 96 }, (_, i) => {
    // Default quality pattern - alternating between good and null periods
    let quality = null;
    
    // Create more filled periods of quality data
    if (i >= 0 && i <= 20) {
      // Morning period - mostly good quality with some poor
      quality = i % 7 === 0 ? 1 : 0;
    } else if (i >= 24 && i <= 40) {
      // Mid-day period - mixed quality
      quality = i % 5 === 0 ? 1 : 0;
    } else if (i >= 50 && i <= 65) {
      // Afternoon period - more poor quality
      quality = i % 3 === 0 ? 0 : 1;
    } else if (i >= 70 && i <= 90) {
      // Evening period - gradually improving
      quality = i % 4 === 0 ? 1 : 0;
    }
    
    // Only mark symptoms for the 3 entries we have in the log
    const hasSymptom = [5, 7, 15].includes(i);
    
    return { timeInterval: i, quality, hasSymptom };
  });

  const handleViewAllSymptoms = () => {
    // Handle view all symptoms action
    console.log("View all symptoms clicked");
  };

  const handleSymptomClick = (symptom: string, time: string) => {
    setSelectedSymptom({
      name: symptom,
      time: time,
    });
    setDialogOpen(true);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-neutral-50">
      <div className="w-full max-w-md flex flex-col items-center">
        <Header userName={userName} />

        <div className="flex flex-col gap-9 pt-1.5 pb-6 px-4 w-full">
          <LatestSymptom
            symptom="Dizziness"
            time="10:30 AM"
            heartRate="Heart Rate 120 bpm"
            alert="Atrial Fibrillation was detected around the time this symptom was logged"
            onClick={() => handleSymptomClick("Dizziness", "10:30 AM")}
          />

          <DateSelector />
          
          <DailyChecklist />

          <SymptomLog
            entries={symptomEntries}
            timelineData={timelineData}
            onViewAll={handleViewAllSymptoms}
            onSymptomClick={handleSymptomClick}
          />

          <div className="flex flex-col gap-3">
            <div className="text-[#022C4E] text-xl font-bold leading-[30px] tracking-[0.1px]">
              Day's Avg
            </div>

            <MetricCard
              title="Heart Rate"
              value="91.9"
              unit="bpm"
              description="Your average heart rate is significantly above the normal range of 76.2 - 81.6bpm."
              statusType="above"
              statusText="Above Typical"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.3414 18.9874L12.3462 18.983L12.441 18.8977C12.4418 18.897 12.4427 18.8962 12.4435 18.8954C15.1 16.4819 17.1695 14.5997 18.5782 12.8527C19.9659 11.1317 20.5522 9.73195 20.5006 8.30203L20.5006 8.30085C20.4569 7.06174 19.8172 5.87987 18.8155 5.19784L18.8115 5.1951C16.902 3.88597 14.4831 4.46045 13.1401 6.0323L11.9997 7.36714L10.8592 6.0323C9.51939 4.46409 7.09876 3.89222 5.18467 5.19728C4.18329 5.87907 3.54292 7.06089 3.49878 8.29952C3.45119 9.73169 4.03935 11.1327 5.42462 12.8499C6.83181 14.5942 8.89963 16.4722 11.556 18.8756L11.5587 18.878L11.6759 18.9846C11.8627 19.1567 12.1544 19.1572 12.3414 18.9874ZM13.4497 20.0079L13.3497 20.0979C12.5897 20.7879 11.4197 20.7879 10.6597 20.0879L10.5497 19.9879C5.29967 15.2379 1.86966 12.1279 1.99966 8.24794C2.05966 6.54794 2.92966 4.91794 4.33966 3.95794C6.49292 2.48981 9.05863 2.77794 10.8865 4.05184C11.2997 4.3398 11.6752 4.67813 11.9997 5.05794C12.324 4.67827 12.6994 4.33971 13.1124 4.05132C14.9403 2.77498 17.5062 2.48153 19.6597 3.95794C21.0697 4.91794 21.9397 6.54794 21.9997 8.24794C22.1391 12.113 18.726 15.214 13.5101 19.9531L13.4497 20.0079Z"
                    fill="#022C4E"
                  />
                </svg>
              }
            />

            <MetricCard
              title="Atrial Fibrillation"
              value="10"
              unit="%"
              description="Your atrial burden is within the normal range of 9.57 - 20.68%."
              statusType="typical"
              statusText="Typical Range"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.3414 18.9874L12.3462 18.983L12.441 18.8977C12.4418 18.897 12.4427 18.8962 12.4435 18.8954C15.1 16.4819 17.1695 14.5997 18.5782 12.8527C19.9659 11.1317 20.5522 9.73195 20.5006 8.30203L20.5006 8.30085C20.4569 7.06174 19.8172 5.87987 18.8155 5.19784L18.8115 5.1951C16.902 3.88597 14.4831 4.46045 13.1401 6.0323L11.9997 7.36714L10.8592 6.0323C9.51939 4.46409 7.09876 3.89222 5.18467 5.19728C4.18329 5.87907 3.54292 7.06089 3.49878 8.29952C3.45119 9.73169 4.03935 11.1327 5.42462 12.8499C6.83181 14.5942 8.89963 16.4722 11.556 18.8756L11.5587 18.878L11.6759 18.9846C11.8627 19.1567 12.1544 19.1572 12.3414 18.9874ZM13.4497 20.0079L13.3497 20.0979C12.5897 20.7879 11.4197 20.7879 10.6597 20.0879L10.5497 19.9879C5.29967 15.2379 1.86966 12.1279 1.99966 8.24794C2.05966 6.54794 2.92966 4.91794 4.33966 3.95794C6.49292 2.48981 9.05863 2.77794 10.8865 4.05184C11.2997 4.3398 11.6752 4.67813 11.9997 5.05794C12.324 4.67827 12.6994 4.33971 13.1124 4.05132C14.9403 2.77498 17.5062 2.48153 19.6597 3.95794C21.0697 4.91794 21.9397 6.54794 21.9997 8.24794C22.1391 12.113 18.726 15.214 13.5101 19.9531L13.4497 20.0079Z"
                    fill="#022C4E"
                  />
                </svg>
              }
            />

            <MetricCard
              title="Blood Pressure"
              value="125/83"
              unit="mmHg"
              description="Your blood pressure indicates Stage 1 Hypertension."
              statusType="high"
              statusText="High -Stage 1"
              icon={
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px]"
                >
                  <path
                    d="M12.3119 5.07485C14.0568 7.77829 15.7066 11.164 15.7121 14.2169C15.644 15.9217 14.9457 17.521 13.7782 18.6785C12.6104 19.8244 11.0576 20.433 9.48265 20.3805L9.45344 20.3795L9.42424 20.3807C7.84148 20.4436 6.30282 19.8369 5.13503 18.6798L5.1324 18.6772C3.9681 17.5341 3.26808 15.9245 3.19992 14.2169C3.20545 11.2126 4.85416 7.82771 6.60096 5.10951C7.46434 3.76601 8.329 2.61962 8.97796 1.80916C9.15651 1.58618 9.31847 1.38896 9.45926 1.2204C9.59902 1.38609 9.75951 1.57969 9.93628 1.79844C10.5848 2.60102 11.449 3.73795 12.3119 5.07485Z"
                    fill="white"
                    stroke="#022C4E"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M15.6002 24C18.9139 24 21.6003 21.3137 21.6003 18C21.6003 14.6863 18.9139 12 15.6002 12C12.2864 12 9.6001 14.6863 9.6001 18C9.6001 21.3137 12.2864 24 15.6002 24Z"
                    fill="white"
                    stroke="#022C4E"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M16.2999 17.9998C16.2999 18.3864 15.9865 18.6998 15.5999 18.6998C15.2133 18.6998 14.8999 18.3864 14.8999 17.9998C14.8999 17.6132 15.2133 17.2998 15.5999 17.2998C15.9865 17.2998 16.2999 17.6132 16.2999 17.9998Z"
                    fill="#CE2C4B"
                    stroke="#022C4E"
                  />
                  <path
                    d="M15.6001 18.0001L16.8001 15.6001"
                    stroke="#022C4E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      <SymptomDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        symptom={selectedSymptom.name}
        time={selectedSymptom.time}
      />
    </div>
  );
};

export default Index;
