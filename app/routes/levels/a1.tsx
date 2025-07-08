"use client";

import { useState } from "react";
import GermanA1App from "../../routes/german-a1-app";
import QuestionWordsPage from "@/app/pages/question-words-page";
import WasQuestionPage from "@/app/pages/was-question-page";
import ReadingPage from "@/app/pages/reading-page";
import ListeningPage from "@/app/pages/listening-page";
import WritingPage from "@/app/pages/writing-page";
import VerbsPage from "@/app/pages/verbs-page";
import NounsPage from "@/app/pages/nouns-page";

export default function A1Page() {
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
