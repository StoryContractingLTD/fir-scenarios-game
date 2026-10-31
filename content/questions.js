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
  // Each part: the video plays, then the still shows. Either a voice with
  // subtitles then "Hit next to proceed", or (discuss) questions for the
  // room that stay up until you press Next.
  // still goes in assets/images, audio goes in assets/audio.
  parts: [
    {
      title: "Part One",
      vimeoId: "1241769402",
      vimeoHash: "090cc52abc",
      still: "part1-still.png",
      audio: "part1-dialogue.mp3",
      subtitles: "You're seeing all of this through Jamie's eyes. Jamie is the Site Manager. From here on, you decide what he does, or whether he does anything at all. When you're ready, we'll move on."
    },
    {
      title: "Part Two",
      vimeoId: "1241838903",
      vimeoHash: "",
      still: "part2-still.png",
      // A discussion still: no voice, the questions stay up until you press Next.
      discuss: {
        heading: "Talk it through: first in pairs, then as a group",
        questions: [
          "What do you know?",
          "What are you assuming?",
          "What matters in your response?"
        ]
      }
    }
    // Part Three goes here, same layout.
  ],

  // ---- Voting rounds: switched off for now (empty list). ----
  // To switch them back on, put the three rounds back in:
  // { label: "Round 1", title: "[Round 1 title]", questions: [1] }, and so on.
  rounds: [],

  // The last word, played after Round 3, to the end of the video.
  lastWord: { start: 0 },
  // Possible closing line from Sophie, after all the options:
  sophieLastWord: "I don't want everyone walking on eggshells. I just want them listening to what I'm saying.",

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
      options: {
        A: "Say something now: \"Dave, we don't comment on people's looks in here. Right, next item.\" Then move the briefing on.",
        B: "Have a quiet word afterwards: let the briefing finish, then speak privately to Dave about keeping comments on people's looks out of briefings.",
        C: "Check in with Sophie first: speak to her privately before deciding whether to raise it with Dave. Ask how the exchange landed for her.",
        D: "Leave it: she laughed, Dave meant it as a compliment, and the briefing moves on."
      },
      answer: "A",
      scores: {
        A: { t: 0, s: 0, r: 0 },
        B: { t: 0, s: 0, r: 0 },
        C: { t: 0, s: 0, r: 0 },
        D: { t: 0, s: 0, r: 0 }
      },
      // Unscored: all four options are left open in the room.
      // why = the discussion question on screen after each option's fallout
      why: {
        "A": "Has Jamie dealt with the comment if Dave now avoids Sophie? What would help next?",
        "B": "Does a good private conversation fix the public message? How could Jamie make the standard visible without making an example of Dave?",
        "C": "How can Jamie respect what Sophie wants and still take responsibility for the working environment?",
        "D": "If nobody complains, has anything gone wrong? Whose job is it to set the standard in that room?"
      },
      rehearse: "",
      rehearseCheck: "",
      thatDay: "",
      // later = the voiceover script for each option (recorded in ElevenLabs)
      later: {
        "A": "Dave's caught off guard. \"I was only paying her a compliment.\" Jamie doesn't argue. He holds the line and moves the briefing on. Marcus has seen where Jamie draws the line. Sophie hasn't had to say a word. Over the next few weeks, though, Dave goes quiet around her. He's polite, but he keeps his distance, and he's stopped asking her opinion on the job.",
        "B": "Jamie waits until the briefing's finished, then has a quiet word. Without an audience, Dave takes it well. \"Fair enough. Didn't think of it like that.\" But Sophie and Marcus weren't there for that conversation. As far as they're concerned, the remark went unchallenged. A few weeks later, Sophie mentions it. \"I thought you were fine with it.\"",
        "C": "Jamie catches Sophie on her own and asks how the comment landed. She appreciates being asked, but her answer's uncertain. \"I know what Dave's like. I don't want a big thing made of it.\" Jamie knows more than he did. But he still has a decision to make.",
        "D": "The briefing moves on, and nobody mentions it again. Over the next few weeks, the comments keep coming. Dave at first, then others. Marcus has seen that Jamie doesn't draw a line at all. Sophie goes quieter in briefings. When someone finally asks her about it, she shrugs. \"Nobody else seemed bothered, so I didn't say anything.\""
      },
      // Facilitator only, per option
      notes: {
        "A": "Over-correction is one of the most common real consequences of a challenge, and almost nobody trains for it. Avoidance isn't respect; it's a second exclusion with better manners. Jamie's next job is to make clear that friendly, respectful working relationships carry on. Sophie may not have liked being the centre of attention, even briefly; the wording of A names the standard rather than her, which keeps that small.",
        "B": "This is the most common real-world choice, and the conversation itself goes well. The problem is what everyone else saw. Listen for ideas like restating the standard to everyone at the next briefing, without pointing at Dave.",
        "C": "Not wanting a fuss isn't the same as welcoming the remark. If Jamie takes her answer as permission to do nothing, the responsibility has been handed back to her, the person with the least power in the room. Checking in is good practice; the issue is doing it first, so action depends on her.",
        "D": "Nothing dramatic happens, and that's the point. Silence from the manager in the room sets the standard just as clearly as a challenge would. If a table argues \"it's not my business unless she complains\": since October 2024, employers have had a duty to take reasonable steps to prevent sexual harassment. Check the wording before you quote it in the room."
      },
      note: "Facilitator only, not shown to the room. Strongest: A. The remark was public and witnessed, so the response needs to be public too. It names the standard, not Sophie, so she is not made the subject and does not have to carry it. Then a quiet word with Sophie afterwards: it was your call, not hers. B: the right message, but everyone saw the remark land and saw nothing happen. C: checking in is good practice; doing it first makes action depend on her, the person with least power in the room. If a table says she laughed: what else was she going to do, in front of everyone? D: tells the whole room, Dave included, that this is fine here. Expect tables to argue for A and C together. Agree, and point out that the order matters."
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
