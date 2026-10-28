# Tacita.ai

**One line:** Tacita calls key people before they leave a company, interviews them by phone in 15-minute conversations (AI interviewer "Wissbert"), and turns what only they know into a searchable company memory and a hand-over dossier.

**Status (2026-10-07):** Idea pitched at 120 Ventures (Learnings lab / Idea Cradle) on 2026-10-06. Pitch went well. Next phase: validation / testing with real business owners.

**Source of truth for the pitch:** [Notion page](https://www.notion.so/120ventures/Tacita-ai-3f13da1f144080269f0bcae8e23480a6) (snapshot in `docs/pitch.md`).

## Repo layout

- `src/` – fake-door landing page (Vite + React + shadcn, from the 120 Ventures boilerplate)
  - `/` – „Betrieb übergeben. Wissen behalten.“ for owners before a hand-over (segment D)
  - all copy lives in `src/content/landing.ts`; an HR/QM page (Figma Variante B) comes later
- `docs/pitch.md` – snapshot of the Notion pitch (problem, solution, market, revenue model, signals)
- `docs/feedback/` – feedback from colleagues and later from customers, one file per source and date
- `docs/testing/` – validation plan, interview guides, pilot notes, results

## Key numbers from the pitch

| Item | Value |
|---|---|
| Austrian companies facing succession by 2034 | 52,500 |
| Austrian takeovers per year | ~8,200 |
| Owner-discount in valuation for owner-dependent businesses | 20–40% |
| Bottom-up Austria market | ~EUR 160M / year |
| Price: succession case | EUR 2,490 (or 490 + 1% of sale price) |
| Price: retirement case | EUR 3,900 |
| Price: parental leave case | EUR 1,490 |
| Subscription "Wissens-Schutzbrief" | EUR 99–299 / month / company |

## Development

Uses **pnpm**.

```sh
pnpm install
pnpm dev        # http://localhost:8080
```

Design source: Figma file `GzbHAa9hXQu7Vci5mI4t2i` (Variante A, mobile mockups). The hero orb from Figma is replaced by an animated voice waveform.

CTA links come from `.env.local` (see `.env.example`): `VITE_CALENDLY_URL` for the Erstgespräch booking (the hero email is passed on as `?email=`), `VITE_DEPOSIT_URL` for the Stripe payment link (490 € Gründungskunden-Anzahlung), `VITE_SAMPLE_DOSSIER_URL` for the sample dossier. Without them the buttons jump to sections on the page.

Before going live: Impressum and Datenschutz pages, self-hosted fonts instead of Google Fonts, cookie consent + ad tracking (`docs/COOKIE_CONSENT_SETUP.md`).
