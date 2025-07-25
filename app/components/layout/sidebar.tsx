import { useState } from "react";
import {
  LucideHome,
  Book,
  Headphones,
  Mic,
  PenTool,
  AArrowUpIcon as Abc,
  Zap,
  Users,
  MessageSquareIcon as MessageSquareQuestion,
} from "lucide-react";
import { Link } from "react-router-dom";

import { href } from "react-router";

const navItems = [
  { label: "Home", icon: LucideHome, href: "/" },
  { label: "Basics", icon: Abc, href: "/levels/a1" },
  { label: "Verbs", icon: Zap, href: "/levels/a1" },
  { label: "Nouns", icon: Users, href: "/levels/a1" },
  {
    label: "Question Words",
    icon: MessageSquareQuestion,
    href: "/levels/a1/question-words-page",
  },
];

const cardClass = "cursor-pointer border-black bg-[#fff] px-2 ";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      className={`flex flex-col border-r-2 border-black bg-[#fff] transition-all duration-200
        ${collapsed ? "w-20" : "w-56"} ${cardClass} rounded-none shadow-none`}
    >
      <button
        aria-label="Collapse sidebar"
        onClick={() => setCollapsed((c) => !c)}
        className="self-end m-2 p-2 rounded-full border-2 border-black bg-[#fef9c3] hover:bg-[#38bdf8] focus:outline-none transition"
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg
          width={20}
          height={20}
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            d={collapsed ? "M8 6l6 6-6 6" : "M16 18l-6-6 6-6"}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul className="flex flex-col gap-2 mt-4">
        {navItems.map(({ label, icon: Icon, href }) => (
          <Link
            to={href || "#"}
            className={`flex items-center gap-3 px-2 py-2 font-bold border-2 border-black bg-[#fef9c3] rounded-lg hover:bg-[#38bdf8] transition
                ${collapsed ? "justify-center px-0" : ""}`}
            key={label}
          >
            <Icon className="w-6 h-6" color="#000" />
            {!collapsed && <span>{label}</span>}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
