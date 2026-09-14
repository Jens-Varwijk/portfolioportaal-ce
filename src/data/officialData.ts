// OFFICIAL_CONTENT — geextraheerd uit de studentenhandleiding van de minor
// Circulaire Economie (master prompt sectie 5/6: bronverwerking + traceerbaarheid).
//
// Bron: https://fabianb88.github.io/minor-ce-studentenhandleiding/
// Opgehaald op: 2026-09-14
//
// Belangrijk: de bron geeft per contactmoment een maandagdatum per week; donderdagen
// zijn berekend als maandag + 3 dagen (zelfde onderwijsweek). Voor exacte tijden en
// eventuele wijzigingen verwijst de bron zelf altijd naar het officiële rooster —
// dat geldt hier dus ook.

import type { Deadline, Lowstake, Midstake, OfficialActivity, ELearningModule, Status } from "../types/entities";
import { parseISODate } from "../lib/date";

const BASE_URL = "https://fabianb88.github.io/minor-ce-studentenhandleiding/";

const planningSource = (label: string) => ({
  sourceDocument: `${BASE_URL}planning.html`,
  sourceSection: "Planning - Periode 1",
  sourceLabel: label,
});

const materialenSource = (label: string) => ({
  sourceDocument: `${BASE_URL}materialen.html`,
  sourceSection: "Materialen & Downloads",
  sourceLabel: label,
});

export const officialDeadlines: Deadline[] = [
  {
    id: "od-lowstake-1",
    title: "Lowstake 1 - Discover",
    date: "2026-09-17",
    week: 38,
    description:
      "Voortgang feedback hoofdproject. Discover-fase: aanpakplan afgerond met deconstructie, stakeholdermapping & desk research.",
    projectType: "Lowstake",
    status: "niet_gestart",
    origin: "OFFICIAL_CONTENT",
    source: planningSource("Week 38, donderdag"),
  },
  {
    id: "od-lowstake-2",
    title: "Lowstake 2 - Define",
    date: "2026-10-01",
    week: 40,
    description: "Opleveren kortcyclisch project 1 + voortgang feedback hoofdproject. Define-fase: project paper & ingevulde scrum.",
    projectType: "Lowstake",
    status: "niet_gestart",
    origin: "OFFICIAL_CONTENT",
    source: planningSource("Week 40, donderdag"),
  },
  {
    id: "od-lowstake-3",
    title: "Lowstake 3 - Ideate",
    date: "2026-10-15",
    week: 42,
    description: "Oplevering kortcyclisch project 2 + voortgang feedback moment hoofdproject.",
    projectType: "Lowstake",
    status: "niet_gestart",
    origin: "OFFICIAL_CONTENT",
    source: planningSource("Week 42, donderdag"),
  },
  {
    id: "od-tentamen",
    title: "Tentamen",
    date: "2026-10-29",
    time: "16:15-18:30",
    week: 44,
    description: "Zie rooster en toetsinformatie voor exacte inhoud.",
    projectType: "Tentamen",
    status: "niet_gestart",
    origin: "OFFICIAL_CONTENT",
    source: planningSource("Week 44, donderdag"),
  },
  {
    id: "od-midstake",
    title: "Midstake",
    date: "2026-11-02",
    week: 45,
    description: "Student plant de midstake zelf in met docent en opdrachtgever, in de week van 2 november.",
    projectType: "Midstake",
    status: "niet_gestart",
    origin: "OFFICIAL_CONTENT",
    source: planningSource("Week 45"),
  },
];

