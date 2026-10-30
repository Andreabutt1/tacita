// Copy for the fake-door landing page (validation plan, Track 3), for owners before a hand-over (segment D).
// Layout and copy follow the Figma file "Tacita Landingpage" (GzbHAa9hXQu7Vci5mI4t2i), Variante A.
// An HR/QM page (Variante B) can reuse this structure later.

interface Stat {
  stat: string;
  text: string;
  source: string;
}

export interface LandingContent {
  title: string;
  pillTag: string;
  pill: string;
  pillShort: string;
  headline: [string, string];
  subline: string;
  emailPlaceholder: string;
  navSecondary: { label: string; href: string };
  heroCards: {
    question: { label: string; text: string; mobileText: string };
    quote: { label: string; text: string; mobileText: string };
    tags: { label: string; tags: string[] };
    status: { label: string; text: string };
  };
  heroProof: string[];
  trades?: string[];
  problem: { title: string; subtitle: string; points: Stat[] };
  video: { pill: string; title: string; text: string; cardLabel: string; cardText: string };
  dossier: { eyebrow: string; title: string; points: string[] };
  memory: { eyebrow: string; title: string; points: string[] };
  founding: {
    pill: string;
    title: string;
    subtitle: string;
    badge: string;
    pricePrefix: string;
    price: string;
    priceUnit: string;
    deposit: string;
  };
  faq: { q: string; a: string }[];
  closing: { title: string; subtitle: string };
}

// Placeholders until the real links exist. Set them in .env.local.
export const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "";
export const DEPOSIT_URL = import.meta.env.VITE_DEPOSIT_URL || "#preise";
export const SAMPLE_DOSSIER_URL = import.meta.env.VITE_SAMPLE_DOSSIER_URL || "#ergebnis";

export const navLinks = [
  { label: "So funktioniert’s", href: "#ablauf" },
  { label: "Ergebnis", href: "#ergebnis" },
  { label: "Für wen", href: "#fuer-wen" },
  { label: "Preise", href: "#preise" },
  { label: "FAQ", href: "#faq" },
];

export const steps = [
  {
    title: "Erstgespräch",
    text: "20 Minuten am Telefon: Wir klären, welches Wissen gesichert werden muss, bis wann, und wer es später braucht.",
  },
  {
    title: "Telefon-Interviews",
    text: "8–15 Anrufe à 15 Minuten, wann es Ihnen passt, auch im Auto. Wir fragen nach echten Fällen, nicht nach Theorie.",
  },
  {
    title: "Dossier & Archiv",
    text: "Sie bekommen ein Übergabe-Dossier und ein durchsuchbares Archiv. Ihre Nachfolge fragt das Archiv statt Sie.",
  },
];

// One offer, one price (see founding). These cards only show the three ways a hand-over happens.
export const handoverCases = [
  {
    eyebrow: "Verkauf",
    title: "Verkauf an Dritte",
    text: "Käufer, Bank und Steuerberatung sehen im Dossier, dass der Betrieb ohne Sie läuft. Das stützt den Preis.",
    focus: "Kunden, Lieferanten, Kalkulation",
  },
  {
    eyebrow: "Familie",
    title: "Übergabe in der Familie",
    text: "Die nächste Generation kennt den Betrieb, aber nicht jede Absprache. Das Archiv ersetzt das ständige Nachfragen.",
    focus: "Absprachen, Eigenheiten, Ansprechpartner",
  },
  {
    eyebrow: "Team",
    title: "Übergabe im Team",
    text: "Wenn der Meister oder die Büroleitung übernimmt, steht alles an einem Ort, was bisher nur über Ihren Schreibtisch lief.",
    focus: "Büro, Behörden, Bank, Verträge",
  },
];

export const trustPoints = [
  {
    icon: "EU",
    title: "EU-Hosting",
    text: "Aufnahmen und Daten bleiben in der EU. Zugriff nur für Personen, die Sie festlegen.",
  },
  {
    icon: "§",
    title: "Transparent nach AI Act",
    text: "Klar gekennzeichnet, keine Emotionserkennung, keine Bewertung von Personen.",
  },
  {
    icon: "✓",
    title: "Betriebsrat-tauglich",
    text: "Vorlage für die Betriebsvereinbarung inklusive. Teilnahme immer freiwillig.",
  },
  {
    icon: "Aa",
    title: "Mehrsprachig",
    text: "Interviews auch auf Türkisch, BKS oder Polnisch. Dokumentiert wird auf Deutsch.",
  },
];

export const foundingIncludes = [
  "Jedes Gespräch auf Ihren Betrieb vorbereitet",
  "Persönliche Begleitung durch das Team",
  "Start der Interviews innerhalb von 2 Wochen",
  "Übergabe-Dossier und Archiv",
  "Hilfe bei der Förderung",
];

const whoInterviews = {
  q: "Wer führt die Interviews?",
  a: "Erfahrene Interviewer:innen aus unserem Team. Unser Interview-System bereitet jedes Gespräch vor, wertet es aus und baut daraus Dossier und Archiv.",
};

