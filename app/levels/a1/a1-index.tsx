"use client";

import {
  Book,
  Mic,
  Headphones,
  PenTool,
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
import { href, useNavigate } from "react-router";

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
      color: "bg-[#e0e7ff]",
      // href: "/reading-page",
    },
    {
      title: "Listening",
      description: "Practice German listening with native speakers",
      icon: Headphones,
      moduleInfo: "5 Modules • Multiple Choice",
      color: "bg-[#a5f3fc]",
    },
    {
      title: "Speaking",
      description: "Practice German pronunciation and speaking",
      icon: Mic,
      moduleInfo: "4 Modules • Audio Prompts",
      color: "bg-[#bbf7d0]",
    },
    {
      title: "Writing",
      description: "Learn to write short paragraphs in German",
      icon: PenTool,
      moduleInfo: "3 Modules • Written Responses",
      color: "bg-[#fde68a]",
    },
  ];

  const cardClass =
    "border-2 border-black rounded-none shadow-none transition-all duration-150 cursor-pointer hover:bg-[#38bdf8] hover:text-white";
  const cardStyle = { minHeight: "220px", boxShadow: "4px 4px 0 0 #000" };
  const router = useNavigate();

  return (
    <div className="bg-[#f0f9ff] min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <Button
          onClick={() => router("/")}
          className="mb-6 bg-white text-black border-2 border-black rounded-none px-4 py-2 font-bold hover:bg-[#38bdf8] hover:text-white transition"
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
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {skillAreas.map(
              ({ title, description, icon: Icon, moduleInfo, color }) => (
                <Card
                  key={title}
                  className={`${cardClass} ${color}`}
                  style={cardStyle}
                  onClick={() => {
                    if (title === "Reading") onNavigate?.("reading");
                    if (title === "Listening") onNavigate?.("listening");
                    if (title === "Writing") onNavigate?.("writing");
                  }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 border-2 border-black rounded-none bg-white">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <CardTitle className="text-2xl md:text-5xl font-extrabold uppercase text-black">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-black md:text-2xl font-bold uppercase">
                      {description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 text-sm md:text-xl text-black font-medium justify-center">
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
