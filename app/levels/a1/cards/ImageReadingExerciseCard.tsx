import { Book } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import type { ImageReadingExercise } from "../exercises/imageReadingExercise";

interface ImageReadingExerciseCardProps {
  exercise: ImageReadingExercise;
  onClick: (exercise: ImageReadingExercise) => void;
}

const cardClass =
  "cursor-pointer border-2 border-black bg-[#fff] hover:bg-[#fde047] transition-all duration-200 shadow-none hover:shadow-[4px_4px_0_0_black] hover:-translate-x-1 hover:-translate-y-1";

export default function ReadingExerciseCard({
  exercise,
  onClick,
}: ImageReadingExerciseCardProps) {
  return (
    <Card className={cardClass} onClick={() => onClick(exercise)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge className="border-2 border-black text-black bg-white">
            {exercise.level}
          </Badge>
          <Badge className="border-2 border-black text-black bg-white">
            {exercise.topic}
          </Badge>
        </div>
        <CardTitle className="text-xl font-extrabold text-black">
          {exercise.title}
        </CardTitle>
        <CardDescription className="text-black text-base">
          {exercise.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-black font-medium">
          <Book className="h-4 w-4" />
          <span>{exercise.questions.length} Questions • True/False</span>
        </div>
      </CardContent>
    </Card>
  );
}
