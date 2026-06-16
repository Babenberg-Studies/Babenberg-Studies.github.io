# babenberg-studies.github.io

Public landing page for **SymptomTrack** (App Store).

- **Live URL:** https://babenberg-studies.github.io/
- **App repo:** private (`rosteoman/SymptomTrack`) — source code is not published here.

Static HTML/CSS/JS, dark theme, EN/ES.

## Deploy

From this folder, after the GitHub org and repo exist:

```bash
git push origin main
```

Or run the setup script from the SymptomTrack repo:

```bash
./scripts/setup-babenberg-studies-pages.sh
```

## Local preview

Open `index.html` in a browser (double-click in Finder), or:

```bash
python3 -m http.server 8765
# → http://127.0.0.1:8765
```

## Assets to replace later

- App Store screenshots in `assets/screenshots/`
- YouTube embed in place of `.video-placeholder`
- User manual link in Help section
