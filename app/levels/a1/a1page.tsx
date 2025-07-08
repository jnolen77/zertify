import { useState } from "react";
import GermanA1App from "../../routes/german-a1-app";
import QuestionWordsPage from "../../levels/a1/question-words-page";
import WasQuestionPage from "./questions/was-question-page";
import ReadingPage from "../../levels/a1/reading-page";
import ListeningPage from "../../levels/a1/listening-page";
import WritingPage from "../../levels/a1/writing-page";
import VerbsPage from "../../levels/a1/verbs-page";
import NounsPage from "../../levels/a1/nouns-page";

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

  return <GermanA1App onNavigate={(page) => setCurrentPage(page)} />;
}
