"use client"

import { Link } from "react-router-dom"
import { ArrowLeft, MessageSquare, Volume2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

interface QuestionWordsPageProps {
  onBack: () => void
}

export default function QuestionWordsPage({ onBack }: QuestionWordsPageProps) {
  const questionWords = [
    {
      id: "was",
      german: "Was",
      english: "What",
      description: "Used to ask about things, objects, or activities",
      examples: ["Was ist das?", "Was machst du?", "Was kostet das?"],
      translations: ["What is this?", "What are you doing?", "What does this cost?"],
      color: "bg-[#e0e7ff] border-black text-black",
      clickable: true,
      href: "/levels/a1/questions/was-question-page",
    },
    {
      id: "wer",
      german: "Wer",
      english: "Who",
      description: "Used to ask about people",
      examples: ["Wer bist du?", "Wer kommt heute?", "Wer ist das?"],
      translations: ["Who are you?", "Who is coming today?", "Who is this?"],
      color: "bg-[#a5f3fc] border-black text-black",
      clickable: true,
      href: "/levels/a1/questions/wer-question-page",
    },
    {
      id: "wo",
      german: "Wo",
      english: "Where",
      description: "Used to ask about location or place",
      examples: ["Wo wohnst du?", "Wo ist der Bahnhof?", "Wo arbeiten Sie?"],
      translations: ["Where do you live?", "Where is the train station?", "Where do you work?"],
      color: "bg-[#fef08a] border-black text-black",
      clickable: true,
      href: "/levels/a1/questions/wo-question-page",
    },
    {
      id: "wann",
      german: "Wann",
      english: "When",
      description: "Used to ask about time",
      examples: ["Wann kommst du?", "Wann ist die Party?", "Wann fährt der Zug?"],
      translations: ["When are you coming?", "When is the party?", "When does the train leave?"],
      color: "bg-[#fbcfe8] border-black text-black",
      clickable: true,
      href: "/levels/a1/questions/wann-question-page",
    },
    {
      id: "warum",
      german: "Warum",
      english: "Why",
      description: "Used to ask about reasons",
      examples: ["Warum lernst du Deutsch?", "Warum bist du müde?", "Warum kommst du nicht?"],
      translations: ["Why are you learning German?", "Why are you tired?", "Why aren't you coming?"],
      color: "bg-[#fde68a] border-black text-black",
      clickable: true,
      href: "/levels/a1/questions/warum-question-page",
    },
    {
      id: "wie",
      german: "Wie",
      english: "How",
      description: "Used to ask about manner, method, or condition",
      examples: ["Wie geht es dir?", "Wie alt bist du?", "Wie heißt du?"],
      translations: ["How are you?", "How old are you?", "What is your name?"],
      color: "bg-[#bbf7d0] border-black text-black",
      clickable: true,
      href: "/levels/a1/questions/wie-question-page",
    },
    {
      id: "welche",
      german: "Welche",
      english: "Which",
      description: "Used to ask about manner, method, or condition",
      examples: ["Wie geht es dir?", "Wie alt bist du?", "Wie heißt du?"],
      translations: ["How are you?", "How old are you?", "What is your name?"],
      color: "bg-[#bbf7d0] border-black text-black",
      clickable: false,
      href: "/levels/a1/questions/welche-question-page",
    },
  ]

  const playAudio = (text: string) => {
    console.log(`Playing audio for: ${text}`)
  }

  return (
    <div className="min-h-screen bg-[#f0f9ff] p-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="mb-6 inline-block">
          <Button variant="ghost" className="px-4 py-2 border-2 border-black rounded-none text-black font-bold bg-white hover:bg-[#f0f9ff]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Main Menu
          </Button>
        </Link>
       
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 border-2 border-black bg-[#a5f3fc] rounded-none">
              <MessageSquare className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-4xl font-extrabold text-black uppercase">
              German Question Words
            </h1>
          </div>
          <p className="text-lg text-black font-medium max-w-3xl mx-auto">
            Learn the essential German question words (W-Fragen) to ask questions and gather information.
          </p>
          <Badge variant="secondary" className="mt-4 border-2 border-black rounded-none bg-white text-black font-bold">
            A1 Level
          </Badge>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questionWords.map((word) => {
            const card = (
              <Card
                key={word.id}
                className={`border-2 rounded-none ${word.color} transition-all duration-150 shadow-none hover:-translate-y-1 ${
                  word.clickable ? "hover:bg-[#38bdf8] hover:text-white cursor-pointer" : "opacity-60 pointer-events-none"
                }`}
                style={{
                  minHeight: "270px",
                  boxShadow: "4px 4px 0 0 #000",
                  borderRadius: 0,
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-extrabold uppercase text-black">{word.german}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="border-2 border-black rounded-none bg-white text-black"
                      onClick={(e) => {
                        e.stopPropagation()
                        playAudio(word.german)
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardDescription className="text-lg font-bold text-black uppercase">{word.english}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black mb-4 font-medium">{word.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-xs uppercase mb-1 text-black">Examples</h4>
                    {word.examples.slice(0, 2).map((example, index) => (
                      <div key={index} className="text-sm">
                        <p className="font-bold text-black">{example}</p>
                        <p className="text-gray-500 italic">{word.translations[index]}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Badge
                      variant="outline"
                      className="border-2 border-black rounded-none text-xs font-bold uppercase bg-white text-black"
                    >
                      {word.clickable ? "Click to practice" : "Coming soon"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
            // If card is clickable and has href, wrap with Link
            return word.clickable && word.href ? (
              <Link key={word.id} to={word.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={word.id}>{card}</div>
            )
          })}
        </div>

        {/* Learning Tips */}
        <Card className="mt-8 border-2 border-black rounded-none bg-white shadow-none">
          <CardContent className="pt-6">
            <h3 className="text-lg font-extrabold mb-4 text-black uppercase">📚 Learning Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-extrabold mb-2 text-black uppercase text-xs">Question Word Order</h4>
                <p className="text-black font-medium">In German, the question word comes first, followed by the verb, then the subject.</p>
                <p className="italic mt-1 text-black">Example: "Was machst du?" (What are you doing?)</p>
              </div>
              <div>
                <h4 className="font-extrabold mb-2 text-black uppercase text-xs">Practice Strategy</h4>
                <p className="text-black font-medium">Start with simple questions using these words in everyday situations.</p>
                <p className="italic mt-1 text-black">Try asking: "Wo ist...?" (Where is...?) about objects around you.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
