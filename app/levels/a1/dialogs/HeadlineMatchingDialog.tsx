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
import type { HeadlineMatchingExercise } from "../exercises/headlineMatchingExercise";
import { useState, useEffect } from "react";

interface HeadlineMatchingDialogProps {
  exercise: HeadlineMatchingExercise | null;
  onClose: () => void;
}

export default function HeadlineMatchingDialog({
  exercise,
  onClose,
}: HeadlineMatchingDialogProps) {
  const [headlineAnswers, setHeadlineAnswers] = useState<{
    [id: number]: string;
  }>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // reset state when new exercise is passed
    setHeadlineAnswers({});
    setShowResults(false);
  }, [exercise]);

  const isOpen = !!exercise;
  const correctCount = exercise
    ? exercise.textBlocks.filter(
        (t) => headlineAnswers[t.id] === t.correctHeadline
      ).length
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={(isOpen) => !isOpen && onClose()}>
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

            <div className="space-y-4">
              {exercise.textBlocks.map((block) => {
                const isCorrect =
                  headlineAnswers[block.id] === block.correctHeadline;
                const isIncorrect = showResults && !isCorrect;

                return (
                  <div
                    key={block.id}
                    className={`p-4 border-2 rounded-none ${
                      showResults
                        ? isCorrect
                          ? "bg-green-200 border-black"
                          : "bg-red-200 border-black"
                        : "bg-white border-black"
                    }`}
                  >
                    <p className="font-bold text-black mb-2">
                      {block.id}. {block.text}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(exercise.headlines).map(([key, val]) => (
                        <Button
                          key={key}
                          size="sm"
                          onClick={() =>
                            setHeadlineAnswers((prev) => ({
                              ...prev,
                              [block.id]: key,
                            }))
                          }
                          disabled={showResults}
                          className={`rounded-none border-2 ${
                            headlineAnswers[block.id] === key
                              ? "bg-black text-white"
                              : "bg-white text-black hover:bg-cyan-400 hover:text-white"
                          }`}
                        >
                          {key}) {val}
                        </Button>
                      ))}
                    </div>
                    {isIncorrect && (
                      <p className="text-sm mt-2 font-medium text-black">
                        Correct answer: {block.correctHeadline}){" "}
                        {exercise.headlines[block.correctHeadline]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t-2 border-black">
              {!showResults ? (
                <Button
                  onClick={() => setShowResults(true)}
                  disabled={
                    Object.keys(headlineAnswers).length <
                    exercise.textBlocks.length
                  }
                  className="bg-black text-white border-2 border-black rounded-none"
                >
                  Check Answers
                </Button>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="text-lg font-extrabold text-black">
                    Score: {correctCount}/{exercise.textBlocks.length}
                  </div>
                  <Button
                    onClick={() => {
                      setHeadlineAnswers({});
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
