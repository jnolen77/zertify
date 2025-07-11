"use client";

import {
  Book,
  Mic,
  Headphones,
  PenTool,
  AArrowUpIcon as Abc,
  MessageSquareIcon as MessageSquareQuestion,
  Users,
  Zap,
  ArrowLeft,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";

type Page =
  | "question-words"
  | "reading"
  | "listening"
  | "writing"
  | "verbs"
  | "nouns";

interface GermanA1AppProps {
  onNavigate?: (page: Page) => void;
  onBack?: () => void;
}

export default function A1Index({ onNavigate, onBack }: GermanA1AppProps) {
  const skillAreas = [
    {
      title: "Reading",
      description: "Improve your German reading comprehension",
      icon: Book,
      moduleInfo: "8 Modules • True/False",
    },
    {
      title: "Listening",
      description: "Practice German listening with native speakers",
      icon: Headphones,
      moduleInfo: "5 Modules • Multiple Choice",
    },
    {
      title: "Speaking",
      description: "Practice German pronunciation and speaking",
      icon: Mic,
      moduleInfo: "4 Modules • Audio Prompts",
    },
    {
      title: "Writing",
      description: "Learn to write short paragraphs in German",
      icon: PenTool,
      moduleInfo: "3 Modules • Written Responses",
    },
  ];

  const learningAreas = [
    {
      title: "Beginner Basics",
      description: "Start with the German alphabet and numbers 1-100",
      icon: Abc,
      topics: [
        "German Alphabet (A-Z)",
        "Numbers 1-20",
        "Numbers 21-100",
        "Basic Pronunciation",
      ],
    },
    {
      title: "Essential Verbs",
      description: "Master the 50 most common German verbs",
      icon: Zap,
      topics: [
        "sein (to be)",
        "haben (to have)",
        "werden (to become)",
        "können (can)",
        "müssen (must)",
      ],
    },
    {
      title: "Question Words",
      description: "Learn essential German question words",
      icon: MessageSquareQuestion,
      topics: [
        "Wer? (Who?)",
        "Was? (What?)",
        "Wo? (Where?)",
        "Wann? (When?)",
        "Wie? (How?)",
      ],
    },
    {
      title: "Common Nouns",
      description: "Build vocabulary with everyday German nouns",
      icon: Users,
      topics: [
        "Family Members",
        "Food & Drinks",
        "Colors",
        "Body Parts",
        "Household Items",
      ],
    },
  ];

  const cardClass =
    "cursor-pointer  border-2 border-black bg-[#fff] hover:bg-[#fde047] transition-all duration-200 shadow-none hover:shadow-[4px_4px_0_0_black] hover:-translate-x-1 hover:-translate-y-1";
  const cardClassLarge =
    "cursor-pointer border-2 border-black bg-[#fff] hover:bg-[#fde047] transition-all duration-200 shadow-none hover:shadow-[4px_4px_0_0_black]";
  const router = useNavigate();

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <Button
          onClick={() => router("/")}
          className="mb-6 bg-white text-black border-2 border-black rounded-none px-4 py-2 font-bold hover:bg-black hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Homepage
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-black mb-4 uppercase">
            German A1 Training
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Master the basics of German with interactive exercises covering
            reading, speaking, listening, and writing skills.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 text-center uppercase">
            Choose Your Skill Area
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {skillAreas.map(
              ({ title, description, icon: Icon, moduleInfo }) => (
                <Card
                  key={title}
                  className={cardClass}
                  onClick={() => {
                    if (title === "Reading") onNavigate?.("reading");
                    if (title === "Listening") onNavigate?.("listening");
                    if (title === "Writing") onNavigate?.("writing");
                  }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 border-2 border-black">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 text-sm text-black font-medium">
                      <Book className="h-4 w-4" />
                      <span>{moduleInfo}</span>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
       
      </div>
    </div>
  );
}
