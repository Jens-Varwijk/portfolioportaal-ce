# Portfolioportaal – Minor Circulaire Economie en Duurzaam Investeren

Statische React/TypeScript-webapp voor de studentcyclus **Plannen → Leren → Uitvoeren → Reflecteren →
Ontwikkelen → Bewijs verzamelen → Portfolio opbouwen**, gebouwd volgens het bijgeleverde master prompt-document.

## Status

- ✅ Applicatieskelet: routing, layout (sidebar/topbar/mobiele drawer), design system, centraal datamodel
- ✅ Officiele studentenhandleiding geintegreerd:
  [fabianb88.github.io/minor-ce-studentenhandleiding](https://fabianb88.github.io/minor-ce-studentenhandleiding/index.html)
  (opgehaald 2026-09-14). Zie [`src/data/officialData.ts`](src/data/officialData.ts) voor de geextraheerde
  Lowstakes/Midstake, deadlines en de 18 materialen, elk met bronverwijzing (sectie 6 van het master prompt).
- ✅ Planning, Deadlines, Opdrachten (Lowstakes/Midstakes) en Materialen werken met deze officiele data
- ✅ Dashboard combineert officiele data met demo-data (duidelijk gelabeld per widget)
- ⏳ **Geblokkeerd:** Supabase (database/storage) is nog niet gekoppeld — nodig voor Leerdoelen, Vaardigheden,
  Documenten, Reflectie, Portfolio, Samenwerken (deze modules gebruiken nu localStorage of demo-data).
- ✅ Microsoft-login (MSAL) + Outlook-pagina (mail/agenda via Graph) is **klaargebouwd** maar nog niet actief: er
  is nog geen app-registratie in Entra ID. Zie "Microsoft-integratie activeren" hieronder.
- ℹ️ Deze minor werkt projectmatig via de Double Diamond (Discover/Define/Develop/Deliver) met 18 hulpmiddelen in
  plaats van klassieke E-learningmodules — de E-learning-pagina legt dit uit en verwijst door naar Materialen.

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

## Microsoft-integratie activeren

1. Maak een app-registratie in [Azure Portal](https://portal.azure.com) → Microsoft Entra ID → App-registraties:
   - Type: Single-page application (SPA)
   - Redirect URI: `https://jens-varwijk.github.io/portfolioportaal-ce/`
   - API-machtigingen (Microsoft Graph, gedelegeerd): `User.Read`, `Mail.Read`, `Calendars.Read`, `Calendars.ReadWrite`
2. Noteer de **Application (client) ID** en **Directory (tenant) ID**.
3. Voor lokaal ontwikkelen: kopieer `.env.example` naar `.env` en vul beide waarden in.
4. Voor de live site (GitHub Actions build-time env): zet ze als repository variables:
   ```bash
   gh variable set VITE_MS_CLIENT_ID --body "<client-id>"
   gh variable set VITE_MS_TENANT_ID --body "<tenant-id>"
   ```
5. Push (of herstart de workflow) — de Outlook-pagina toont dan automatisch een "Inloggen met Microsoft"-knop
   in plaats van de configuratiemelding.

## Volgende stappen

1. Supabase-project aanmaken en credentials toevoegen (nooit service-role keys in frontendcode) → Leerdoelen,
   Vaardigheden, Documenten, Reflectie, Portfolio en Samenwerken van placeholder naar echte functionaliteit.
2. Microsoft Entra ID app-registratie voor authenticatie + Graph-scopes → Outlook-integratie.
3. Periode 2 (weken 46-52) van de planning bevat geen expliciete maandagdata in de bron-HTML; nagaan of dit
   alsnog ergens beschikbaar is voor exacte data van Circulaire Oogst en de assessmentweek.
