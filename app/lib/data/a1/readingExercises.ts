export interface ReadingExercise {
  id: number;
  title: string;
  level: string;
  topic: string;
  description: string;
  text: string;
  questions: {
    question: string;
    answer: boolean;
  }[];
}

 const readingExercises: ReadingExercise[] = [
    {
      id: 1,
      title: "Meine Familie",
      level: "A1",
      topic: "Familie",
      description: "Read about Anna's family",
      text: "Hallo! Ich heiße Anna und ich bin 25 Jahre alt. Ich wohne in Berlin mit meiner Familie. Mein Vater heißt Klaus und er ist 55 Jahre alt. Er arbeitet als Lehrer. Meine Mutter heißt Maria und sie ist 52 Jahre alt. Sie ist Ärztin. Ich habe einen Bruder. Er heißt Tom und er ist 22 Jahre alt. Tom studiert Medizin an der Universität. Wir haben auch einen Hund. Er heißt Max und er ist sehr freundlich.",
      questions: [
        { question: "Anna ist 25 Jahre alt.", answer: true },
        { question: "Annas Vater ist Arzt.", answer: false },
        { question: "Tom studiert an der Universität.", answer: true },
      ],
    },
    {
      id: 2,
      title: "Mein Tag",
      level: "A1",
      topic: "Alltag",
      description: "Learn about daily routines",
      text: "Ich stehe jeden Tag um 7 Uhr auf. Zuerst dusche ich und dann frühstücke ich. Ich esse Brot mit Butter und trinke Kaffee. Um 8 Uhr gehe ich zur Arbeit. Ich arbeite in einem Büro von 9 bis 17 Uhr. In der Mittagspause esse ich in der Kantine. Nach der Arbeit gehe ich nach Hause. Abends koche ich das Abendessen und sehe fern. Um 22 Uhr gehe ich ins Bett.",
      questions: [
        { question: "Ich stehe um 8 Uhr auf.", answer: false },
        { question: "Ich arbeite 8 Stunden pro Tag.", answer: true },
        { question: "Ich gehe um 22 Uhr ins Bett.", answer: true },
      ],
    },
    {
      id: 3,
      title: "Im Restaurant",
      level: "A1",
      topic: "Essen",
      description: "A visit to a German restaurant",
      text: "Heute gehe ich mit meinen Freunden ins Restaurant. Das Restaurant heißt 'Zur Sonne' und es ist sehr gemütlich. Wir sitzen am Fenster. Der Kellner ist sehr freundlich. Ich bestelle eine Pizza Margherita und ein Wasser. Mein Freund Max bestellt Schnitzel mit Pommes und ein Bier. Lisa bestellt einen Salat und einen Orangensaft. Das Essen schmeckt sehr gut. Wir bezahlen zusammen 45 Euro.",
      questions: [
        { question: "Das Restaurant heißt 'Zur Sonne'.", answer: true },
        { question: "Ich bestelle ein Bier.", answer: false },
        { question: "Das Essen kostet 45 Euro.", answer: true },
      ],
    },
    {
      id: 4,
      title: "Einkaufen",
      level: "A1",
      topic: "Shopping",
      description: "Shopping at the supermarket",
      text: "Am Samstag gehe ich zum Supermarkt. Ich brauche Lebensmittel für die Woche. Zuerst kaufe ich Obst: Äpfel, Bananen und Orangen. Dann gehe ich zur Fleischtheke und kaufe Hähnchen. Ich brauche auch Milch, Brot und Eier. An der Kasse bezahle ich mit meiner Kreditkarte. Alles kostet 32 Euro. Der Supermarkt ist heute sehr voll, aber die Verkäufer sind hilfsbereit.",
      questions: [
        { question: "Ich gehe am Sonntag einkaufen.", answer: false },
        { question: "Ich kaufe Hähnchen an der Fleischtheke.", answer: true },
        { question: "Ich bezahle mit Bargeld.", answer: false },
      ],
    },
    {
      id: 5,
      title: "Mein Hobby",
      level: "A1",
      topic: "Freizeit",
      description: "Reading about hobbies",
      text: "Mein Name ist Peter und ich bin 30 Jahre alt. Mein Hobby ist Fotografieren. Jeden Sonntag gehe ich in den Park und mache Fotos von der Natur. Ich fotografiere gern Blumen, Bäume und Tiere. Meine Kamera ist neu und macht sehr schöne Bilder. Manchmal gehe ich auch in die Stadt und fotografiere alte Gebäude. Meine Freunde sagen, meine Fotos sind sehr gut. Ich möchte eine Ausstellung machen.",
      questions: [
        { question: "Peter ist 30 Jahre alt.", answer: true },
        { question: "Peter geht jeden Samstag in den Park.", answer: false },
        { question: "Peter möchte eine Ausstellung machen.", answer: true },
      ],
    },
    {
      id: 6,
      title: "Das Wetter",
      level: "A1",
      topic: "Wetter",
      description: "Weather in different seasons",
      text: "In Deutschland gibt es vier Jahreszeiten. Im Frühling ist es warm und die Blumen blühen. Ich gehe gern spazieren. Im Sommer ist es heiß und sonnig. Viele Menschen fahren in den Urlaub oder gehen schwimmen. Im Herbst ist es kühl und es regnet oft. Die Blätter sind bunt: gelb, rot und orange. Im Winter ist es kalt und es schneit manchmal. Dann können wir Ski fahren oder einen Schneemann bauen.",
      questions: [
        { question: "Im Sommer ist es kalt.", answer: false },
        { question: "Im Herbst regnet es oft.", answer: true },
        { question: "Im Winter kann man Ski fahren.", answer: true },
      ],
    },
    {
      id: 7,
      title: "Meine Wohnung",
      level: "A1",
      topic: "Wohnen",
      description: "Description of an apartment",
      text: "Ich wohne in einer kleinen Wohnung in München. Die Wohnung hat drei Zimmer: ein Schlafzimmer, ein Wohnzimmer und eine Küche. Das Badezimmer ist klein aber modern. Im Wohnzimmer steht ein großes Sofa und ein Fernseher. Die Küche ist hell und hat einen großen Kühlschrank. Mein Schlafzimmer ist gemütlich. Ich habe ein Bett, einen Schrank und einen Schreibtisch. Die Miete kostet 800 Euro pro Monat.",
      questions: [
        { question: "Die Wohnung hat vier Zimmer.", answer: false },
        { question: "Im Wohnzimmer steht ein Fernseher.", answer: true },
        { question: "Die Miete kostet 800 Euro.", answer: true },
      ],
    },
    {
      id: 8,
      title: "Am Wochenende",
      level: "A1",
      topic: "Freizeit",
      description: "Weekend activities",
      text: "Am Wochenende schlafe ich lange. Am Samstagmorgen stehe ich um 10 Uhr auf. Ich frühstücke gemütlich und lese die Zeitung. Nachmittags treffe ich meine Freunde im Café. Wir trinken Kaffee und reden viel. Am Abend gehen wir ins Kino. Am Sonntag besuche ich meine Eltern. Wir essen zusammen Mittagessen und spielen Karten. Das Wochenende ist immer zu kurz!",
      questions: [
        { question: "Am Samstag stehe ich um 8 Uhr auf.", answer: false },
        { question: "Ich treffe meine Freunde im Café.", answer: true },
        { question: "Am Sonntag besuche ich meine Eltern.", answer: true },
      ],
    },
  ];

export default readingExercises;