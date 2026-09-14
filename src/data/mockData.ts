// LET OP: dit bestand bevat uitsluitend DEMO/MOCKDATA.
// Deze data demonstreert technische functionaliteit en mag NOOIT als
// officiele onderwijsinformatie worden behandeld (master prompt sectie 4).
// Zodra de echte studiehandleiding beschikbaar is, wordt dit bestand vervangen
// door data die is geextraheerd uit die bron (met bronverwijzing, sectie 6).

import type { Task, Deadline, ELearningModule, LearningGoal, Skill, Document, Notification } from "../types/entities";

export const MOCK_USER = {
  id: "u1",
  name: "Jens",
  email: "jens7038@gmail.com",
};

export const mockProgress = {
  minorProgressPercent: 68,
  weeksDone: 9,
  weeksTotal: 16,
  openDeadlines: 5,
  learningGoalsAchieved: 4,
  learningGoalsTotal: 6,
  skillsInProgress: 7,
  skillsTotal: 10,
};

export const mockTasks: Task[] = [
  { id: "t1", title: "Onderzoeksplan inleveren", week: "Week 2 - Onderzoek", dueDate: "2026-09-16", done: false, category: "deadline" },
  { id: "t2", title: "Interview voorbereiden", week: "Week 3 - Field research", dueDate: "2026-09-18", done: false, category: "deadline" },
  { id: "t3", title: "Concept reflectie schrijven", week: "Week 3 - Reflectie", dueDate: "2026-09-21", done: false, category: "lowstake" },
  { id: "t4", title: "Voortgangsgesprek met coach", week: "Week 4", dueDate: "2026-09-23", done: false, category: "milestone" },
  { id: "t5", title: "Eindverslag definitief maken", week: "Week 8", dueDate: "2026-10-15", done: false, category: "deadline" },
];

const kindByCategory: Record<string, string> = {
  deadline: "Project",
  lowstake: "Lowstake",
  milestone: "Midstake",
};

const statusByTask: Record<string, Deadline["status"]> = {
  t1: "bezig",
  t2: "niet_gestart",
  t3: "bijna_klaar",
  t4: "niet_gestart",
  t5: "niet_gestart",
};

export const mockDeadlines: Deadline[] = mockTasks.map((t) => ({
  id: `d-${t.id}`,
  title: t.title,
  date: t.dueDate!,
  description: t.week,
  projectType: kindByCategory[t.category ?? "deadline"],
  status: statusByTask[t.id] ?? "niet_gestart",
  remainingWork: statusByTask[t.id] === "bijna_klaar" ? "Laatste check door coach" : "Uitwerken en inleveren",
  origin: "MOCKDATA" as const,
}));

export const mockRecentDocuments: Document[] = [
  { id: "doc1", fileName: "Onderzoeksplan_CE.docx", fileType: "word", uploadDate: "2026-09-12", category: "Opdracht" },
  { id: "doc2", fileName: "Literatuuroverzicht.pdf", fileType: "pdf", uploadDate: "2026-09-09", category: "Onderzoek" },
  { id: "doc3", fileName: "Reflectie_week1.pdf", fileType: "pdf", uploadDate: "2026-09-05", category: "Reflectie" },
  { id: "doc4", fileName: "Concept_eindverslag.docx", fileType: "word", uploadDate: "2026-09-01", category: "Portfolio" },
];

export const mockELearning: ELearningModule[] = [
  { id: "el1", title: "Week 1 - Systeemdenken", description: "Video + opdrachten", progressPercent: 100, status: "afgerond", origin: "MOCKDATA" },
  { id: "el2", title: "Week 2 - Circulaire strategieen", description: "Samenvatting + quiz", progressPercent: 60, status: "bezig", origin: "MOCKDATA" },
  { id: "el3", title: "Week 3 - Materiaalstromen", description: "Literatuur + oefenvragen", progressPercent: 20, status: "bezig", origin: "MOCKDATA" },
  { id: "el4", title: "Week 4 - Businessmodellen", description: "Samenvatting", progressPercent: 0, status: "niet_gestart", origin: "MOCKDATA" },
];

export const mockLearningGoals: LearningGoal[] = [
  { id: "lg1", title: "Systeemdenken toepassen", progressPercent: 80 },
  { id: "lg2", title: "Duurzaamheidsstrategieen analyseren", progressPercent: 60 },
  { id: "lg3", title: "Praktijkonderzoek uitvoeren", progressPercent: 40 },
  { id: "lg4", title: "Professioneel communiceren", progressPercent: 100 },
];

export const mockSkills: Skill[] = [
  { id: "sk1", title: "Systeemdenken toepassen", progressPercent: 80 },
  { id: "sk2", title: "Duurzaamheidsstrategieen analyseren", progressPercent: 60 },
];

export const mockNotifications: Notification[] = [
  { id: "n1", title: "HAN Circulaire Economie", body: "Re: Feedback op concept - Hoi Jens, we hebben je concept bekeken...", date: "2026-09-14T10:24:00", read: false, source: "outlook" },
  { id: "n2", title: "Stijn (Contour)", body: "Meeting volgende week - Zullen we de planning nog even doornemen?", date: "2026-09-14T09:17:00", read: false, source: "outlook" },
  { id: "n3", title: "Nikita (Groepsproject)", body: "Document gedeeld - Nikita heeft een document met je gedeeld.", date: "2026-09-14T08:03:00", read: true, source: "groep" },
];
