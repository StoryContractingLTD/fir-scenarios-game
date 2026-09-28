// =====================================================================
// Scenario One: "Nothing In It"  (from Alex's FIR facilitator pack)
// Each round: the video scene, a vote on A to C, a "your words" step
// (tables write their exact words and read them from the paper; no role play), the reveal with Alex's scores, then "three weeks later".
// Points per option are Trust + Signal + Risk from the pack.
// Times are in seconds (1:55 = 115).
// =====================================================================
window.GG_GAME = {
  title: "Nothing In It",

  rounds: [
    { label: "Round 1", title: "The briefing", questions: [1] },
    { label: "Round 2", title: "Being careful", questions: [2] },
    { label: "Round 3", title: "The subcontractor", questions: [3] }
  ],

  // The last word: Sophie to camera, played after Round 3, to the end of the video.
  lastWord: { start: 221 },

  // Score bands for the winner screen (out of 15).
  bands: [
    { min: 11, text: "You changed what happens next." },
    { min: 6,  text: "You handled it. She is still on her own." },
    { min: 1,  text: "Nothing unlawful happened. Nothing changed either." },
    { min: -99, text: "You made it worse, and it will come back." }
  ],

  questions: {
    1: {
      scene: { start: 0, end: 115 },
      text: "Monday, 07:20, the welfare cabin. You are the Site Manager. What do you do?",
      setup: "Nobody in that cabin thinks they have just witnessed harassment. Sophie laughed. Dan meant it as a compliment. Work with that.",
      options: {
        A: "Catch Dan afterwards, quietly",
        B: "Ask Sophie first",
        C: "Three seconds, in the room, aimed at the standard"
      },
      answer: "C",
      scores: {
        A: { t: 0, s: -1, r: 0 },
        B: { t: 1, s: -1, r: -1 },
        C: { t: 2, s: 2, r: 1 }
      },
      why: {
        A: "Eleven people watched a remark land and watched nothing happen. Whatever you say in private, the public record says it was fine.",
        B: "She will say \"honestly it's fine\". You have handed the decision to the person with the least power to make it.",
        C: "\"Dan, we don't grade people's looks in briefings. Anyone. Plan's sound, let's crack on.\" Then tell Sophie it was your call, not hers."
      },
      rehearse: "As a table, agree the exact words you would say in the cabin, in under five seconds, and write them down. Then one person reads your table's line out from the paper.",
      rehearseCheck: "Did it address the standard, or make Sophie the subject? \"We don't do that here\" passes. \"Sophie's a professional\" fails.",
      thatDay: "Four seconds of awkwardness, then the briefing carries on. Dan says nothing about it. Neither does Sophie.",
      later: {
        A: "No repeat from Dan, but two more remarks in the same register from others, and nothing said. Sophie has been on as-builts and paperwork for a fortnight while the apprentice got the setting-out.",
        B: "The comments carry on, about one a week: Dan, and now two others. Sophie asked her engineering lead about a move to the Peterborough job. She has been on paperwork for a fortnight.",
        C: "No more comments. From anyone. And Sophie has been on as-builts and paperwork for a fortnight while the apprentice got the setting-out."
      },
      note: "Expect the argument that you should always ask the affected person first. When it is public and already witnessed, asking privately hands your responsibility to them. If a table says \"she laughed\": what else was she going to do at 07:20, in front of twelve people?"
    },

    2: {
      scene: { start: 115, end: 180, branch: 144,
               labelA: "Tables who chose A or B in Round 1",
               labelB: "Tables who chose C in Round 1" },
      text: "Thursday, the site office. Sophie has spent two weeks on paperwork. What do you do with Dan?",
      setup: "Either way, a 24-year-old engineer has spent a fortnight on as-builts and the apprentice has had the setting-out.",
      options: {
        A: "Reassure him",
        B: "Direct him",
        C: "Separate the two problems"
      },
      answer: "C",
      scores: {
        A: { t: -1, s: -1, r: -1 },
        B: { t: 1, s: 0, r: 0 },
        C: { t: 2, s: 2, r: 1 }
      },
      why: {
        A: "He is a good bloke, tell him to be himself. Kind, and it does nothing about Sophie's fortnight. It teaches him the problem was being pulled up.",
        B: "Sophie is back on setting-out from Monday. He complies, resentfully, and still has no idea where the line is.",
        C: "Be concrete about the line, then handle work allocation as a management standard: it follows development need and competence."
      },
      rehearse: "Read case file 1, Dan's side. He has said: \"Fine, whatever you want.\" and gone quiet. As a table, write the exact words you would say next, then one person reads them out from the paper.",
      rehearseCheck: "Does the line keep the conversation open without backing down, and without making Dan the problem? If the table lets \"fine, whatever you want\" end it, the manager has lost. Watch for tables who skip the hard part and write a line for an easy, reasonable Dan.",
      thatDay: "",
      later: {
        A: "Dan is back to himself. Sophie is still mostly on paperwork. Nobody decided that, it just settled that way.",
        B: "Sophie is back on setting-out. Dan does it correctly and says almost nothing to her that is not an instruction. She has noticed.",
        C: "Sophie is back on setting-out. Last week she and Dan spent two days resequencing the drainage together. By all accounts they enjoyed it."
      },
      note: "Over-correction is the most common real consequence of a Round 1 challenge, and almost nobody trains for it. Avoidance is not safety, it is a second exclusion with better manners."
    },

    3: {
      scene: { start: 180, end: 221 },
      text: "The progress meeting. Dan is four feet away, watching to see what you do. What do you do?",
      setup: "Marcus does not work for Story. His gang is the only crew available before Christmas on a job already three weeks behind, and Dan has known him fifteen years.",
      options: {
        A: "Say nothing to Marcus",
        B: "Take it up the line",
        C: "Same register as Round 1, on the day"
      },
      answer: "C",
      scores: {
        A: { t: -1, s: -2, r: -2 },
        B: { t: 0, s: 0, r: 1 },
        C: { t: 2, s: 2, r: 1 }
      },
      why: {
        A: "Dan has just learned the standard you enforced on him does not apply to people keeping you on schedule. Everything you built is now conditional.",
        B: "Correct on paper, useless on site. Slow, it takes Sophie out of a process about her, and nobody in that room saw you do anything.",
        C: "\"Marcus, Sophie's the engineer on this job. Let's keep it to that.\" Tell Sophie you have done it, and log it: date, what was said, what you did."
      },
      rehearse: "Read case file 2, Marcus. He has just said: \"Steady on, no offence meant.\" and looked round the table for a laugh. As a table, write the exact words you would say back, in under five seconds, then one person reads them out from the paper.",
      rehearseCheck: "Expect this to be much harder than Round 1, and say so: the sentence is easier, the person is harder.",
      thatDay: "",
      later: {},
      note: "Because Marcus is a subcontractor, the room cannot fall back on \"you can't talk to a client like that\". Watch what they reach for instead: the programme, the relationship, or Dan's fifteen years of knowing him. Check any legal dates before you say them in the room."
    }
  }
};