export const content: LandingContent = {
  title: "Tacita – Betrieb übergeben, Wissen behalten",
  pillTag: "Neu",
  pill: "Übergabe-Interviews per Telefon · Made in Wien",
  pillShort: "Made in Wien",
  headline: ["Betrieb übergeben.", "Wissen behalten."],
  subline:
    "Tacita interviewt Sie in kurzen Telefonaten über alles, was nur Sie wissen, und macht daraus ein Übergabe-Dossier und ein Nachschlagewerk für Ihre Nachfolge.",
  emailPlaceholder: "Ihre E-Mail-Adresse",
  navSecondary: { label: "Beispiel-Dossier", href: SAMPLE_DOSSIER_URL },
  heroCards: {
    question: {
      label: "Tacita-Interview · Gespräch 4 von 10",
      text: "Erzählen Sie mir vom letzten Mal, als Großkunde Huber unzufrieden war. Was haben Sie gemacht?",
      mobileText: "Wann war Großkunde Huber zuletzt unzufrieden?",
    },
    quote: {
      label: "Inhaber, 63 · Kfz-Werkstatt",
      text: "Da ruf ich nie im Büro an, sondern direkt beim Polier am Handy. Und vor Ostern nie liefern.",
      mobileText: "Nie im Büro anrufen, direkt beim Polier am Handy.",
    },
    tags: { label: "Ins Dossier übernommen", tags: ["Kunde Huber", "Ansprechpartner", "Lieferfenster"] },
    status: { label: "Fortschritt", text: "38 von 52 Themen erfasst · noch ca. 4 Anrufe" },
  },
  heroProof: ["Nur telefonieren, keine App", "Echte Fälle statt Formulare", "Dossier für Käufer und Bank"],
  trades: ["Kfz-Werkstätten", "Installateure", "Tischlereien", "Gastronomie", "Fachhandel"],
  problem: {
    title: "Das wichtigste Wissen Ihres Betriebs steht nirgends.",
    subtitle: "Es steckt in Ihrem Kopf. Und genau das drückt den Preis, wenn Sie übergeben.",
    points: [
      { stat: "52.500", text: "österreichische Betriebe stehen bis 2034 vor der Übergabe.", source: "WKO" },
      {
        stat: "20–40 %",
        text: "Abschlag beim Verkaufspreis, wenn der Betrieb am Wissen der Inhaber:innen hängt.",
        source: "IHK-Studie 2025",
      },
      { stat: "2 von 3", text: "Inhaber:innen sagen: Eine Nachfolge zu finden ist schwierig.", source: "IHK-Studie 2025" },
    ],
  },
  video: {
    pill: "So einfach ist das",
    title: "Ein Anruf. 15 Minuten. Auch auf der Baustelle.",
    text: "Kein Termin im Büro, keine App, kein Formular. Wir rufen an, wann es Ihnen passt, und fragen nach echten Fällen aus Ihrem Alltag.",
    cardLabel: "Gespräch 3 von 10 · Lieferanten",
    cardText: "Ins Dossier übernommen",
  },
  dossier: {
    eyebrow: "Für Käufer, Bank & Steuerberatung",
    title: "Das Übergabe-Dossier",
    points: [
      "Kunden, Lieferanten und Absprachen, die nirgends stehen",
      "Abläufe, Preise und Eigenheiten des Betriebs",
      "Zeigt: Das Wissen ist übertragbar, nicht an Sie gebunden",
    ],
  },
  memory: {
    eyebrow: "Für Ihre Nachfolge",
    title: "Das Firmengedächtnis",
    points: [
      "Durchsuchbar: Frage stellen, Antwort in Ihren Worten",
      "QR-Codes an Maschinen und Fahrzeugen",
      "Wissens-Hotline für die ersten Monate",
    ],
  },
  founding: {
    pill: "Jetzt starten",
    title: "Sichern Sie Ihren Platz für die Übergabe",
    subtitle: "Persönliche Begleitung vom Erstgespräch bis zum fertigen Dossier. Die Interviews starten innerhalb von 2 Wochen.",
    badge: "Begrenzte Plätze pro Monat",
    pricePrefix: "ab",
    price: "2.490 €",
    priceUnit: "pro Übergabe, fester Preis nach dem Erstgespräch",
    deposit: "490 € Anzahlung sichern Ihren Platz. Voll angerechnet, rückerstattbar, solange die Interviews nicht begonnen haben.",
  },
  faq: [
    whoInterviews,
    {
      q: "Wie viel Zeit kostet mich das?",
      a: "8–15 Gespräche à 15 Minuten über einige Wochen. Insgesamt meist unter vier Stunden, verteilt so, wie es in Ihren Alltag passt.",
    },
    {
      q: "Brauche ich eine App oder einen Computer?",
      a: "Nein. Wir rufen Sie auf Ihrem normalen Telefon an. Das Dossier bekommen Sie als PDF, das Archiv öffnet Ihre Nachfolge im Browser.",
    },
    {
      q: "Was kostet es?",
      a: "Ab 2.490 € pro Übergabe, je nach Größe des Betriebs und Zahl der Gespräche. Nach dem Erstgespräch bekommen Sie einen festen Preis. Die Anzahlung von 490 € wird voll angerechnet.",
    },
    {
      q: "Gibt es Förderungen?",
      a: "Für Betriebsübergaben gibt es in mehreren Bundesländern Beratungsförderungen. Wir prüfen im Erstgespräch, ob Ihr Fall infrage kommt, und helfen beim Antrag.",
    },
  ],
  closing: {
    title: "Ihr Wissen ist Teil des Kaufpreises.",
    subtitle: "Sichern Sie es, bevor Sie gehen. Das Erstgespräch dauert 20 Minuten und ist kostenlos.",
  },
};
