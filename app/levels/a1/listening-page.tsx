
import { useState, useRef } from "react";
import {
  ArrowLeft,
  Headphones,
  CheckCircle,
  XCircle,
  RotateCcw,
  Play,
  Pause,
  Volume2,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";

interface ListeningPageProps {
  onBack?: () => void;
}

interface ListeningExercise {
  id: number;
  title: string;
  level: string;
  topic: string;
  description: string;
  audioUrl: string;
  transcript: string;
  questions: {
    question: string;
    answer: boolean;
  }[];
}

export default function ListeningPage({ onBack }: ListeningPageProps) {
  const [selectedExercise, setSelectedExercise] =
    useState<ListeningExercise | null>(null);
  const [userAnswers, setUserAnswers] = useState<(boolean | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

 
  const listeningExercises: ListeningExercise[] = [
    {
      id: 1,
      title: "Sich vorstellen",
      level: "A1",
      topic: "Persönliche Informationen",
      description: "Listen to someone introducing themselves",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Hallo! Mein Name ist Sarah. Ich bin 28 Jahre alt und komme aus Hamburg. Ich arbeite als Lehrerin in einer Grundschule. In meiner Freizeit lese ich gern Bücher und gehe schwimmen. Ich wohne mit meinem Mann und unserer Katze in einer kleinen Wohnung in der Stadtmitte.",
      questions: [
        { question: "Sarah ist 28 Jahre alt.", answer: true },
        { question: "Sarah arbeitet in einem Büro.", answer: false },
        { question: "Sarah wohnt mit ihrem Mann zusammen.", answer: true },
      ],
    },
    {
      id: 2,
      title: "Im Supermarkt",
      level: "A1",
      topic: "Einkaufen",
      description: "A conversation at the supermarket",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Verkäufer: Guten Tag! Kann ich Ihnen helfen? Kunde: Ja, bitte. Wo finde ich die Milch? Verkäufer: Die Milch ist im Kühlregal, dort hinten links. Kunde: Danke. Und haben Sie auch frisches Brot? Verkäufer: Ja, das Brot ist in der Bäckerei-Abteilung, gleich hier vorne. Kunde: Perfekt. Vielen Dank für Ihre Hilfe!",
      questions: [
        { question: "Der Kunde sucht Milch.", answer: true },
        { question: "Die Milch ist im Kühlregal rechts.", answer: false },
        { question: "Das Brot ist in der Bäckerei-Abteilung.", answer: true },
      ],
    },
    {
      id: 3,
      title: "Wettervorhersage",
      level: "A1",
      topic: "Wetter",
      description: "Listen to a simple weather forecast",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Guten Morgen! Hier ist die Wettervorhersage für heute. Am Vormittag ist es bewölkt mit Temperaturen um 15 Grad. Am Nachmittag scheint die Sonne und es wird wärmer, bis zu 22 Grad. Am Abend kann es regnen. Vergessen Sie nicht Ihren Regenschirm! Morgen wird es wieder sonnig.",
      questions: [
        { question: "Am Vormittag scheint die Sonne.", answer: false },
        {
          question: "Am Nachmittag wird es bis zu 22 Grad warm.",
          answer: true,
        },
        { question: "Morgen regnet es.", answer: false },
      ],
    },
    {
      id: 4,
      title: "Am Telefon",
      level: "A1",
      topic: "Kommunikation",
      description: "A simple phone conversation",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Anna: Hallo, hier ist Anna. Lisa: Hi Anna! Hier ist Lisa. Wie geht es dir? Anna: Danke, gut! Hast du heute Abend Zeit? Lisa: Ja, warum? Anna: Möchtest du ins Kino gehen? Der neue Film läuft um 20 Uhr. Lisa: Das ist eine gute Idee! Wo treffen wir uns? Anna: Am Kino, um 19:45 Uhr. Lisa: Perfekt! Bis später!",
      questions: [
        { question: "Anna ruft Lisa an.", answer: true },
        { question: "Der Film beginnt um 19:45 Uhr.", answer: false },
        { question: "Sie treffen sich am Kino.", answer: true },
      ],
    },
    {
      id: 5,
      title: "Im Restaurant bestellen",
      level: "A1",
      topic: "Essen & Trinken",
      description: "Ordering food at a restaurant",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Kellner: Guten Abend! Was möchten Sie trinken? Gast: Ein Wasser, bitte. Kellner: Und zum Essen? Gast: Ich hätte gern die Pasta mit Tomatensauce. Kellner: Möchten Sie auch einen Salat dazu? Gast: Ja, einen kleinen grünen Salat, bitte. Kellner: Sehr gerne. Das dauert etwa 15 Minuten.",
      questions: [
        { question: "Der Gast bestellt ein Bier.", answer: false },
        { question: "Der Gast möchte Pasta mit Tomatensauce.", answer: true },
        { question: "Das Essen dauert 20 Minuten.", answer: false },
      ],
    },
    {
      id: 6,
      title: "Nach dem Weg fragen",
      level: "A1",
      topic: "Orientierung",
      description: "Asking for directions in the city",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Tourist: Entschuldigung, wo ist der Bahnhof? Passant: Der Bahnhof? Gehen Sie hier geradeaus bis zur Ampel. Dann links in die Hauptstraße. Der Bahnhof ist auf der rechten Seite. Tourist: Wie weit ist das? Passant: Etwa 10 Minuten zu Fuß. Tourist: Vielen Dank! Passant: Gern geschehen!",
      questions: [
        { question: "Der Tourist sucht den Bahnhof.", answer: true },
        { question: "An der Ampel muss man rechts gehen.", answer: false },
        { question: "Der Weg dauert etwa 10 Minuten.", answer: true },
      ],
    },
    {
      id: 7,
      title: "Tagesablauf",
      level: "A1",
      topic: "Alltag",
      description: "Someone describing their daily routine",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Ich stehe jeden Tag um 7 Uhr auf. Zuerst dusche ich und frühstücke. Um 8 Uhr fahre ich mit dem Bus zur Arbeit. Ich arbeite von 9 bis 17 Uhr im Büro. In der Mittagspause gehe ich mit Kollegen essen. Nach der Arbeit kaufe ich im Supermarkt ein. Abends koche ich und sehe fern. Um 23 Uhr gehe ich ins Bett.",
      questions: [
        { question: "Die Person steht um 8 Uhr auf.", answer: false },
        { question: "Sie fährt mit dem Bus zur Arbeit.", answer: true },
        { question: "Sie geht um 23 Uhr ins Bett.", answer: true },
      ],
    },
    {
      id: 8,
      title: "Beim Arzt",
      level: "A1",
      topic: "Gesundheit",
      description: "A visit to the doctor",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Arzt: Guten Tag! Was kann ich für Sie tun? Patient: Ich habe Kopfschmerzen und bin müde. Arzt: Seit wann haben Sie diese Beschwerden? Patient: Seit drei Tagen. Arzt: Haben Sie Fieber? Patient: Nein, kein Fieber. Arzt: Ich verschreibe Ihnen Tabletten. Nehmen Sie zwei pro Tag und trinken Sie viel Wasser.",
      questions: [
        { question: "Der Patient hat Bauchschmerzen.", answer: false },
        { question: "Die Beschwerden dauern seit drei Tagen.", answer: true },
        { question: "Der Patient hat Fieber.", answer: false },
      ],
    },
    {
      id: 9,
      title: "Im Supermarkt nach Brot fragen",
      level: "A1",
      topic: "Einkaufen",
      description: "Asking where to find bread at the supermarket",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Kunde: Entschuldigung, können Sie mir sagen, wo das Brot ist?\nMitarbeiter: Ja, das Brot finden Sie in Gang 4, gleich neben den Backwaren.\nKunde: Vielen Dank!\nMitarbeiter: Gern geschehen, und viel Spaß beim Einkaufen!",
      questions: [
        { question: "Das Brot ist in Gang 2.", answer: false },
        { question: "Das Brot ist in Gang 4.", answer: true },
        { question: "Das Brot ist in Gang 7.", answer: false },
      ],
    },
  ];

  const openModal = (exercise: ListeningExercise) => {
    setSelectedExercise(exercise);
    setUserAnswers(new Array(exercise.questions.length).fill(null));
    setShowResults(false);
    setShowTranscript(false);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setSelectedExercise(null);
    setUserAnswers([]);
    setShowResults(false);
    setShowTranscript(false);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAnswer = (questionIndex: number, answer: boolean) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => setShowResults(true);
  const resetQuiz = () => {
    setUserAnswers(new Array(selectedExercise!.questions.length).fill(null));
    setShowResults(false);
  };

  // Pastel badge
  const getTopicColor = (topic: string) =>
    "border-2 border-black bg-[#facc15] text-black uppercase";

  const correctAnswers = selectedExercise
    ? userAnswers.filter(
        (answer, index) => answer === selectedExercise.questions[index].answer
      ).length
    : 0;

  // Card & modal style for neobrutalist look
  const cardClass =
    "cursor-pointer border-2 border-black rounded-none shadow-none transition-all duration-150 hover:bg-[#38bdf8] hover:text-white";
  const cardStyle = { minHeight: "220px", boxShadow: "4px 4px 0 0 #000" };

  return (
    <div className="bg-[#f0f9ff] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            className="button mb-6 bg-white text-black border-2 border-black rounded-none px-4 py-2 font-bold  transition"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to German A1
          </Button>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 border-2 border-black bg-[#c7d2fe] rounded-none">
                <Headphones className="h-8 w-8 text-black" />
              </div>
              <h1 className="text-4xl font-extrabold text-black uppercase">
                German Listening Practice
              </h1>
            </div>
            <p className="text-lg text-black font-medium max-w-3xl mx-auto">
              Improve your German listening comprehension with these A1 level audio exercises.
            </p>
          </div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listeningExercises.map((exercise) => (
            <Card
              key={exercise.id}
              className={`${cardClass} bg-[#e0e7ff]`}
              style={cardStyle}
              onClick={() => openModal(exercise)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="border-2 border-black text-black bg-white uppercase rounded-none font-bold">
                    {exercise.level}
                  </Badge>
                  <Badge className={getTopicColor(exercise.topic) + " rounded-none font-bold"}>
                    {exercise.topic}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-extrabold text-black uppercase">
                  {exercise.title}
                </CardTitle>
                <CardDescription className="text-black text-base font-bold uppercase">
                  {exercise.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-black font-medium">
                  <Headphones className="h-4 w-4" />
                  <span>Audio • 3 Questions • True/False</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Modal */}
        <Dialog open={!!selectedExercise} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-black rounded-none shadow-none">
            {selectedExercise && (
              <div className="bg-white border-2 border-black p-6 space-y-6 rounded-none">
                {/* Header */}
                <DialogHeader className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="border-2 border-black bg-white text-black uppercase rounded-none font-bold">
                      {selectedExercise.level}
                    </Badge>
                    <Badge className={getTopicColor(selectedExercise.topic) + " rounded-none font-bold"}>
                      {selectedExercise.topic}
                    </Badge>
                  </div>
                  <DialogTitle className="text-3xl font-extrabold text-black uppercase">
                    {selectedExercise.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-black font-bold uppercase">
                    {selectedExercise.description}
                  </DialogDescription>
                </DialogHeader>
                {/* Audio */}
                <div className="bg-[#e0e7ff] p-6 border-2 border-black rounded-none">
                  <h3 className="text-xl font-bold mb-2 text-black uppercase">
                    Audio zum Anhören:
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <Button
                      onClick={toggleAudio}
                      className="bg-black text-white border-2 border-black rounded-none px-5 py-2 text-lg flex items-center gap-2 font-bold"
                    >
                      {isPlaying ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                      {isPlaying ? "Pause" : "Play Audio"}
                    </Button>
                    <div className="flex items-center gap-2 text-base text-black font-bold">
                      <Volume2 className="h-4 w-4" />
                      <span>Click to listen</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowTranscript(!showTranscript)}
                      className="border-2 border-black text-black bg-white rounded-none ml-4 font-bold"
                    >
                      {showTranscript ? "Hide" : "Show"} Transcript
                    </Button>
                  </div>
                  <audio
                    ref={audioRef}
                    onEnded={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={selectedExercise.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  {showTranscript && (
                    <div className="mt-4 p-4 bg-[#fef3c7] border-2 border-black rounded-none">
                      <h4 className="font-extrabold text-black mb-2 uppercase">
                        Transcript:
                      </h4>
                      <p className="text-black leading-relaxed font-medium">
                        {selectedExercise.transcript}
                      </p>
                    </div>
                  )}
                </div>
                {/* Questions */}
                <div className="space-y-4">
                  <h3 className="text-xl font-extrabold text-black uppercase">
                    Richtig oder Falsch? (True or False?)
                  </h3>
                  {selectedExercise.questions.map((q, index) => {
                    const isCorrect = userAnswers[index] === q.answer;
                    const isIncorrect = showResults && !isCorrect;
                    return (
                      <div
                        key={index}
                        className={`p-4 border-2 rounded-none font-bold ${
                          showResults
                            ? isCorrect
                              ? "bg-green-200 border-black"
                              : "bg-red-200 border-black"
                            : "bg-white border-black"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <p className="font-extrabold text-black">{q.question}</p>
                          {showResults && (
                            <div className="flex items-center gap-2">
                              {isCorrect ? (
                                <CheckCircle className="h-5 w-5 text-green-800" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-800" />
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            onClick={() => handleAnswer(index, true)}
                            disabled={showResults}
                            className={`rounded-none border-2 transition-colors duration-200 font-bold ${
                              userAnswers[index] === true
                                ? "bg-black text-white border-black"
                                : "bg-white text-black border-black hover:bg-cyan-400 hover:text-white"
                            }`}
                          >
                            Richtig
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleAnswer(index, false)}
                            disabled={showResults}
                            className={`rounded-none border-2 transition-colors duration-200 font-bold ${
                              userAnswers[index] === false
                                ? "bg-black text-white border-black"
                                : "bg-white text-black border-black hover:bg-cyan-400 hover:text-white"
                            }`}
                          >
                            Falsch
                          </Button>
                        </div>
                        {isIncorrect && (
                          <p className="text-sm text-black mt-2 font-medium">
                            Correct answer: {q.answer ? "Richtig" : "Falsch"}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4 border-t-2 border-black">
                  {!showResults ? (
                    <Button
                      onClick={checkAnswers}
                      disabled={userAnswers.some((answer) => answer === null)}
                      className="bg-black text-white border-2 border-black rounded-none font-bold"
                    >
                      Check Answers
                    </Button>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-extrabold text-black">
                        Score: {correctAnswers}/
                        {selectedExercise.questions.length}
                      </div>
                      <Button
                        onClick={resetQuiz}
                        className="button border-2 border-black text-black bg-white rounded-none font-bold"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Try Again
                      </Button>
                    </div>
                  )}
                  <Button
                    onClick={closeModal}
                    className="button border-2 border-black text-black bg-white rounded-none font-bold"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