export const officialLowstakes: Lowstake[] = [
  {
    id: "od-lowstake-1",
    title: "Lowstake 1 - Discover",
    description: "Voortgang feedback hoofdproject. Discover-fase: aanpakplan afgerond met deconstructie, stakeholdermapping & desk research.",
    deadlineId: "od-lowstake-1",
    status: "niet_gestart",
    documentIds: [],
    origin: "OFFICIAL_CONTENT",
    source: planningSource("Week 38, donderdag"),
  },
  {
    id: "od-lowstake-2",
    title: "Lowstake 2 - Define",
    description: "Opleveren kortcyclisch project 1 + voortgang feedback hoofdproject. Define-fase: project paper & ingevulde scrum.",
    deadlineId: "od-lowstake-2",
    status: "niet_gestart",
    documentIds: [],
    origin: "OFFICIAL_CONTENT",
    source: planningSource("Week 40, donderdag"),
  },
  {
    id: "od-lowstake-3",
    title: "Lowstake 3 - Ideate",
    description: "Oplevering kortcyclisch project 2 + voortgang feedback moment hoofdproject.",
    deadlineId: "od-lowstake-3",
    status: "niet_gestart",
    documentIds: [],
    origin: "OFFICIAL_CONTENT",
    source: planningSource("Week 42, donderdag"),
  },
];

export const officialMidstakes: Midstake[] = [
  {
    id: "od-midstake",
    title: "Midstake",
    description: "Tussentijdse toetsing in de Ideate-fase.",
    deadlineId: "od-midstake",
    assignmentDescription: "Student plant de midstake zelf in met docent en opdrachtgever, in de week van 2 november.",
    materials: [],
    status: "niet_gestart",
    documentIds: [],
    origin: "OFFICIAL_CONTENT",
    source: planningSource("Week 45"),
  },
];

export interface OfficialMaterial {
  id: string;
  code: string;
  title: string;
  phase: string;
  description: string;
  deliverable: string;
  source: { sourceDocument: string; sourceSection: string; sourceLabel: string };
}

