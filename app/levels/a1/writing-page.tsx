import { useState } from "react";
import {
  ArrowLeft,
  PenTool,
  CheckCircle,
  XCircle,
  RotateCcw,
  Info,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";

interface WritingPageProps {
  onBack?: () => void;
}

interface WritingExercise {
  id: number;
  title: string;
  level: string;
  topic: string;
  description: string;
  type: "form" | "email"; // Add type field
  formFields?: {
    label: string;
    type: "text" | "textarea";
    prefilled?: string;
    isBlank: boolean;
    correctAnswer?: string;
    placeholder?: string;
  }[];
  referenceInfo?: {
    title: string;
    content: string | { [key: string]: string };
  };
  // New fields for email exercises
  emailPrompt?: string;
  emailInstructions?: string[];
  requiredElements?: string[];
  sampleEmail?: string;
}

export default function WritingPage({ onBack }: WritingPageProps) {
  const [selectedExercise, setSelectedExercise] =
    useState<WritingExercise | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const [emailText, setEmailText] = useState("");
  const [grammarFeedback, setGrammarFeedback] = useState<string[]>([]);
  const [instructionFeedback, setInstructionFeedback] = useState<
    { element: string; found: boolean; feedback: string }[]
  >([]);

  const writingExercises: WritingExercise[] = [
    {
      id: 1,
      title: "Personalausweis Antrag",
      level: "A1",
      topic: "Persönliche Daten",
      description: "Fill out a personal ID application form",
      type: "form",
      formFields: [
        { label: "Vorname", type: "text", prefilled: "Maria", isBlank: false },
        {
          label: "Nachname",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Schmidt",
          placeholder: "Familienname",
        },
        {
          label: "Geburtsdatum",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "15.03.1990",
          placeholder: "TT.MM.JJJJ",
        },
        {
          label: "Geburtsort",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Hamburg",
          placeholder: "Stadt",
        },
        {
          label: "Staatsangehörigkeit",
          type: "text",
          prefilled: "deutsch",
          isBlank: false,
        },
        {
          label: "Adresse",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Hauptstraße 25",
          placeholder: "Straße und Hausnummer",
        },
        {
          label: "Postleitzahl",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "20095",
          placeholder: "PLZ",
        },
        {
          label: "Stadt",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Hamburg",
          placeholder: "Wohnort",
        },
        {
          label: "Telefonnummer",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "040-123456",
          placeholder: "Telefon",
        },
      ],
      referenceInfo: {
        title: "Persönliche Informationen",
        content: {
          "Vollständiger Name": "Maria Schmidt",
          Geboren: "15. März 1990 in Hamburg",
          Wohnort: "Hauptstraße 25, 20095 Hamburg",
          Kontakt: "Telefon: 040-123456",
          Nationalität: "Deutsche Staatsbürgerin",
        },
      },
    },
    {
      id: 2,
      title: "Hotelreservierung",
      level: "A1",
      topic: "Reisen",
      description: "Complete a hotel reservation form",
      type: "form",
      formFields: [
        {
          label: "Name des Gastes",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Thomas Müller",
          placeholder: "Vor- und Nachname",
        },
        {
          label: "Anreisedatum",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "12.07.2024",
          placeholder: "TT.MM.JJJJ",
        },
        {
          label: "Abreisedatum",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "15.07.2024",
          placeholder: "TT.MM.JJJJ",
        },
        {
          label: "Anzahl Personen",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "2",
          placeholder: "Anzahl",
        },
        {
          label: "Zimmertyp",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Doppelzimmer",
          placeholder: "Art des Zimmers",
        },
        {
          label: "E-Mail",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "thomas.mueller@email.de",
          placeholder: "E-Mail Adresse",
        },
        {
          label: "Besondere Wünsche",
          type: "textarea",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Zimmer mit Meerblick, späte Anreise um 22 Uhr",
          placeholder: "Zusätzliche Informationen",
        },
      ],
      referenceInfo: {
        title: "Reservierungsdetails",
        content: {
          Gast: "Thomas Müller",
          Aufenthalt: "3 Nächte vom 12. bis 15. Juli 2024",
          Reisende: "2 Personen (Ehepaar)",
          "Gewünschtes Zimmer": "Doppelzimmer mit Meerblick",
          Kontakt: "thomas.mueller@email.de",
          Ankunftszeit: "Späte Anreise um 22:00 Uhr geplant",
        },
      },
    },
    {
      id: 3,
      title: "Bewerbungsformular",
      level: "A1",
      topic: "Arbeit",
      description: "Fill out a job application form",
      type: "form",
      formFields: [
        {
          label: "Vor- und Nachname",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Anna Weber",
          placeholder: "Vollständiger Name",
        },
        {
          label: "Alter",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "28",
          placeholder: "Jahre",
        },
        {
          label: "Beruf",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Krankenschwester",
          placeholder: "Aktueller Beruf",
        },
        {
          label: "Berufserfahrung",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "5 Jahre",
          placeholder: "Jahre Erfahrung",
        },
        {
          label: "Sprachen",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Deutsch, Englisch, Spanisch",
          placeholder: "Gesprochene Sprachen",
        },
        {
          label: "Verfügbarkeit",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "sofort",
          placeholder: "Ab wann verfügbar",
        },
        {
          label: "Motivation",
          type: "textarea",
          prefilled: "",
          isBlank: true,
          correctAnswer:
            "Ich möchte in einem internationalen Team arbeiten und meine Sprachkenntnisse nutzen.",
          placeholder: "Warum möchten Sie hier arbeiten?",
        },
      ],
      referenceInfo: {
        title: "Bewerberin: Anna Weber",
        content: {
          "Persönliche Daten": "Anna Weber, 28 Jahre alt",
          Qualifikation:
            "Ausgebildete Krankenschwester mit 5 Jahren Berufserfahrung",
          Sprachkenntnisse: "Fließend in Deutsch, Englisch und Spanisch",
          Verfügbarkeit: "Kann sofort anfangen",
          Motivation:
            "Möchte in einem internationalen Team arbeiten und ihre Mehrsprachigkeit einsetzen",
        },
      },
    },
    {
      id: 4,
      title: "Arzttermin Anmeldung",
      level: "A1",
      topic: "Gesundheit",
      description: "Complete a medical appointment registration",
      type: "form",
      formFields: [
        {
          label: "Patient Name",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Klaus Hoffmann",
          placeholder: "Vor- und Nachname",
        },
        {
          label: "Geburtsdatum",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "22.11.1975",
          placeholder: "TT.MM.JJJJ",
        },
        {
          label: "Versicherung",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "AOK",
          placeholder: "Krankenkasse",
        },
        {
          label: "Grund des Besuchs",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Kopfschmerzen",
          placeholder: "Beschwerden",
        },
        {
          label: "Gewünschter Termin",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Donnerstag Nachmittag",
          placeholder: "Wann?",
        },
        {
          label: "Telefonnummer",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "030-987654",
          placeholder: "Kontakt",
        },
        {
          label: "Medikamente",
          type: "textarea",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Nehme täglich Blutdrucktabletten",
          placeholder: "Aktuelle Medikamente",
        },
      ],
      referenceInfo: {
        title: "Patienteninformationen",
        content: {
          Patient: "Klaus Hoffmann, geboren am 22. November 1975",
          Krankenversicherung: "AOK (gesetzlich versichert)",
          "Aktuelle Beschwerden": "Starke Kopfschmerzen seit 3 Tagen",
          Terminwunsch: "Donnerstag Nachmittag wäre ideal",
          Erreichbarkeit: "Telefon: 030-987654",
          Medikation: "Nimmt täglich Tabletten gegen Bluthochdruck",
        },
      },
    },
    {
      id: 5,
      title: "Bankkonto Eröffnung",
      level: "A1",
      topic: "Finanzen",
      description: "Open a new bank account",
      type: "form",
      formFields: [
        {
          label: "Kontoinhaber",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Sarah Fischer",
          placeholder: "Vollständiger Name",
        },
        {
          label: "Geburtsdatum",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "08.09.1992",
          placeholder: "TT.MM.JJJJ",
        },
        {
          label: "Beruf",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Lehrerin",
          placeholder: "Tätigkeit",
        },
        {
          label: "Monatliches Einkommen",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "3200 Euro",
          placeholder: "Betrag",
        },
        {
          label: "Kontotyp",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Girokonto",
          placeholder: "Art des Kontos",
        },
        {
          label: "Adresse",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Berliner Straße 15, 10115 Berlin",
          placeholder: "Vollständige Adresse",
        },
        {
          label: "Verwendungszweck",
          type: "textarea",
          prefilled: "",
          isBlank: true,
          correctAnswer:
            "Gehaltskonto für regelmäßige Einkünfte und tägliche Ausgaben",
          placeholder: "Wofür wird das Konto verwendet?",
        },
      ],
      referenceInfo: {
        title: "Kontoeröffnung für Sarah Fischer",
        content: {
          Antragstellerin: "Sarah Fischer, geboren am 8. September 1992",
          Berufstätigkeit: "Arbeitet als Lehrerin an einer Grundschule",
          Einkommen: "Verdient 3.200 Euro monatlich",
          Wohnort: "Berliner Straße 15, 10115 Berlin",
          Kontowunsch: "Benötigt ein Girokonto für Gehaltseingang",
          Verwendung: "Für regelmäßige Einkünfte und alltägliche Ausgaben",
        },
      },
    },
    {
      id: 6,
      title: "Sprachkurs Anmeldung",
      level: "A1",
      topic: "Bildung",
      description: "Register for a German language course",
      type: "form",
      formFields: [
        {
          label: "Teilnehmer Name",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Miguel Rodriguez",
          placeholder: "Vor- und Nachname",
        },
        {
          label: "Herkunftsland",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Spanien",
          placeholder: "Land",
        },
        {
          label: "Muttersprache",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Spanisch",
          placeholder: "Erste Sprache",
        },
        {
          label: "Deutschkenntnisse",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Anfänger",
          placeholder: "Niveau",
        },
        {
          label: "Gewünschter Kurs",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Deutsch A1 Intensivkurs",
          placeholder: "Kursart",
        },
        {
          label: "Kurszeiten",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Montag bis Freitag, 9-12 Uhr",
          placeholder: "Wann?",
        },
        {
          label: "Lernziele",
          type: "textarea",
          prefilled: "",
          isBlank: true,
          correctAnswer:
            "Möchte Deutsch für den Beruf lernen und sich im Alltag verständigen können",
          placeholder: "Warum lernen Sie Deutsch?",
        },
      ],
      referenceInfo: {
        title: "Kursanmeldung Details",
        content: {
          Student: "Miguel Rodriguez aus Spanien",
          "Sprachlicher Hintergrund":
            "Muttersprache Spanisch, keine Deutschkenntnisse",
          Kurswunsch: "Intensiver A1-Deutschkurs für Anfänger",
          Zeitpräferenz: "Vormittags von Montag bis Freitag (9:00-12:00 Uhr)",
          Motivation: "Braucht Deutsch für berufliche Zwecke",
          Ziel: "Alltägliche Kommunikation auf Deutsch meistern",
        },
      },
    },
    {
      id: 7,
      title: "Mietvertrag Informationen",
      level: "A1",
      topic: "Wohnen",
      description: "Fill out rental agreement information",
      type: "form",
      formFields: [
        {
          label: "Mieter Name",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Lisa Chen",
          placeholder: "Vollständiger Name",
        },
        {
          label: "Beruf",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Studentin",
          placeholder: "Tätigkeit",
        },
        {
          label: "Monatliches Einkommen",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "800 Euro",
          placeholder: "Betrag",
        },
        {
          label: "Gewünschte Wohnung",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "1-Zimmer Apartment",
          placeholder: "Wohnungstyp",
        },
        {
          label: "Maximale Miete",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "600 Euro",
          placeholder: "Budget",
        },
        {
          label: "Einzugsdatum",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "01.09.2024",
          placeholder: "TT.MM.JJJJ",
        },
        {
          label: "Besondere Anforderungen",
          type: "textarea",
          prefilled: "",
          isBlank: true,
          correctAnswer:
            "Möbliert, in der Nähe der Universität, mit Internetanschluss",
          placeholder: "Was ist wichtig?",
        },
      ],
      referenceInfo: {
        title: "Wohnungssuche - Lisa Chen",
        content: {
          Mietinteressentin: "Lisa Chen, 22 Jahre alt",
          Status: "Studentin an der Technischen Universität",
          "Finanzielle Situation":
            "Monatliches Budget: 800 Euro (BAföG + Nebenjob)",
          Wohnungswunsch: "Kleines 1-Zimmer Apartment für maximal 600 Euro",
          Zeitplan: "Benötigt Wohnung ab 1. September 2024",
          Anforderungen: "Möbliert, universitätsnah, mit Internet",
        },
      },
    },
    {
      id: 8,
      title: "Vereinsmitgliedschaft",
      level: "A1",
      topic: "Freizeit",
      description: "Join a sports club membership form",
      type: "form",
      formFields: [
        {
          label: "Mitglied Name",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "David Braun",
          placeholder: "Vor- und Nachname",
        },
        {
          label: "Alter",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "35",
          placeholder: "Jahre",
        },
        {
          label: "Gewünschte Sportart",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Tennis",
          placeholder: "Sport",
        },
        {
          label: "Erfahrung",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "10 Jahre",
          placeholder: "Wie lange?",
        },
        {
          label: "Trainingszeiten",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Dienstag und Donnerstag Abend",
          placeholder: "Wann?",
        },
        {
          label: "Mitgliedschaftstyp",
          type: "text",
          prefilled: "",
          isBlank: true,
          correctAnswer: "Vollmitgliedschaft",
          placeholder: "Art der Mitgliedschaft",
        },
        {
          label: "Motivation",
          type: "textarea",
          prefilled: "",
          isBlank: true,
          correctAnswer:
            "Möchte wieder regelmäßig Tennis spielen und neue Leute kennenlernen",
          placeholder: "Warum möchten Sie Mitglied werden?",
        },
      ],
      referenceInfo: {
        title: "Vereinsbeitritt - David Braun",
        content: {
          Interessent: "David Braun, 35 Jahre alt",
          "Sportliche Erfahrung": "Hat 10 Jahre lang Tennis gespielt",
          Verfügbarkeit: "Kann Dienstag und Donnerstag abends trainieren",
          Mitgliedschaftswunsch: "Vollmitgliedschaft mit allen Vorteilen",
          Ziele: "Regelmäßiges Training und soziale Kontakte",
          Motivation: "Möchte nach längerer Pause wieder aktiv werden",
        },
      },
    },
    {
      id: 9,
      title: "Geburtstagseinladung E-Mail",
      level: "A1",
      topic: "Kommunikation",
      description: "Write an email inviting someone to a birthday party",
      type: "email",
      emailPrompt:
        "Schreiben Sie eine E-Mail an Ihren Freund Max. Laden Sie ihn zu Ihrer Geburtstagsparty ein.",
      emailInstructions: [
        "Verwenden Sie eine höfliche Begrüßung (z.B. 'Lieber Max')",
        "Erklären Sie, dass Sie Geburtstag haben",
        "Laden Sie Max zu Ihrer Party ein",
        "Geben Sie Datum und Uhrzeit an (Samstag, 15. Juni, 19:00 Uhr)",
        "Geben Sie den Ort an (Ihr Zuhause, Hauptstraße 25)",
        "Fragen Sie, ob er kommen kann",
        "Verwenden Sie einen freundlichen Abschluss (z.B. 'Viele Grüße')",
        "Vergessen Sie nicht Ihren Namen",
      ],
      requiredElements: [
        "greeting", // Begrüßung
        "birthday_mention", // Geburtstag erwähnen
        "invitation", // Einladung
        "date", // Datum
        "time", // Uhrzeit
        "location", // Ort
        "question", // Frage ob er kommen kann
        "closing", // Abschluss
        "name", // Name
      ],
      sampleEmail: `Lieber Max,

ich hoffe, es geht dir gut! Ich schreibe dir, weil ich bald Geburtstag habe.

Ich möchte dich herzlich zu meiner Geburtstagsparty einladen. Die Party ist am Samstag, den 15. Juni, um 19:00 Uhr. Wir feiern bei mir zu Hause in der Hauptstraße 25.

Es wird Essen, Musik und gute Stimmung geben. Kannst du kommen? Ich würde mich sehr freuen!

Bitte sag mir Bescheid, ob du Zeit hast.

Viele Grüße
Anna`,
    },
  ];

  const openModal = (exercise: WritingExercise) => {
    setSelectedExercise(exercise);
    setUserAnswers({});
    setEmailText("");
    setGrammarFeedback([]);
    setInstructionFeedback([]);
    setShowResults(false);
  };

  const closeModal = () => {
    setSelectedExercise(null);
    setUserAnswers({});
    setShowResults(false);
  };

  const handleInputChange = (fieldIndex: number, value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [fieldIndex]: value,
    }));
  };

  const checkGrammar = (text: string): string[] => {
    const feedback: string[] = [];
    const lowerText = text.toLowerCase();

    // Check for common A1 grammar patterns
    if (
      !lowerText.includes("lieber") &&
      !lowerText.includes("liebe") &&
      !lowerText.includes("hallo")
    ) {
      feedback.push(
        "Verwenden Sie eine höfliche Begrüßung wie 'Lieber Max' oder 'Hallo Max'"
      );
    }

    if (
      !lowerText.includes("viele grüße") &&
      !lowerText.includes("bis bald") &&
      !lowerText.includes("tschüss")
    ) {
      feedback.push(
        "Vergessen Sie nicht einen freundlichen Abschluss wie 'Viele Grüße'"
      );
    }

    // Check for capitalization of nouns (basic check)
    const words = text.split(" ");
    const shouldBeCapitalized = [
      "geburtstag",
      "party",
      "samstag",
      "juni",
      "hauptstraße",
    ];
    shouldBeCapitalized.forEach((word) => {
      if (
        lowerText.includes(word) &&
        !text.includes(word.charAt(0).toUpperCase() + word.slice(1))
      ) {
        feedback.push(
          `"${
            word.charAt(0).toUpperCase() + word.slice(1)
          }" sollte großgeschrieben werden (Nomen)`
        );
      }
    });

    // Check for verb conjugation
    if (lowerText.includes("ich haben") || lowerText.includes("ich sind")) {
      feedback.push(
        "Achten Sie auf die Verbkonjugation: 'ich habe' oder 'ich bin'"
      );
    }

    if (lowerText.includes("du haben") || lowerText.includes("du sind")) {
      feedback.push(
        "Achten Sie auf die Verbkonjugation: 'du hast' oder 'du bist'"
      );
    }

    return feedback;
  };

  const checkInstructions = (
    text: string,
    requiredElements: string[]
  ): { element: string; found: boolean; feedback: string }[] => {
    const lowerText = text.toLowerCase();
    const results: { element: string; found: boolean; feedback: string }[] = [];

    const checks = {
      greeting: {
        found:
          lowerText.includes("lieber") ||
          lowerText.includes("liebe") ||
          lowerText.includes("hallo"),
        feedback:
          lowerText.includes("lieber") ||
          lowerText.includes("liebe") ||
          lowerText.includes("hallo")
            ? "✓ Begrüßung gefunden"
            : "✗ Begrüßung fehlt (z.B. 'Lieber Max')",
      },
      birthday_mention: {
        found: lowerText.includes("geburtstag"),
        feedback: lowerText.includes("geburtstag")
          ? "✓ Geburtstag erwähnt"
          : "✗ Erwähnen Sie, dass Sie Geburtstag haben",
      },
      invitation: {
        found:
          lowerText.includes("einlad") ||
          lowerText.includes("party") ||
          lowerText.includes("feier"),
        feedback:
          lowerText.includes("einlad") ||
          lowerText.includes("party") ||
          lowerText.includes("feier")
            ? "✓ Einladung ausgesprochen"
            : "✗ Laden Sie Max zur Party ein",
      },
      date: {
        found:
          lowerText.includes("samstag") ||
          lowerText.includes("15") ||
          lowerText.includes("juni"),
        feedback:
          lowerText.includes("samstag") ||
          lowerText.includes("15") ||
          lowerText.includes("juni")
            ? "✓ Datum angegeben"
            : "✗ Geben Sie das Datum an (Samstag, 15. Juni)",
      },
      time: {
        found: lowerText.includes("19") || lowerText.includes("uhr"),
        feedback:
          lowerText.includes("19") || lowerText.includes("uhr")
            ? "✓ Uhrzeit angegeben"
            : "✗ Geben Sie die Uhrzeit an (19:00 Uhr)",
      },
      location: {
        found:
          lowerText.includes("hauptstraße") ||
          lowerText.includes("zuhause") ||
          lowerText.includes("bei mir"),
        feedback:
          lowerText.includes("hauptstraße") ||
          lowerText.includes("zuhause") ||
          lowerText.includes("bei mir")
            ? "✓ Ort angegeben"
            : "✗ Geben Sie den Ort an (Hauptstraße 25 oder 'bei mir zuhause')",
      },
      question: {
        found:
          lowerText.includes("kannst du") ||
          lowerText.includes("kommst du") ||
          lowerText.includes("?"),
        feedback:
          lowerText.includes("kannst du") ||
          lowerText.includes("kommst du") ||
          lowerText.includes("?")
            ? "✓ Frage gestellt"
            : "✗ Fragen Sie, ob Max kommen kann",
      },
      closing: {
        found:
          lowerText.includes("viele grüße") ||
          lowerText.includes("bis bald") ||
          lowerText.includes("tschüss"),
        feedback:
          lowerText.includes("viele grüße") ||
          lowerText.includes("bis bald") ||
          lowerText.includes("tschüss")
            ? "✓ Abschluss vorhanden"
            : "✗ Verwenden Sie einen freundlichen Abschluss",
      },
      name: {
        found: text
          .split("\n")
          .some(
            (line) =>
              line.trim().length > 0 &&
              line.trim().length < 20 &&
              !line.includes(" ") &&
              line.trim() !== ""
          ),
        feedback: text
          .split("\n")
          .some(
            (line) =>
              line.trim().length > 0 &&
              line.trim().length < 20 &&
              !line.includes(" ") &&
              line.trim() !== ""
          )
          ? "✓ Name am Ende"
          : "✗ Vergessen Sie nicht Ihren Namen am Ende",
      },
    };

    requiredElements.forEach((element) => {
      if (checks[element as keyof typeof checks]) {
        const check = checks[element as keyof typeof checks];
        results.push({
          element,
          found: check.found,
          feedback: check.feedback,
        });
      }
    });

    return results;
  };

  const checkAnswers = () => {
    if (selectedExercise?.type === "email") {
      const grammar = checkGrammar(emailText);
      const instructions = checkInstructions(
        emailText,
        selectedExercise.requiredElements || []
      );
      setGrammarFeedback(grammar);
      setInstructionFeedback(instructions);
    }
    setShowResults(true);
  };

  const resetForm = () => {
    setUserAnswers({});
    setEmailText("");
    setGrammarFeedback([]);
    setInstructionFeedback([]);
    setShowResults(false);
  };

  // const getTopicColor = (topic: string) => {
  //   const colors: { [key: string]: string } = {
  //     "Persönliche Daten": "bg-blue-50 text-blue-700 border border-blue-200",
  //     Reisen: "bg-green-50 text-green-700 border border-green-200",
  //     Arbeit: "bg-purple-50 text-purple-700 border border-purple-200",
  //     Gesundheit: "bg-red-50 text-red-700 border border-red-200",
  //     Finanzen: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  //     Bildung: "bg-indigo-50 text-indigo-700 border border-indigo-200",
  //     Wohnen: "bg-cyan-50 text-cyan-700 border border-cyan-200",
  //     Freizeit: "bg-pink-50 text-pink-700 border border-pink-200",
  //     Kommunikation: "bg-teal-50 text-teal-700 border border-teal-200",
  //   };
  //   return (
  //     colors[topic] || "bg-slate-50 text-slate-700 border border-slate-200"
  //   );
  // };

  const getCorrectAnswers = () => {
    if (!selectedExercise || !selectedExercise.formFields) return 0;
    const blankFields = selectedExercise.formFields.filter(
      (field) => field.isBlank
    );
    return blankFields.filter((field, index) => {
      const fieldIndex = selectedExercise.formFields!.findIndex(
        (f) => f === field
      );
      const userAnswer = userAnswers[fieldIndex]?.trim().toLowerCase();
      const correctAnswer = field.correctAnswer?.trim().toLowerCase();
      return userAnswer === correctAnswer;
    }).length;
  };

  const getTotalBlanks = () => {
    if (!selectedExercise) return 0;
    return (
      selectedExercise.formFields?.filter((field) => field.isBlank).length ?? 0
    );
  };
  const getTopicColor = () =>
    "border-2 border-black bg-[#facc15] text-black uppercase";

  // Neobrutalist card style
  const cardClass =
    "cursor-pointer border-2 border-black bg-[#fff] hover:bg-[#fde047] transition-all duration-200 shadow-none hover:shadow-[4px_4px_0_0_black] hover:-translate-x-1 hover:-translate-y-1";

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            className="mb-6 bg-white text-black border-2 border-black rounded-none px-4 py-2 font-bold hover:bg-black hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to German A1
          </Button>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 border-2 border-black bg-[#fef9c3] rounded-none">
                <PenTool className="h-8 w-8 text-black" />
              </div>
              <h1 className="text-4xl font-extrabold text-black uppercase">
                German Writing Practice
              </h1>
            </div>
            <p className="text-lg text-black font-medium max-w-3xl mx-auto">
              Practice German writing skills by completing forms and documents
              with the help of reference information.
            </p>
          </div>
        </div>
        {/* Writing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {writingExercises.map((exercise) => (
            <Card
              key={exercise.id}
              className={cardClass}
              onClick={() => openModal(exercise)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="border-2 border-black text-black bg-white uppercase">
                    {exercise.level}
                  </Badge>
                  <Badge className={getTopicColor()}>{exercise.topic}</Badge>
                </div>
                <CardTitle className="text-xl font-extrabold text-black">
                  {exercise.title}
                </CardTitle>
                <CardDescription className="text-black text-base">
                  {exercise.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-black font-medium">
                  <PenTool className="h-4 w-4" />
                  <span>
                    {exercise.type === "form"
                      ? "Fill-in-the-blank • Form completion"
                      : "Write an Email"}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Modal/Dialog */}
        <Dialog open={!!selectedExercise} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-2 border-black rounded-none">
            {selectedExercise && (
              <div className="p-6 space-y-6">
                {/* Header */}
                <DialogHeader className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="border-2 border-black bg-white text-black uppercase">
                      {selectedExercise.level}
                    </Badge>
                    <Badge className={getTopicColor()}>
                      {selectedExercise.topic}
                    </Badge>
                  </div>
                  <DialogTitle className="text-3xl font-extrabold text-black">
                    {selectedExercise.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-black">
                    {selectedExercise.description}
                  </DialogDescription>
                </DialogHeader>
                {/* Form or Email */}
                {selectedExercise.type === "form" ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Form */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-black uppercase flex items-center gap-2">
                        <PenTool className="h-5 w-5" />
                        Formular ausfüllen
                      </h3>
                      <div className="space-y-4">
                        {selectedExercise.formFields?.map((field, index) => (
                          <div key={index} className="space-y-2">
                            <Label
                              htmlFor={`field-${index}`}
                              className="text-base font-bold text-black"
                            >
                              {field.label}
                            </Label>
                            {field.type === "textarea" ? (
                              <Textarea
                                id={`field-${index}`}
                                value={
                                  field.isBlank
                                    ? userAnswers[index] || ""
                                    : field.prefilled
                                }
                                onChange={(e) =>
                                  field.isBlank &&
                                  handleInputChange(index, e.target.value)
                                }
                                placeholder={field.placeholder}
                                disabled={!field.isBlank || showResults}
                                className={`rounded-none border-2 border-black bg-white text-black font-mono ${
                                  !field.isBlank
                                    ? "bg-[#f1f5f9] text-black"
                                    : showResults
                                    ? userAnswers[index]
                                        ?.trim()
                                        .toLowerCase() ===
                                      field.correctAnswer?.trim().toLowerCase()
                                      ? "bg-green-100 border-green-600"
                                      : "bg-red-100 border-red-600"
                                    : ""
                                }`}
                                rows={3}
                              />
                            ) : (
                              <Input
                                id={`field-${index}`}
                                type="text"
                                value={
                                  field.isBlank
                                    ? userAnswers[index] || ""
                                    : field.prefilled
                                }
                                onChange={(e) =>
                                  field.isBlank &&
                                  handleInputChange(index, e.target.value)
                                }
                                placeholder={field.placeholder}
                                disabled={!field.isBlank || showResults}
                                className={`rounded-none border-2 border-black bg-white text-black font-mono ${
                                  !field.isBlank
                                    ? "bg-[#f1f5f9] text-black"
                                    : showResults
                                    ? userAnswers[index]
                                        ?.trim()
                                        .toLowerCase() ===
                                      field.correctAnswer?.trim().toLowerCase()
                                      ? "bg-green-100 border-green-600"
                                      : "bg-red-100 border-red-600"
                                    : ""
                                }`}
                              />
                            )}
                            {/* Result Badges */}
                            {showResults &&
                              field.isBlank &&
                              (userAnswers[index]?.trim().toLowerCase() ===
                              field.correctAnswer?.trim().toLowerCase() ? (
                                <div className="flex items-center gap-2 text-green-800 font-bold mt-1">
                                  <CheckCircle className="h-4 w-4" />
                                  Correct!
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-red-800 font-bold mt-1">
                                  <XCircle className="h-4 w-4" />
                                  Correct answer: {field.correctAnswer}
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Right: Reference */}
                    <div>
                      <div className="bg-[#fef9c3] border-2 border-black p-5 mb-5">
                        <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                          <Info className="h-5 w-5 text-black" />
                          {selectedExercise.referenceInfo?.title}
                        </h3>
                        {typeof selectedExercise.referenceInfo?.content ===
                        "string" ? (
                          <p className="text-black leading-relaxed">
                            {selectedExercise.referenceInfo.content}
                          </p>
                        ) : (
                          <div className="space-y-2">
                            {selectedExercise.referenceInfo?.content &&
                              Object.entries(
                                selectedExercise.referenceInfo.content
                              ).map(([key, value], i) => (
                                <div
                                  key={i}
                                  className="bg-white border-2 border-black p-3 mb-1"
                                >
                                  <div className="font-bold text-black text-base mb-1">
                                    {key}:
                                  </div>
                                  <div className="text-black font-mono">
                                    {value}
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                      <div className="bg-white border-2 border-black p-4">
                        <h4 className="font-bold text-black mb-2 uppercase">
                          Instructions
                        </h4>
                        <ul className="text-base text-black space-y-1 font-mono">
                          <li>
                            • Use the information on the right to fill in the
                            blank fields
                          </li>
                          <li>• Pre-filled fields cannot be changed</li>
                          <li>
                            • Pay attention to German date format (TT.MM.JJJJ)
                          </li>
                          <li>• Write complete addresses and phone numbers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  // EMAIL
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Email Entry */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-black uppercase flex items-center gap-2">
                        <PenTool className="h-5 w-5" />
                        E-Mail schreiben
                      </h3>
                      <div className="mb-4 p-4 bg-[#fef9c3] border-2 border-black">
                        <p className="text-black font-bold">
                          {selectedExercise.emailPrompt}
                        </p>
                      </div>
                      <Textarea
                        value={emailText}
                        onChange={(e) => setEmailText(e.target.value)}
                        placeholder="Schreiben Sie hier Ihre E-Mail..."
                        disabled={showResults}
                        className="min-h-[200px] rounded-none border-2 border-black bg-white text-black font-mono text-lg"
                      />
                      <div className="mt-2 text-base text-black">
                        Wörter:{" "}
                        {
                          emailText.split(" ").filter((w) => w.length > 0)
                            .length
                        }
                      </div>
                      {/* Results Section */}
                      {showResults && (
                        <div className="space-y-4 mt-6">
                          {/* Instruction Feedback */}
                          <div className="bg-white border-2 border-black p-4">
                            <h4 className="font-bold text-black mb-2 uppercase">
                              Anweisungen befolgt:
                            </h4>
                            <div className="space-y-2">
                              {instructionFeedback.map((item, idx) => (
                                <div
                                  key={idx}
                                  className={`p-3 border-2 font-bold rounded-none ${
                                    item.found
                                      ? "bg-green-100 border-green-600 text-green-800"
                                      : "bg-red-100 border-red-600 text-red-800"
                                  }`}
                                >
                                  {item.feedback}
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 text-base font-bold text-black">
                              Erfüllt:{" "}
                              {
                                instructionFeedback.filter((i) => i.found)
                                  .length
                              }
                              /{instructionFeedback.length} Anforderungen
                            </div>
                          </div>
                          {/* Grammar Feedback */}
                          <div className="bg-white border-2 border-black p-4">
                            <h4 className="font-bold text-black mb-2 uppercase">
                              Grammatik-Feedback:
                            </h4>
                            {grammarFeedback.length === 0 ? (
                              <div className="p-3 bg-green-100 border-2 border-green-600 text-green-800 font-bold">
                                ✓ Keine größeren Grammatikfehler gefunden!
                              </div>
                            ) : (
                              <div className="space-y-2">
                                {grammarFeedback.map((fb, i) => (
                                  <div
                                    key={i}
                                    className="p-3 bg-yellow-100 border-2 border-yellow-500 text-yellow-900 font-bold"
                                  >
                                    {fb}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Right: Instructions and Sample */}
                    <div>
                      <div className="bg-[#fef9c3] border-2 border-black p-5 mb-5">
                        <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                          <Info className="h-5 w-5 text-black" />
                          Anweisungen
                        </h3>
                        <div className="space-y-2">
                          {selectedExercise.emailInstructions?.map(
                            (inst, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-black rounded-none mt-2 flex-shrink-0" />
                                <div className="text-black text-base font-mono">
                                  {inst}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div className="bg-white border-2 border-black p-4">
                        <h4 className="font-bold text-black mb-2 uppercase">
                          Beispiel E-Mail:
                        </h4>
                        <div className="bg-[#fef9c3] border-2 border-black p-3 text-black leading-relaxed whitespace-pre-line font-mono">
                          {selectedExercise.sampleEmail}
                        </div>
                        <div className="mt-2 text-xs text-black font-mono">
                          Dies ist nur ein Beispiel. Schreiben Sie Ihre eigene
                          E-Mail!
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4 border-t-2 border-black">
                  {!showResults ? (
                    <Button
                      onClick={checkAnswers}
                      disabled={
                        selectedExercise.type === "form"
                          ? getTotalBlanks() === 0 ||
                            Object.keys(userAnswers).length === 0
                          : emailText.trim().length < 50
                      }
                      className="bg-black text-white border-2 border-black rounded-none"
                    >
                      Check{" "}
                      {selectedExercise.type === "email" ? "Email" : "Answers"}
                    </Button>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-extrabold text-black">
                        {selectedExercise.type === "form" ? (
                          <>
                            Score: {getCorrectAnswers()}/{getTotalBlanks()}
                          </>
                        ) : (
                          <>
                            Erfüllt:{" "}
                            {instructionFeedback.filter((i) => i.found).length}/
                            {instructionFeedback.length}
                          </>
                        )}
                      </div>
                      <Button
                        onClick={resetForm}
                        className="border-2 border-black text-black bg-white rounded-none"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Try Again
                      </Button>
                    </div>
                  )}
                  <Button
                    onClick={closeModal}
                    className="border-2 border-black text-black bg-white rounded-none"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}


