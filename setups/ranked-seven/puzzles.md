# Seven Please Be Patient puzzles

These scenarios are ranked from easiest to hardest. Open the play app with `?setup=1`, choose **Load setup**, and select the linked JSON file. The table gives each snapshot, goal, and short action list. Full solutions follow it.

`R`, `Y`, and `B` are die colors; the following number is a die's value. `C` is the setup data code for the Bottom Complaint. `TL`, `ML`, `BL`, `TR`, `MR`, and `BR` are setup data codes for Edge Complaint positions. Each side of a matching pair is a separate Ailment. Work snapshots have rolled dice; the Admission snapshot has an unrolled dice pool.

| Rank | Snapshot | Goal | Short action list |
| --- | --- | --- | --- |
| [1. Wear sets a minimum](01-wear-minimum.json) | **Work.** P12 \| P3; Wear R3/Y2/B2; dice R1, Y6, B3; Specialist; no cubes. | Discharge a Patient this Work step. | `specialist(Y6; R1→3)` → `treat(P3,ML,R3)` → `treat(P3,C,B3)` → discharge P3. |
| [2. Swap both dice into place](02-swap-both-dice.json) | **Work.** P4 \| P2; Wear R2/Y4/B2; dice R6, Y2, B1; Scheduler; no cubes. | Discharge P2 this Work step. | `scheduler(B1; swap R6↔Y2)` → `treat(P2,ML,R2)` → `treat(P2,C,Y6)` → discharge P2. |
| [3. Choose the Admission end](03-admission-end.json) | **Admission.** P3 \| P10; P6 arriving; Wear R3/Y4/B3; unrolled R, Y, B dice; Specialist and Scheduler; no cubes. | Admit P6 without creating a new Edge Ailment whose entire range is below Wear. | `admit(P6,left of P3)` → diagnose the new matches; roll dice later in Work. |
| [4. Repair before adjusting](04-repair-before-adjusting.json) | **Work.** P8 \| P2 \| P3; Wear R2/Y5/B2; dice R4, Y2, Y3, B6; Consultant; cube on P3:TL. | Discharge P3 this Work step. | `repair(Y2)` → `consultant(R4; Y3→4, B6→5)` → `treat(P3,BL,Y4)` → `treat(P3,C,B5)` → discharge P3. |
| [5. Make two exact values](05-two-exact-values.json) | **Work.** P11 \| P2 \| P4 \| P8; Wear R1/Y4/B4; dice R4, Y5, Y2, B1, B3; Scheduler and Consultant; cube on P2:C. | Find and discharge a Patient this Work step. | `scheduler(Y2; swap R4↔B1)` → `consultant(B3; Y5→6, B4→3)` → `treat(P2,ML,R1)` → `treat(P2,BL,Y6)` → discharge P2. |
| [6. Cure the harder Patient](06-harder-patient.json) | **Work.** P1 \| P2 \| P8; Wear R4/Y4/B4; dice R2, Y5, B1, B4; Nurse and Specialist; cube on P2:C. | Which discharge removes the blocked P2–P8 match now while restoring P2's Bottom Complaint cube? | `nurse(B1; P2:C→P8:ML)` → `specialist(B4; R2→4)` → `treat(P8,C,R4)` → `treat(P2,C,Y5)` → discharge P8. |
| [7. Win with every die committed](07-win-with-every-die.json) | **Work; Patient Deck empty.** P2 \| P8; Wear R4/Y4/B4; dice R3, Y2, Y5, B1, B4; Scheduler and Nurse; cubes on P2:C and P8:C; four cubes in supply. | Win this round by discharging both remaining Patients. | `scheduler(B1; swap Y5↔R3)` → `nurse(B4; P8:C→P8:ML)` → `repair(Y2)` → `treat(P2,MR,Y3)` → `treat(P8,C,R5)` → discharge both and win. |

## Puzzle 1

**Goal:** Discharge a Patient during this Work step.

- Spend Yellow 6 to activate Specialist and set Red 1 to Red 3.
- Treat P3's Red Edge Ailment (`ML`) with Red 3.
- Treat P3's Bottom Complaint (`C`) with Blue 3.
- Resolve Work and discharge P3.

This introduces **Wear as a minimum die value**. Red 1 lies inside the printed 1–5 Ailment Range but is below Red Wear 3. Specialist fixes the die value without changing Wear.

**Other valid routes:** Specialist may set the Red die to 4 or 5 instead. These routes still discharge P3; there is no different Patient discharge with this dice pool.

## Puzzle 2

**Goal:** Discharge P2 during this Work step.

- Spend Blue 1 to activate Scheduler.
- Swap the values of Red 6 and Yellow 2, leaving Red 2 and Yellow 6.
- Treat P2's Red Edge Ailment (`ML`) with Red 2 and its Yellow Bottom Complaint (`C`) with Yellow 6.
- Resolve Work and discharge P2.

This shows that **Scheduler swaps values while the dice keep their colors**. The activating Blue die is spent; both remaining dice become useful for different Ailments.

## Puzzle 3

**Goal:** Admit P6 without creating a new Edge Ailment whose entire range is below its equipment's Wear.

- Admit P6 to the left of P3.
- Diagnose the new Yellow 6/1 and Red 5/5 matching Edge Complaints.
- Continue to Work later and roll the three dice then. No dice are rolled during Admission.

