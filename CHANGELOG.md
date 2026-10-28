# Changelog

Overview of user-facing changes.

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
