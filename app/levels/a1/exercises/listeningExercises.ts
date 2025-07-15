interface ListeningExercise {
  id: number;
    title: string;
    level: string;
    topic: string;
    description: string;
    audioUrl: string;
    transcript: string;
    questions: {
      question: string;
      answer: boolean;
    }[];
}

const listeningExercises: ListeningExercise[] = [
    {
      id: 1,
      title: "Sich vorstellen",
      level: "A1",
      topic: "Persönliche Informationen",
      description: "Listen to someone introducing themselves",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Hallo! Mein Name ist Sarah. Ich bin 28 Jahre alt und komme aus Hamburg. Ich arbeite als Lehrerin in einer Grundschule. In meiner Freizeit lese ich gern Bücher und gehe schwimmen. Ich wohne mit meinem Mann und unserer Katze in einer kleinen Wohnung in der Stadtmitte.",
      questions: [
        { question: "Sarah ist 28 Jahre alt.", answer: true },
        { question: "Sarah arbeitet in einem Büro.", answer: false },
        { question: "Sarah wohnt mit ihrem Mann zusammen.", answer: true },
      ],
    },
    {
      id: 2,
      title: "Im Supermarkt",
      level: "A1",
      topic: "Einkaufen",
      description: "A conversation at the supermarket",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Verkäufer: Guten Tag! Kann ich Ihnen helfen? Kunde: Ja, bitte. Wo finde ich die Milch? Verkäufer: Die Milch ist im Kühlregal, dort hinten links. Kunde: Danke. Und haben Sie auch frisches Brot? Verkäufer: Ja, das Brot ist in der Bäckerei-Abteilung, gleich hier vorne. Kunde: Perfekt. Vielen Dank für Ihre Hilfe!",
      questions: [
        { question: "Der Kunde sucht Milch.", answer: true },
        { question: "Die Milch ist im Kühlregal rechts.", answer: false },
        { question: "Das Brot ist in der Bäckerei-Abteilung.", answer: true },
      ],
    },
    {
      id: 3,
      title: "Wettervorhersage",
      level: "A1",
      topic: "Wetter",
      description: "Listen to a simple weather forecast",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Guten Morgen! Hier ist die Wettervorhersage für heute. Am Vormittag ist es bewölkt mit Temperaturen um 15 Grad. Am Nachmittag scheint die Sonne und es wird wärmer, bis zu 22 Grad. Am Abend kann es regnen. Vergessen Sie nicht Ihren Regenschirm! Morgen wird es wieder sonnig.",
      questions: [
        { question: "Am Vormittag scheint die Sonne.", answer: false },
        {
          question: "Am Nachmittag wird es bis zu 22 Grad warm.",
          answer: true,
        },
        { question: "Morgen regnet es.", answer: false },
      ],
    },
    {
      id: 4,
      title: "Am Telefon",
      level: "A1",
      topic: "Kommunikation",
      description: "A simple phone conversation",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Anna: Hallo, hier ist Anna. Lisa: Hi Anna! Hier ist Lisa. Wie geht es dir? Anna: Danke, gut! Hast du heute Abend Zeit? Lisa: Ja, warum? Anna: Möchtest du ins Kino gehen? Der neue Film läuft um 20 Uhr. Lisa: Das ist eine gute Idee! Wo treffen wir uns? Anna: Am Kino, um 19:45 Uhr. Lisa: Perfekt! Bis später!",
      questions: [
        { question: "Anna ruft Lisa an.", answer: true },
        { question: "Der Film beginnt um 19:45 Uhr.", answer: false },
        { question: "Sie treffen sich am Kino.", answer: true },
      ],
    },
    {
      id: 5,
      title: "Im Restaurant bestellen",
      level: "A1",
      topic: "Essen & Trinken",
      description: "Ordering food at a restaurant",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Kellner: Guten Abend! Was möchten Sie trinken? Gast: Ein Wasser, bitte. Kellner: Und zum Essen? Gast: Ich hätte gern die Pasta mit Tomatensauce. Kellner: Möchten Sie auch einen Salat dazu? Gast: Ja, einen kleinen grünen Salat, bitte. Kellner: Sehr gerne. Das dauert etwa 15 Minuten.",
      questions: [
        { question: "Der Gast bestellt ein Bier.", answer: false },
        { question: "Der Gast möchte Pasta mit Tomatensauce.", answer: true },
        { question: "Das Essen dauert 20 Minuten.", answer: false },
      ],
    },
    {
      id: 6,
      title: "Nach dem Weg fragen",
      level: "A1",
      topic: "Orientierung",
      description: "Asking for directions in the city",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Tourist: Entschuldigung, wo ist der Bahnhof? Passant: Der Bahnhof? Gehen Sie hier geradeaus bis zur Ampel. Dann links in die Hauptstraße. Der Bahnhof ist auf der rechten Seite. Tourist: Wie weit ist das? Passant: Etwa 10 Minuten zu Fuß. Tourist: Vielen Dank! Passant: Gern geschehen!",
      questions: [
        { question: "Der Tourist sucht den Bahnhof.", answer: true },
        { question: "An der Ampel muss man rechts gehen.", answer: false },
        { question: "Der Weg dauert etwa 10 Minuten.", answer: true },
      ],
    },
    {
      id: 7,
      title: "Tagesablauf",
      level: "A1",
      topic: "Alltag",
      description: "Someone describing their daily routine",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Ich stehe jeden Tag um 7 Uhr auf. Zuerst dusche ich und frühstücke. Um 8 Uhr fahre ich mit dem Bus zur Arbeit. Ich arbeite von 9 bis 17 Uhr im Büro. In der Mittagspause gehe ich mit Kollegen essen. Nach der Arbeit kaufe ich im Supermarkt ein. Abends koche ich und sehe fern. Um 23 Uhr gehe ich ins Bett.",
      questions: [
        { question: "Die Person steht um 8 Uhr auf.", answer: false },
        { question: "Sie fährt mit dem Bus zur Arbeit.", answer: true },
        { question: "Sie geht um 23 Uhr ins Bett.", answer: true },
      ],
    },
    {
      id: 8,
      title: "Beim Arzt",
      level: "A1",
      topic: "Gesundheit",
      description: "A visit to the doctor",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Arzt: Guten Tag! Was kann ich für Sie tun? Patient: Ich habe Kopfschmerzen und bin müde. Arzt: Seit wann haben Sie diese Beschwerden? Patient: Seit drei Tagen. Arzt: Haben Sie Fieber? Patient: Nein, kein Fieber. Arzt: Ich verschreibe Ihnen Tabletten. Nehmen Sie zwei pro Tag und trinken Sie viel Wasser.",
      questions: [
        { question: "Der Patient hat Bauchschmerzen.", answer: false },
        { question: "Die Beschwerden dauern seit drei Tagen.", answer: true },
        { question: "Der Patient hat Fieber.", answer: false },
      ],
    },
    {
      id: 9,
      title: "Im Supermarkt nach Brot fragen",
      level: "A1",
      topic: "Einkaufen",
      description: "Asking where to find bread at the supermarket",
      audioUrl: "/placeholder-audio.mp3",
      transcript:
        "Kunde: Entschuldigung, können Sie mir sagen, wo das Brot ist?\nMitarbeiter: Ja, das Brot finden Sie in Gang 4, gleich neben den Backwaren.\nKunde: Vielen Dank!\nMitarbeiter: Gern geschehen, und viel Spaß beim Einkaufen!",
      questions: [
        { question: "Das Brot ist in Gang 2.", answer: false },
        { question: "Das Brot ist in Gang 4.", answer: true },
        { question: "Das Brot ist in Gang 7.", answer: false },
      ],
    },
  ];
