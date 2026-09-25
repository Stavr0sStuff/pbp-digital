# Seven Please Be Patient puzzles

These JSON files are loadable V1 setup snapshots, ordered from easiest to hardest. Open the play app with `?setup=1`, select **Load setup**, and choose a file from this directory. The setup files contain only game state; this page holds the questions and answer lists.

Work setups begin after Admission, Diagnosis, and the dice roll. Puzzle 3 begins during Admission, before any dice are rolled. `R`, `Y`, and `B` are die colors. `C` is the card data's code for the Bottom Complaint; `TL`, `ML`, `BL`, `TR`, `MR`, and `BR` identify Edge Complaint positions. Each side of a matching pair is a separate Ailment.

## 1. Wear sets a minimum

[Load 01-wear-minimum.json](01-wear-minimum.json). P12 | P3; Red Wear 3; R1, Y6, B3; Specialist available. P12's Red 1 matches P3's Red 5, giving range 1–5. **Which Patient can you discharge?**

P3 can be discharged. Red 1 fits the printed range but falls below Wear 3. Specialist sets it to 3; Blue 3 treats P3's Bottom Complaint.

| Step | Action |
|---|---|
| 1 | `specialist(Y6; R1→R3)` |
| 2 | `treat(P3,ML,R3)` |
| 3 | `treat(P3,C,B3)` |
| 4 | Resolve and discharge P3. |

## 2. Swap both dice into place

[Load 02-swap-both-dice.json](02-swap-both-dice.json). P4 | P2; Red Wear 2 and Yellow Wear 4; R6, Y2, B1; Scheduler available. P4's Red 4 matches P2's Red 1. **How can P2 be discharged?**

Use Blue 1 to activate Scheduler. The swapped values let Red 2 treat P2's Edge Ailment and Yellow 6 treat its Bottom Complaint.

| Step | Action |
|---|---|
| 1 | `scheduler(B1; swap R6↔Y2)` → R2, Y6 |
| 2 | `treat(P2,ML,R2)` |
| 3 | `treat(P2,C,Y6)` |
| 4 | Resolve and discharge P2. |

## 3. Choose the Admission end

[Load 03-admission-end.json](03-admission-end.json). P3 | P10; P6 arriving; Wear R3, Y4, B3; Specialist and Scheduler available. The pool contains one die per color, still unrolled. Placing P6 left creates Yellow 6/1 and Red 5/5 matches. Placing P6 right creates Blue 1/2, Blue 2/4, and Yellow 4/3 matches. **Which end avoids a new Edge Ailment entirely below its equipment's Wear?**

Place P6 on the left. Blue 1/2 on the right cannot be treated at Blue Wear 3. Staff value changes do not lower Wear.

| Step | Action |
|---|---|
| 1 | `admit(P6,left of P3)` |
| 2 | Diagnose the Yellow 6/1 and Red 5/5 matches. Roll later, during Work. |

## 4. Repair before adjusting

[Load 04-repair-before-adjusting.json](04-repair-before-adjusting.json). P8 | P2 | P3; Yellow Wear 5; R4, Y2, Y3, B6; Consultant available. P3 has a cube on its Yellow 1 Edge Ailment. Its uncovered Yellow 4 Edge Ailment has range 2–4, and its Blue Bottom Complaint is uncovered. **How can P3 be discharged?**

Maintenance takes Yellow Wear down to 4 immediately. Consultant makes the remaining Yellow die a 4, while Blue 5 still treats the Bottom Complaint.

| Step | Action |
|---|---|
| 1 | `repair(Y2)` → Yellow Wear 4 |
| 2 | `consultant(R4; Y3→Y4, B6→B5)` |
| 3 | `treat(P3,BL,Y4)` |
| 4 | `treat(P3,C,B5)` |
| 5 | Resolve and discharge P3. |

## 5. Make two exact values

[Load 05-two-exact-values.json](05-two-exact-values.json). P11 | P2 | P4 | P8; Wear R1, Y4, B4; R4, Y5, Y2, B1, B3; Scheduler and Consultant available. P2 already has a cube on its Bottom Complaint. Its two Edge Ailments against P11 require exact Red 1 and Yellow 6. **Find a discharge.**

P2 can be cured by spending one die on each Staff member and treating its two uncovered Ailments with the resulting values.

| Step | Action |
|---|---|
| 1 | `scheduler(Y2; swap R4↔B1)` → R1, B4 |
| 2 | `consultant(B3; Y5→Y6, B4→B3)` |
| 3 | `treat(P2,ML,R1)` |
| 4 | `treat(P2,BL,Y6)` |
| 5 | Resolve and discharge P2. |

## 6. Cure the harder Patient for a reason

[Load 06-harder-patient.json](06-harder-patient.json). P1 | P2 | P8; Wear R4, Y4, B4; R2, Y5, B1, B4; Nurse and Specialist available. P2's Bottom Complaint has a cube. The P2–P8 Yellow Edge match is an exact 3, below Yellow Wear 4. **Which discharge breaks that blocked adjacency while restoring P2's Bottom Complaint cube?**

Discharge P8. Nurse moves P2's existing cube onto P8's Yellow Edge Ailment without assigning a Yellow treatment die there. Specialist makes Red 2 usable on P8's Bottom Complaint. Yellow 5 re-treats P2's Bottom Complaint.

| Step | Action |
|---|---|
| 1 | `nurse(B1; P2,C→P8,ML)` |
| 2 | `specialist(B4; R2→R4)` |
| 3 | `treat(P8,C,R4)` |
| 4 | `treat(P2,C,Y5)` |
| 5 | Resolve and discharge P8. |

## 7. Win with every die committed

[Load 07-win-with-every-die.json](07-win-with-every-die.json). The Patient Deck is empty, so Admission was skipped. P2 | P8; Wear R4, Y4, B4; R3, Y2, Y5, B1, B4; Scheduler and Nurse available. Each Patient has a cube on their Bottom Complaint. Their matching Yellow Edge Complaints are both valued 3 and uncovered. Four cubes are in the supply; one was removed at the previous Closing Time. **Can you win this round?**

Yes. Nurse moves P8's Bottom cube to its Edge Ailment. Maintenance makes Yellow 3 legal for P2's Edge Ailment, and the Scheduler's swap provides both that Yellow 3 and a Red 5 to re-treat P8's Bottom Complaint. Both Patients discharge; the win check precedes any Closing Time supply loss.

| Step | Action |
|---|---|
| 1 | `scheduler(B1; swap Y5↔R3)` → Y3, R5 |
| 2 | `nurse(B4; P8,C→P8,ML)` |
| 3 | `repair(Y2)` → Yellow Wear 3 |
| 4 | `treat(P2,MR,Y3)` |
| 5 | `treat(P8,C,R5)` |
| 6 | Resolve, discharge both Patients, and win at Closing Time. |
