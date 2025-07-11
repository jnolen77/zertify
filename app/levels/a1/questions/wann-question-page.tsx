"use client"

import { useState } from "react"
import { ArrowLeft, Volume2, CheckCircle, XCircle, RotateCcw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import { Link } from "react-router-dom"

interface WoQuestionPageProps {
  onBack: () => void
}

export default function WoQuestionPage({ onBack }: WoQuestionPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

const questions = [
  {
    id: 1,
    question: "Wann stehst du auf?",
    image: "/placeholder.svg?height=200&width=200&text=⏰",
    options: ["Um 7 Uhr", "Im Haus", "Mit dem Auto", "Am Montag"],
    correct: "Um 7 Uhr",
    translation: "When do you get up?",
  },
  {
    id: 2,
    question: "Wann ist dein Geburtstag?",
    image: "/placeholder.svg?height=200&width=200&text=🎂",
    options: ["Im Juli", "Im Garten", "Mit Freunden", "Am Fenster"],
    correct: "Im Juli",
    translation: "When is your birthday?",
  },
  {
    id: 3,
    question: "Wann beginnt die Schule?",
    image: "/placeholder.svg?height=200&width=200&text=🏫",
    options: ["Um 8 Uhr", "Im Zimmer", "Mit Mama", "Am Tisch"],
    correct: "Um 8 Uhr",
    translation: "When does school start?",
  },
  {
    id: 4,
    question: "Wann gehst du schlafen?",
    image: "/placeholder.svg?height=200&width=200&text=🌙",
    options: ["Um 21 Uhr", "In der Stadt", "Mit der Katze", "Im Apfel"],
    correct: "Um 21 Uhr",
    translation: "When do you go to sleep?",
  },
  {
    id: 5,
    question: "Wann essen wir zu Abend?",
    image: "/placeholder.svg?height=200&width=200&text=🍽️",
    options: ["Um 18 Uhr", "Auf dem Stuhl", "Mit Milch", "Am Morgen"],
    correct: "Um 18 Uhr",
    translation: "When do we have dinner?",
  },
];




  const currentQ = questions[currentQuestion]

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleSubmit = () => {
    setShowResult(true)
    if (selectedAnswer === currentQ.correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  const playAudio = (text: string) => {
    // Placeholder for audio functionality
    console.log(`Playing audio for: ${text}`)
  }

  return (
    <div className="min-h-screen bg-[#f0f9ff] p-4">
      <div className="max-w-4xl mx-auto">
          <Link to="/levels/a1/question-words-page" className="mb-6 inline-block">
          <Button variant="ghost" className="px-4 py-2 border-2 border-black rounded-none text-black font-bold bg-white hover:bg-[#f0f9ff]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Questions
          </Button>
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-black uppercase mb-2">Was – What</h1>
          <p className="text-black font-medium">Practice using "Was" (What) in German questions</p>
          <Badge variant="secondary" className="mt-2 border-2 border-black rounded-none bg-white text-black font-bold">
            A1 Level
          </Badge>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="border-2 border-black rounded-none bg-white text-black font-bold">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
            <Badge variant="outline" className="border-2 border-black rounded-none bg-white text-black font-bold">
              Score: {score}
            </Badge>
          </div>
          <div className="w-full bg-white border-2 border-black rounded-none h-4 relative">
            <div
              className="bg-[#38bdf8] h-4 rounded-none transition-all duration-300 border-r-2 border-black"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="mb-6 border-2 border-black rounded-none shadow-none bg-[#e0e7ff]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-extrabold uppercase text-black">{currentQ.question}</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="border-2 border-black rounded-none bg-white text-black"
                onClick={() => playAudio(currentQ.question)}
              >
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
            <CardDescription className="text-lg font-bold text-black uppercase">{currentQ.translation}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-6">
              <img
                src={currentQ.image || "/placeholder.svg"}
                alt="Question illustration"
                className="w-48 h-48 object-cover border-2 border-black rounded-none bg-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === option ? "default" : "outline"}
                  className={`h-auto p-4 text-left justify-start border-2 border-black rounded-none font-bold text-black
                    ${
                      showResult
                        ? option === currentQ.correct
                          ? "bg-green-100 border-green-800 text-green-900"
                          : selectedAnswer === option
                          ? "bg-red-100 border-red-800 text-red-900"
                          : ""
                        : "bg-white"
                    }
                  `}
                  onClick={() => !showResult && handleAnswerSelect(option)}
                  disabled={showResult}
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{option}</span>
                    {showResult && option === currentQ.correct && (
                      <CheckCircle className="h-4 w-4 text-green-700" />
                    )}
                    {showResult && selectedAnswer === option && option !== currentQ.correct && (
                      <XCircle className="h-4 w-4 text-red-700" />
                    )}
                  </div>
                </Button>
              ))}
            </div>

            {showResult && (
              <div className="bg-white border-2 border-black rounded-none p-4 mb-4">
                <p className="text-center font-bold">
                  {selectedAnswer === currentQ.correct ? (
                    <span className="text-green-600 font-extrabold">✓ RICHTIG!</span>
                  ) : (
                    <span className="text-red-600 font-extrabold">
                      ✗ FALSCH! Die richtige Antwort ist: {currentQ.correct}
                    </span>
                  )}
                </p>
              </div>
            )}

            <div className="flex justify-center">
              {!showResult ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  className="px-8 border-2 border-black rounded-none font-bold bg-[#a5f3fc] text-black uppercase"
                >
                  Submit Answer
                </Button>
              ) : currentQuestion < questions.length - 1 ? (
                <Button
                  onClick={handleNext}
                  className="px-8 border-2 border-black rounded-none font-bold bg-[#bbf7d0] text-black uppercase"
                >
                  Next Question
                </Button>
              ) : (
                <div className="text-center w-full">
                  <p className="text-lg font-bold mb-4">
                    Quiz Complete! Final Score: {score}/{questions.length}
                  </p>
                  <Button
                    onClick={handleRestart}
                    className="px-8 border-2 border-black rounded-none font-bold bg-[#fef08a] text-black uppercase"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Restart Quiz
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-black rounded-none bg-white shadow-none">
          <CardContent className="pt-6">
            <h3 className="text-lg font-extrabold mb-2 text-black uppercase">💡 Grammar Tip</h3>
            <p className="text-black font-medium">
              <strong>"Was"</strong> is used to ask about things, objects, or activities. It's equivalent to "what" in
              English. Examples: "Was ist das?" (What is this?), "Was machst du?" (What are you doing?)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
