"use client";

import { useState } from "react";
import { ArrowLeft, Play, Volume2 } from "lucide-react";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

interface VerbsPageProps {
  onBack: () => void;
}

interface Verb {
  german: string;
  english: string;
  pronunciation: string;
  category: string;
  conjugation: {
    ich: string;
    du: string;
    er: string;
    wir: string;
    ihr: string;
    sie: string;
  };
  examples: {
    german: string;
    english: string;
  }[];
}

const verbs: Verb[] = [
  {
    german: "sein",
    english: "to be",
    pronunciation: "/zaɪn/",
    category: "basic",
    conjugation: {
      ich: "bin",
      du: "bist",
      er: "ist",
      wir: "sind",
      ihr: "seid",
      sie: "sind",
    },
    examples: [
      { german: "Ich bin müde.", english: "I am tired." },
      { german: "Du bist nett.", english: "You are nice." },
    ],
  },
  {
    german: "haben",
    english: "to have",
    pronunciation: "/ˈhaːbən/",
    category: "basic",
    conjugation: {
      ich: "habe",
      du: "hast",
      er: "hat",
      wir: "haben",
      ihr: "habt",
      sie: "haben",
    },
    examples: [
      { german: "Ich habe einen Hund.", english: "I have a dog." },
      { german: "Sie hat Zeit.", english: "She has time." },
    ],
  },
  {
    german: "werden",
    english: "to become",
    pronunciation: "/ˈveːɐ̯dən/",
    category: "basic",
    conjugation: {
      ich: "werde",
      du: "wirst",
      er: "wird",
      wir: "werden",
      ihr: "werdet",
      sie: "werden",
    },
    examples: [
      { german: "Ich werde Arzt.", english: "I'm becoming a doctor." },
      { german: "Es wird kalt.", english: "It's getting cold." },
    ],
  },
  {
    german: "können",
    english: "can/to be able to",
    pronunciation: "/ˈkœnən/",
    category: "modal",
    conjugation: {
      ich: "kann",
      du: "kannst",
      er: "kann",
      wir: "können",
      ihr: "könnt",
      sie: "können",
    },
    examples: [
      { german: "Ich kann schwimmen.", english: "I can swim." },
      { german: "Kannst du mir helfen?", english: "Can you help me?" },
    ],
  },
  {
    german: "müssen",
    english: "must/to have to",
    pronunciation: "/ˈmʏsən/",
    category: "modal",
    conjugation: {
      ich: "muss",
      du: "musst",
      er: "muss",
      wir: "müssen",
      ihr: "müsst",
      sie: "müssen",
    },
    examples: [
      { german: "Ich muss arbeiten.", english: "I have to work." },
      { german: "Du musst lernen.", english: "You must study." },
    ],
  },
  {
    german: "wollen",
    english: "to want",
    pronunciation: "/ˈvɔlən/",
    category: "modal",
    conjugation: {
      ich: "will",
      du: "willst",
      er: "will",
      wir: "wollen",
      ihr: "wollt",
      sie: "wollen",
    },
    examples: [
      { german: "Ich will nach Hause.", english: "I want to go home." },
      { german: "Was willst du?", english: "What do you want?" },
    ],
  },
  {
    german: "gehen",
    english: "to go",
    pronunciation: "/ˈɡeːən/",
    category: "action",
    conjugation: {
      ich: "gehe",
      du: "gehst",
      er: "geht",
      wir: "gehen",
      ihr: "geht",
      sie: "gehen",
    },
    examples: [
      { german: "Ich gehe zur Schule.", english: "I go to school." },
      { german: "Wir gehen spazieren.", english: "We're going for a walk." },
    ],
  },
  {
    german: "kommen",
    english: "to come",
    pronunciation: "/ˈkɔmən/",
    category: "action",
    conjugation: {
      ich: "komme",
      du: "kommst",
      er: "kommt",
      wir: "kommen",
      ihr: "kommt",
      sie: "kommen",
    },
    examples: [
      { german: "Ich komme aus Deutschland.", english: "I come from Germany." },
      { german: "Kommst du mit?", english: "Are you coming along?" },
    ],
  },
  {
    german: "machen",
    english: "to make/to do",
    pronunciation: "/ˈmaxən/",
    category: "action",
    conjugation: {
      ich: "mache",
      du: "machst",
      er: "macht",
      wir: "machen",
      ihr: "macht",
      sie: "machen",
    },
    examples: [
      { german: "Ich mache Hausaufgaben.", english: "I'm doing homework." },
      { german: "Was machst du?", english: "What are you doing?" },
    ],
  },
  {
    german: "sagen",
    english: "to say",
    pronunciation: "/ˈzaːɡən/",
    category: "communication",
    conjugation: {
      ich: "sage",
      du: "sagst",
      er: "sagt",
      wir: "sagen",
      ihr: "sagt",
      sie: "sagen",
    },
    examples: [
      { german: "Ich sage die Wahrheit.", english: "I'm telling the truth." },
      { german: "Was sagst du dazu?", english: "What do you say about that?" },
    ],
  },
];

