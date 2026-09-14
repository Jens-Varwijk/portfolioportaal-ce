import { officialDeadlines } from "../data/officialData";

export interface NavItem {
  label: string;
  path: string;
  icon: string;
  badge?: number;
}

const openDeadlineCount = officialDeadlines.filter((d) => d.status !== "ingeleverd" && d.status !== "afgerond").length;

export const primaryNav: NavItem[] = [
  { label: "Home", path: "/", icon: "home" },
  { label: "Planning", path: "/planning", icon: "calendar" },
  { label: "Deadlines", path: "/deadlines", icon: "clock", badge: openDeadlineCount },
  { label: "Opdrachten", path: "/opdrachten", icon: "check" },
  { label: "Leerdoelen", path: "/leerdoelen", icon: "target" },
  { label: "Vaardigheden", path: "/vaardigheden", icon: "bars" },
  { label: "Documenten", path: "/documenten", icon: "doc" },
  { label: "Reflectie", path: "/reflectie", icon: "pen" },
  { label: "Portfolio", path: "/portfolio", icon: "folder" },
];

export const secondaryNav: NavItem[] = [
  { label: "E-learning", path: "/e-learning", icon: "book" },
  { label: "Materialen", path: "/toetsmateriaal", icon: "file-check" },
  { label: "Samenvattingen", path: "/samenvattingen", icon: "cap" },
  { label: "Samenwerken", path: "/samenwerken", icon: "users" },
  { label: "Outlook", path: "/outlook", icon: "mail", badge: 2 },
];
