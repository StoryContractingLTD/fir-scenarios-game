# FIR Scenarios Game

Scenario decision game for the FIR Culture Workshop. Tables watch a video scene, vote A to C on their phones, write their own words, then see the reveal and "three weeks later".

| File | What it is |
|---|---|
| index.html | Control panel (facilitator's laptop) |
| stage.html | Big screen (opened from the control panel) |
| phone.html | One phone per table (the QR code points here) |
| config.js | Supabase details, join address, Vimeo video, image and sound names |
| content/questions.js | The scenario: title, rounds, questions, options, scores, reveals, video scene times |
| supabase/schema.sql | Run once in the Supabase SQL Editor. Adds the sg_ tables. |
| assets/ | Images and sounds |

Live address: https://storycontractingltd.github.io/fir-scenarios-game/

## On the day

1. Open the control panel, press **New session**.
2. Press **Open big screen**, drag it onto the projector, click **Click to start**.
3. Tables scan the QR code and join.
4. Use the big **Next** button to run the game.
