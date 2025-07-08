"use client";
import { useState } from "react";
import {
  Book,
  Headphones,
  Mic,
  PenTool,
  AArrowUpIcon as Abc,
  Zap,
  Users,
  MessageSquareIcon as MessageSquareQuestion,
} from "lucide-react";

const navItems = [
  { label: "Reading", icon: Book },
  { label: "Listening", icon: Headphones },
  { label: "Speaking", icon: Mic },
  { label: "Writing", icon: PenTool },
  { label: "Basics", icon: Abc },
  { label: "Verbs", icon: Zap },
  { label: "Nouns", icon: Users },
  { label: "Question Words", icon: MessageSquareQuestion },
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
        className="self-end m-2 p-2 rounded-full border-2 border-black bg-[#fef9c3] hover:bg-[#FFB5A7] focus:outline-none transition"
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
        {navItems.map(({ label, icon: Icon }) => (
          <li key={label}>
            <a
              href="#"
              className={`flex items-center gap-3 px-4 py-3 text-lg font-bold border-2 border-black bg-[#fef9c3] rounded-lg hover:bg-[#FFB5A7] transition
                ${collapsed ? "justify-center px-0" : ""}`}
              tabIndex={0}
              title={label}
            >
              <Icon
                className="w-6 h-6"
                color="blue
              "
              />
              {!collapsed && <span>{label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
