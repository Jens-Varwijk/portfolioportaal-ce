import { useMemo } from "react";
import { useLocalStorage } from "../../lib/useLocalStorage";
import { officialDeadlines } from "../../data/officialData";
import type { PersonalActivity, OutlookEvent } from "../../types/entities";
import type { ContentOrigin } from "../../types/content";

export type PlanningSource = "opleiding" | "persoonlijk" | "outlook";

export interface PlanningItem {
  id: string;
  title: string;
  date: string;
  startTime?: string;
  endTime?: string;
  description?: string;
  type?: string;
  source: PlanningSource;
  origin: ContentOrigin;
}

const STORAGE_KEY = "planning.personalActivities.v1";

export function usePlanningItems() {
  const [personalActivities, setPersonalActivities] = useLocalStorage<PersonalActivity[]>(STORAGE_KEY, []);
  const outlookEvents: OutlookEvent[] = []; // geblokkeerd: Microsoft Graph nog niet geconfigureerd

  const items = useMemo<PlanningItem[]>(() => {
    const fromOpleiding: PlanningItem[] = officialDeadlines.map((d) => ({
      id: d.id,
      title: d.title,
      date: d.date,
      startTime: d.time,
      description: d.description,
      source: "opleiding",
      origin: "OFFICIAL_CONTENT",
    }));

    const fromPersonal: PlanningItem[] = personalActivities.map((a) => ({
      id: a.id,
      title: a.title,
      date: a.date,
      startTime: a.startTime,
      endTime: a.endTime,
      description: a.description,
      type: a.type,
      source: "persoonlijk",
      origin: "USER_CONTENT",
    }));

    const fromOutlook: PlanningItem[] = outlookEvents.map((e) => ({
      id: e.id,
      title: e.title,
      date: e.date,
      startTime: e.startTime,
      endTime: e.endTime,
      description: e.description,
      source: "outlook",
      origin: "OFFICIAL_CONTENT",
    }));

    return [...fromOpleiding, ...fromPersonal, ...fromOutlook].sort((a, b) => a.date.localeCompare(b.date));
  }, [personalActivities]);

  function addPersonalActivity(activity: Omit<PersonalActivity, "id">) {
    setPersonalActivities((prev) => [...prev, { ...activity, id: crypto.randomUUID() }]);
  }

  function removePersonalActivity(id: string) {
    setPersonalActivities((prev) => prev.filter((a) => a.id !== id));
  }

  return { items, addPersonalActivity, removePersonalActivity, outlookConfigured: false };
}
