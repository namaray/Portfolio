# What the résumé chatbot knows about Namare

<!--
Every "- " bullet is one fact. This file is everything the chatbot knows:
the model answers from it, and the chat route only shows an answer made of
the words and numbers in this file. Keep each bullet a true statement in
plain words. To let the bot talk about something, add it here.
-->

## Identity and contact
- His full name is Namare Shakib Angkon. He is commonly called Namare. Pronouns: he/him.
- He is based in Dhaka, Bangladesh.
- Email: namare.shakib@gmail.com
- LinkedIn: linkedin.com/in/namare-shakib
- GitHub: github.com/namaray
- Portfolio website: namare-portfolio.vercel.app
- He is looking for research and engineering roles in HCI, accessibility and applied AI.

## Summary
- He is a final-year Computer Science and Engineering student at United International University (UIU) in Dhaka, graduating in November 2026.
- He works in HCI (human-computer interaction), building accessible technology, from AI-powered embedded hardware to web apps, and testing it with the people who will use it.
- He designs AI-enabled assistive systems and evaluates them through focus group discussions and usability studies.
- His accessible technology work includes smart glasses for people with visual impairments (ARGUS) and a portable Braille printer.

## How he works
- Most of his projects start with a conversation, not code.
- Step 1, listen: focus groups and interviews with the people a project is for.
- Step 2, define: turn what people said into requirements, using thematic analysis (Taguette) and written specifications.
- Step 3, build: whatever the project needs, from perception pipelines on a Jetson Orin Nano and stepper-motor rigs on a Raspberry Pi to 3D-printed housings and web apps.
- Step 4, test: usability studies, then back to listening.
- He values accessibility and impact, hardware and software working together, and honest evaluation that doesn't overstate results.

## Education
- B.Sc. in Computer Science and Engineering at United International University (UIU), School of Science and Engineering, June 2022 to November 2026 (expected).
- His CGPA at UIU is 3.93 out of 4.00.
- At UIU he received a 50% tuition waiver four times and a 25% tuition waiver twice.
- International Advanced Level (IAL / A-Levels) at Singapore International School, 2021, with results 1A 2B.
- IGCSE at Academia, 2019, with results 1A* 1A 3B.

## Work experience
- Freelance Annotator at TransPerfect Translation International Inc. (TransPerfect DataForce), 2021 to 2024, remote.
- At TransPerfect he annotated audio and video data and interpreted audio files to support the development of AI solutions.

## Skills
- Research methods: focus groups, usability testing, thematic analysis, user-centered design, Qualtrics, Taguette.
- AI and vision: stereo depth estimation, segmentation, object detection and tracking, OCR, Whisper speech recognition, text-to-speech, quantized LLMs.
- Programming languages: Python, C/C++, Java, JavaScript, PHP, SQL, HTML/CSS.
- Web: React, Vite, Tailwind CSS, Laravel, MySQL, REST APIs.
- Hardware: NVIDIA Jetson Orin Nano Super, Raspberry Pi, Arduino, stepper motor control, 3D printing.

## Achievements
- Champion, Poster Competition, Robolution 2025, MIST Robotics Club.
- Champion, Poster Competition, R&I Week 2025, UIU.
- 1st Runner-Up, Poster Competition, 1st S.N. Bose National Science Festival, BRAC.
- 1st Runner-Up, UIU CSE Project Show, FYDP 1 (undergraduate thesis), Fall 2025, for ARGUS.
- 1st Runner-Up, UIU CSE Project Show, Microprocessor Lab, Summer 2025.
- 1st Runner-Up, UIU CSE Project Show, Electronics Lab, Spring 2025.
- 2nd Runner-Up, UIU CSE Project Show, System Analysis & Design Lab, Spring 2025.
- Finalist, National Blockchain Olympiad (BCOL) 2025.
- Bronze medal, The Queen's Commonwealth Essay Competition.
- BDT 20,000 pre-seed funding for ShareStrength from Launchpad by UIHP@UIU, through the DEIED project supported by the ICT Division and the World Bank.

## Project: ARGUS (AI-powered smart glasses for the visually impaired)
- ARGUS is his ongoing undergraduate thesis: on-device AI navigation glasses for people with visual impairments.
- ARGUS has a custom 3D-printed frame that houses the cameras and compute.
- ARGUS is supervised by Dr. Novia Nurain, Assistant Professor, CSE, BUET.
- For ARGUS he led the initial planning: the problem scope, system requirements and hardware selection.
- For ARGUS he planned and moderated a focus group discussion with visually impaired participants to gather their needs.
- For ARGUS he built the real-time perception pipeline on a Jetson Orin Nano: stereo depth estimation, object detection and tracking, and semantic segmentation for obstacle and path awareness.
- For ARGUS he integrated the voice interface: Whisper speech recognition, a quantized on-device LLM for commands, and text-to-speech.
- ARGUS tech: Jetson Orin Nano, stereo depth, YOLO object detection, Whisper, quantized LLMs, 3D printing.

