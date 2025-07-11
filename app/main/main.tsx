import { GraduationCap, Star, Sparkle, Gem, Lock, Book } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

const levels = [
  {
    name: "A1",
    icon: GraduationCap,
    description:
      "Start from scratch: learn the basics of German grammar, vocabulary, and conversation.",
    modules: "8 modules • Foundations",
    href: "levels/a1",
    locked: false,
    color: "bg-[#e0e7ff]",
  },
  {
    name: "A2",
    icon: Star,
    description:
      "Expand your basics: practice dialogues, reading, and everyday topics.",
    modules: "10 modules • Beginner+",
    href: "/a2",
    locked: true,
    color: "bg-[#a5f3fc]",
  },
  {
    name: "B1",
    icon: Sparkle,
    description:
      "Reach intermediate: gain confidence for real conversations and work situations.",
    modules: "12 modules • Intermediate",
    href: "/b1",
    locked: true,
    color: "bg-[#fef08a]",
  },
  {
    name: "B2",
    icon: Gem,
    description:
      "Advance your skills: prep for professional and academic language use.",
    modules: "15 modules • Upper Intermediate",
    href: "/b2",
    locked: true,
    color: "bg-[#fbcfe8]",
  },
];

export function Main() {
  return (
    <div className="flex flex-col items-center justify-start bg-[#fef9c6] px-4 py-16 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 uppercase text-center">
        German Certificate Training
      </h1>
      <h2 className="text-lg md:text-2xl text-black font-medium mb-10 max-w-2xl text-center">
        Prepare for your official German language certificate.
        <br />
        <span className="font-bold">Choose your level below</span> to start
        learning and practicing interactive modules.
      </h2>

      {/* LEVEL CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl mb-10">
        {levels.map(({ name, icon: Icon, description, modules, href, locked, color }) => {
          const card = (
            <Card
              className={`relative border-2 border-black rounded-none shadow-none transition-all duration-150 ${color} ${locked ? "opacity-60 pointer-events-none" : "hover:bg-[#38bdf8] hover:text-white cursor-pointer"}`}
              style={{
                minHeight: "380px",
                boxShadow: "4px 4px 0 0 #000",
              }}
            >
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="mb-3 p-3 border-2 border-black bg-[#2326cf] rounded-none">
                  <Icon className="w-10 h-10 text-[#fef9c6]" />
                </div>
                <CardTitle className="text-2xl font-extrabold uppercase text-black">{name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center flex-grow">
                {locked ? (
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <span className="text-lg font-bold text-black text-center">Coming Soon</span>
                  </div>
                ) : (
                  <>
                    <p className="text-black text-center mb-4">{description}</p>
                    <span className="text-sm font-bold text-black">{modules}</span>
                  </>
                )}
              </CardContent>
              {/* Lock Icon */}
              {locked && (
                <div className="absolute top-3 right-3 bg-white rounded-none border-2 border-black p-1">
                  <Lock className="w-5 h-5 text-black" />
                </div>
              )}
            </Card>
          );

          return locked ? (
            <div key={name}>{card}</div>
          ) : (
            <Link to={`/${href}`} key={name} className="block">
              {card}
            </Link>
          );
        })}
      </div>

      {/* BASICS & QUESTION CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Question Words */}
        <Link to="/levels/a1/question-words-page" className="block">
          <Card
            className="border-2 border-black rounded-none shadow-none bg-[#a5f3fc] transition-all duration-150 hover:bg-[#38bdf8] hover:text-white cursor-pointer"
            style={{ boxShadow: "4px 4px 0 0 #000" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 border-2 border-black rounded-none bg-white">
                  <Book className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-xl font-extrabold uppercase text-black">Questions</CardTitle>
              </div>
              <CardDescription className="text-lg font-bold text-black uppercase">
                Question Words
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4" />
            </CardContent>
          </Card>
        </Link>
        {/* Basics 1 */}
        <Card
          className="border-2 border-black rounded-none shadow-none bg-[#bbf7d0] transition-all duration-150 hover:bg-[#38bdf8] hover:text-white cursor-pointer"
          style={{ boxShadow: "4px 4px 0 0 #000" }}
        >
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 border-2 border-black rounded-none bg-white">
                <Book className="h-6 w-6 text-black" />
              </div>
              <CardTitle className="text-xl font-extrabold uppercase text-black">Basics</CardTitle>
            </div>
            <CardDescription className="text-lg font-bold text-black uppercase">
              Basics Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <p className="text-sm font-bold text-black mb-2">Topics include:</p>
            </div>
            <Button
              className="w-full bg-black text-[#fef9c3] hover:bg-yellow-900 font-bold border-2 border-black rounded-none cursor-pointer uppercase"
            >
              Explore Nouns
            </Button>
          </CardContent>
        </Card>
        {/* Basics 2 */}
        <Card
          className="border-2 border-black rounded-none shadow-none bg-[#fde68a] transition-all duration-150 hover:bg-[#38bdf8] hover:text-white cursor-pointer"
          style={{ boxShadow: "4px 4px 0 0 #000" }}
        >
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 border-2 border-black rounded-none bg-white">
                <Book className="h-6 w-6 text-black" />
              </div>
              <CardTitle className="text-xl font-extrabold uppercase text-black">Basics</CardTitle>
            </div>
            <CardDescription className="text-lg font-bold text-black uppercase">
              Basics Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <p className="text-sm font-bold text-black mb-2">Topics include:</p>
            </div>
            <Button
              className="w-full bg-black text-[#fef9c3] hover:bg-yellow-900 font-bold border-2 border-black rounded-none cursor-pointer uppercase"
            >
              Explore Nouns
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Coming soon footer */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black mt-12 mb-6">
          Stay Tuned! More Levels Coming Soon!
        </h2>
      </div>
    </div>
  );
}
