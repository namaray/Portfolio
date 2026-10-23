# Projects

## ARGUS — AI-Powered Smart Glasses for the Visually Impaired

### Overview
ARGUS is his ongoing undergraduate thesis: on-device AI navigation glasses for people with visual impairments, with a custom 3D-printed frame that houses the cameras and compute. Supervisor: Dr. Novia Nurain, Assistant Professor, CSE, BUET.

### What he did
- Led the initial planning: defined the problem scope, system requirements and hardware selection.
- Planned and moderated a focus group discussion (FGD) with visually impaired participants to gather user needs.
- Built the real-time perception pipeline on the Jetson Orin Nano: stereo depth estimation, object detection and tracking, and semantic segmentation for obstacle and path awareness.
- Integrated the voice interface: Whisper speech recognition, a quantized on-device LLM for commands, and text-to-speech.

### Tech
Jetson Orin Nano, stereo depth, object detection (YOLO), Whisper, quantized LLMs, 3D printing.

### Recognition
1st Runner-Up at the UIU FYDP 1 (thesis) project show, Fall 2025.

---

## Portable Braille Printer

### Overview
A low-cost, battery-powered Braille printer that scans printed text, converts it with OCR, and embosses it as Braille onto A4 paper. Supervisor: Dr. Novia Nurain (BUET); co-supervisor: Sidratul Tanzila Tasmi, Lecturer, CSE, UIU.

### What he did
- Engineered the device around a Raspberry Pi and custom electromechanical hardware: NEMA 17 stepper motors on DRV8825 drivers, solenoid embossing, IR paper sensors and MOSFET switching.
- Ran a focus group and a usability study, then a thematic analysis in Taguette to derive design requirements.

### Tech
Raspberry Pi, Python, OCR, DRV8825, NEMA 17, IR sensors, MOSFETs, 3D printing.

### Links
GitHub: https://github.com/namaray/Portable-Braille-Printer — a demo video is on the portfolio.

---

## ShareStrength — Community Support Platform

### Overview
A full-stack community-support platform for people with disabilities: helper matching, task tracking, messaging, donations, a marketplace, and accessible voice and eye-tracking controls.

### What he did
Wrote the requirements (SRS) and did full-stack development.

### Tech
React, Vite, Laravel, PHP, MySQL, Tailwind CSS, REST APIs.

### Recognition
Won BDT 20,000 pre-seed funding through the DEIED project (ICT Division and World Bank), via Launchpad by UIHP@UIU.

### Links
GitHub: https://github.com/meteorboyF/ShareStrength-SL

---

## Maternify — Prenatal & Postnatal Health Tracker

### Overview
A team project: a symptom-tracking platform for expecting and new mothers, with intelligent risk-flag generation to help them monitor their health.

### What he did
Main front-end designer.

### Tech
React, Python, AI APIs.

---

## Other work

- **Last Light**: a one-thumb neon arcade game for Android. Turn a shield around a glowing core to block incoming shapes and let the healing light through. 8 levels and 4 difficulties. Built with TypeScript, HTML Canvas and Capacitor.
- **Oushudh Bondhu**: a hackathon project (Build With Gemma @ Bangladesh, team of 4). Photograph a handwritten prescription and Gemma explains each medicine in plain Bangla and builds a dose timetable. He wrote the submission and drew the architecture and user-flow diagrams.
- **ReplayCS**: an EdTech platform (team of 2) where students predict what a program does next before the answer is revealed. He led the UX redesign and front-end: a 4-step onboarding, a calmer landing page and a light theme. Live at https://replaycs.vercel.app. Built with SvelteKit and tested with Playwright.
- **Messages Archive Viewer**: an offline viewer for Android SMS/MMS/RCS backups styled like Google Messages. Nothing is uploaded; the Android version asks for zero permissions. JavaScript, IndexedDB, Android WebView.
- **BanglaSlumNet** (research): detecting informal settlements in Dhaka from Sentinel-2 satellite imagery, where optical-only models confuse dense formal areas with slums. Fuses a vision-language backbone with night-light, population and road data. PyTorch, Google Earth Engine. GitHub: https://github.com/namaray/BanglaSlumNet
- **Does structure matter?** (team research): an empirical study of whether data-flow graphs help code transformers (CodeBERT, GraphCodeBERT, UniXcoder) find vulnerabilities in decompiled Android apps.
- **Anomaly detection in adverse imaging** (research): a benchmark of test-time "rescue" preprocessing versus training-time augmentation for PatchCore and PaDiM on MVTec-AD and VisA, with significance tests.
- **Linguistic uncanny valley study platform**: a web app for a writing study in which participants write, an LLM edits their text within seconds, and they review the AI-edited versions. Runs on free tiers (Node.js, Turso, Groq, Vercel).
- **Résumé chatbot**: this assistant, the chat bubble on his portfolio. It answers only from his real documents, so it doesn't make up skills. It runs as an API route in the portfolio's Next.js app on Vercel and answers with a Groq-hosted model.
- **Portfolio website**: namare-portfolio.vercel.app, built with Next.js, Tailwind CSS and Framer Motion in a light, hand-drawn notebook style.
