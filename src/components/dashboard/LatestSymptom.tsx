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
  onClick
}) => {
  return;
};