This tests **endpoint Admission and diagnosis before the roll**. Admitting P6 on the right instead would create a Blue 1–2 Ailment Range, entirely below Blue Wear 3. Specialist and Scheduler can change die values later, but neither lowers Wear.

**Other legal outcome:** Admitting P6 on the right is allowed, but it fails the stated goal. The left end is the only solution to this particular Admission question.

## Puzzle 4

**Goal:** Discharge P3 during this Work step.

- Spend Yellow 2 on Maintenance to reduce Yellow Wear from 5 to 4 immediately.
- Spend Red 4 to activate Consultant. Increase Yellow 3 to Yellow 4 and decrease Blue 6 to Blue 5.
- Treat P3's uncovered Yellow Edge Ailment (`BL`) with Yellow 4.
- Treat P3's Bottom Complaint (`C`) with Blue 5; its other active Edge Ailment already has a cube.
- Resolve Work and discharge P3.

This combines **Maintenance with Consultant**. P3's uncovered Yellow Ailment has range 2–4, so changing a die alone cannot help while Yellow Wear is 5. Repair changes what counts as a legal treatment immediately.

**Other valid discharge:** P8 can also leave this Work step. Repair with Yellow 2; activate Consultant with Blue 6; increase Yellow 3 to 4 and decrease Red 4 to 3; then treat P8's Bottom Complaint with Red 3 and its Yellow Edge Ailment (`BR`) with Yellow 4. This is a different outcome, though it does not meet the goal of discharging P3.

## Puzzle 5

**Goal:** Find and discharge a Patient during this Work step.

- Spend Yellow 2 to activate Scheduler. Swap Red 4 and Blue 1, leaving Red 1 and Blue 4.
- Spend Blue 3 to activate Consultant. Increase Yellow 5 to Yellow 6 and decrease the now-Blue 4 to Blue 3.
- Treat P2's Red Edge Ailment (`ML`) with Red 1 and Yellow Edge Ailment (`BL`) with Yellow 6.
- Resolve Work and discharge P2; its Bottom Complaint already has a cube.

This tests **sequencing two Staff abilities**. Scheduler creates one exact value and prepares a die for Consultant to decrease; Consultant creates the other exact value. Each Staff activation consumes its own die, leaving the Red and Yellow treatment dice needed.

**Other valid discharge:** P11 can be discharged instead. Spend Blue 1 on Scheduler and swap Red 4 with Yellow 2, making Red 2 and Yellow 4. Spend Blue 3 on Consultant to increase Yellow 5 to 6 and decrease Red 2 to 1. Treat P11's Bottom Complaint with Yellow 4, Red Edge Ailment (`MR`) with Red 1, and Yellow Edge Ailment (`BR`) with Yellow 6. This produces a different Patient discharge and Thank You Note. There are also alternate Staff activation choices that still discharge P2. The snapshot does not establish one of these discharges as universally best.

## Puzzle 6

**Goal:** Choose a discharge that removes the blocked P2–P8 match now, while restoring P2's Bottom Complaint cube during the same Work step.

- Spend Blue 1 to activate Nurse. Move the existing cube from P2's Bottom Complaint (`C`) to P8's Yellow Edge Ailment (`ML`).
- Spend Blue 4 to activate Specialist and set Red 2 to Red 4.
- Treat P8's Bottom Complaint (`C`) with Red 4.
- Re-treat P2's Bottom Complaint (`C`) with Yellow 5.
- Resolve Work and discharge P8.

This combines **Nurse's cube move with Specialist**. The P2–P8 Edge match needs exactly Yellow 3, below Yellow Wear 4; Nurse can place a cube there without a Yellow treatment die. The move uncovers P2's Bottom Complaint, so the Yellow die restores it while the adjusted Red die completes P8.

**Other valid discharge:** Treat P1's Bottom Complaint with Blue 4 and its Yellow Edge Ailment (`BR`) with Yellow 5 to discharge P1 instead. P2–P8 remains adjacent for now, so this does not meet the stated goal. P1's optional Repair Thank You can lower Yellow Wear by two, however, making that exact Yellow 3 match treatable on a later turn. The setup therefore does not establish P8 as universally the best strategic discharge.

## Puzzle 7

**Goal:** Win this round by discharging both remaining Patients.

- Spend Blue 1 to activate Scheduler. Swap Yellow 5 and Red 3, leaving Yellow 3 and Red 5.
- Spend Blue 4 to activate Nurse. Move P8's Bottom Complaint cube (`C`) to its Yellow Edge Ailment (`ML`).
- Spend Yellow 2 on Maintenance to reduce Yellow Wear from 4 to 3.
- Treat P2's Yellow Edge Ailment (`MR`) with Yellow 3 and P8's newly uncovered Bottom Complaint (`C`) with Red 5.
- Resolve Work, discharge both Patients, and win at Closing Time.

This combines **Scheduler, Nurse, and Maintenance** with all five dice committed. Nurse covers one side of the exact Yellow 3 match; Maintenance makes Yellow 3 legal for the other. Both Patients leave an empty Waiting Room and empty Patient Deck, so the win check occurs before the empty-deck cube loss.

**Other winning route:** Nurse may instead move P8's Bottom Complaint cube to P2's Yellow Edge Ailment (`MR`). Then treat P8's Yellow Edge Ailment (`ML`) with Yellow 3 and its Bottom Complaint with Red 5. Both routes win; partial discharges are possible but do not meet this puzzle's goal.
