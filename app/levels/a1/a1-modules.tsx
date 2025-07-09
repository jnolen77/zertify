import { useState } from "react";
import A1Index from "./a1-index";
import ReadingPage from "./reading-page";
import ListeningPage from "./listening-page";
import WritingPage from "./writing-page";

export default function Page() {
  const [currentPage, setCurrentPage] = useState<
    | "main"
    | "question-words"
    | "was-question"
    | "reading"
    | "listening"
    | "writing"
    | "verbs"
    | "nouns"
  >("main");

  if (currentPage === "listening") {
    return <ListeningPage onBack={() => setCurrentPage("main")} />;
  }

  if (currentPage === "reading") {
    return <ReadingPage onBack={() => setCurrentPage("main")} />;
  }

  if (currentPage === "writing") {
    return <WritingPage onBack={() => setCurrentPage("main")} />;
  }

  return <A1Index onNavigate={(page) => setCurrentPage(page)} />;
}
