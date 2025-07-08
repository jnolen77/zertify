export interface HeadlineMatchingExercise {
  id: number;
  title: string;
  level: string;
  topic: string;
  description: string;
  headlines: {
    [key: string]: string;
  };
  textBlocks: {
    id: number;
    text: string;
    correctHeadline: string;
  }[];
}

const headlineMatchingExercises: HeadlineMatchingExercise[] = [
  {
    id: 1,
    title: "Match the Headline",
    level: "A1",
    topic: "Reading",
    description: "Match each short paragraph to the correct headline.",
    headlines: {
      a: "In the Supermarket",
      b: "My Morning Routine",
      c: "Going to the Cinema",
    },
    textBlocks: [
      {
        id: 27,
        text: "Ich stehe jeden Morgen um 6 Uhr auf. Dann dusche ich und trinke einen Kaffee. Um 7 Uhr verlasse ich das Haus und fahre zur Arbeit.",
        correctHeadline: "b",
      },
      {
        id: 28,
        text: "Heute gehe ich mit meinen Freunden ins Kino. Wir sehen einen neuen Film. Danach essen wir noch Pizza in einem Restaurant.",
        correctHeadline: "c",
      },
      {
        id: 29,
        text: "Am Samstag gehe ich in den Supermarkt. Ich kaufe Brot, Milch und Gemüse. Die Preise sind heute gut.",
        correctHeadline: "a",
      },
    ],
  },
  {
    id: 2,
    title: "Assign the Headline",
    level: "A1",
    topic: "Alltag",
    description: "Choose the correct headline for each short daily routine text.",
    headlines: {
      a: "A Walk in the Park",
      b: "Working from Home",
      c: "At the Train Station",
    },
    textBlocks: [
      {
        id: 30,
        text: "Ich arbeite heute von zu Hause. Mein Computer steht auf dem Küchentisch. In der Pause mache ich mir einen Kaffee.",
        correctHeadline: "b",
      },
      {
        id: 31,
        text: "Ich gehe gern im Park spazieren. Die Bäume sind grün und es ist ruhig. Oft sehe ich Hunde und Kinder spielen.",
        correctHeadline: "a",
      },
      {
        id: 32,
        text: "Am Bahnhof ist viel los. Die Züge fahren ab und an. Ich warte auf Gleis 3 auf den Zug nach Berlin.",
        correctHeadline: "c",
      },
    ],
  },
];

export default headlineMatchingExercises;
