// =====================================================================
// Scenario content: BLANK TEMPLATE
// Fill in each [bracketed] item. Keep the structure as it is.
// Each round: the video scene, a vote on A to C, a "your words" step,
// the reveal with scores, then "three weeks later".
// Points per option are t (Trust) + s (Signal) + r (Risk).
// Times are in seconds (1:55 = 115).
// =====================================================================
window.GG_GAME = {
  title: "[Scenario title]",

  // ---- The story parts, played in order after you press Start ----
  // Each part: the video plays, then the still shows with the dialogue
  // and subtitles, then "Hit next to proceed". Next moves to the next part.
  // still goes in assets/images, audio goes in assets/audio.
  parts: [
    {
      title: "Part One",
      vimeoId: "1241769402",
      vimeoHash: "090cc52abc",
      still: "part1-still.png",
      audio: "part1-dialogue.mp3",
      subtitles: "You're seeing all of this through Jamie's eyes. Jamie is the Site Manager. From here on, you decide what he does, or whether he does anything at all. When you're ready, we'll move on."
    }
    // Part Two goes here, same layout, once the video is made.
  ],

  // ---- Voting rounds: switched off for now (empty list). ----
  // To switch them back on, put the three rounds back in:
  // { label: "Round 1", title: "[Round 1 title]", questions: [1] }, and so on.
  rounds: [],

  // The last word, played after Round 3, to the end of the video.
  lastWord: { start: 0 },

  // Score bands for the winner screen (out of 15).
  bands: [
    { min: 11, text: "[Top band message]" },
    { min: 6,  text: "[Second band message]" },
    { min: 1,  text: "[Third band message]" },
    { min: -99, text: "[Bottom band message]" }
  ],

  questions: {
    1: {
      scene: { start: 0, end: 0 },
      text: "[Round 1 question]",
      setup: "[What the facilitator says before tables discuss]",
      options: { A: "[Option A]", B: "[Option B]", C: "[Option C]" },
      answer: "C",
      scores: {
        A: { t: 0, s: 0, r: 0 },
        B: { t: 0, s: 0, r: 0 },
        C: { t: 0, s: 0, r: 0 }
      },
      why: { A: "[Why A]", B: "[Why B]", C: "[Why C]" },
      rehearse: "[Your words instruction]",
      rehearseCheck: "[What the facilitator listens for]",
      thatDay: "",
      later: { A: "[Three weeks later after A]", B: "[After B]", C: "[After C]" },
      note: "[Facilitator note]"
    },

    2: {
      scene: { start: 0, end: 0 },
      text: "[Round 2 question]",
      setup: "[What the facilitator says before tables discuss]",
      options: { A: "[Option A]", B: "[Option B]", C: "[Option C]" },
      answer: "C",
      scores: {
        A: { t: 0, s: 0, r: 0 },
        B: { t: 0, s: 0, r: 0 },
        C: { t: 0, s: 0, r: 0 }
      },
      why: { A: "[Why A]", B: "[Why B]", C: "[Why C]" },
      rehearse: "[Your words instruction]",
      rehearseCheck: "[What the facilitator listens for]",
      thatDay: "",
      later: { A: "[Three weeks later after A]", B: "[After B]", C: "[After C]" },
      note: "[Facilitator note]"
    },

    3: {
      scene: { start: 0, end: 0 },
      text: "[Round 3 question]",
      setup: "[What the facilitator says before tables discuss]",
      options: { A: "[Option A]", B: "[Option B]", C: "[Option C]" },
      answer: "C",
      scores: {
        A: { t: 0, s: 0, r: 0 },
        B: { t: 0, s: 0, r: 0 },
        C: { t: 0, s: 0, r: 0 }
      },
      why: { A: "[Why A]", B: "[Why B]", C: "[Why C]" },
      rehearse: "[Your words instruction]",
      rehearseCheck: "[What the facilitator listens for]",
      thatDay: "",
      later: {},
      note: "[Facilitator note]"
    }
  }
};