export const officialMaterials: OfficialMaterial[] = [
  { id: "m01", code: "01", title: "Design thinking", phase: "Start", description: "Plaats je project in de Double Diamond en zie per fase welke vraag centraal staat en welk hulpmiddel je nodig hebt.", deliverable: "Geen eigen product; bepaalt de volgorde van je andere werk", source: materialenSource("Start") },
  { id: "m02", code: "02", title: "Deconstructie", phase: "Start", description: "Redeneer terug vanaf je einddoel naar de stappen, kennis en keuzes die nu nodig zijn.", deliverable: "Een ingevuld deconstructie-canvas, omgezet in scrum-taken", source: materialenSource("Start") },
  { id: "m03", code: "03", title: "Aanpakplan", phase: "Start", description: "Leg je richting vast zonder alles dicht te timmeren. Werk het plan elke coachingcyclus bij.", deliverable: "Een levend aanpakplan dat je meeneemt naar elke coaching", source: materialenSource("Start") },
  { id: "m04", code: "04", title: "Scrum & kanban", phase: "De hele minor door", description: "Maak het werk klein en zichtbaar met sprints, taken en een praktisch bord voor jullie duo.", deliverable: "Een bijgewerkt bord, een sprintplanning en samenwerkingsafspraken", source: materialenSource("De hele minor door") },
  { id: "m05", code: "05", title: "Onderbouwen", phase: "De hele minor door", description: "Maak keuzes, claims en cijfers navolgbaar in je beroepsproduct en onderbouwingslogboek.", deliverable: "Een bijgehouden onderbouwingslogboek", source: materialenSource("De hele minor door") },
  { id: "m06", code: "06", title: "Slim AI gebruiken", phase: "De hele minor door", description: "Werk met AI zonder je eigen denken kwijt te raken: eerst denken, dan schetsen, dan prompten.", deliverable: "Geen los product; wordt zichtbaar in je onderbouwing", source: materialenSource("De hele minor door") },
  { id: "m07", code: "07", title: "Reflectie", phase: "De hele minor door", description: "Gebruik STARR om je leerproces zichtbaar te maken voor coaching en portfolio.", deliverable: "Een uitgewerkte STARR-reflectie per cyclus", source: materialenSource("De hele minor door") },
  { id: "m08", code: "08", title: "Stakeholderanalyse", phase: "Discover", description: "Breng in kaart wie belang heeft bij je project, wie invloed heeft en wie je actief moet betrekken.", deliverable: "Een ingevuld grid en een stakeholderlijst met je aanpak per partij", source: materialenSource("Discover") },
  { id: "m09", code: "09", title: "Opdrachtgever-afspraken", phase: "Discover", description: "Gebruik dit voor intake, verwachtingen, contactritme en tussentijdse afstemming met je opdrachtgever.", deliverable: "Ingevulde intake, vastgelegde afspraken en een afstemmingsritme", source: materialenSource("Discover") },
  { id: "m10", code: "10", title: "Ketenschets", phase: "Discover", description: "Breng in beeld waar materiaal, geld en informatie langsgaan, en markeer de plekken waar waarde weglekt.", deliverable: "Een getekende ketenschets met drie gemarkeerde hotspots, plus je aannames en bronnen", source: materialenSource("Discover") },
  { id: "m11", code: "11", title: "Probleemdefinitie", phase: "Define", description: "Ga van de gevraagde oplossing naar het echte probleem en formuleer een scherpe kansvraag.", deliverable: "Een scherpe probleemdefinitie en een How Might We-vraag", source: materialenSource("Define") },
  { id: "m12", code: "12", title: "CE-modellen", phase: "Define", description: "Pas de R-ladder, het vlinderdiagram en de value hill toe op je eigen project, met een werkblad per model.", deliverable: "Per model een ingevuld werkblad", source: materialenSource("Define") },
  { id: "m13", code: "13", title: "Brainstorm", phase: "Develop", description: "Gebruik technieken om eerst breed te denken en daarna bewust naar kansrijke richtingen te gaan.", deliverable: "Een gevulde ideeenlijst en een gekozen richting", source: materialenSource("Develop") },
  { id: "m14", code: "14", title: "Prioriteren", phase: "Develop", description: "Kies waar je tijd en energie naartoe gaan met MoSCoW en de impact/inspanning-matrix.", deliverable: "Een ingevulde MoSCoW en matrix, vertaald naar je backlog", source: materialenSource("Develop") },
  { id: "m15", code: "15", title: "AI naar website", phase: "Develop", description: "Bouw stap voor stap een werkende pagina met AI, van schets en briefing tot verfijnen, controleren en delen.", deliverable: "Een werkende pagina of prototype, plus je ingevulde briefing", source: materialenSource("Develop") },
  { id: "m16", code: "16", title: "Testen en valideren", phase: "Develop", description: "Toets je aannames voordat je ze uitwerkt, met de goedkoopste test die je ongelijk kan geven.", deliverable: "Een ingevuld testplan en een testlogboek met wat je zag en wat je daarmee doet", source: materialenSource("Develop") },
  { id: "m17", code: "17", title: "Projectpaper", phase: "Deliver", description: "Bouw je projectverhaal op rond waarom het ertoe doet, hoe je werkt en wat je oplevert.", deliverable: "Een projectpaper plus je eigen rolbeschrijving", source: materialenSource("Deliver") },
  { id: "m18", code: "18", title: "Opleveren en presenteren", phase: "Deliver", description: "Draag je beroepsproduct zo over dat er ook zonder jou mee verder gewerkt wordt.", deliverable: "Een overgedragen beroepsproduct, een presentatie en een ingevuld overdrachtsformulier", source: materialenSource("Deliver") },
];

// Volledige lesagenda (contactmomenten) uit planning.html, per week/dag/tijdblok.
// Periode 1 (week 36-45): maandagdatum staat expliciet in de bron, donderdag = maandag + 3.
// Periode 2 (week 46-51): de bron geeft geen expliciete data meer in tekstvorm; deze zijn
// berekend vanaf het anker week 45 = 2 november 2026 (7 dagen per week verder). Gemarkeerd
// met computed: true. Check bij twijfel altijd het officiele rooster (de bron zegt dit zelf ook).
interface RawBlock {
  week: number;
  date: string;
  day: "maandag" | "donderdag";
  start: string;
  end: string;
  title: string;
  people?: string;
  computed?: boolean;
}

