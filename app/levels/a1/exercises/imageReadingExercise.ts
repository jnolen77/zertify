export interface ImageReadingExercise {
  id: number;
  title: string;
  level: string;
  topic: string;
  description: string;
  imageUrl: string; // ✅ required, not optional
  questions: {
    question: string;
    answer: boolean;
  }[];
}


 const imageReadingExercises: ImageReadingExercise[] = [
    {
      id: 1,
      title: "Das Cafe",
      level: "A1",
      topic: "Cafe",
      description: "Cafe Opening Hours ",
        imageUrl: "/images/cafe-hours.png",

      questions: [
        { question: "Sie können um 9.00 Uhr einen Kaffee kaufen.", answer: true },
      ],
    },
   
  ];

export default imageReadingExercises;