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
  {
    name: "C1",
    icon: Gem,
    description:
      "Advance your skills: prep for professional and academic language use.",
    modules: "15 modules • Upper Intermediate",
    href: "/c1",
    locked: true,
    color: "bg-[#fbcfe8]",
  },
  {
    name: "C2",
    icon: Gem,
    description:
      "Advance your skills: prep for professional and academic language use.",
    modules: "15 modules • Upper Intermediate",
    href: "/c2",
    locked: true,
    color: "bg-[#fbcfe8]",
  },
];

export function Main() {
  return (
    <div className="flex flex-col items-center justify-start bg-[#f0f9ff] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 min-h-screen">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-3 sm:mb-4 uppercase text-center leading-tight">
        German Certificate Training
      </h1>
      <h2 className="text-base sm:text-lg lg:text-2xl text-black font-medium mb-8 sm:mb-10 max-w-2xl text-center leading-relaxed px-2">
        Prepare for your official German language certificate.
        <br />
        <span className="font-bold">Choose your level below</span> to start
        learning and practicing interactive modules.
      </h2>

      {/* LEVEL CARDS - 1 column mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl mb-8 sm:mb-10">
        {levels.map(({ name, icon: Icon, description, modules, href, locked, color }) => {
          const card = (
            <Card
              className={`relative border-2 border-black rounded-none shadow-none transition-all duration-150 ${color} ${locked ? "opacity-60 pointer-events-none" : "hover:bg-[#38bdf8] hover:text-white cursor-pointer"}`}
              style={{
                minHeight: "320px",
                boxShadow: "4px 4px 0 0 #000",
              }}
            >
              <CardHeader className="flex flex-col items-center pb-3 sm:pb-4">
                <div className="mb-2 sm:mb-3 p-2 sm:p-3 border-2 border-black bg-[#2326cf] rounded-none">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#fef9c6]" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-extrabold uppercase text-black text-center">{name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center flex-grow px-4 sm:px-6">
                {locked ? (
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <span className="text-lg sm:text-xl font-bold text-black text-center">Coming Soon</span>
                  </div>
                ) : (
                  <>
                    <p className="text-sm sm:text-base text-black text-center mb-3 sm:mb-4 leading-relaxed">{description}</p>
                    <span className="text-xs sm:text-sm font-bold text-black text-center">{modules}</span>
                  </>
                )}
              </CardContent>
              {/* Lock Icon */}
              {locked && (
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white rounded-none border-2 border-black p-1">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
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

      {/* BASICS & QUESTION CARDS - 1 column mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl">
        {/* Question Words */}
        <Link to="/levels/a1/question-words-page" className="block">
          <Card
            className="border-2 border-black rounded-none shadow-none bg-[#a5f3fc] transition-all duration-150 hover:bg-[#38bdf8] hover:text-white cursor-pointer"
            style={{ 
              boxShadow: "4px 4px 0 0 #000",
              minHeight: "200px"
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="p-1.5 sm:p-2 border-2 border-black rounded-none bg-white">
                  <Book className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-extrabold uppercase text-black">Questions</CardTitle>
              </div>
              <CardDescription className="text-base sm:text-lg font-bold text-black uppercase">
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
          style={{ 
            boxShadow: "4px 4px 0 0 #000",
            minHeight: "200px"
          }}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="p-1.5 sm:p-2 border-2 border-black rounded-none bg-white">
                <Book className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-extrabold uppercase text-black">Basics</CardTitle>
            </div>
            <CardDescription className="text-base sm:text-lg font-bold text-black uppercase">
              Basics Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm font-bold text-black mb-2">Topics include:</p>
            </div>
            <Button
              className="w-full bg-black text-[#fef9c3] hover:bg-yellow-900 font-bold border-2 border-black rounded-none cursor-pointer uppercase text-xs sm:text-sm py-2 sm:py-3"
            >
              Explore Nouns
            </Button>
          </CardContent>
        </Card>
        
        {/* Basics 2 */}
        <Card
          className="border-2 border-black rounded-none shadow-none bg-[#fde68a] transition-all duration-150 hover:bg-[#38bdf8] hover:text-white cursor-pointer md:col-span-2 xl:col-span-1"
          style={{ 
            boxShadow: "4px 4px 0 0 #000",
            minHeight: "200px"
          }}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="p-1.5 sm:p-2 border-2 border-black rounded-none bg-white">
                <Book className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-extrabold uppercase text-black">Basics</CardTitle>
            </div>
            <CardDescription className="text-base sm:text-lg font-bold text-black uppercase">
              Basics Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm font-bold text-black mb-2">Topics include:</p>
            </div>
            <Button
              className="w-full bg-black text-[#fef9c3] hover:bg-yellow-900 font-bold border-2 border-black rounded-none cursor-pointer uppercase text-xs sm:text-sm py-2 sm:py-3"
            >
              Explore Nouns
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Coming soon footer */}
      {/* <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-black mt-8 sm:mt-12 mb-4 sm:mb-6">
          Stay Tuned! More Levels Coming Soon!
        </h2>
      </div> */}
    </div>
  );
}