import { useState } from "react";
import A1Index from "./a1-index";
import QuestionWordsPage from "./question-words-page";
import WasQuestionPage from "./questions/was-question-page";
import ReadingPage from "./reading-page";
import ListeningPage from "./listening-page";
import WritingPage from "./writing-page";
import VerbsPage from "./verbs-page";
import NounsPage from "./nouns-page";

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

  if (currentPage === "was-question") {
    return <WasQuestionPage onBack={() => setCurrentPage("question-words")} />;
  }

  if (currentPage === "question-words") {
    return (
      <QuestionWordsPage
        onBack={() => setCurrentPage("main")}
        onNavigateToWas={() => setCurrentPage("was-question")}
      />
    );
  }

  if (currentPage === "listening") {
    return <ListeningPage onBack={() => setCurrentPage("main")} />;
  }

  if (currentPage === "reading") {
    return <ReadingPage onBack={() => setCurrentPage("main")} />;
  }

  if (currentPage === "writing") {
    return <WritingPage onBack={() => setCurrentPage("main")} />;
  }

  if (currentPage === "verbs") {
    return <VerbsPage onBack={() => setCurrentPage("main")} />;
  }

  if (currentPage === "nouns") {
    return <NounsPage onBack={() => setCurrentPage("main")} />;
  }

  return <A1Index onNavigate={(page) => setCurrentPage(page)} />;
}
