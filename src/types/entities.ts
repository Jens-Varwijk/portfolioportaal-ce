// Centraal datamodel — master prompt sectie 8.
// Alle modules verwijzen naar dezelfde records (relaties via id, geen kopieen).

import type { Traceable } from "./content";

export type Status =
  | "niet_gestart"
  | "bezig"
  | "bijna_klaar"
  | "ingeleverd"
  | "afgerond"
  | "te_laat";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface OfficialActivity extends Traceable {
  id: string;
  title: string;
  week?: number;
  date?: string;
  startTime?: string;
  endTime?: string;
  description?: string;
}

export interface PersonalActivity {
  id: string;
  title: string;
  description?: string;
  date: string;
  startTime?: string;
  endTime?: string;
  type?: string;
  projectId?: string;
  priority?: "laag" | "gemiddeld" | "hoog";
  reminder?: boolean;
}

export interface Deadline extends Traceable {
  id: string;
  title: string;
  date: string;
  time?: string;
  assignment?: string;
  projectType?: string;
  week?: number;
  description?: string;
  status: Status;
  remainingWork?: string;
  documentIds?: string[];
  learningGoalIds?: string[];
  skillIds?: string[];
}

export interface Lowstake extends Traceable {
  id: string;
  title: string;
  description?: string;
  goal?: string;
  startDate?: string;
  deadlineId?: string;
  status: Status;
  taskIds?: string[];
  documentIds?: string[];
  feedbackIds?: string[];
  reflectionIds?: string[];
  learningGoalIds?: string[];
  skillIds?: string[];
  evidenceIds?: string[];
}

export interface Midstake extends Traceable {
  id: string;
  title: string;
  description?: string;
  goal?: string;
  startDate?: string;
  deadlineId?: string;
  assignmentDescription?: string;
  materials?: string[];
  status: Status;
  taskIds?: string[];
  documentIds?: string[];
  feedbackIds?: string[];
  reflectionIds?: string[];
  learningGoalIds?: string[];
  skillIds?: string[];
  evidenceIds?: string[];
}

export interface Project {
  id: string;
  title: string;
  description?: string;
}

export interface Task {
  id: string;
  title: string;
  week?: string;
  dueDate?: string;
  done: boolean;
  category?: "deadline" | "milestone" | "lowstake" | "overig";
  linkedId?: string;
}

export interface LearningGoal {
  id: string;
  title: string;
  why?: string;
  destination?: string;
  startSituation?: string;
  desiredSituation?: string;
  startLevel?: string;
  targetLevel?: string;
  currentIndicativeLevel?: string;
  targetDate?: string;
  successDescription?: string;
  evidenceIds?: string[];
  progressPercent?: number;
}

export interface Skill extends Partial<Traceable> {
  id: string;
  title: string;
  currentLevel?: string;
  targetLevel?: string;
  desiredBehavior?: string;
  applicationSituations?: string;
  targetDate?: string;
  progressPercent?: number;
}

export interface WeeklyReflection {
  id: string;
  learningGoalId?: string;
  skillId?: string;
  week: number;
  contribution?: string;
  situation?: string;
  improvement?: string;
  obstacles?: string;
  feedback?: string;
  selfScore?: number;
  evidenceIds?: string[];
  nextStep?: string;
}

export interface GeneralReflection {
  id: string;
  date: string;
  activities?: string;
  wentWell?: string;
  wentLessWell?: string;
  lessons?: string;
  choices?: string;
  motivation?: string;
  feedback?: string;
  futureImprovement?: string;
  learningGoalIds?: string[];
  skillIds?: string[];
  evidenceIds?: string[];
}

export type DocumentCategory =
  | "Opdracht"
  | "Onderzoek"
  | "Feedback"
  | "Reflectie"
  | "Bewijsstuk"
  | "Presentatie"
  | "Toetsmateriaal"
  | "E-learning"
  | "Portfolio";

export interface Document {
  id: string;
  fileName: string;
  fileType: "pdf" | "word" | "excel" | "powerpoint" | "image";
  uploadDate: string;
  category?: DocumentCategory;
  projectId?: string;
  relatedStakeId?: string;
  learningGoalId?: string;
  skillId?: string;
  usedInReflectionIds?: string[];
  usedInPortfolio?: boolean;
}

export interface Evidence {
  id: string;
  title: string;
  documentId?: string;
  description?: string;
  linkedLearningGoalIds?: string[];
  linkedSkillIds?: string[];
}

export interface Feedback {
  id: string;
  from: string;
  date: string;
  text: string;
  relatedStakeId?: string;
}

export interface ELearningModule extends Traceable {
  id: string;
  title: string;
  description?: string;
  learningGoal?: string;
  theory?: string;
  materials?: string[];
  caseStudy?: string;
  progressPercent: number;
  status: Status;
}

export interface PortfolioSection {
  id: string;
  title: string;
  order: number;
  included: boolean;
  contentRefs?: string[];
}

export interface Portfolio {
  id: string;
  sections: PortfolioSection[];
  completenessPercent: number;
}

export interface OutlookEvent {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location?: string;
  description?: string;
  attendees?: string[];
}

export interface Notification {
  id: string;
  title: string;
  body: string;
  date: string;
  read: boolean;
  source: "systeem" | "outlook" | "feedback" | "groep";
}
