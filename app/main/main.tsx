import { GraduationCap, Star, Sparkle, Gem, Lock } from "lucide-react";
import { Link } from "react-router-dom";

// import { ReactNode } from "react";
const levels = [
  {
    name: "A1",
    icon: GraduationCap,
    description:
      "Start from scratch: learn the basics of German grammar, vocabulary, and conversation.",
    modules: "8 modules • Foundations",
    href: "levels/a1",
    locked: false,
  },
  {
    name: "A2",
    icon: Star,
    description:
      "Expand your basics: practice dialogues, reading, and everyday topics.",
    modules: "10 modules • Beginner+",
    href: "/a2",
    locked: true,
  },
  {
    name: "B1",
    icon: Sparkle,
    description:
      "Reach intermediate: gain confidence for real conversations and work situations.",
    modules: "12 modules • Intermediate",
    href: "/b1",
    locked: true,
  },
  {
    name: "B2",
    icon: Gem,
    description:
      "Advance your skills: prep for professional and academic language use.",
    modules: "15 modules • Upper Intermediate",
    href: "/b2",
    locked: true,
  },
];

const cardClass =
  "relative border-2 border-black bg-[#fff] hover:bg-[#fde047] transition-all duration-200 shadow-none hover:shadow-[4px_4px_0_0_black] hover:-translate-x-1 hover:-translate-y-1";

// type MainProps = {
//   children: ReactNode;
// };

export function Main() {
  return (
    <>
      <div className="flex flex-col items-center justify-start bg-[#fef9c6] px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 uppercase text-center">
          German certificate training
        </h1>
        <h2 className="text-lg md:text-2xl text-black font-medium mb-10 max-w-2xl text-center">
          Prepare for your official German language certificate.
          <br />
          <span className="font-bold">Choose your level below</span> to start
          learning and practicing interactive modules.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
          {levels.map(
            ({ name, icon: Icon, description, modules, href, locked }) => {
              const content = (
                <div
                  className={`p-6 rounded-xl flex flex-col items-center justify-start h-[380px] ${cardClass} ${
                    locked ? "bg-gray-200" : "bg-[#fff]"
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-3 p-3 border-2 border-black bg-[#2326cf] rounded-full">
                    <Icon className="w-10 h-10 text-[#fef9c6]
                    " />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 text-black">{name}</h3>

                  {/* Main Content */}
                  {locked ? (
                    <div className="flex-grow flex items-center justify-center w-full">
                      <span className="text-lg font-bold text-black text-center">
                        Coming Soon
                      </span>
                    </div>
                  ) : (
                    <>
                      <p className="text-black text-center mb-4">
                        {description}
                      </p>
                      <span className="text-sm font-bold text-black">
                        {modules}
                      </span>
                    </>
                  )}

                  {/* Lock Icon */}
                  {locked && (
                    <div className="absolute top-3 right-3 bg-white rounded-full border-2 border-black p-1">
                      <Lock className="w-5 h-5 text-black" />
                    </div>
                  )}
                </div>
              );

              return locked ? (
                <div key={name}>{content}</div>
              ) : (
                <Link to={`/${href}`} key={name} className="no-underline">
                  {content}
                </Link>
              );
            }
          )}
        </div>
         {/*Learning Modules for future use */}
        {/* <div>
          <h2 className="text-2xl font-bold text-black mb-6 text-center uppercase">
            Learning Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningAreas.map(({ title, description, icon: Icon, topics }) => (
              <Card key={title} className={cardClassLarge}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 border-2 border-black">
                      <Icon className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle>{title}</CardTitle>
                  </div>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-bold text-black mb-2">
                      Topics include:
                    </p>
                    <ul className="space-y-1">
                      {topics.map((topic, index) => (
                        <li
                          key={index}
                          className="text-sm text-black flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full bg-black text-[#fef9c3] hover:bg-yellow-900 font-bold border-2 border-black cursor-pointer"
                    onClick={() => {
                      if (title === "Essential Verbs") onNavigate?.("verbs");
                      if (title === "Question Words")
                        onNavigate?.("question-words");
                      if (title === "Common Nouns") onNavigate?.("nouns");
                    }}
                  >
                    Explore {title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
        {/* Bottom Informational Bar */}
        {/* <div className="mt-16 border-2 border-black p-8 bg-[#fef9c3]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-black font-bold">
            <div>
              <div className="text-3xl mb-2">26</div>
              <div className="text-sm">German Letters</div>
            </div>
            <div>
              <div className="text-3xl mb-2">50</div>
              <div className="text-sm">Essential Verbs</div>
            </div>
            <div>
              <div className="text-3xl mb-2">15</div>
              <div className="text-sm">Question Words</div>
            </div>
            <div>
              <div className="text-3xl mb-2">50</div>
              <div className="text-sm">Common Nouns</div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
