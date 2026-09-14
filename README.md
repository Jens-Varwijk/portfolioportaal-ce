# Portfolioportaal – Minor Circulaire Economie en Duurzaam Investeren

Statische React/TypeScript-webapp voor de studentcyclus **Plannen → Leren → Uitvoeren → Reflecteren →
Ontwikkelen → Bewijs verzamelen → Portfolio opbouwen**, gebouwd volgens het bijgeleverde master prompt-document.

## Status

- ✅ Applicatieskelet: routing, layout (sidebar/topbar/mobiele drawer), design system, centraal datamodel
- ✅ Dashboard met demo-data (duidelijk gelabeld als `DEMO / MOCKDATA`)
- ⏳ **Geblokkeerd:** de officiele studiehandleiding van de minor is nog niet aangeleverd. Zonder die bron mogen
  deadlines, Lowstakes/Midstakes, E-learningmodules en toetsmateriaal niet worden ingevuld (zie sectie 4 van het
  master prompt: verzin geen officiele onderwijsinhoud).
- ⏳ **Geblokkeerd:** Supabase (database/storage) is nog niet gekoppeld — nodig voor Leerdoelen, Vaardigheden,
  Documenten, Reflectie, Portfolio, Samenwerken.
- ⏳ **Geblokkeerd:** Microsoft Entra ID / Graph API is nog niet geconfigureerd — nodig voor Outlook-integratie.

Elke module heeft al wel een werkende route met lege/foutstatus die expliciet de blocker benoemt, in plaats van
verzonnen inhoud te tonen.

## Content-classificatie

Alle content in de app is getagd als een van:

- `OFFICIAL_CONTENT` — rechtstreeks uit de studiehandleiding, met bronverwijzing
- `USER_CONTENT` — door de student zelf ingevoerd
- `GENERATED_CONTENT` — AI-output, uitsluitend afgeleid van toegestane bronnen
- `MOCKDATA` — demodata, uitsluitend voor het tonen van technische functionaliteit

Zie [`src/types/content.ts`](src/types/content.ts).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment naar GitHub Pages

De repo bevat een GitHub Actions-workflow (`.github/workflows/deploy.yml`) die bij elke push naar `main`
automatisch bouwt en publiceert naar GitHub Pages. Zorg dat in **Settings → Pages** de bron staat op
**GitHub Actions**.

De site draait op een relatieve base-URL (`/portfolioportaal-ce/`, zie `vite.config.ts`) en gebruikt een
`HashRouter` zodat directe links naar subpagina's ook op Pages werken zonder server-side routing.

## Volgende stappen

1. Studiehandleiding aanleveren → officiele content extraheren (weken, deadlines, Lowstakes/Midstakes,
   E-learningmodules, materialen).
2. Supabase-project aanmaken en credentials toevoegen (nooit service-role keys in frontendcode).
3. Microsoft Entra ID app-registratie voor authenticatie + Graph-scopes.
