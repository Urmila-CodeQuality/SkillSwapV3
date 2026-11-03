SkillSwap — Campus Peer Learning & Skill Exchange (v3)

Empowering student collaboration through structured scheduling and low-friction peer connections.

SkillSwap is a lightweight, responsive web prototype designed to bridge the gap between campus academic support and peer-to-peer skill bartering. Addressing the common friction points of unstructured group chats and vague scheduling, version 3 (v3) introduces targeted workflows for both seekers and providers.

🚀 Key Features & Architectural Highlights

1. Preply / Upwork Separation (Dual Dashboards)

Seeker View: Allows students to browse active peer requests, filter by subject area (Computer Science, Calculus, Languages), and locate exact course needs.

Provider Dashboard: Empowers students to publish their availability, defining clear roles and subjects to eliminate user role confusion.

2. Structured Time-Block Scheduling

Eradicates vague scheduling habits (e.g., "free sometimes") by enforcing precise day and time slots directly on user cards and posting forms (e.g., Fri · 11:00 AM–1:00 PM).

3. Actionable Status Confirmation (Micro-Feedback)

Features an interactive icebreaker modal equipped with instant copy and email dispatch triggers.

Provides immediate green banner confirmations (🚀 Email app opening — your draft is ready...) to eliminate user anxiety regarding whether interaction loops have registered.

🛠️ Project Structure

The prototype is built with clean, modular web standards requiring zero external build tools or complex frameworks:

index.html — The core layout containing the dual dashboard structures, filter controls, and interactive connect modals.

style.css — A modern, responsive CSS stylesheet utilizing CSS variables, grid/flexbox layouts, and mobile-friendly media queries.

script.js — Client-side interaction logic managing tab switching, dynamic modal population, clipboard functionality, and form submissions.

testing.md — Cycle 1 user research notes, participant observations, and qualitative metrics.

🏃‍♂️ Getting Started Locally

Because this prototype is built using vanilla web technologies, running it locally requires no package managers or setup steps:

Clone or download this repository to your local machine.

Open the project folder in your code editor (e.g., VS Code).

Open index.html directly in any modern web browser (Chrome, Firefox, Safari, Edge) or launch it via a local development server like Live Server.

📈 Research & Iteration Background (End of Cycle 1)

Version 3 is a direct result of primary user research and usability testing conducted with university students:

Participant 1 (CS Major): Highlighted how explicit day/time blocks instantly solved course-matching friction.

Participant 2 (Humanities Student): Confirmed that instant modal micro-feedback successfully removes the uncertainty of initiating contact with unfamiliar peers.

📄 License

This project is open-source and developed for educational and campus community collaboration purposes.