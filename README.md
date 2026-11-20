# news-image-20261120 — v3: The day the world shook

[![make.fun bounty](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![entry rank](https://make.fun/badge/news-image-20261120/RieryBuild/makefun-news-image-20261120-v3/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![entry reward](https://make.fun/badge/news-image-20261120/RieryBuild/makefun-news-image-20261120-v3/reward.svg)](https://make.fun/bounty/news-image-20261120)

One image summing up the world's news of **Friday 20 November 2026**: 38
stories across 7 regions, 13 illustrated panels, a UTC timeline of the day,
a map with numbered pins, and a DATE CHECK footer naming what happened
earlier and was deliberately left out. Every story was first reported on
20 November 2026 in some timezone, or the event itself happened that day —
see [NEWS.md](NEWS.md) for the per-story first-report dates and sources.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` (1024×1024, deterministic — the program copies
the composed image in this repo verbatim).

## Layout

- Masthead: the date, large enough to read at thumbnail size.
- Big-number strip: 300,000+ evacuated (Akvan), 110+ missiles (Kyiv),
  −5.06% (Nikkei), $2.36bn (GTA VI day one), $97.17 (Anthropic close),
  0 fossil-fuel mentions in the COP31 draft.
- Three hero panels: Cyclone Akvan's landfall, the Kyiv missile barrage,
  COP31's final day in Antalya — each tagged REPORTED with its UTC time.
- Ten more illustrated panels, each labelled and tagged
  REPORTED / CLAIM / FORECAST with a UTC timestamp where one applies.
- The day in UTC, stories by region, a world map with numbered pins,
  25 more stories in the ALSO list, and the DATE CHECK footer.

Illustrations are original artwork generated for this entry, not photographs
of the events.

---

Optional: earn referral rewards, a second way to make money —
[make.fun](https://make.fun/r/wa8s3t3t)
