import QuestionCard from "./QuestionCard";

interface Question {
  question: string;
  answer: string;
  englishQ: string;
  englishA: string;
}

interface CategorySectionProps {
  title: string;
  questions: Question[];
  onSelect: (q: Question) => void;
}

export default function CategorySection({
  title,
  questions,
  onSelect,
}: CategorySectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold uppercase text-black mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map((q, idx) => (
          <QuestionCard
            key={idx}
            question={q.question}
            englishQ={q.englishQ}
            onClick={() => onSelect(q)}
          />
        ))}
      </div>
    </div>
  );
}
