# Tacita – 6-week demand test (v1, 2026-10-19)

**Window:** Mon 2026-10-19 → Fri 2026-11-27. Decision memo on Fri 2026-11-27.
**Goal:** answer three questions with evidence, not opinions:

1. **Pain:** do owners and HR/QM leads have a concrete, recent, costly hand-over problem?
2. **Pay:** will someone commit money (deposit, paid pilot, signed LOI) before a product exists?
3. **Talk:** will departing experts actually pick up the phone and talk, call after call?

No product build until these are answered. We are Wissbert: a human runs the calls.

Changes from v0 (2026-10-07): dated week-by-week schedule; added two demand channels (fake-door landing page with small ad test, channel-partner referrals); pilots are paid by default; successor usefulness gets an early read only (the full 4-week question log runs past the decision date).

## Riskiest assumptions, ranked

| # | Assumption | Why risky | Test in this plan |
|---|---|---|---|
| 1 | A retiring tradesperson / owner picks up 8–15 times and talks 15 min | Pitch admits "retirees may not take part". Everything depends on it. | Concierge pilots, human caller. Completion rate per call. |
| 2 | Someone pays per case at EUR 1.5k–3.9k | Segment A (Marek) is price-sensitive; segment C may have a different buyer (QM / IP). | Commitment ask at end of every problem interview; paid pilots; landing-page payment link. |
| 3 | The pain is acute enough to act on now, not "someday" | Succession is famously postponed. | Problem interviews: recent incident, unprompted. Ad CTR on trigger keywords. |
| 4 | A valuer, bank or buyer credits the dossier | Core of the "higher sale price" promise. | 5 channel interviews with a sample dossier. |
| 5 | The dossier answers the successor's real questions | If the successor still calls the old owner, it failed. | Early read: successor brings 10 open questions, score answered from archive. |
| 6 | STT survives dialect and non-native German | Blocker for the voice channel, cheap to test. | Run pilot recordings through 2 STT providers, error rate on domain terms. |

## Segments

Marek's value × frequency segments plus the pitch's succession segment and the channel.

| Seg | Who | Where to find them | Likely offer |
|---|---|---|---|
| A. Low-value, high-churn (restaurants, retail) | Owner / Betriebsleiter | Network, Gastro-WKO | Subscription EUR 99–299 / month (onboarding) |
| B. Valuable, repeated (facility maintenance, water, utilities, municipalities) | Head of maintenance, HR, QM | Wiener Wasser, Energie AG, Gemeinden, Hausverwaltungen | Retirement case EUR 3,900 / framework |
| C. Extreme value, proprietary (electronics, CNC, special machinery) | Production manager, QM / ISO officer | IV contacts, Mechatronik-Cluster OÖ | Retirement case + confidentiality package |
| D. Succession owners 55+ (workshops, crafts) | Owner | WKO Nachfolgebörse, tax advisors, Innungen | Succession EUR 2,490 or 490 + 1% |
| E. Channel | Steuerberater, M&A broker, bank succession desk | 120 Ventures network, Kammer | Referral partner |

Focus: **B, C, D** get the pilots. A gets 3 interviews only (to test the subscription angle). E is 5 interviews.

## Demand tracks (run in parallel)

### Track 1 – Problem interviews (target 20 + 5 channel)
Mom-Test style, no pitching in the first 20 minutes, 30 min each.

1. Who left (or will leave) in the last / next 12 months whose knowledge worried you?
2. Walk me through the last hand-over. What broke afterwards?
3. What did you do about it? What did it cost (time, money, customers)?
4. Who else was involved? Who decided, who paid?
5. What would the ideal hand-over look like?
6. Only then: show the German one-pager and sample dossier. **Ask for the commitment** (see Track 2).

Log every interview in `docs/feedback/YYYY-MM-DD-<name>.md` and one row in the tracker.

### Track 2 – Commitment ladder
Count actions, not compliments. Every interview ends with the highest rung the person will take:

| Rung | Signal | Weight |
|---|---|---|
| 0 | "Interesting, keep me posted" | 0 |
| 1 | Introduces a colleague / the departing person | 1 |
| 2 | Signs a non-binding LOI with a named case and date | 2 |
| 3 | Pays a EUR 490 pilot deposit (credited to the full price) | 3 |
| 4 | Pays full pilot price or signs framework (≥ 3 cases) | 5 |

### Track 3 – Fake-door landing page + ad test (weeks 2–4)
- German landing page, two variants: **"Betrieb übergeben, Wissen behalten"** (owners, seg D) and **"Pensionierung ohne Wissensverlust"** (HR/QM, seg B/C).
- CTA: book a 20-min Erstgespräch (Calendly) plus a Stripe link for the EUR 490 "Gründungskunde" deposit, refundable.
- Ads: Google Search (keywords like *Betriebsnachfolge Übergabe*, *Wissenstransfer Pensionierung*, *Know-how Sicherung Mitarbeiter*) and LinkedIn (HR/QM titles, AT, companies 200+). Budget **EUR 600–800** total over 3 weeks.
- Measure: CTR per variant, visitor → booked call, booked call → commitment rung.
- Every booked call is also a Track 1 interview.

