
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  details,
}) => {
  const { toast } = useToast();

  const handleAddDetails = () => {
    toast({
      title: "Adding details",
      description: `Adding details for ${symptom}`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-none sm:rounded-xl bg-white shadow-lg w-[90%] max-w-md p-0 gap-0 overflow-hidden">
        <div className="bg-gradient-to-r from-[#EEF4FB] to-[#F8FAFD] p-5">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <div className="bg-white rounded-full p-2 mt-0.5 shadow-sm">
                <AlertCircle className="h-5 w-5 text-[#022C4E]" />
              </div>
              <div className="flex flex-col">
                <DialogTitle className="text-[#022C4E] text-lg font-bold tracking-tight text-left">
                  {symptom}
                </DialogTitle>
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

        <div className="p-5">
          <div className="text-[#355F81] text-[15px] leading-relaxed">
            {details || 
              "This symptom may be related to elevated heart rate patterns detected earlier. Would you like to log additional details about this symptom?"}
          </div>
        </div>

        <DialogFooter className="flex justify-end border-t border-[#F0F0F0] p-4 gap-3 bg-white">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="border-[#D3DEE9] text-[#022C4E] hover:bg-[#F8FAFD] hover:text-[#022C4E]"
            >
              Close
            </Button>
          </DialogClose>
          <Button
            className="bg-[#003D78] hover:bg-[#022C4E] text-white"
            onClick={handleAddDetails}
          >
            Add details
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