const rawSchedule: RawBlock[] = [
  // Week 36 - 31 aug / 3 sep
  { week: 36, date: "2026-08-31", day: "maandag", start: "13:00", end: "17:00", title: "Kick-off", people: "Alle docenten (opdrachtgevers vanaf 15:00)" },
  { week: 36, date: "2026-09-03", day: "donderdag", start: "09:45", end: "11:30", title: "Theorie waardecreatie 1&2", people: "Anouk Brinker" },
  { week: 36, date: "2026-09-03", day: "donderdag", start: "12:15", end: "13:45", title: "Project - Professionele ontwikkeling", people: "Anouk Brinker" },
  { week: 36, date: "2026-09-03", day: "donderdag", start: "14:30", end: "17:00", title: "Vaardigheden AI", people: "Fabian Berndsen" },
  // Week 37 - 7 sep / 10 sep
  { week: 37, date: "2026-09-07", day: "maandag", start: "09:45", end: "11:30", title: "Projectvaardigheden", people: "Charlotte Bronckhorst" },
  { week: 37, date: "2026-09-07", day: "maandag", start: "13:00", end: "14:30", title: "Intervisie", people: "Charlotte Bronckhorst" },
  { week: 37, date: "2026-09-07", day: "maandag", start: "15:30", end: "17:00", title: "Business Ethiek 1", people: "Kim Meijer" },
  { week: 37, date: "2026-09-10", day: "donderdag", start: "09:45", end: "11:30", title: "Theorie 3", people: "Liard Kranen" },
  { week: 37, date: "2026-09-10", day: "donderdag", start: "12:15", end: "13:45", title: "Project - Professionele ontwikkeling", people: "Anouk Brinker" },
  { week: 37, date: "2026-09-10", day: "donderdag", start: "14:30", end: "16:15", title: "AI Playground", people: "Guus Witjes" },
  // Week 38 - 14 sep / 17 sep
  { week: 38, date: "2026-09-14", day: "maandag", start: "09:45", end: "11:30", title: "Vaardigheden AI", people: "Fabian Berndsen" },
  { week: 38, date: "2026-09-14", day: "maandag", start: "13:00", end: "14:30", title: "AI Challenge & Procescoaching", people: "Fabian Berndsen, Charlotte Bronckhorst" },
  { week: 38, date: "2026-09-14", day: "maandag", start: "15:30", end: "17:00", title: "Business Ethiek 2", people: "Michiel Kamphuis" },
  { week: 38, date: "2026-09-17", day: "donderdag", start: "09:45", end: "11:30", title: "Theorie 4", people: "Anouk Brinker" },
  { week: 38, date: "2026-09-17", day: "donderdag", start: "14:30", end: "16:15", title: "Kennismaken opdrachtgever" },
  // Week 39 - 21 sep / 24 sep
  { week: 39, date: "2026-09-21", day: "maandag", start: "09:45", end: "11:30", title: "Projectvaardigheden", people: "Charlotte Bronckhorst" },
  { week: 39, date: "2026-09-21", day: "maandag", start: "13:00", end: "14:30", title: "Intervisie", people: "Charlotte Bronckhorst" },
  { week: 39, date: "2026-09-21", day: "maandag", start: "15:30", end: "17:00", title: "Business Ethiek 3", people: "Fabian Berndsen" },
  { week: 39, date: "2026-09-24", day: "donderdag", start: "09:45", end: "11:30", title: "Theorie 5", people: "Paul Brouwer" },
  { week: 39, date: "2026-09-24", day: "donderdag", start: "12:15", end: "13:45", title: "Project - Professionele ontwikkeling", people: "Anouk Brinker" },
  { week: 39, date: "2026-09-24", day: "donderdag", start: "14:30", end: "16:15", title: "AI Playground", people: "Guus Witjes" },
  // Week 40 - 28 sep / 1 okt
  { week: 40, date: "2026-09-28", day: "maandag", start: "09:45", end: "11:30", title: "Vaardigheden AI", people: "Fabian Berndsen" },
  { week: 40, date: "2026-09-28", day: "maandag", start: "13:00", end: "14:30", title: "AI Challenge & Procescoaching", people: "Fabian Berndsen, Charlotte Bronckhorst" },
  { week: 40, date: "2026-09-28", day: "maandag", start: "15:30", end: "17:00", title: "Business Ethiek 4", people: "Michiel Kamphuis" },
  { week: 40, date: "2026-10-01", day: "donderdag", start: "09:45", end: "11:30", title: "Theorie 6", people: "Anouk Brinker" },
  // Week 41 - 5 okt / 8 okt
  { week: 41, date: "2026-10-05", day: "maandag", start: "09:45", end: "11:30", title: "Projectvaardigheden", people: "Charlotte Bronckhorst" },
  { week: 41, date: "2026-10-05", day: "maandag", start: "13:00", end: "14:30", title: "Intervisie", people: "Charlotte Bronckhorst" },
  { week: 41, date: "2026-10-05", day: "maandag", start: "15:30", end: "17:00", title: "Business Ethiek 5", people: "Fabian Berndsen" },
  { week: 41, date: "2026-10-08", day: "donderdag", start: "09:45", end: "11:30", title: "Theorie 7", people: "Didier Piets" },
  { week: 41, date: "2026-10-08", day: "donderdag", start: "12:15", end: "13:45", title: "Project - Professionele ontwikkeling", people: "Anouk Brinker" },
  { week: 41, date: "2026-10-08", day: "donderdag", start: "14:30", end: "16:15", title: "AI Playground", people: "Guus Witjes" },
  // Week 42 - 12 okt / 15 okt
  { week: 42, date: "2026-10-12", day: "maandag", start: "09:45", end: "11:30", title: "Vaardigheden AI", people: "Fabian Berndsen" },
  { week: 42, date: "2026-10-12", day: "maandag", start: "13:00", end: "14:30", title: "AI Challenge & Procescoaching", people: "Fabian Berndsen, Charlotte Bronckhorst" },
  { week: 42, date: "2026-10-12", day: "maandag", start: "15:30", end: "17:00", title: "Business Ethiek 6", people: "Michiel Kamphuis" },
  { week: 42, date: "2026-10-15", day: "donderdag", start: "12:15", end: "16:15", title: "Battle", people: "Alle docenten" },
  // Week 44 - 26 okt = geen contactmoment. Het Tentamen (29 okt) staat al in officialDeadlines.
  // Week 46 (berekend)
  { week: 46, date: "2026-11-09", day: "maandag", start: "10:00", end: "11:00", title: "Stand-up", people: "Charlotte Bronckhorst", computed: true },
  { week: 46, date: "2026-11-09", day: "maandag", start: "13:00", end: "14:30", title: "Intervisie", people: "Charlotte Bronckhorst", computed: true },
  { week: 46, date: "2026-11-09", day: "maandag", start: "15:30", end: "17:00", title: "Vaardigheden JIT", people: "Fabian Berndsen", computed: true },
  { week: 46, date: "2026-11-12", day: "donderdag", start: "10:00", end: "11:30", title: "Project - Professionele ontwikkeling", people: "Anouk Brinker", computed: true },
  { week: 46, date: "2026-11-12", day: "donderdag", start: "12:30", end: "14:00", title: "AI Playground", people: "Guus Witjes", computed: true },
  // Week 47 (berekend)
  { week: 47, date: "2026-11-16", day: "maandag", start: "10:00", end: "11:00", title: "AI Challenge", people: "Fabian Berndsen", computed: true },
  { week: 47, date: "2026-11-16", day: "maandag", start: "13:00", end: "14:30", title: "Procescoaching", people: "Charlotte Bronckhorst", computed: true },
  { week: 47, date: "2026-11-19", day: "donderdag", start: "10:00", end: "11:30", title: "Project - Deliverables", people: "Anouk Brinker", computed: true },
  { week: 47, date: "2026-11-19", day: "donderdag", start: "12:30", end: "14:00", title: "Project - Lowstake", people: "Anouk Brinker en Experts", computed: true },
  // Week 48 (berekend)
  { week: 48, date: "2026-11-23", day: "maandag", start: "10:00", end: "11:00", title: "Stand-up", people: "Charlotte Bronckhorst", computed: true },
  { week: 48, date: "2026-11-23", day: "maandag", start: "13:00", end: "14:30", title: "Intervisie", people: "Charlotte Bronckhorst", computed: true },
  { week: 48, date: "2026-11-23", day: "maandag", start: "15:30", end: "17:00", title: "Vaardigheden JIT", people: "Fabian Berndsen", computed: true },
  { week: 48, date: "2026-11-26", day: "donderdag", start: "10:00", end: "11:30", title: "Project - Professionele ontwikkeling", people: "Anouk Brinker", computed: true },
  { week: 48, date: "2026-11-26", day: "donderdag", start: "12:30", end: "14:00", title: "AI Playground", people: "Guus Witjes", computed: true },
  // Week 49 (berekend)
  { week: 49, date: "2026-11-30", day: "maandag", start: "10:00", end: "11:00", title: "AI Challenge", people: "Fabian Berndsen", computed: true },
  { week: 49, date: "2026-11-30", day: "maandag", start: "13:00", end: "14:30", title: "Procescoaching", people: "Charlotte Bronckhorst", computed: true },
  { week: 49, date: "2026-12-03", day: "donderdag", start: "10:00", end: "11:30", title: "Project - Deliverables", people: "Anouk Brinker", computed: true },
  { week: 49, date: "2026-12-03", day: "donderdag", start: "12:30", end: "14:00", title: "Project - Lowstake", people: "Anouk Brinker en Experts", computed: true },
  // Week 50 (berekend)
  { week: 50, date: "2026-12-07", day: "maandag", start: "10:00", end: "11:00", title: "Stand-up", people: "Charlotte Bronckhorst", computed: true },
  { week: 50, date: "2026-12-07", day: "maandag", start: "13:00", end: "14:30", title: "Intervisie", people: "Charlotte Bronckhorst", computed: true },
  { week: 50, date: "2026-12-07", day: "maandag", start: "15:30", end: "17:00", title: "Vaardigheden JIT", people: "Fabian Berndsen", computed: true },
  { week: 50, date: "2026-12-10", day: "donderdag", start: "10:00", end: "11:30", title: "Project - Professionele ontwikkeling", people: "Anouk Brinker", computed: true },
  { week: 50, date: "2026-12-10", day: "donderdag", start: "12:30", end: "14:00", title: "AI Playground", people: "Guus Witjes", computed: true },
  // Week 51 (berekend)
  { week: 51, date: "2026-12-14", day: "maandag", start: "10:00", end: "11:00", title: "AI Challenge", people: "Fabian Berndsen", computed: true },
  { week: 51, date: "2026-12-14", day: "maandag", start: "13:00", end: "14:30", title: "Procescoaching", people: "Charlotte Bronckhorst", computed: true },
  { week: 51, date: "2026-12-17", day: "donderdag", start: "10:00", end: "11:30", title: "Project - Deliverables", people: "Anouk Brinker", computed: true },
  { week: 51, date: "2026-12-17", day: "donderdag", start: "12:30", end: "14:00", title: "Project - Circulaire Oogst", people: "Alle docenten", computed: true },
];

