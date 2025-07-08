import { useState } from "react";
import {
  ArrowLeft,
  MessageSquareIcon as MessageSquareQuestion,
} from "lucide-react";

import { Button } from "../../../components/ui/button";
import QuestionModal from "./QuestionModal";
import CategorySection from "./CategorySection";

interface Question {
  question: string;
  answer: string;
  englishQ: string;
  englishA: string;
}

interface WasQuestionPageProps {
  onBack?: () => void;
}

export default function WasQuestionPage({ onBack }: WasQuestionPageProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const examples: { category: string; questions: Question[] }[] = [
    {
      category: "Daily Activities",
      questions: [
        {
          question: "Was machst du?",
          answer: "Ich lese ein Buch.",
          englishQ: "What are you doing?",
          englishA: "I am reading a book.",
        },
        {
          question: "Was isst du gern?",
          answer: "Ich esse gern Pizza.",
          englishQ: "What do you like to eat?",
          englishA: "I like to eat pizza.",
        },
        {
          question: "Was trinkst du?",
          answer: "Ich trinke Wasser.",
          englishQ: "What are you drinking?",
          englishA: "I am drinking water.",
        },
      ],
    },
    {
      category: "Identification",
      questions: [
        {
          question: "Was ist das?",
          answer: "Das ist ein Auto.",
          englishQ: "What is that?",
          englishA: "That is a car.",
        },
        {
          question: "Was ist dein Lieblingsfach?",
          answer: "Mein Lieblingsfach ist Deutsch.",
          englishQ: "What is your favorite subject?",
          englishA: "My favorite subject is German.",
        },
        {
          question: "Was ist deine Telefonnummer?",
          answer: "Meine Telefonnummer ist 123-456-789.",
          englishQ: "What is your phone number?",
          englishA: "My phone number is 123-456-789.",
        },
      ],
    },
    {
      category: "Work & Study",
      questions: [
        {
          question: "Was studierst du?",
          answer: "Ich studiere Medizin.",
          englishQ: "What do you study?",
          englishA: "I study medicine.",
        },
        {
          question: "Was ist dein Beruf?",
          answer: "Ich bin Lehrer.",
          englishQ: "What is your profession?",
          englishA: "I am a teacher.",
        },
        {
          question: "Was arbeitest du?",
          answer: "Ich arbeite als Ingenieur.",
          englishQ: "What do you work as?",
          englishA: "I work as an engineer.",
        },
      ],
    },
    {
      category: "Time & Events",
      questions: [
        {
          question: "Was machst du heute?",
          answer: "Heute gehe ich ins Kino.",
          englishQ: "What are you doing today?",
          englishA: "Today I'm going to the cinema.",
        },
        {
          question: "Was ist morgen?",
          answer: "Morgen ist Samstag.",
          englishQ: "What is tomorrow?",
          englishA: "Tomorrow is Saturday.",
        },
        {
          question: "Was passiert hier?",
          answer: "Hier ist ein Fest.",
          englishQ: "What is happening here?",
          englishA: "There is a festival here.",
        },
      ],
    },
    {
      category: "Preferences & Opinions",
      questions: [
        {
          question: "Was denkst du?",
          answer: "Ich denke, das ist eine gute Idee.",
          englishQ: "What do you think?",
          englishA: "I think that's a good idea.",
        },
        {
          question: "Was magst du nicht?",
          answer: "Ich mag keinen Regen.",
          englishQ: "What don't you like?",
          englishA: "I don't like rain.",
        },
        {
          question: "Was ist dein Hobby?",
          answer: "Mein Hobby ist Fotografieren.",
          englishQ: "What is your hobby?",
          englishA: "My hobby is photography.",
        },
      ],
    },
  ];

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Button
          onClick={onBack}
          className="mb-6 bg-white text-black border-2 border-black rounded-none px-4 py-2 font-bold hover:bg-black hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Question Words
        </Button>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 border-2 border-black bg-[#a5f3fc] rounded-none">
              <MessageSquareQuestion className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-4xl font-extrabold text-black uppercase">
              German Questions: Was?
            </h1>
          </div>
          <p className="text-lg text-black font-medium max-w-3xl mx-auto">
            Learn how to use "Was?" to ask about things, activities, and get
            specific information in German.
          </p>
        </div>

        {/* All categories */}
        {examples.map((example, i) => (
          <CategorySection
            key={i}
            title={example.category}
            questions={example.questions}
            onSelect={setSelectedQuestion}
          />
        ))}

        {/* Modal */}
        {selectedQuestion && (
          <QuestionModal
            open={!!selectedQuestion}
            onClose={() => setSelectedQuestion(null)}
            question={selectedQuestion.question}
            answer={selectedQuestion.answer}
            englishQ={selectedQuestion.englishQ}
            englishA={selectedQuestion.englishA}
          />
        )}
      </div>
    </div>
  );
}
