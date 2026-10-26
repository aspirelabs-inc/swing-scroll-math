# Swing scroll math

A free, browser-local screen-time calculator by [Aspire](https://aspireai.com/), makers of [Swing](https://swing.so/), the iPhone app blocker.

The calculator multiplies a proposed change in daily scrolling minutes by a chosen number of days. For example, 120 minutes now and 100 minutes planned, over seven days, gives a **hypothetical difference of 140 minutes**. It does not read device usage, predict behavior or prove that an app saves time.

Production destination: [swing.so/scroll-time-calculator/](https://swing.so/scroll-time-calculator/).

## Run locally

No dependencies or build step.

```sh
python3 -m http.server 4189 --bind 127.0.0.1
```

Open `http://127.0.0.1:4189/`. The tracker and presentation downloads are included in `resources/` for local use. Navigation and setup links use the Swing website's root paths in production; use the full setup link below when running this standalone preview.

## Test

```sh
node --test calculate.test.mjs
```

Tests cover zero, increases, fractional inputs, missing/invalid inputs, day boundaries and a leap-year duration. Six preview presets and spacing/size controls are available with `?debug=1`. The normal tool does not show these controls. Reduced-motion preferences take priority.

## Privacy and limitations

- No accounts, uploads, cookies, local storage or analytics.
- Numbers remain only in memory in the open tab. Refreshing clears them.
- No external scripts or runtime packages. The page blocks outbound connection requests through its Content Security Policy.
- The worksheet is a manual personal comparison. Blank days are missing, not zero. Keep the same device and app scope across completed weeks.
- Swing is optional. The calculator, tracker and presentation require no subscription.
- This repository does not establish a research finding, health benefit or academic outcome.

The presentation uses existing first-party Swing screenshots. Product behavior and requirements are described on the [setup page](https://swing.so/how-it-works/). Swing's whole-app protection does not mean selective Instagram Reels blocking with DMs continuously available.

This is source availability for transparency and inspection. No open-source license has been selected. GitHub Pages is not configured; the canonical hosted tool lives on Swing's owned domain.

Get trolled when you scroll.
