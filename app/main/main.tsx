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
    href: "a1",
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
      <div className="flex flex-col items-center justify-start bg-[#fcffe2] px-4 py-16">
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
                  <div className="mb-3 p-3 border-2 border-black bg-[#008DDA] rounded-full">
                    <Icon className="w-10 h-10 text-cyan-200" />
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
      </div>
    </>
  );
}
