// Dit bestand bevat twee soorten data:
// - OFFICIAL_CONTENT komt uit src/data/officialData.ts (geextraheerd uit de
//   studentenhandleiding, zie bronverwijzing daar) en wordt hier doorgegeven/gebruikt.
// - Alles hieronder met origin "MOCKDATA" is puur DEMO-data om technische
//   functionaliteit te tonen (master prompt sectie 4) en NOOIT officiele
//   onderwijsinformatie.

import type { LearningGoal, Skill, Document, Notification, WeeklyReflection } from "../types/entities";
import { officialDeadlines } from "./officialData";

export const MOCK_USER = {
  id: "u1",
  name: "Jens",
  email: "jens7038@gmail.com",
};

const WEEK_36_MONDAY = new Date("2026-08-31");
const TOTAL_MINOR_WEEKS = 17; // week 36 t/m week 52 uit de studiehandleiding (planning.html)

function currentTeachingWeeksDone(): number {
  const now = new Date();
  const diffWeeks = Math.floor((now.getTime() - WEEK_36_MONDAY.getTime()) / (7 * 24 * 60 * 60 * 1000));
  return Math.max(0, Math.min(diffWeeks, TOTAL_MINOR_WEEKS));
}

const openOfficialDeadlines = officialDeadlines.filter((d) => d.status !== "ingeleverd" && d.status !== "afgerond");

export const mockProgress = {
  minorProgressPercent: Math.round((currentTeachingWeeksDone() / TOTAL_MINOR_WEEKS) * 100),
  weeksDone: currentTeachingWeeksDone(),
  weeksTotal: TOTAL_MINOR_WEEKS,
  openDeadlines: openOfficialDeadlines.length,
  learningGoalsAchieved: 1,
  learningGoalsTotal: 4,
  skillsInProgress: 2,
  skillsTotal: 2,
};

export const mockDocuments: Document[] = [
  { id: "doc1", fileName: "Onderzoeksplan_CE.docx", fileType: "word", uploadDate: "2026-09-12", category: "Opdracht" },
  { id: "doc2", fileName: "Literatuuroverzicht.pdf", fileType: "pdf", uploadDate: "2026-09-09", category: "Onderzoek" },
  { id: "doc3", fileName: "Reflectie_week1.pdf", fileType: "pdf", uploadDate: "2026-09-05", category: "Reflectie" },
  { id: "doc4", fileName: "Concept_eindverslag.docx", fileType: "word", uploadDate: "2026-09-01", category: "Portfolio" },
];

