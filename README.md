# Soumatome N1 Kanji

Static web app for an interactive Soumatome-style N1 Kanji notebook.

## Structure

```text
/
├── index.html
├── style.css
├── app.js
├── assets/
│   ├── images/
│   │   ├── mascot/
│   │   ├── kanji/
│   │   ├── bonus/
│   │   ├── scenes/
│   │   ├── decorations/
│   │   └── backgrounds/
│   └── audio/
└── js/
    ├── minggu1/
    │   ├── hari1.js
    │   ├── hari2.js
    │   ├── hari3.js
    │   ├── hari4.js
    │   ├── hari5.js
    │   ├── hari6.js
    │   ├── hari7.js
    │   └── bonus.js
    ├── minggu2/
    ├── minggu3/
    ├── minggu4/
    ├── minggu5/
    ├── minggu6/
    ├── minggu7/
    └── minggu8/
```

There are 56 day modules and 8 bonus modules.

## Day 1 source

Week 1 Day 1 is populated from the supplied `1日目 五・語・悟` reference. The dataset is organized one kanji per card and keeps the source vocabulary groupings.

The remaining day files are intentionally empty templates.

## Visual direction

The CSS variables are derived from the attached reference imagery: warm notebook paper, charcoal ink, muted navy, dusty rose, soft blush, lilac-gray accents, red ruled margin, tape/paper imperfections, handwritten-note feeling, and dark moonlit vampire accents.

The supplied character imagery has been placed under `assets/images/mascot/` and `assets/images/backgrounds/` so it can be replaced later.

## Run

ES modules need a web origin. From the project folder:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Do not use `file:///.../index.html` if the browser blocks module imports.

## Data editing

To add Day 2 content, edit:

```text
js/minggu1/hari2.js
```

Keep the file data-only. UI logic belongs in `app.js`.

For a new bonus, edit:

```text
js/mingguX/bonus.js
```

## Audio

Default music is OFF. Add optional local files:

```text
assets/audio/study.mp3
assets/audio/bonus.mp3
assets/audio/vampire.mp3
```

No remote copyrighted music is loaded.

## Browser storage

Everything persists in one localStorage namespace:

```text
soumatome_n1_data
```

Stored values include language, theme, music settings, kanji status, completed days, and completed weeks.

## Notes

The 01:00 Easter egg activates when the local browser hour is `1`. The site keeps the selected theme setting in storage; the Easter egg temporarily adds the special atmosphere class.
# soumatome-n1-kanji