// Dominante fase per week, uit de laatste kolom van de planningstabel.
// "Ideate" heeft geen eigen kolom in materialen.html - de ideate-hulpmiddelen
// (13-16, Brainstorm t/m Testen) staan daar onder "Develop".
export const weekPhase: Record<number, string> = {
  36: "Discover",
  37: "Discover",
  38: "Discover",
  39: "Define",
  40: "Define",
  41: "Ideate",
  42: "Ideate",
  44: "Tentamen",
  45: "Ideate",
  46: "Ideate",
  47: "Ideate",
  48: "Develop",
  49: "Develop",
  50: "Develop",
  51: "Deliver",
};

export function materialsForWeek(week: number) {
  const phase = weekPhase[week];
  const phaseKey = phase === "Ideate" ? "Develop" : phase;
  const alwaysRelevant = officialMaterials.filter((m) => m.phase === "De hele minor door");
  const phaseRelevant = phaseKey ? officialMaterials.filter((m) => m.phase === phaseKey) : [];
  return { phase, materials: [...phaseRelevant, ...alwaysRelevant] };
}

export const officialActivities: OfficialActivity[] = rawSchedule.map((b, i) => ({
  id: `act-${b.week}-${b.day}-${i}`,
  title: b.title,
  week: b.week,
  date: b.date,
  startTime: b.start,
  endTime: b.end,
  description: b.people,
  origin: "OFFICIAL_CONTENT",
  source: {
    sourceDocument: `${BASE_URL}planning.html`,
    sourceSection: b.week <= 45 ? "Planning - Periode 1" : "Planning - Periode 2",
    sourceLabel: `Week ${b.week}, ${b.day}${b.computed ? " (datum berekend, check rooster)" : ""}`,
  },
}));