## Project: Portable Braille Printer
- The Portable Braille Printer is a low-cost, battery-powered printer that scans printed text, converts it with OCR, and embosses it as Braille onto A4 paper.
- It is supervised by Dr. Novia Nurain (BUET) and co-supervised by Sidratul Tanzila Tasmi, Lecturer, CSE, UIU.
- He engineered it around a Raspberry Pi with custom electromechanical hardware: NEMA 17 stepper motors on DRV8825 drivers, solenoid embossing, IR paper sensors and MOSFET switching.
- For the Braille printer he ran a focus group and a usability study, then a thematic analysis in Taguette to derive design requirements.
- Braille printer tech: Raspberry Pi, Python, OCR, DRV8825, NEMA 17, IR sensors, MOSFETs, 3D printing.
- The Braille printer's GitHub repository is github.com/namaray/Portable-Braille-Printer. It holds the code files, photos of the printer, the project proposal and a demo video.

## Project: ShareStrength
- ShareStrength is a full-stack community-support platform for people with disabilities: helper matching, task tracking, messaging, donations, a marketplace, and accessible voice and eye-tracking controls.
- For ShareStrength he wrote the requirements (SRS) and did full-stack development.
- ShareStrength tech: React, Vite, Laravel, PHP, MySQL, Tailwind CSS, REST APIs.
- ShareStrength's GitHub repository is github.com/meteorboyF/ShareStrength-SL.

## Project: Maternify
- Maternify is a team project: a symptom-tracking platform for expecting and new mothers, with risk-flag generation to help them monitor their health.
- On Maternify he was the main front-end designer.
- Maternify tech: React, Python, AI APIs.

## Other work
- Last Light is his one-thumb neon arcade game for Android: turn a shield around a glowing core to block incoming shapes and let the healing light through. It has 8 levels and 4 difficulties, and is built with TypeScript, HTML Canvas and Capacitor.
- Pocketlink is his desktop app that connects a phone and a computer, built for the COSMIC desktop: drag a file onto the window and it's on the phone, see and reply to phone notifications, share the clipboard, ring a lost phone, and browse the phone's files.
- Pocketlink has its own background service written in Rust that speaks the KDE Connect protocol (version 8), over Wi-Fi (UDP discovery and TLS) and Bluetooth, so it works with the KDE Connect app on Android and iOS without KDE Connect installed on the computer.
- Pocketlink pairs devices with a code shown on both screens and pins each device's certificate. It is built with Rust, libcosmic and D-Bus, is licensed GPL-3.0, and is on GitHub at github.com/namaray/pocketlink.
- Pocketlink for Android is the phone half of Pocketlink: a fork of KDE Connect for Android, where nearly all the code is KDE's work. His changes give it its own app id, the Pocketlink name and icon, Bluetooth on by default, and a new Jetpack Compose UI that is in progress. GitHub: github.com/namaray/pocketlink-android.
- Oushudh Bondhu was a hackathon project (Build With Gemma @ Bangladesh, team of 4): photograph a handwritten prescription and Gemma explains each medicine in plain Bangla and builds a dose timetable. He wrote the submission and drew the architecture and user-flow diagrams.
- ReplayCS is an EdTech platform (team of 2) where students predict what a program does next before the answer is revealed. He led the UX redesign and front-end: a 4-step onboarding, a calmer landing page and a light theme. It is built with SvelteKit, tested with Playwright, and live at replaycs.vercel.app.
- Messages Archive Viewer is his offline viewer for Android SMS/MMS/RCS backups, styled like Google Messages. Nothing is uploaded, and the Android version asks for no permissions. Built with JavaScript, IndexedDB and an Android WebView.
- BanglaSlumNet is his research on detecting informal settlements in Dhaka from Sentinel-2 satellite imagery, fusing a vision-language backbone with night-light, population and road data. Built with PyTorch and Google Earth Engine; GitHub: github.com/namaray/BanglaSlumNet.
- "Does structure matter?" is team research: an empirical study of whether data-flow graphs help code transformers (CodeBERT, GraphCodeBERT, UniXcoder) find vulnerabilities in decompiled Android apps.
- His anomaly detection research benchmarks test-time "rescue" preprocessing against training-time augmentation for PatchCore and PaDiM under adverse imaging, on MVTec-AD and VisA, with significance tests.
- He built a study platform for a linguistic uncanny valley study: participants write, an LLM edits their text within seconds, and they review the AI-edited versions. It runs on Node.js, Turso, Groq and Vercel.
- His portfolio website (namare-portfolio.vercel.app) is built with Next.js, Tailwind CSS and Framer Motion in a light, hand-drawn notebook style.
- This chatbot runs as an API route in his portfolio on Vercel. It answers only from these facts, using a Groq-hosted model.
