import {
  ArrowLeft,
  Volume2,
  BookOpen,
  MessageSquareIcon as MessageSquareQuestion,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

interface WasQuestionPageProps {
  onBack?: () => void;
}

export default function WasQuestionPage({ onBack }: WasQuestionPageProps) {
  const examples = [
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

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Daily Activities": "bg-blue-50 text-blue-700 border border-blue-200",
      Identification: "bg-green-50 text-green-700 border border-green-200",
      "Work & Study": "bg-purple-50 text-purple-700 border border-purple-200",
      "Time & Events": "bg-orange-50 text-orange-700 border border-orange-200",
      "Preferences & Opinions":
        "bg-pink-50 text-pink-700 border border-pink-200",
    };
    return (
      colors[category] || "bg-slate-50 text-slate-700 border border-slate-200"
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            className="mb-4 text-slate-600 hover:text-slate-800 hover:bg-slate-100"
            onClick={onBack}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Question Words
          </Button>

          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 rounded-full bg-emerald-100 shadow-lg">
                <MessageSquareQuestion className="h-10 w-10 text-emerald-700" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-slate-900 mb-2">Was?</h1>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl text-slate-600">What?</span>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Volume2 className="h-5 w-5 text-slate-500" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-lg text-slate-500 italic mb-4">
              Pronunciation: /vas/
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to use "Was?" to ask about things, activities, and get
              specific information in German.
            </p>
          </div>
        </div>

        {/* Usage Guide */}
        <Card className="mb-8 bg-white border-slate-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <BookOpen className="h-5 w-5" />
              How to Use "Was?"
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-emerald-700">
                  Common Uses:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                    <span>Ask about objects or things</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                    <span>Inquire about activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                    <span>Ask for definitions or explanations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-emerald-700">
                  Grammar Tips:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                    <span>"Was" is always followed by a verb</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                    <span>Word order: Was + verb + subject</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                    <span>Can be used in formal and informal contexts</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Examples by Category */}
        <div className="space-y-8">
          {examples.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  className={getCategoryColor(category.category)}
                  variant="outline"
                >
                  {category.category}
                </Badge>
                <h2 className="text-2xl font-semibold text-slate-800">
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.questions.map((example, exampleIndex) => (
                  <Card
                    key={exampleIndex}
                    className="hover:shadow-xl transition-all duration-300 bg-white border-slate-200 shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-slate-500 font-medium">
                          Question
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1 h-6 w-6"
                        >
                          <Volume2 className="h-3 w-3 text-slate-400" />
                        </Button>
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-800 mb-1">
                        {example.question}
                      </CardTitle>
                      <CardDescription className="text-sm text-slate-600">
                        {example.englishQ}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-emerald-700 font-medium">
                            Answer
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-1 h-6 w-6"
                          >
                            <Volume2 className="h-3 w-3 text-emerald-600" />
                          </Button>
                        </div>
                        <div className="font-semibold text-slate-800 mb-1">
                          {example.answer}
                        </div>
                        <div className="text-sm text-slate-600">
                          {example.englishA}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Practice Section */}
        <Card className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800">
              Practice "Was?" Questions
            </CardTitle>
            <CardDescription className="text-slate-600">
              Test your understanding with interactive exercises
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                <Volume2 className="h-4 w-4 mr-2" />
                Pronunciation Practice
              </Button>
              <Button
                variant="outline"
                className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MessageSquareQuestion className="h-4 w-4 mr-2" />
                Question & Answer Quiz
              </Button>
              <Button
                variant="outline"
                className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Fill in the Blanks
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Reference */}
        <Card className="mt-8 bg-white border-slate-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">
              Quick Reference: "Was?" Patterns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">
                  Common Question Patterns:
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-slate-50 p-2 rounded border">
                    <span className="font-medium">Was ist...?</span> - What
                    is...?
                  </div>
                  <div className="bg-slate-50 p-2 rounded border">
                    <span className="font-medium">Was machst du...?</span> -
                    What are you doing...?
                  </div>
                  <div className="bg-slate-50 p-2 rounded border">
                    <span className="font-medium">Was magst du...?</span> - What
                    do you like...?
                  </div>
                  <div className="bg-slate-50 p-2 rounded border">
                    <span className="font-medium">Was denkst du...?</span> -
                    What do you think...?
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">
                  Answer Patterns:
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-emerald-50 p-2 rounded border border-emerald-200">
                    <span className="font-medium">Das ist...</span> - That is...
                  </div>
                  <div className="bg-emerald-50 p-2 rounded border border-emerald-200">
                    <span className="font-medium">Ich mache...</span> - I am
                    doing...
                  </div>
                  <div className="bg-emerald-50 p-2 rounded border border-emerald-200">
                    <span className="font-medium">Ich mag...</span> - I like...
                  </div>
                  <div className="bg-emerald-50 p-2 rounded border border-emerald-200">
                    <span className="font-medium">Ich denke...</span> - I
                    think...
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
