"use client";

import { useState } from "react";
import { ArrowLeft, Book } from "lucide-react";

import { Button } from "../../components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";

import wordTranslations from "./data/a1WordTranslations";
import HeadlineMatchingCard from "./cards/HeadlineMatchingCard";
import ReadingExerciseCard from "./cards/ReadingExerciseCard";
import ImageReadingExerciseCard from "./cards/ImageReadingExerciseCard";
import imageReadingExercise from "./exercises/imageReadingExercise";
import readingExercises from "./exercises/readingExercises";
import headlineMatchingExercises from "./exercises/headlineMatchingExercise";
import type { HeadlineMatchingExercise } from "./exercises/headlineMatchingExercise";
import type { ImageReadingExercise } from "./exercises/imageReadingExercise";

import HeadlineMatchingDialog from "./dialogs/HeadlineMatchingDialog";
import TrueFalseReadingDialog from "./dialogs/TrueFalseReadingDialog";
import ImageReadingDialog from "./dialogs/ImageReadingDialog";

interface ReadingPageProps {
  onBack?: () => void;
}

interface ReadingExercise {
  id: number;
  title: string;
  level: string;
  topic: string;
  description: string;
  text: string;
  questions: {
    question: string;
    answer: boolean;
  }[];
}

const renderTextWithTranslations = (text: string) => {
  const words = text.split(/(\s+|[.,!?;:()""„"‚'»«])/);

  return words.map((word, index) => {
    const cleanWord = word
      .toLowerCase()
      .replace(/[.,!?;:()""„"‚'»«]/g, "")
      .trim();
    const capitalizedWord = word.replace(/[.,!?;:()""„"‚'»«]/g, "").trim();
    let translation =
      wordTranslations[cleanWord] || wordTranslations[capitalizedWord];

    if (!translation && cleanWord.length > 0) {
      if (cleanWord.endsWith("e")) {
        translation =
          wordTranslations[cleanWord.slice(0, -1)] ||
          wordTranslations[capitalizedWord.slice(0, -1)];
      }
      if (!translation && cleanWord.endsWith("en")) {
        translation =
          wordTranslations[cleanWord.slice(0, -2)] ||
          wordTranslations[capitalizedWord.slice(0, -2)];
      }
      if (!translation && cleanWord.endsWith("st")) {
        translation =
          wordTranslations[cleanWord.slice(0, -2)] ||
          wordTranslations[capitalizedWord.slice(0, -2)];
      }
      if (!translation && cleanWord.endsWith("t")) {
        translation =
          wordTranslations[cleanWord.slice(0, -1)] ||
          wordTranslations[capitalizedWord.slice(0, -1)];
      }
    }

    if (
      translation &&
      word.trim() &&
      !/^\s+$/.test(word) &&
      cleanWord.length > 1
    ) {
      return (
        <Popover key={index}>
          <PopoverTrigger asChild>
            <span className="cursor-help hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200 rounded px-0.5">
              {word}
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2 text-sm">
            <div className="font-medium text-slate-800">{translation}</div>
          </PopoverContent>
        </Popover>
      );
    }

    return <span key={index}>{word}</span>;
  });
};

export default function ReadingPage({ onBack }: ReadingPageProps) {
  const [selectedExercise, setSelectedExercise] =
    useState<ReadingExercise | null>(null);
  const [selectedHeadlineExercise, setSelectedHeadlineExercise] =
    useState<HeadlineMatchingExercise | null>(null);
  const [selectedImageExercise, setSelectedImageExercise] =
    useState<ImageReadingExercise | null>(null);

  const [userAnswers, setUserAnswers] = useState<(boolean | null)[]>([]);
  const [headlineAnswers, setHeadlineAnswers] = useState<{
    [id: number]: string;
  }>({});

  const [showResults, setShowResults] = useState(false);

  const openModal = (exercise: ReadingExercise) => {
    setSelectedExercise(exercise);
    setUserAnswers(new Array(exercise.questions.length).fill(null));
    setShowResults(false);
  };

  const openHeadlineModal = (exercise: HeadlineMatchingExercise) => {
    setSelectedHeadlineExercise(exercise);
    setHeadlineAnswers({});
    setShowResults(false);
  };

  const openImageModal = (exercise: ImageReadingExercise) => {
    setSelectedImageExercise(exercise);
    setUserAnswers([]);
    setShowResults(false);
  };

  return (
    <div className=" p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            className="mb-6 bg-white text-black border-2 border-black rounded-none px-4 py-2 font-bold hover:bg-black hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to German A1
          </Button>

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 border-2 border-black bg-[#a5f3fc] rounded-none">
                <Book className="h-8 w-8 text-black" />
              </div>
              <h1 className="text-4xl font-extrabold text-black uppercase">
                German Reading Practice
              </h1>
            </div>
            <p className="text-lg text-black font-medium max-w-3xl mx-auto">
              Improve your German reading comprehension with these A1-level
              texts and exercises.
            </p>
          </div>
          <div className="text-left mt-4">
            <h2 className="text-3xl font-bold text-black uppercase">
              Emails and Text
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {readingExercises.map((exercise) => (
            <ReadingExerciseCard
              key={exercise.id}
              exercise={exercise}
              onClick={openModal}
            />
          ))}
        </div>
        <div className="text-left mt-4 mb-8">
          <h2 className="text-3xl font-bold text-black uppercase">
            Matching Headlines
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HeadlineMatchingCard
            exercise={headlineMatchingExercises[0]}
            onClick={openHeadlineModal}
          />
        </div>
        <div className="text-left mt-4 mb-8">
          <h2 className="text-3xl font-bold text-black uppercase">Images</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ImageReadingExerciseCard
            exercise={imageReadingExercise[0]}
            onClick={openImageModal}
          />
        </div>

        {/* True/False Modal */}
        <TrueFalseReadingDialog
          exercise={selectedExercise}
          onClose={() => {
            setSelectedExercise(null);
          }}
          renderTextWithTranslations={renderTextWithTranslations}
        />

        {/* Headline Matching Modal remains the same */}
        <HeadlineMatchingDialog
          exercise={selectedHeadlineExercise}
          onClose={() => {
            setSelectedHeadlineExercise(null);
          }}
        />
        <ImageReadingDialog
          exercise={selectedImageExercise}
          onClose={() => {
            setSelectedImageExercise(null);
          }}
        />

        {/* ... you already have it correct above ... */}
      </div>

      {false && userAnswers}
      {false && headlineAnswers}
      {false && showResults}
    </div>
  );
}
