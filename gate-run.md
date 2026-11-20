# gate-run.md — news-image-20261120 v3

Gate run 20 Nov 2026 ~23:55 WITA (builder session 5a772ee6).
Verdict: **PASS on all builder-verifiable checks.** Two items are
coordinator-owned at submit time and are flagged, not hidden: MQ3 live
quota re-check (makefun API unreachable from this subagent sandbox) and
the local kit check 14/0 with transcripts (coordinator runs bundle +
check pre-submit, v1/v2 precedent).

## MQ1: Can this entry be submitted RIGHT NOW, end to end? — PASS

```
1. Competition: news-image-20261120 — entries close 2026-11-22T00:00Z
   (22 Nov 2026 08:00 WITA), re-read fresh at gate time from the kit's
   competition.yaml (opens_at 2026-11-20T00:00Z, deadline 2026-11-22T00:00Z,
   phases dev 20 Nov 00:00Z – 22 Nov 00:00Z) + RULES.txt.
   NOTE: GET /api/competitions/{slug}/requirements was NOT callable from
   this subagent sandbox (makefun connector credentials 403 — "not
   available to the sandbox"); the kit bundle is the same requirements
   snapshot (bundle_sha256 63afd6ef…). Coordinator re-verifies live.
2. Deliverables: main.ts (Node 22, root) ✓, entry.png (1024×1024,
   289,352 B ≤ 1 MiB) ✓, LICENSE (MIT, OSI) ✓, README.md (3 live badges
   + make.fun link, no placeholders) ✓, NEWS.md ✓, gate-run.md ✓,
   .makefun/owner.json (wallet 6do8) ✓. Repo public, created after open.
3. Checks: image ≤1 MiB ✓, ≤1024×1024 ✓, whole PNG ✓, deterministic
   2× byte-identical (sha256 1191367974759eca2f362e40719a4f67a885a00dc77d195246ebe44ccb739bb6,
   main.ts run 3× locally incl. post-revision) ✓, stdlib-only ✓,
   no network ✓, repo_readme badges per RULES.txt ✓, repo_about set by
   coordinator via PAT pre-submit (v1 precedent) ✓.
4. Submit path: kit CLI submit, repo
   https://github.com/RieryBuild/makefun-news-image-20261120-v3,
   one public commit (SHA recorded in the delegation report after push;
   gate-run.md is itself in that commit so the SHA cannot be inside it).
5. Cost: Time ~10 min to submit. Capital: $0.
```

## MQ2: Does this entry clear the competition's bar? — PASS (evidence, not promise)

Bar = top-50 prizelist ($50/$30/$15/$5/$3). Judged/visual competition —
no grade-local practice score exists for it; evidence is the feed-first
top-5 study (20:36 WITA, coordinator) + multi-model review + self-critique
cycles. Standing v2 "Onward Lantern": live rank 1552/7955, judge 972,784
(CI 963,278–982,290); #50 cutoff 987,732 at 20:36. v3 fixes v2's two named
weaknesses: (1) thumbnail legibility — masthead + 3 hero headlines now
CLEARLY readable at 300px (condensed bold 24px, white-on-navy bars;
v2 was "just legible, borderline PASS"); (2) the 19 Nov Senate 51–48 vote
is EXCLUDED outright (named in the DATE CHECK footer, no 19-Nov number
anywhere in the image); hero-2 mismatch fixed (Kyiv panel depicts the
missile barrage). The prizelist bar is a quality target, NEVER a promised
outcome — a practice-style claim of rank would be an overclaim.

## MQ3: Is the submission window actually open for this account? — CONDITIONAL PASS

Last live quota read 20:36 WITA (coordinator): can_submit TRUE, 2 made /
2 kept, day cap 1/3 left, hard limit 18 left. Same UTC day at gate time
(day rolls 08:00 WITA 21 Nov); no submission by this account in this
competition since 20:36. Live re-check at gate time was NOT possible from
this subagent sandbox (makefun connector 403, see MQ1). **Coordinator
MUST re-check GET /api/competitions/news-image-20261120/quota live before
submitting; do NOT submit if can_submit is false or entries_left is 0.**
Deadline 22 Nov 08:00 WITA is ~32 hours ahead at gate time.

## MQ4: Signed by the right identity, through the right route? — PASS

Wallet 6do8 ONLY (6do8zGw4FPLCB1Cq44G8r8KwQccbhHUqtAptaRji6ALk) —
owner.json names it; coordinator signs with --keypair (escrow
competition). Repo pushed via the GitHub PAT route (Git Data API,
custom.github-pat helper, this session), one public commit. No other
wallet, no other route.

## MQ5: Deliberate new submission, not a duplicate? — PASS

- §4 rebuild supersedes standing v2 (01a1f7e9, rank 1552/7955, outside
  the top-50 prizelist when the trigger fired 20:36) — intended,
  Force_Last. This is the FIRST trigger against the v2 standing entry
  (v2's trigger was against v1; the rebuild-once rule is per standing
  entry, and it is respected).
- Not a duplicate: new image (sha256 11913679… vs v2's fcb7967a…), new
  composition (Angle A "The day the world shook"), corrected date
  discipline (38 stories, 24 named exclusions, grey-zone reasoning in
  NEWS.md), new panels (13 freshly generated).

## MQ6: Prove the entry works — PASS

- main.ts run 3× locally with MAKEFUN_OUTPUT_DIR (2× before the
  byte-compare strengthening, 1× after): all outputs byte-identical to
  the committed entry.png (sha256 11913679…).
- compose.py 2× byte-identical per variant (v1 dfde1927…, v2 07a160e6…,
  v3 11913679…).
- entry.png viewed full-size + at 300px (v1, v2, v3): date + 3 leads
  clearly readable at 300px in v3 — clear PASS, not borderline.
- Self-critique cycles: v1 → 6 weaknesses fixed (hero deck overflow,
  panel title/meta overflow, ALSO clipping, 305,493 B over target) →
  v2 (289,625 B) → 1 weakness fixed (hero-1 deck orphan) → v3
  (289,352 B) → full cycle found no material weakness. Best variant
  reported; v1/v2 kept in the build dir only.
- Local kit check 14/0 with transcripts: coordinator's step (bundle +
  check pre-submit, v1/v2 precedent). Not yet run — flagged, not claimed.

