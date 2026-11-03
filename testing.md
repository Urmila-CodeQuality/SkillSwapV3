SkillSwap — End of Cycle 1: Prototype Testing Notes & Evaluation (testing.md)

1. Test Overview & Context

Project: SkillSwap (Campus Peer Learning & Skill Exchange)

Testing Phase: End of Cycle 1 Iteration (Transitioning from v2 to v3)

Objective: Evaluate how effectively the new build (v3) addresses the high-friction user pain points identified during primary user research—specifically vague scheduling and uncertainty when initiating contact with unfamiliar peers.

Participants:

Participant 1 (P1): 23yo, Computer Science major (Focus: Seeker workflow & schedule clarity).

Participant 2 (P2): 22yo, Language & Humanities student (Focus: Contact initiation & micro-feedback).

2. Participant 1 (P1) Testing Session — Seeker Workflow & Scheduling

Scenario Tested: Browsing peer requests and attempting to schedule a study session for a difficult technical course.

Observations:

P1 immediately navigated to the Looking for Help (Seeker View) tab.

Noted that seeing explicit day and time blocks (e.g., Fri · 11:00 AM–1:00 PM) instantly eliminated the frustration of vague scheduling (such as users writing "free sometimes").

Key User Quotes:

"Finding someone who actually understands the same coursework and matches your schedule feels like finding a needle in a haystack."

"Having structured time blocks right on the card makes filtering effortless compared to scrolling through endless Telegram group chats."

3. Participant 2 (P2) Testing Session — Contact Initiation & Micro-Feedback

Scenario Tested: Finding a peer for a skill barter (language exchange for programming help) and initiating contact via the "Make the First Move" button.

Observations:

P2 clicked the action button on a student card and reviewed the auto-generated icebreaker message inside the modal.

When interacting with the buttons to copy text or open an email client, P2 observed the green confirmation feedback banner (🚀 Email app opening — your draft is ready to finish and send...).

Key User Quotes:

"When I click email or copy message, I want immediate confirmation that it actually worked so I am not left wondering."

P2 praised the instant micro-feedback banner, confirming it successfully removed the anxiety of wondering if a link or click had registered in a cluttered inbox.

4. Key Design Takeaways & Iteration Summary for Build v3

Preply / Upwork Separation: Splitting the interface into distinct Seeker and Provider dashboards successfully streamlined navigation and prevented user role confusion.

Structured Time Slots: Enforcing strict time blocks in the provider posting form completely solved the scheduling friction highlighted in P1's initial interviews.

Actionable Status Confirmation: Adding the modal feedback banner directly resolved P2's frustration regarding hidden contact states and unconfirmed interaction loops.