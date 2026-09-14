import { mockDocuments, mockLearningGoals, mockSkills } from "../../data/mockData";
import { officialLowstakes, officialMidstakes, officialDeadlines } from "../../data/officialData";
import type { Lowstake, Midstake } from "../../types/entities";

export type StakeKind = "lowstake" | "midstake";
export type Stake = (Lowstake | Midstake) & { kind: StakeKind };

export function allStakes(): Stake[] {
  return [
    ...officialLowstakes.map((s) => ({ ...s, kind: "lowstake" as const })),
    ...officialMidstakes.map((s) => ({ ...s, kind: "midstake" as const })),
  ];
}

export function findStake(id: string): Stake | undefined {
  return allStakes().find((s) => s.id === id);
}

export function deadlineFor(deadlineId?: string) {
  if (!deadlineId) return undefined;
  return officialDeadlines.find((d) => d.id === deadlineId);
}

export function documentsFor(ids?: string[]) {
  if (!ids) return [];
  return mockDocuments.filter((d) => ids.includes(d.id));
}

export function learningGoalsFor(ids?: string[]) {
  if (!ids) return [];
  return mockLearningGoals.filter((g) => ids.includes(g.id));
}

export function skillsFor(ids?: string[]) {
  if (!ids) return [];
  return mockSkills.filter((s) => ids.includes(s.id));
}
