import { Volume2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/card";
import { speak } from "../../../utils/speak";

interface QuestionCardProps {
  question: string;
  englishQ: string;
  onClick: () => void;
}

export default function QuestionCard({
  question,
  englishQ,
  onClick,
}: QuestionCardProps) {
  return (
    <Card
      className="border-2 border-black bg-white rounded-none hover:bg-gray-100 transition cursor-pointer"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-md font-bold text-black">
            {question}
          </CardTitle>
          <Volume2
            className="h-4 w-4 text-black cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // Don’t trigger modal
              speak(question);
            }}
          />
        </div>
        <CardDescription className="text-sm text-gray-700">
          {englishQ}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