// Deze minor heeft geen losse E-learningmodules (video/quiz) - de dichtstbijzijnde
// equivalent zijn de terugkerende, genummerde lessessies uit het rooster (Theorie 1-7,
// Business Ethiek 1-6, etc). Die worden hier gegroepeerd tot "modules" met een
// voortgang die objectief is afgeleid uit de datum (sessie geweest = afgerond) -
// geen zelfgerapporteerde of verzonnen voortgang.
const seriesKeyByTitle: Record<string, string> = {
  "Theorie waardecreatie 1&2": "Theorie",
  "Theorie 3": "Theorie",
  "Theorie 4": "Theorie",
  "Theorie 5": "Theorie",
  "Theorie 6": "Theorie",
  "Theorie 7": "Theorie",
  "Business Ethiek 1": "Business Ethiek",
  "Business Ethiek 2": "Business Ethiek",
  "Business Ethiek 3": "Business Ethiek",
  "Business Ethiek 4": "Business Ethiek",
  "Business Ethiek 5": "Business Ethiek",
  "Business Ethiek 6": "Business Ethiek",
  "Vaardigheden AI": "Vaardigheden AI/JIT",
  "Vaardigheden JIT": "Vaardigheden AI/JIT",
  "AI Playground": "AI Playground",
  "AI Challenge & Procescoaching": "AI Challenge & Procescoaching",
  "AI Challenge": "AI Challenge & Procescoaching",
  "Procescoaching": "AI Challenge & Procescoaching",
  "Projectvaardigheden": "Projectvaardigheden",
  "Intervisie": "Intervisie",
  "Project - Professionele ontwikkeling": "Project - Professionele ontwikkeling",
  "Project - Deliverables": "Project - Deliverables & Lowstake",
  "Project - Lowstake": "Project - Deliverables & Lowstake",
  "Stand-up": "Stand-up",
};

