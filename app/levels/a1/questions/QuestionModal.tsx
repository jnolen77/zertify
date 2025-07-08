import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Volume2 } from "lucide-react";
import { speak } from "../../../utils/speak";

interface QuestionModalProps {
  open: boolean;
  onClose: () => void;
  question: string;
  answer: string;
  englishQ: string;
  englishA: string;
}

export default function QuestionModal({
  open,
  onClose,
  question,
  answer,
  englishQ,
  englishA,
}: QuestionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="border-2 border-black rounded-none max-w-lg bg-white text-black p-6">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-bold uppercase flex items-center justify-between">
            <span>{question}</span>
            <Volume2
              className="h-5 w-5 cursor-pointer"
              onClick={() => speak(question)}
            />
          </DialogTitle>
          <p className="text-sm text-gray-700">{englishQ}</p>
        </DialogHeader>
        <div className="bg-[#dcfce7] border-2 border-black p-4">
          <div className="flex items-center justify-between font-semibold mb-2">
            <span>{answer}</span>
            <Volume2
              className="h-5 w-5 cursor-pointer text-green-700"
              onClick={() => speak(answer)}
            />
          </div>
          <p className="text-sm text-gray-700">{englishA}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