## MQ7: Never-submit list? — PASS (no match)

- Panels are REAL image-model generations (13 via media pipeline), never
  code-drawn. (The schematic map is a locator diagram, as in v1/v2.)
- main.ts is stdlib-only (node:fs, node:path).
- Recording/transcript coverage: see MQ8. In-session revision present
  (main.ts written + revised twice, 3 messages).
- Wallet 6do8 only; PAT route only; no claim code in chat/repo/transcripts.
- No capital needed ($0, free competition).
- Not a duplicate (MQ5). Visual audit rule SUSPENDED (Reza 20 Nov ~15:27)
  — see Gate 3.

## MQ8: Session check — PASS (builder side; bundle verified by coordinator)

```
1. Session:         builder 5a772ee6-4f62-414f-92c0-0bc41861ffca
2. Brief received:  20 Nov 2026 23:25:28 WITA (task handoff)
3. First action:    panel generation ~23:27 WITA — AFTER the brief,
                    AFTER the competition opened (2026-11-20T00:00Z),
                    so thinking_in_window holds.
4. Coverage:        this session built the whole entry (research, 13
                    panels, compose.py, entry.png, main.ts, README,
                    NEWS.md, LICENSE, owner.json, gate-run.md).
                    The coordinator bundles this session's transcripts
                    (+ any fix sessions) and runs the local kit check
                    with transcripts pre-submit (v1/v2 precedent).
5. In-session revision: main.ts written fresh, then revised twice
                    in-session (size check, then byte-compare check
                    after the OpenRouter review) — 3 messages touch it.
```

## Gate 0: Reality — PASS

- [x] Repo public at one commit (SHA in delegation report after push).
- [x] Every deliverable from /requirements in the repo (MQ1 §2).
- [x] Entry verified on the exact committed bytes (main.ts 3× runs).
- [x] Evidence captured: entry.png sha/bytes/dims, quota response
      (20:36), session id + timestamps.

## Gate 1: Quality — PASS

- [x] Multi-model review done (RESTORED 18 Nov):
  - OpenRouter :free, GET /models re-checked at review time (12 :free
    models listed 20 Nov ~23:5x WITA); reviewer
    nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free, cost $0.
    Verdict: FAIL with 4 points. Adjudication (no second-model word
    taken on faith): 1 VALID — size-only copy check can't prove content
    equality → FIXED (byte comparison via readFileSync + Buffer.equals,
    re-tested byte-identical). 3 REFUTED by live evidence: ESM syntax
    "may not run" (it ran 3× under node main.ts, same style as the
    kit's own starter); statSync-on-URL "not guaranteed" (worked, and
    is now gone with the byte-compare fix); import.meta.url "breaks if
    cwd changes" (false — it is module-relative, not cwd-relative).
    Determinism proven by sha256 across runs, not by the check.
  - Gemini gemini-3.8-flash for text/copy: SKIPPED — HTTP 503 Service
    Unavailable at review time (503s have NOT cleared). Recorded gap,
    NOT a Gate 1 FAIL, per the gate rule. No Xingchiapi / GPT-6.1-sol
    used, per the brief.
- [x] Review exchange recorded above (model, verdict, issues + fixes).
- [x] Practice grade N/A for this judged/visual competition (MQ2).
- [x] Feed-first study done (top-5 20:36); v3 demonstrably stronger
      than standing v2 (MQ2).

## Gate 2: Dedup — PASS

- [x] Not a duplicate of the standing entry (MQ5); Force_Last intended.
- [x] Rebuild-once rule respected (first trigger for v2).
- [x] Quota: last live 20:36 can_submit TRUE; live re-check at submit
      time is the coordinator's (sandbox block, MQ3).

## Gate 3: Submission quality — PASS (builder items; coordinator items flagged)

- [x] README matches the requirements template (RULES.txt): 3 live
      make.fun badges (competition svg + rank.svg + reward.svg with
      {owner}/{repo} filled in), links to make.fun, no placeholders.
      About (website + topics) set by coordinator via PAT pre-submit.
- [x] Entry message + signature use wallet 6do8 only (coordinator,
      --keypair); repo via PAT route (MQ4).
- [x] Claim-code handling confirmed: claim codes go to ~/memory/
      2026-11-20.md ONLY (coordinator's job), never in chat/repo/
      transcripts. No claim code exists yet.
- [x] No secrets in the repo (grep run 20 Nov ~23:5x WITA; the only hit
      was "Navy-secretary" in NEWS.md — a false positive on "secret").
      No secrets in the review exchange (code + scores only, no keys).
- [x] Deadline still ahead at submit time (22 Nov 08:00 WITA, ~32 h).
- [x] Reza visual audit: SUSPENDED (Reza, 20 Nov ~15:27 WITA —
      "Hilangin aja aturan audit dulu ini" + "Gas semua submit").
      No audit stop; build proceeds to seal + submit on his standing Gas.

## Output

**All 8 questions pass (MQ3 conditional on the coordinator's live quota
re-check). All 4 gates pass. READY FOR SUBMIT** — coordinator: re-check
quota live, bundle + local kit check 14/0 with transcripts, set About
via PAT, seal + submit with --keypair (escrow).
