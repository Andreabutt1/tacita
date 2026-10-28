# Changelog

Overview of user-facing changes.

---

## 2026-10-28

### Tacita landing page
- New German landing page „Betrieb übergeben. Wissen behalten.“ for owners before a hand-over, built from the Figma design
- Hero with an animated voice waveform, interview cards and an email field that leads to booking the Erstgespräch
- Sections: problem with sourced numbers, three steps, dossier and company memory, audiences with prices, privacy, offer to reserve a place (490 € refundable deposit), FAQ, closing call to action
- Mobile layout with menu and a sticky „Platz sichern“ button
- Booking, deposit and sample-dossier links configurable via environment variables

---

## 2026-08-20

### Third-party branding fully removed
- Removed the third-party component-tagger dev dependency from `package.json`, `vite.config.ts`, and the lockfile
- Reworded the README so no external tool brand names remain

---

## 2026-08-18

### Third-party branding removed
- Deleted the third-party favicon (`public/favicon.ico`) — browsers now show a neutral default icon until a venture-specific favicon is added
- Removed third-party og:image, twitter:image, and twitter:site meta tags from `index.html`

---

## 2026-04-16

### README updated for pnpm and testing
- Switched all install/dev commands in the README to `pnpm`
- Added a Testing section covering Vitest (unit) and Playwright (e2e), with a pointer to the `add-tests` Cursor skill

---

## 2025-04-15

### Edge function conventions & example
- Added `hello-world` example edge function with auth and handler pattern
- CORS now uses env-based origin allowlist (`CORS_ALLOWED_ORIGINS`) instead of wildcard
- Edge functions use `--no-verify-jwt` with in-function auth instead of legacy gateway JWT check
- All edge functions must be registered in `supabase/config.toml` for auto-deploy
- Updated security rules and cursor rules to reflect the new conventions
