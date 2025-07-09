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
import { href } from "react-router";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed

interface QuestionWordsPageProps {
  onBack?: () => void;
}

const questionWords = [
  { german: "Wer?", english: "Who?" },
  { german: "Wen?", english: "Whom?" },
  { german: "Wem?", english: "To whom?" },
  {
    german: "Was?",
    english: "What?",
    href: "/levels/a1/questions/was-question-page",
  },
  { german: "Wo?", english: "Where?" },
  { german: "Wohin?", english: "Where to?" },
  { german: "Woher?", english: "Where from?" },
  { german: "Wann?", english: "When?" },
  { german: "Wie?", english: "How?" },
  { german: "Warum?", english: "Why?" },
  { german: "Weshalb?", english: "Why?" },
  { german: "Wieso?", english: "Why?" },
];

export default function QuestionWordsPage({ onBack }: QuestionWordsPageProps) {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button
          onClick={onBack}
          className="mb-6 bg-white text-black border-2 border-black rounded-none px-4 py-2 font-bold hover:bg-black hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to German A1
        </Button>

        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 border-2 border-black bg-[#fef3c7] rounded-none">
              <MessageSquareQuestion className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-4xl font-extrabold text-black uppercase">
              German Question Words
            </h1>
          </div>
          <p className="text-lg text-black font-medium max-w-3xl mx-auto">
            Learn essential German question words and how to use them in
            context.
          </p>
        </div>

        {/* Tips Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black uppercase mb-4">
            Learning Tips
          </h2>
          <ul className="list-disc list-inside text-black font-medium space-y-2">
            <li>
              Start with the most common question words: Wer, Was, Wo, Wann,
              Wie.
            </li>
            <li>Practice forming simple questions using these words.</li>
            <li>Pay attention to word order in German questions.</li>
            <li>Use flashcards or spaced repetition to memorize them.</li>
            <li>Listen to native speakers and spot the question words.</li>
          </ul>
        </section>

        {/* Question Words Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black uppercase mb-4">
            Question Words
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {questionWords.map((word, index) => (
              <Link to={questionWords[index].href || "#"} key={index}>
                <Card
                  key={index}
                  className="border-2 border-black bg-white cursor-pointer hover:bg-[#fde047] transition-all duration-200 shadow-none hover:shadow-[4px_4px_0_0_black] hover:-translate-x-1 hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-extrabold text-black">
                      {word.german}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-black font-medium">
                      {word.english}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black uppercase mb-4">
            Practice
          </h2>
          <p className="text-black font-medium mb-2">
            Translate the following sentences into German:
          </p>
          <ul className="list-decimal list-inside text-black font-medium space-y-1">
            <li>Who is that?</li>
            <li>What is your name?</li>
            <li>Where do you live?</li>
            <li>When are you coming?</li>
            <li>How are you?</li>
          </ul>
        </section>

        {/* Quick Reference Chart */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black uppercase mb-4">
            Quick Reference Chart
          </h2>
          <div className="overflow-x-auto border-2 border-black">
            <table className="min-w-full text-left text-black font-medium">
              <thead className="bg-[#fef3c7] border-b-2 border-black">
                <tr>
                  <th className="py-2 px-4 border-r-2 border-black">German</th>
                  <th className="py-2 px-4">English</th>
                </tr>
              </thead>
              <tbody>
                {questionWords.map((word, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#fffde7]"}
                  >
                    <td className="py-2 px-4 border-r-2 border-black">
                      {word.german}
                    </td>
                    <td className="py-2 px-4">{word.english}</td>
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