const categories = [
  { id: "all", name: "All Verbs", count: verbs.length },
  {
    id: "basic",
    name: "Basic Verbs",
    count: verbs.filter((v) => v.category === "basic").length,
  },
  {
    id: "modal",
    name: "Modal Verbs",
    count: verbs.filter((v) => v.category === "modal").length,
  },
  {
    id: "action",
    name: "Action Verbs",
    count: verbs.filter((v) => v.category === "action").length,
  },
  {
    id: "communication",
    name: "Communication",
    count: verbs.filter((v) => v.category === "communication").length,
  },
];

export default function VerbsPage({ onBack }: VerbsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVerb, setSelectedVerb] = useState<Verb | null>(null);

  const filteredVerbs =
    selectedCategory === "all"
      ? verbs
      : verbs.filter((verb) => verb.category === selectedCategory);

  const playAudio = (text: string) => {
    console.log(`Playing audio for: ${text}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Main
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Essential German Verbs
            </h1>
            <p className="text-gray-600">
              Master the most common German verbs with conjugations and examples
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {verbs.length}
              </div>
              <div className="text-sm text-gray-600">Essential Verbs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">3</div>
              <div className="text-sm text-gray-600">Modal Verbs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">20+</div>
              <div className="text-sm text-gray-600">Example Sentences</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">60+</div>
              <div className="text-sm text-gray-600">Conjugations</div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVerbs.map((verb, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedVerb(verb)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {verb.german}
                  </CardTitle>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(verb.german);
                    }}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {verb.category}
                  </Badge>
                  <span className="text-sm text-gray-600">
                    {verb.pronunciation}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 font-medium mb-2">{verb.english}</p>
                <div className="text-sm text-gray-600">
                  <div className="grid grid-cols-2 gap-1">
                    <span>ich {verb.conjugation.ich}</span>
                    <span>wir {verb.conjugation.wir}</span>
                    <span>du {verb.conjugation.du}</span>
                    <span>ihr {verb.conjugation.ihr}</span>
                    <span>er/sie {verb.conjugation.er}</span>
                    <span>sie {verb.conjugation.sie}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedVerb && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                      {selectedVerb.german}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => playAudio(selectedVerb.german)}
                      >
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {selectedVerb.english} • {selectedVerb.pronunciation}
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedVerb(null)}
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="conjugation" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="conjugation">Conjugation</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>

                  <TabsContent value="conjugation" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(selectedVerb.conjugation).map(
                        ([pronoun, form]) => (
                          <div
                            key={pronoun}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="font-medium text-gray-700">
                              {pronoun}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-900">
                                {form}
                              </span>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => playAudio(`${pronoun} ${form}`)}
                              >
                                <Play className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="examples" className="space-y-4">
                    {selectedVerb.examples.map((example, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-gray-900">
                            {example.german}
                          </p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => playAudio(example.german)}
                          >
                            <Play className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-gray-600">{example.english}</p>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