export const mockLearningGoals: LearningGoal[] = [
  {
    id: "lg1",
    title: "Systeemdenken toepassen",
    why: "Ik wil complexe duurzaamheidsvraagstukken beter kunnen doorgronden in plaats van symptomen te bestrijden.",
    destination: "Zelfstandig een systeemanalyse kunnen maken van een circulair vraagstuk.",
    startSituation: "Ik denk vooral lineair en mis het overzicht bij complexe systemen.",
    desiredSituation: "Ik kan een systeem in kaart brengen met actoren, stromen en feedbackloops.",
    startLevel: "Beginnend",
    targetLevel: "Zelfstandig toepassen",
    currentIndicativeLevel: "Op weg naar zelfstandig",
    targetDate: "2026-11-01",
    successDescription: "Mijn coach en medestudenten herkennen systeemdenken terug in mijn analyses.",
    masterSituation: "Een casusgesprek waarin ik gevraagd word oorzaken en gevolgen in een systeem te duiden.",
    achievementSignal: "Ik kan zonder hulp een systeemplaat tekenen en toelichten.",
    evidenceIds: [],
    progressPercent: 80,
  },
  {
    id: "lg2",
    title: "Duurzaamheidsstrategieen analyseren",
    why: "Voor mijn onderzoek moet ik bedrijfsstrategieen kunnen beoordelen op duurzaamheidswaarde.",
    destination: "Een onderbouwd advies kunnen geven over een duurzaamheidsstrategie.",
    startLevel: "Kent de theorie",
    targetLevel: "Kan toepassen op een echte casus",
    currentIndicativeLevel: "Kan met ondersteuning toepassen",
    targetDate: "2026-10-15",
    successDescription: "Mijn analyse van Fastned wordt door de coach als sterk beoordeeld.",
    evidenceIds: [],
    progressPercent: 60,
  },
  {
    id: "lg3",
    title: "Praktijkonderzoek uitvoeren",
    why: "Ik heb weinig ervaring met veldonderzoek en wil dit onder de knie krijgen voor het eindverslag.",
    destination: "Zelfstandig interviews en data-analyse kunnen opzetten en uitvoeren.",
    startLevel: "Onervaren",
    targetLevel: "Zelfstandig",
    currentIndicativeLevel: "Eerste stappen gezet",
    targetDate: "2026-10-01",
    evidenceIds: [],
    progressPercent: 40,
  },
  {
    id: "lg4",
    title: "Professioneel communiceren",
    why: "Feedback uit vorige projecten was dat mijn schriftelijke communicatie beknopter en zakelijker mag.",
    destination: "Heldere, beknopte rapportages en presentaties kunnen opleveren.",
    startLevel: "Uitgebreid en informeel",
    targetLevel: "Beknopt en professioneel",
    currentIndicativeLevel: "Behaald",
    targetDate: "2026-09-01",
    successDescription: "Feedback op mijn laatste rapportage was overwegend positief over structuur en toon.",
    evidenceIds: [],
    progressPercent: 100,
  },
];

export const mockSkills: Skill[] = [
  { id: "sk1", title: "Systeemdenken toepassen", progressPercent: 80 },
  { id: "sk2", title: "Duurzaamheidsstrategieen analyseren", progressPercent: 60 },
];

export const mockWeeklyReflections: WeeklyReflection[] = [
  {
    id: "wr1",
    learningGoalId: "lg1",
    week: 1,
    contribution: "Systeemplaat gemaakt van de casus in de eerste werkcollege.",
    situation: "Groepsopdracht over materiaalstromen in de bouwsector.",
    improvement: "Eerste keer dat ik een systeemplaat maakte, dus geen vergelijking mogelijk.",
    obstacles: "Moeite om feedbackloops te herkennen.",
    feedback: "Docent gaf aan dat de actoren duidelijk waren, loops nog mager.",
    selfScore: 5,
    evidenceIds: [],
    nextStep: "Extra oefenen met feedbackloops aan de hand van het theorieboek.",
  },
  {
    id: "wr2",
    learningGoalId: "lg1",
    week: 2,
    contribution: "Feedbackloops toegevoegd aan een nieuwe systeemplaat, zelfstandig gemaakt.",
    situation: "Individuele oefening bij E-learning week 2.",
    improvement: "Loops zijn dit keer wel herkend en correct benoemd volgens de zelfcheck.",
    obstacles: "Nog onzeker over het onderscheid tussen directe en indirecte relaties.",
    feedback: "Nog geen feedback ontvangen.",
    selfScore: 6,
    evidenceIds: [],
    nextStep: "Vraag stellen aan coach over direct/indirect onderscheid.",
  },
];

export const mockNotifications: Notification[] = [
  { id: "n1", title: "HAN Circulaire Economie", body: "Re: Feedback op concept - Hoi Jens, we hebben je concept bekeken...", date: "2026-09-14T10:24:00", read: false, source: "outlook" },
  { id: "n2", title: "Stijn (Contour)", body: "Meeting volgende week - Zullen we de planning nog even doornemen?", date: "2026-09-14T09:17:00", read: false, source: "outlook" },
  { id: "n3", title: "Nikita (Groepsproject)", body: "Document gedeeld - Nikita heeft een document met je gedeeld.", date: "2026-09-14T08:03:00", read: true, source: "groep" },
];
