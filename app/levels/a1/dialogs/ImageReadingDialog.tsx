import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import type { ImageReadingExercise } from "../exercises/imageReadingExercise";

interface Props {
  exercise: ImageReadingExercise | null;
  onClose: () => void;
}

export default function ImageReadingDialog({ exercise, onClose }: Props) {
  const [userAnswers, setUserAnswers] = useState<(boolean | null)[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (exercise) {
      setUserAnswers(new Array(exercise.questions.length).fill(null));
      setShowResults(false);
    }
  }, [exercise]);

  const handleAnswer = (index: number, value: boolean) => {
    const updated = [...userAnswers];
    updated[index] = value;
    setUserAnswers(updated);
  };

  const correctAnswers = exercise
    ? exercise.questions.filter((q, i) => q.answer === userAnswers[i]).length
    : 0;

  return (
    <Dialog open={!!exercise} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {exercise && (
          <div className="p-6 border-2 border-black space-y-6 bg-white">
            <DialogHeader>
              <Badge className="border-2 border-black bg-white text-black uppercase">
                {exercise.level}
              </Badge>
              <Badge className="border-2 border-black bg-[#facc15] text-black uppercase">
                {exercise.topic}
              </Badge>
              <DialogTitle className="text-3xl font-extrabold text-black">
                {exercise.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-black">
                {exercise.description}
              </DialogDescription>
            </DialogHeader>

            <div className="bg-[#fef3c7] p-6 border-2 border-black rounded-none flex justify-center">
              <img
                src={exercise.imageUrl}
                alt={exercise.title}
                className="max-w-full h-auto border border-black"
                width={400}
                height={400}
              />
            </div>

            <div className="space-y-4">
              {exercise.questions.map((q, i) => {
                const isCorrect = userAnswers[i] === q.answer;
                const isIncorrect = showResults && !isCorrect;

                return (
                  <div
                    key={i}
                    className={`p-4 border-2 rounded-none ${
                      showResults
                        ? isCorrect
                          ? "bg-green-200 border-black"
                          : "bg-red-200 border-black"
                        : "bg-white border-black"
                    }`}
                  >
                    <p className="font-bold text-black">{q.question}</p>
                    <div className="flex gap-3 mt-3">
                      <Button
                        size="sm"
                        onClick={() => handleAnswer(i, true)}
                        disabled={showResults}
                        className={`rounded-none border-2 ${
                          userAnswers[i] === true
                            ? "bg-black text-white"
                            : "bg-white text-black hover:bg-cyan-400 hover:text-white"
                        }`}
                      >
                        Richtig
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleAnswer(i, false)}
                        disabled={showResults}
                        className={`rounded-none border-2 ${
                          userAnswers[i] === false
                            ? "bg-black text-white"
                            : "bg-white text-black hover:bg-cyan-400 hover:text-white"
                        }`}
                      >
                        Falsch
                      </Button>
                    </div>
                    {isIncorrect && (
                      <p className="text-sm mt-2 text-black font-medium">
                        Correct answer: {q.answer ? "Richtig" : "Falsch"}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-4 border-t-2 border-black">
              {!showResults ? (
                <Button
                  onClick={() => setShowResults(true)}
                  disabled={userAnswers.includes(null)}
                  className="bg-black text-white border-2 border-black rounded-none"
                >
                  Check Answers
                </Button>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="text-lg font-extrabold text-black">
                    Score: {correctAnswers}/{exercise.questions.length}
                  </div>
                  <Button
                    onClick={() => {
                      setUserAnswers(
                        new Array(exercise.questions.length).fill(null)
                      );
                      setShowResults(false);
                    }}
                    className="border-2 border-black text-black bg-white rounded-none"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                </div>
              )}
              <Button
                onClick={onClose}
                className="border-2 border-black text-black bg-white rounded-none"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
