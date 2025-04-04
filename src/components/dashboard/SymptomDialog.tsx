import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartPulse, X, Info, FileText, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
interface SymptomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  symptom: string;
  time: string;
  details?: string;
}
export const SymptomDialog: React.FC<SymptomDialogProps> = ({
  open,
  onOpenChange,
  symptom,
  time,
  details
}) => {
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-none sm:rounded-xl bg-white shadow-lg w-[90%] max-w-md p-0 gap-0 overflow-hidden">
        <div className="bg-gradient-to-r from-[#EEF4FB] to-[#F8FAFD] p-5">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <div className="bg-white rounded-full p-2 mt-0.5 shadow-sm">
                <HeartPulse className="h-5 w-5 text-[#022C4E]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  
                  <DialogTitle className="text-[#022C4E] text-lg font-bold tracking-tight text-left">
                    {symptom}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-[#355F81] text-sm mt-0.5">
                  Logged at {time}
                </DialogDescription>
              </div>
            </div>
            <DialogClose className="text-[#8999AA] hover:text-[#022C4E] rounded-full transition duration-150 hover:bg-gray-100 p-1 -mr-1 -mt-1">
              <X className="h-4 w-4" />
            </DialogClose>
          </div>
        </div>

        <Tabs defaultValue="analysis" className="w-full">
          <div className="border-b border-[#F0F0F0]">
            <TabsList className="bg-transparent h-12 w-full justify-start gap-4 p-0 pl-5">
              <TabsTrigger value="analysis" className="text-[#355F81] data-[state=active]:text-[#022C4E] data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-[#022C4E] data-[state=active]:rounded-none data-[state=active]:shadow-none h-12 px-0">
                Analysis
              </TabsTrigger>
              <TabsTrigger value="resources" className="text-[#355F81] data-[state=active]:text-[#022C4E] data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-[#022C4E] data-[state=active]:rounded-none data-[state=active]:shadow-none h-12 px-0">
                Resources
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="analysis" className="p-5 pt-4 m-0">
            <div className="bg-[#F8FAFD] border border-[#E5EDF5] rounded-lg p-4">
              <div className="mb-3">
                <p className="text-[#022C4E] font-medium text-sm mb-1">ECG Analysis Results</p>
                <p className="text-[#355F81] text-xs">Atrial Fibrillation was detected in the 15-minutes leading up to the time of reported symptoms.</p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#355F81] text-sm">Atrial Fibrillation:</span>
                  <span className="text-[#022C4E] font-semibold text-sm">28% of beats</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#355F81] text-sm">Heart Rate:</span>
                  <span className="text-[#022C4E] font-semibold text-sm">105 bpm</span>
                </div>
              </div>
            </div>
            
            {details && <div className="text-[#355F81] text-[15px] leading-relaxed mt-3 mb-2">
                {details}
              </div>}
            
            <div className="mt-4 text-xs text-[#8999AA] italic">
              This analysis is for information only. Please consult your doctor for medical advice.
            </div>
          </TabsContent>

          <TabsContent value="resources" className="p-5 pt-4 m-0">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 border border-[#E5EDF5] rounded-lg hover:bg-[#F8FAFD] transition-colors cursor-pointer">
                <FileText className="h-5 w-5 text-[#355F81] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#022C4E] font-medium text-sm">Understanding Symptoms</p>
                  <p className="text-[#355F81] text-xs">Learn about cardiac symptoms and when to seek help</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 border border-[#E5EDF5] rounded-lg hover:bg-[#F8FAFD] transition-colors cursor-pointer">
                <ExternalLink className="h-5 w-5 text-[#355F81] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#022C4E] font-medium text-sm">Clinic FAQ</p>
                  <p className="text-[#355F81] text-xs">Answers to common questions about your monitoring</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 border border-[#E5EDF5] rounded-lg hover:bg-[#F8FAFD] transition-colors cursor-pointer">
                <Info className="h-5 w-5 text-[#355F81] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#022C4E] font-medium text-sm">Emergency Guidelines</p>
                  <p className="text-[#355F81] text-xs">When to seek immediate medical care</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex justify-end border-t border-[#F0F0F0] p-4 bg-white">
          <DialogClose asChild>
            <Button variant="outline" className="border-[#D3DEE9] text-[#022C4E] hover:bg-[#F8FAFD] hover:text-[#022C4E]">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>;
};