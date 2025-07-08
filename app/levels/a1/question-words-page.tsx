import {
  ArrowLeft,
  MessageSquareIcon as MessageSquareQuestion,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

interface QuestionWordsPageProps {
  onBack?: () => void;
  onNavigateToWas?: () => void;
}

const questionWords = [
  { german: "Wer?", english: "Who?" },
  { german: "Wen?", english: "Whom?" },
  { german: "Wem?", english: "To whom?" },
  { german: "Was?", english: "What?" },
  { german: "Wo?", english: "Where?" },
  { german: "Wohin?", english: "Where to?" },
  { german: "Woher?", english: "Where from?" },
  { german: "Wann?", english: "When?" },
  { german: "Wie?", english: "How?" },
  { german: "Warum?", english: "Why?" },
  { german: "Weshalb?", english: "Why?" },
  { german: "Wieso?", english: "Why?" },
];

export default function QuestionWordsPage({
  onBack,
  onNavigateToWas,
}: QuestionWordsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="text-center">
          <MessageSquareQuestion className="mx-auto h-16 w-16 text-indigo-600" />
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Question Words
          </h1>
          <p className="text-gray-600">
            Learn essential German question words.
          </p>
        </div>

        {/* Learning Tips Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Learning Tips
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Start with the most common question words: Wer, Was, Wo, Wann,
              Wie.
            </li>
            <li>Practice forming simple questions using these words.</li>
            <li>Pay attention to the word order in German questions.</li>
            <li>
              Use flashcards or a spaced repetition system to memorize the
              words.
            </li>
            <li>
              Listen to German conversations and identify the question words
              being used.
            </li>
          </ul>
        </section>

        {/* Question Words Grid */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Question Words
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {questionWords.map((word, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 bg-white border-slate-200 shadow-lg hover:-translate-y-1 cursor-pointer"
                onClick={() => word.german === "Was?" && onNavigateToWas?.()}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {word.german}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{word.english}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Practice
          </h2>
          <p className="text-gray-600">
            Test your knowledge by translating the following sentences into
            German:
          </p>
          <ul className="list-decimal list-inside text-gray-600">
            <li>Who is that?</li>
            <li>What is your name?</li>
            <li>Where do you live?</li>
            <li>When are you coming?</li>
            <li>How are you?</li>
          </ul>
        </section>

        {/* Quick Reference Chart */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Quick Reference Chart
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">German</th>
                  <th className="py-2 px-4 border-b">English</th>
                </tr>
              </thead>
              <tbody>
                {questionWords.map((word, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    <td className="py-2 px-4 border-b">{word.german}</td>
                    <td className="py-2 px-4 border-b">{word.english}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