interface SeriesAcc {
  dates: string[];
  people: Set<string>;
  firstWeek: number;
  lastWeek: number;
}

const seriesAcc = new Map<string, SeriesAcc>();
for (const b of rawSchedule) {
  const key = seriesKeyByTitle[b.title];
  if (!key) continue;
  const acc = seriesAcc.get(key) ?? { dates: [], people: new Set<string>(), firstWeek: b.week, lastWeek: b.week };
  acc.dates.push(b.date);
  if (b.people) acc.people.add(b.people);
  acc.firstWeek = Math.min(acc.firstWeek, b.week);
  acc.lastWeek = Math.max(acc.lastWeek, b.week);
  seriesAcc.set(key, acc);
}

const today = new Date();

export const officialLearningModules: ELearningModule[] = Array.from(seriesAcc.entries())
  .sort((a, b) => a[1].firstWeek - b[1].firstWeek)
  .map(([title, acc]) => {
    const total = acc.dates.length;
    const done = acc.dates.filter((d) => parseISODate(d) < today).length;
    const progressPercent = Math.round((done / total) * 100);
    const status: Status = done === 0 ? "niet_gestart" : done === total ? "afgerond" : "bezig";
    return {
      id: `elm-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      title,
      description: `${total} sessie${total === 1 ? "" : "s"}, week ${acc.firstWeek} t/m ${acc.lastWeek}`,
      materials: Array.from(acc.people),
      progressPercent,
      status,
      origin: "OFFICIAL_CONTENT",
      source: {
        sourceDocument: `${BASE_URL}planning.html`,
        sourceSection: "Planning",
        sourceLabel: `Terugkerende sessie "${title}" (week ${acc.firstWeek}-${acc.lastWeek})`,
      },
    };
  });
