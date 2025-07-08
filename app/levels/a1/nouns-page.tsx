import { useState } from "react";
import { ArrowLeft, Play, Search, Filter } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

interface Noun {
  german: string;
  article: string;
  plural: string;
  english: string;
  pronunciation: string;
  ipa: string;
  category: string;
  examples: Array<{
    german: string;
    english: string;
  }>;
}

interface NounsPageProps {
  onBack: () => void;
}

export default function NounsPage({ onBack }: NounsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedNoun, setSelectedNoun] = useState<Noun | null>(null);

  const nouns: Noun[] = [
    {
      german: "Mann",
      article: "der",
      plural: "Männer",
      english: "man",
      pronunciation: "mahn",
      ipa: "/man/",
      category: "People",
      examples: [
        { german: "Der Mann ist groß.", english: "The man is tall." },
        { german: "Ein Mann arbeitet hier.", english: "A man works here." },
      ],
    },
    {
      german: "Frau",
      article: "die",
      plural: "Frauen",
      english: "woman",
      pronunciation: "frow",
      ipa: "/fraʊ/",
      category: "People",
      examples: [
        { german: "Die Frau ist nett.", english: "The woman is nice." },
        {
          german: "Eine Frau kommt heute.",
          english: "A woman is coming today.",
        },
      ],
    },
    {
      german: "Kind",
      article: "das",
      plural: "Kinder",
      english: "child",
      pronunciation: "kint",
      ipa: "/kɪnt/",
      category: "People",
      examples: [
        {
          german: "Das Kind spielt gern.",
          english: "The child likes to play.",
        },
        {
          german: "Ein Kind lernt schnell.",
          english: "A child learns quickly.",
        },
      ],
    },
    {
      german: "Haus",
      article: "das",
      plural: "Häuser",
      english: "house",
      pronunciation: "hows",
      ipa: "/haʊs/",
      category: "Places",
      examples: [
        { german: "Das Haus ist schön.", english: "The house is beautiful." },
        { german: "Wir kaufen ein Haus.", english: "We are buying a house." },
      ],
    },
    {
      german: "Auto",
      article: "das",
      plural: "Autos",
      english: "car",
      pronunciation: "OW-toh",
      ipa: "/ˈaʊto/",
      category: "Transportation",
      examples: [
        { german: "Das Auto ist neu.", english: "The car is new." },
        { german: "Ich fahre mit dem Auto.", english: "I drive with the car." },
      ],
    },
    {
      german: "Zeit",
      article: "die",
      plural: "Zeiten",
      english: "time",
      pronunciation: "tsight",
      ipa: "/tsaɪt/",
      category: "Abstract",
      examples: [
        {
          german: "Die Zeit vergeht schnell.",
          english: "Time passes quickly.",
        },
        { german: "Ich habe keine Zeit.", english: "I have no time." },
      ],
    },
    {
      german: "Jahr",
      article: "das",
      plural: "Jahre",
      english: "year",
      pronunciation: "yahr",
      ipa: "/jaːr/",
      category: "Time",
      examples: [
        {
          german: "Das Jahr hat zwölf Monate.",
          english: "The year has twelve months.",
        },
        {
          german: "Nächstes Jahr fahren wir nach Deutschland.",
          english: "Next year we're going to Germany.",
        },
      ],
    },
    {
      german: "Tag",
      article: "der",
      plural: "Tage",
      english: "day",
      pronunciation: "tahk",
      ipa: "/taːk/",
      category: "Time",
      examples: [
        { german: "Der Tag ist schön.", english: "The day is beautiful." },
        {
          german: "Jeden Tag lerne ich Deutsch.",
          english: "Every day I learn German.",
        },
      ],
    },
    {
      german: "Woche",
      article: "die",
      plural: "Wochen",
      english: "week",
      pronunciation: "VOH-kheh",
      ipa: "/ˈvoːxə/",
      category: "Time",
      examples: [
        {
          german: "Die Woche hat sieben Tage.",
          english: "The week has seven days.",
        },
        {
          german: "Nächste Woche habe ich Urlaub.",
          english: "Next week I have vacation.",
        },
      ],
    },
    {
      german: "Geld",
      article: "das",
      plural: "Gelder",
      english: "money",
      pronunciation: "gelt",
      ipa: "/ɡɛlt/",
      category: "Abstract",
      examples: [
        { german: "Das Geld ist wichtig.", english: "Money is important." },
        { german: "Ich brauche mehr Geld.", english: "I need more money." },
      ],
    },
    {
      german: "Arbeit",
      article: "die",
      plural: "Arbeiten",
      english: "work",
      pronunciation: "AR-bite",
      ipa: "/ˈarbaɪt/",
      category: "Abstract",
      examples: [
        { german: "Die Arbeit macht Spaß.", english: "Work is fun." },
        {
          german: "Nach der Arbeit gehe ich nach Hause.",
          english: "After work I go home.",
        },
      ],
    },
    {
      german: "Schule",
      article: "die",
      plural: "Schulen",
      english: "school",
      pronunciation: "SHOO-leh",
      ipa: "/ˈʃuːlə/",
      category: "Places",
      examples: [
        {
          german: "Die Schule beginnt um acht.",
          english: "School starts at eight.",
        },
        {
          german: "Mein Kind geht zur Schule.",
          english: "My child goes to school.",
        },
      ],
    },
    {
      german: "Wasser",
      article: "das",
      plural: "Wässer",
      english: "water",
      pronunciation: "VAH-ser",
      ipa: "/ˈvasər/",
      category: "Food & Drink",
      examples: [
        { german: "Das Wasser ist kalt.", english: "The water is cold." },
        {
          german: "Ich trinke viel Wasser.",
          english: "I drink a lot of water.",
        },
      ],
    },
    {
      german: "Brot",
      article: "das",
      plural: "Brote",
      english: "bread",
      pronunciation: "broht",
      ipa: "/broːt/",
      category: "Food & Drink",
      examples: [
        { german: "Das Brot ist frisch.", english: "The bread is fresh." },
        {
          german: "Zum Frühstück esse ich Brot.",
          english: "For breakfast I eat bread.",
        },
      ],
    },
    {
      german: "Milch",
      article: "die",
      plural: "Milch",
      english: "milk",
      pronunciation: "milkh",
      ipa: "/mɪlç/",
      category: "Food & Drink",
      examples: [
        { german: "Die Milch ist weiß.", english: "The milk is white." },
        {
          german: "Kinder trinken gern Milch.",
          english: "Children like to drink milk.",
        },
      ],
    },
    {
      german: "Buch",
      article: "das",
      plural: "Bücher",
      english: "book",
      pronunciation: "bookh",
      ipa: "/buːx/",
      category: "Objects",
      examples: [
        {
          german: "Das Buch ist interessant.",
          english: "The book is interesting.",
        },
        { german: "Ich lese ein Buch.", english: "I am reading a book." },
      ],
    },
    {
      german: "Tisch",
      article: "der",
      plural: "Tische",
      english: "table",
      pronunciation: "tish",
      ipa: "/tɪʃ/",
      category: "Furniture",
      examples: [
        { german: "Der Tisch ist groß.", english: "The table is big." },
        { german: "Wir essen am Tisch.", english: "We eat at the table." },
      ],
    },
    {
      german: "Stuhl",
      article: "der",
      plural: "Stühle",
      english: "chair",
      pronunciation: "shtool",
      ipa: "/ʃtuːl/",
      category: "Furniture",
      examples: [
        {
          german: "Der Stuhl ist bequem.",
          english: "The chair is comfortable.",
        },
        { german: "Ich sitze auf dem Stuhl.", english: "I sit on the chair." },
      ],
    },
    {
      german: "Bett",
      article: "das",
      plural: "Betten",
      english: "bed",
      pronunciation: "bet",
      ipa: "/bɛt/",
      category: "Furniture",
      examples: [
        { german: "Das Bett ist weich.", english: "The bed is soft." },
        { german: "Ich schlafe im Bett.", english: "I sleep in the bed." },
      ],
    },
    {
      german: "Telefon",
      article: "das",
      plural: "Telefone",
      english: "telephone",
      pronunciation: "teh-leh-FOHN",
      ipa: "/teleˈfoːn/",
      category: "Technology",
      examples: [
        {
          german: "Das Telefon klingelt.",
          english: "The telephone is ringing.",
        },
        {
          german: "Ich rufe mit dem Telefon an.",
          english: "I call with the telephone.",
        },
      ],
    },
    {
      german: "Computer",
      article: "der",
      plural: "Computer",
      english: "computer",
      pronunciation: "kom-PYOO-ter",
      ipa: "/kɔmˈpjuːtər/",
      category: "Technology",
      examples: [
        {
          german: "Der Computer ist schnell.",
          english: "The computer is fast.",
        },
        {
          german: "Ich arbeite am Computer.",
          english: "I work on the computer.",
        },
      ],
    },
    {
      german: "Hund",
      article: "der",
      plural: "Hunde",
      english: "dog",
      pronunciation: "hoont",
      ipa: "/hʊnt/",
      category: "Animals",
      examples: [
        { german: "Der Hund ist treu.", english: "The dog is loyal." },
        { german: "Mein Hund heißt Max.", english: "My dog is called Max." },
      ],
    },
    {
      german: "Katze",
      article: "die",
      plural: "Katzen",
      english: "cat",
      pronunciation: "KAH-tseh",
      ipa: "/ˈkatsə/",
      category: "Animals",
      examples: [
        { german: "Die Katze ist süß.", english: "The cat is cute." },
        { german: "Eine Katze schläft viel.", english: "A cat sleeps a lot." },
      ],
    },
    {
      german: "Stadt",
      article: "die",
      plural: "Städte",
      english: "city",
      pronunciation: "shtaht",
      ipa: "/ʃtat/",
      category: "Places",
      examples: [
        { german: "Die Stadt ist groß.", english: "The city is big." },
        { german: "Ich wohne in der Stadt.", english: "I live in the city." },
      ],
    },
    {
      german: "Land",
      article: "das",
      plural: "Länder",
      english: "country",
      pronunciation: "lahnt",
      ipa: "/lant/",
      category: "Places",
      examples: [
        { german: "Das Land ist schön.", english: "The country is beautiful." },
        {
          german: "Deutschland ist ein Land in Europa.",
          english: "Germany is a country in Europe.",
        },
      ],
    },
    {
      german: "Welt",
      article: "die",
      plural: "Welten",
      english: "world",
      pronunciation: "velt",
      ipa: "/vɛlt/",
      category: "Abstract",
      examples: [
        { german: "Die Welt ist groß.", english: "The world is big." },
        {
          german: "Wir reisen um die Welt.",
          english: "We travel around the world.",
        },
      ],
    },
    {
      german: "Freund",
      article: "der",
      plural: "Freunde",
      english: "friend (male)",
      pronunciation: "froynt",
      ipa: "/frɔʏnt/",
      category: "People",
      examples: [
        { german: "Der Freund ist nett.", english: "The friend is nice." },
        {
          german: "Mein bester Freund kommt heute.",
          english: "My best friend is coming today.",
        },
      ],
    },
    {
      german: "Freundin",
      article: "die",
      plural: "Freundinnen",
      english: "friend (female)",
      pronunciation: "FROYND-in",
      ipa: "/ˈfrɔʏndɪn/",
      category: "People",
      examples: [
        { german: "Die Freundin ist lustig.", english: "The friend is funny." },
        {
          german: "Meine Freundin und ich gehen einkaufen.",
          english: "My friend and I go shopping.",
        },
      ],
    },
    {
      german: "Familie",
      article: "die",
      plural: "Familien",
      english: "family",
      pronunciation: "fah-MEE-lee-eh",
      ipa: "/faˈmiːliə/",
      category: "People",
      examples: [
        { german: "Die Familie ist wichtig.", english: "Family is important." },
        {
          german: "Meine Familie wohnt in Berlin.",
          english: "My family lives in Berlin.",
        },
      ],
    },
    {
      german: "Mutter",
      article: "die",
      plural: "Mütter",
      english: "mother",
      pronunciation: "MUT-ter",
      ipa: "/ˈmʊtər/",
      category: "Family",
      examples: [
        {
          german: "Die Mutter kocht gern.",
          english: "The mother likes to cook.",
        },
        {
          german: "Meine Mutter ist Lehrerin.",
          english: "My mother is a teacher.",
        },
      ],
    },
    {
      german: "Vater",
      article: "der",
      plural: "Väter",
      english: "father",
      pronunciation: "FAH-ter",
      ipa: "/ˈfaːtər/",
      category: "Family",
      examples: [
        {
          german: "Der Vater arbeitet viel.",
          english: "The father works a lot.",
        },
        {
          german: "Mein Vater fährt Auto.",
          english: "My father drives a car.",
        },
      ],
    },
    {
      german: "Bruder",
      article: "der",
      plural: "Brüder",
      english: "brother",
      pronunciation: "BROO-der",
      ipa: "/ˈbruːdər/",
      category: "Family",
      examples: [
        { german: "Der Bruder ist älter.", english: "The brother is older." },
        {
          german: "Mein Bruder spielt Fußball.",
          english: "My brother plays soccer.",
        },
      ],
    },
    {
      german: "Schwester",
      article: "die",
      plural: "Schwestern",
      english: "sister",
      pronunciation: "SHVES-ter",
      ipa: "/ˈʃvɛstər/",
      category: "Family",
      examples: [
        {
          german: "Die Schwester ist jünger.",
          english: "The sister is younger.",
        },
        {
          german: "Meine Schwester studiert Medizin.",
          english: "My sister studies medicine.",
        },
      ],
    },
    {
      german: "Lehrer",
      article: "der",
      plural: "Lehrer",
      english: "teacher (male)",
      pronunciation: "LEH-rer",
      ipa: "/ˈleːrər/",
      category: "Professions",
      examples: [
        {
          german: "Der Lehrer erklärt gut.",
          english: "The teacher explains well.",
        },
        {
          german: "Unser Lehrer ist sehr nett.",
          english: "Our teacher is very nice.",
        },
      ],
    },
    {
      german: "Lehrerin",
      article: "die",
      plural: "Lehrerinnen",
      english: "teacher (female)",
      pronunciation: "LEH-rer-in",
      ipa: "/ˈleːrərɪn/",
      category: "Professions",
      examples: [
        { german: "Die Lehrerin ist jung.", english: "The teacher is young." },
        {
          german: "Meine Lehrerin spricht drei Sprachen.",
          english: "My teacher speaks three languages.",
        },
      ],
    },
    {
      german: "Arzt",
      article: "der",
      plural: "Ärzte",
      english: "doctor (male)",
      pronunciation: "artst",
      ipa: "/artst/",
      category: "Professions",
      examples: [
        {
          german: "Der Arzt hilft Menschen.",
          english: "The doctor helps people.",
        },
        { german: "Ich gehe zum Arzt.", english: "I go to the doctor." },
      ],
    },
    {
      german: "Ärztin",
      article: "die",
      plural: "Ärztinnen",
      english: "doctor (female)",
      pronunciation: "ERTS-tin",
      ipa: "/ˈɛrtstɪn/",
      category: "Professions",
      examples: [
        {
          german: "Die Ärztin ist kompetent.",
          english: "The doctor is competent.",
        },
        {
          german: "Meine Ärztin ist sehr freundlich.",
          english: "My doctor is very friendly.",
        },
      ],
    },
    {
      german: "Geschäft",
      article: "das",
      plural: "Geschäfte",
      english: "shop/store",
      pronunciation: "geh-SHEFT",
      ipa: "/ɡəˈʃɛft/",
      category: "Places",
      examples: [
        { german: "Das Geschäft ist geöffnet.", english: "The shop is open." },
        {
          german: "Ich kaufe im Geschäft ein.",
          english: "I shop in the store.",
        },
      ],
    },
    {
      german: "Restaurant",
      article: "das",
      plural: "Restaurants",
      english: "restaurant",
      pronunciation: "res-toh-RAHN",
      ipa: "/rɛstoˈrã/",
      category: "Places",
      examples: [
        {
          german: "Das Restaurant ist teuer.",
          english: "The restaurant is expensive.",
        },
        {
          german: "Wir essen im Restaurant.",
          english: "We eat in the restaurant.",
        },
      ],
    },
    {
      german: "Hotel",
      article: "das",
      plural: "Hotels",
      english: "hotel",
      pronunciation: "ho-TEL",
      ipa: "/hoˈtɛl/",
      category: "Places",
      examples: [
        {
          german: "Das Hotel ist luxuriös.",
          english: "The hotel is luxurious.",
        },
        {
          german: "Wir übernachten im Hotel.",
          english: "We stay overnight in the hotel.",
        },
      ],
    },
    {
      german: "Bahnhof",
      article: "der",
      plural: "Bahnhöfe",
      english: "train station",
      pronunciation: "BAHN-hohf",
      ipa: "/ˈbaːnhoːf/",
      category: "Transportation",
      examples: [
        {
          german: "Der Bahnhof ist groß.",
          english: "The train station is big.",
        },
        {
          german: "Ich warte am Bahnhof.",
          english: "I wait at the train station.",
        },
      ],
    },
    {
      german: "Flughafen",
      article: "der",
      plural: "Flughäfen",
      english: "airport",
      pronunciation: "FLOOK-hah-fen",
      ipa: "/ˈfluːkhaːfən/",
      category: "Transportation",
      examples: [
        {
          german: "Der Flughafen ist modern.",
          english: "The airport is modern.",
        },
        {
          german: "Wir fahren zum Flughafen.",
          english: "We drive to the airport.",
        },
      ],
    },
    {
      german: "Zug",
      article: "der",
      plural: "Züge",
      english: "train",
      pronunciation: "tsook",
      ipa: "/tsuːk/",
      category: "Transportation",
      examples: [
        { german: "Der Zug ist pünktlich.", english: "The train is on time." },
        { german: "Ich fahre mit dem Zug.", english: "I travel by train." },
      ],
    },
    {
      german: "Bus",
      article: "der",
      plural: "Busse",
      english: "bus",
      pronunciation: "boos",
      ipa: "/buːs/",
      category: "Transportation",
      examples: [
        { german: "Der Bus kommt gleich.", english: "The bus is coming soon." },
        {
          german: "Ich nehme den Bus zur Arbeit.",
          english: "I take the bus to work.",
        },
      ],
    },
    {
      german: "Straße",
      article: "die",
      plural: "Straßen",
      english: "street",
      pronunciation: "SHTRAH-seh",
      ipa: "/ˈʃtraːsə/",
      category: "Places",
      examples: [
        { german: "Die Straße ist breit.", english: "The street is wide." },
        {
          german: "Ich wohne in dieser Straße.",
          english: "I live on this street.",
        },
      ],
    },
    {
      german: "Park",
      article: "der",
      plural: "Parks",
      english: "park",
      pronunciation: "park",
      ipa: "/park/",
      category: "Places",
      examples: [
        { german: "Der Park ist grün.", english: "The park is green." },
        {
          german: "Kinder spielen im Park.",
          english: "Children play in the park.",
        },
      ],
    },
    {
      german: "Musik",
      article: "die",
      plural: "Musik",
      english: "music",
      pronunciation: "moo-ZEEK",
      ipa: "/muˈziːk/",
      category: "Abstract",
      examples: [
        { german: "Die Musik ist schön.", english: "The music is beautiful." },
        {
          german: "Ich höre gern Musik.",
          english: "I like to listen to music.",
        },
      ],
    },
    {
      german: "Film",
      article: "der",
      plural: "Filme",
      english: "movie/film",
      pronunciation: "film",
      ipa: "/fɪlm/",
      category: "Entertainment",
      examples: [
        { german: "Der Film ist spannend.", english: "The movie is exciting." },
        { german: "Wir schauen einen Film.", english: "We watch a movie." },
      ],
    },
    {
      german: "Spiel",
      article: "das",
      plural: "Spiele",
      english: "game",
      pronunciation: "shpeel",
      ipa: "/ʃpiːl/",
      category: "Entertainment",
      examples: [
        { german: "Das Spiel macht Spaß.", english: "The game is fun." },
        { german: "Kinder lieben Spiele.", english: "Children love games." },
      ],
    },
    {
      german: "Sport",
      article: "der",
      plural: "Sportarten",
      english: "sport",
      pronunciation: "shport",
      ipa: "/ʃpɔrt/",
      category: "Activities",
      examples: [
        { german: "Sport ist gesund.", english: "Sport is healthy." },
        { german: "Ich treibe gern Sport.", english: "I like to do sports." },
      ],
    },
    {
      german: "Farbe",
      article: "die",
      plural: "Farben",
      english: "color",
      pronunciation: "FAR-beh",
      ipa: "/ˈfarbə/",
      category: "Abstract",
      examples: [
        { german: "Die Farbe ist rot.", english: "The color is red." },
        {
          german: "Welche Farbe magst du?",
          english: "Which color do you like?",
        },
      ],
    },
  ];

  const categories = [
    "all",
    "People",
    "Family",
    "Places",
    "Time",
    "Food & Drink",
    "Objects",
    "Furniture",
    "Technology",
    "Animals",
    "Transportation",
    "Professions",
    "Abstract",
    "Entertainment",
    "Activities",
  ];

  const filteredNouns = nouns.filter((noun) => {
    const matchesSearch =
      noun.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
      noun.english.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || noun.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const playAudio = (text: string) => {
    // Placeholder for audio functionality
    console.log(`Playing audio for: ${text}`);
  };

  const getArticleColor = (article: string) => {
    switch (article) {
      case "der":
        return "bg-blue-100 text-blue-800";
      case "die":
        return "bg-red-100 text-red-800";
      case "das":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              Common German Nouns
            </h1>
            <p className="text-gray-600">
              Learn the 50 most essential German nouns with articles and
              examples
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {nouns.filter((n) => n.article === "der").length}
              </div>
              <div className="text-sm text-gray-600">Masculine (der)</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">
                {nouns.filter((n) => n.article === "die").length}
              </div>
              <div className="text-sm text-gray-600">Feminine (die)</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {nouns.filter((n) => n.article === "das").length}
              </div>
              <div className="text-sm text-gray-600">Neuter (das)</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">
                {categories.length - 1}
              </div>
              <div className="text-sm text-gray-600">Categories</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search nouns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Nouns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNouns.map((noun, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className={getArticleColor(noun.article)}>
                          {noun.article}
                        </Badge>
                        <CardTitle className="text-xl">{noun.german}</CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          playAudio(noun.german);
                        }}
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-gray-600">{noun.english}</div>
                      <div className="text-sm text-gray-500">
                        Plural: {noun.plural}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {noun.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <Badge className={getArticleColor(noun.article)}>
                      {noun.article}
                    </Badge>
                    <span className="text-2xl">{noun.german}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => playAudio(noun.german)}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </DialogTitle>
                  <DialogDescription>
                    {noun.english} • Category: {noun.category}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  {/* Pronunciation */}
                  <div>
                    <h4 className="font-semibold mb-2">Pronunciation</h4>
                    <div className="flex items-center gap-4">
                      <span className="text-lg">{noun.pronunciation}</span>
                      <span className="text-gray-500">{noun.ipa}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => playAudio(noun.german)}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Listen
                      </Button>
                    </div>
                  </div>

                  {/* Forms */}
                  <div>
                    <h4 className="font-semibold mb-2">Forms</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Singular</div>
                        <div className="font-medium">
                          {noun.article} {noun.german}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Plural</div>
                        <div className="font-medium">die {noun.plural}</div>
                      </div>
                    </div>
                  </div>

                  {/* Examples */}
                  <div>
                    <h4 className="font-semibold mb-2">Example Sentences</h4>
                    <div className="space-y-3">
                      {noun.examples.map((example, idx) => (
                        <div
                          key={idx}
                          className="border-l-4 border-blue-200 pl-4"
                        >
                          <div className="font-medium text-gray-900 flex items-center gap-2">
                            {example.german}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => playAudio(example.german)}
                            >
                              <Play className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="text-gray-600 text-sm">
                            {example.english}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* No results */}
        {filteredNouns.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No nouns found matching your search.
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