### Track 4 – Concierge pilots (weeks 3–6)
3–5 real departing people, ideally one each in B, C, D.
- A human calls 8 times, 15 min, over 3–4 weeks. Record with consent. Incident-based question guide.
- Transcribe with off-the-shelf STT, build archive + dossier with LLM plus manual editing (Notion page or chat over transcripts is enough).
- Charge something. Minimum EUR 490.
- Week 6: successor brings their 10 most pressing open questions; score how many the archive answers.
- Optional: from call 5 on, one pilot swaps in a hosted voice agent (Vapi / ElevenLabs Conversational) to test tolerance for an AI caller. Only if humans talk first.

### Track 5 – Channel probes (weeks 2–4)
5 conversations with tax advisors, M&A brokers, bank succession desks or the WKO Nachfolgebörse. Show the sample dossier. Ask:
- Would this change your valuation or financing view? Why / why not?
- Would you refer one client in the next 4 weeks? (That is the commitment.)

## Week-by-week

| Week | Dates | Focus | Deliverables by Friday |
|---|---|---|---|
| 1 | Oct 19–23 | **Setup + first talks** | Lead list of 50 warm contacts across B/C/D/E (+3 for A); outreach messages sent; German one-pager; sample dossier from one mock interview (e.g. a retired relative of someone in the network); tracker; 8+ interviews booked; 2–3 done |
| 2 | Oct 27–30 (Mon 26 = Nationalfeiertag) | **Interviews + launch fake door** | 6–8 interviews done; landing page live, ads running; 2 channel interviews; first commitment asks |
| 3 | Nov 2–6 | **Interviews + convert to pilots** | 20 interviews done total; ≥ 3 pilots agreed and paid or LOI; pilot calls 1–2 done; 2 more channel interviews |
| 4 | Nov 9–13 | **Pilots running, ads close** | Pilot calls 3–4; ads stopped and analysed; last channel interview; **mid-point check** (see below) |
| 5 | Nov 16–20 | **Pilots + first dossiers** | Pilot calls 5–6; STT test on recordings; first draft dossier to one buyer |
| 6 | Nov 23–27 | **Pilots finish, decide** | Calls 7–8; successor question test; dossiers delivered; scorecard; decision memo + 120 Ventures presentation |

**Mid-point check (Fri Nov 13):** if fewer than 8 of the first 20 interviews described a recent, costly incident **and** no one reached rung 2, stop the pilots early and write the stop/pivot memo.

## Scorecard and thresholds

| Question | Metric | Go threshold |
|---|---|---|
| Pain | Interviews with concrete, recent (≤ 12 months), costly incident, unprompted | ≥ 8 of 20 |
| Pay | Commitments at rung 3+ | ≥ 3 (at least 1 paid in full or framework) |
| Pay | Total commitment points | ≥ 15 |
| Pull | Landing page: visitor → booked call (best variant) | ≥ 3% |
| Pull | Booked calls from ads | ≥ 5 |
| Talk | Pilot calls completed of 8, average | ≥ 6 |
| Talk | Interviewees who'd do more calls | ≥ 4 of 5 |
| Value (early) | Successor's 10 questions answered from archive | ≥ 6 of 10 |
| Channel | Advisors who refer a real client | ≥ 2 of 5 |
| Tech | STT word error rate on domain terms | Note it; blocker only if > 25% after both providers |

## Decision (Fri 2026-11-27)

- **Go:** pain + pay + talk all hit. Build the voice agent and archive MVP for the segment with the best mix of completion rate, willingness to pay and reachable channel.
- **Narrow:** only one segment hits. Drop the rest and run a second 6-week cycle in that segment only.
- **Pivot:** people talk but no one pays per case. Test the subscription / onboarding angle (seg A) or sell through the channel (seg E) instead.
- **Stop:** completion rate below 50% with a human caller (an AI caller will not fix it), or no one above rung 1.

## Effort and budget

| Item | Estimate |
|---|---|
| Interviews (25 × ~1.5 h incl. prep and notes) | ~38 h |
| Pilot calls (4 pilots × 8 calls × ~2 h) | ~64 h, need a second caller |
| Landing page, ads, materials | ~15 h |
| Ads | EUR 600–800 |
| Tools (Carrd/Framer, Calendly, Stripe, STT) | ~EUR 50 |
| **Total** | ~115 h over 6 weeks (~20 h / week), EUR ~850 |

## Open questions

- Which segments do we have warm contacts for right now? Week 1 starts from the network, not cold outreach.
- Who is the second caller for the pilots?
- Does 120 Ventures have a tax advisor / M&A / bank contact for Track 5?
- Is taking deposits from a 120 Ventures idea-stage project OK (invoicing entity, refunds)?
