# Cole Perkins — Personal Professional Website

## Project Overview
A multi-page static personal website for Cole Perkins, a middle school CS teacher (Robert Adams Middle School, Holliston MA) with a background in software development (Solutions Architect at Appway). Cole is seeking roles in instructional design, experience design, or ed-tech at museums, ed-tech companies, or architecture firms.

## Design
- **Style**: Academic/editorial aesthetic — serif headings (Playfair Display), sans body (Source Sans 3), muted warm tones, lots of whitespace
- **Accent color**: Sienna (#8b4513)
- **No em-dashes anywhere** — Cole prefers commas or restructured sentences instead
- **Minimal, classic** — think museum websites or NYT

## Site Structure
```
index.html          — Home (hero + "Currently Working On" section)
about.html          — Background, philosophy, interests
portfolio.html      — Work hub (featured Care Garden + category cards)
  work-student.html     — Student-Facing (Rams Care, Guess That Teacher)
  work-curriculum.html  — Curriculum (VEX modular system, Creative Computing, AI & Ethics)
  work-apps.html        — Apps (PBIS dashboard, Unified Arts site, Curriculum platform)
  work-special.html     — Special Projects (microbit drones, multiplayer Scratch, microbit×Scratch, Remy)
  work-clubs.html       — Clubs (Computer Club, Camera Club)
guess-the-teacher.html  — Detail page for Guess That Teacher project
cv.html             — Full CV
contact.html        — Contact info
style.css           — Shared stylesheet
images/             — All media assets
MEDIA.md            — Reference for expected image/video filenames
LINKEDIN_POST.md    — Draft LinkedIn posts about Care Garden
HOSTING.md          — Step-by-step GitHub Pages hosting guide
```

## Key Links
- GitHub: https://github.com/perkinscole
- Care Garden (p5.js sketch): https://editor.p5js.org/RAMS2023Teacher/full/CWu-kavOR
- Rams Care Data Dashboard: https://rams-pbis-data-explorer.streamlit.app/Student_Insights
- Unified Arts Website: https://rams-unified-arts.netlify.app
- Guess That Teacher: has a repo on github.com/perkinscole (couldn't access from previous session due to network restrictions)

## Images in /images/
Already present:
- headshot.jpg — Cole's professional headshot (home page)
- care-garden-group.jpg — Group photo at Care Garden display (portfolio)
- care-garden-install.jpg — Care Garden installation in progress (portfolio)
- care-garden-1.mp4 — GoPro video of installation (**566 MB, needs compression before hosting**)
- care-garden-2.mov — **Was actually VEX content, renamed to vex-demo-2.mov**
- guess-teacher-test.jpg — Students testing Guess That Teacher on classroom TV (student-facing page)
- classroom-robotics.jpg — Students with VEX robots (curriculum)
- classroom-maze.jpg — Robot in wooden maze (curriculum)
- classroom-supplies.jpg — Organized maker shelves (curriculum)
- vex-maze-1.jpg — Modular maze with ramps (curriculum)
- vex-maze-2.jpg — Complex navigation course (curriculum)
- vex-demo.mov — VEX demo video (curriculum)
- vex-demo-2.mov — Second VEX video, was originally misplaced on Care Garden page (curriculum)

## Nav across all pages
Label is "Work" (not "Portfolio") in the nav bar. All pages use the same header/nav/footer pattern.

## Current TODO / Next Steps
1. **Host the site** — GitHub Pages recommended (see HOSTING.md). Compress care-garden-1.mp4 first (566MB > 100MB GitHub limit).
2. **Guess That Teacher page** — detail page exists (guess-the-teacher.html) but was written without access to the actual GitHub repo. Should be updated with real repo details (tech stack, screenshots, README content). The repo is at github.com/perkinscole.
3. **LinkedIn post** — drafts are in LINKEDIN_POST.md, ready to post with photos.
4. **Missing images** — rams-care-screen.jpg (Rams Care app screenshot) not yet added.
5. **Video compression** — all .mov files should ideally be converted to .mp4 for better browser compatibility.

## Style Notes
- Captions use `<figure>` + `<figcaption>` with italic serif styling
- Project detail pages use `.project-block` sections with `.meta` line for context
- "In Progress" status uses `.status.in-progress` class (amber color)
- Category hub cards on portfolio.html use `.category-card` class
- Special projects page has anchor IDs: #microbit-drones, #multiplayer-scratch, #microbit-scratch, #remy

## Contact Info (for CV/contact pages)
- Email: cole.perkins@gmail.com
- Phone: (617) 763-6777
- Location: Sherborn, MA
