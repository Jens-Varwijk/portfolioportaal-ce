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

import type { Deadline, Lowstake, Midstake } from "../types/entities";

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
