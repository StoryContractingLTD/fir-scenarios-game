// =====================================================================
// Who's Left Standing? The content
// Edit the words here. Keep the structure (ids, letters, brackets) as it is.
// flips: which applicants that option flips down if the room picks it.
// best: the strongest option (10 points). The other two score 5.
// job: which job card line lights up at the reveal (0 = first line, or null).
// =====================================================================
window.SL_GAME = {
  title: "Who's Left Standing?",
  subtitle: "Twelve applicants. One vacancy. Five shortcuts from a busy hiring manager. Your table decides which ones the room takes.",
  manager: "Dave",
  role: "Quantity Surveyor",

  job: [
    "Full UK driving licence",
    "Cost and contract experience, any sector",
    "QS qualified or working towards it",
    "Strong with numbers",
    "Month-end dates set in advance",
    "Desirable: NEC, rail experience"
  ],

  // look: skin, hair colour, hair style (short, crop, long, bob, bun, curly, bald),
  //       outfit (shirt, polo, jumper, blazer, hivis), colour of the outfit, and optional glasses / beard (stubble, short)
  applicants: [
    { id: "rachel", name: "Rachel Dunn", sex: "f", score: 9,
      card: "QS, rail, 2015 to 2021", personal: "Career break 2021 to 2024. Now part-time cost assistant",
      behind: "Qualified, licence, ran NEC valuations on rail jobs. Break was to raise two young children",
      look: { eyes: "#4f7a3a", skin: "#f1c7a5", hair: "#7a4a2a", style: "bob", outfit: "blazer", top: "#3d5a80" } },
    { id: "danny", name: "Danny Walsh", sex: "m", score: 8,
      card: "QS, highways, 10 years", personal: "Plays golf. Coaches his son's football team",
      behind: "Qualified, licence, solid commercial record",
      look: { skin: "#eabd98", hair: "#3b2a1e", style: "short", outfit: "polo", top: "#1f3a5f" } },
    { id: "joanne", name: "Joanne Pattinson", sex: "f", score: 8,
      card: "QS, utilities, 7 years", personal: "Works a compressed four-day week. Coaches netball",
      behind: "Qualified, licence, NEC experience. Her hours fit the job card",
      look: { eyes: "#4a78a8", skin: "#f3cfb3", hair: "#c9a063", style: "long", outfit: "jumper", top: "#7a3e6b" } },
    { id: "kwame", name: "Kwame Mensah", sex: "m", score: 8,
      card: "Royal Engineers Corporal, 2010 to 2022", personal: "Gap 2022 to 2023",
      behind: "Ran works budgets and costings for his unit, licence. Gap was resettlement and gaining a QS qualification",
      look: { skin: "#6b4128", hair: "#1c1410", style: "crop", outfit: "shirt", top: "#5b6b3a", beard: "short" } },
    { id: "hannah", name: "Hannah Irving", sex: "f", score: 8,
      card: "QS, rail, 5 years", personal: "Just relocated to Cumbria with her young family",
      behind: "Qualified, licence, NEC experience",
      look: { skin: "#f0c09c", hair: "#5a3420", style: "bun", outfit: "blazer", top: "#9c4a3c" } },
    { id: "lee", name: "Lee Armstrong", sex: "m", score: 7,
      card: "Senior QS, 12 years", personal: "Doesn't drive",
      behind: "Qualified, strong commercial record, but no licence",
      look: { skin: "#e8b48f", hair: "#8b8b8b", style: "short", outfit: "shirt", top: "#4a5568", glasses: true } },
    { id: "priya", name: "Priya Shah", sex: "f", score: 7,
      card: "Cost controller, manufacturing, 8 years", personal: "No construction background",
      behind: "Licence, manages budgets, supplier contracts and variations. Studying part-time for a QS degree",
      look: { skin: "#a8714d", hair: "#1d1512", style: "long", outfit: "blazer", top: "#2a6f6f" } },
    { id: "tom", name: "Tom Fairbairn", sex: "m", score: 7,
      card: "QS, 6 years", personal: "12-month gap in 2023, no reason given",
      behind: "Qualified, licence. Gap was recovery from serious illness, which he chose not to disclose",
      look: { eyes: "#5b8fb0", skin: "#f2c9a8", hair: "#b5651d", style: "short", outfit: "jumper", top: "#3f6e4a" } },
    { id: "steven", name: "Steven Bell", sex: "m", score: 6,
      card: "QS, 4 years", personal: "Plays darts",
      behind: "Qualified, licence, some rail experience",
      look: { skin: "#e9b995", hair: "#2a2a2a", style: "bald", outfit: "polo", top: "#2b4c7e", glasses: true, beard: "stubble" } },
    { id: "mark", name: "Mark Hutchinson", sex: "m", score: 5,
      card: "Site engineer, 15 years", personal: "Rugby club captain",
      behind: "Licence, keen to move into QS, but no commercial experience or QS qualification",
      look: { skin: "#eeb894", hair: "#6b4a2b", style: "crop", outfit: "hivis", top: "#3a4a5a", beard: "stubble" } },
    { id: "sophie", name: "Sophie Graham", sex: "f", score: 4,
      card: "Graduate QS, 2 years", personal: "Recent graduate",
      behind: "Licence, bright, still building experience",
      look: { eyes: "#6b8f4a", skin: "#f4d2b8", hair: "#3a2416", style: "curly", outfit: "jumper", top: "#c8553d" } },
    { id: "aisha", name: "Aisha Khan", sex: "f", score: 3,
      card: "Assistant QS, 3 years", personal: "Doesn't drive",
      behind: "No licence, hasn't yet run her own valuations",
      look: { skin: "#9c6644", hair: "#140f0c", style: "bun", outfit: "shirt", top: "#5a4e7c" } }
  ],

  rounds: [
    { title: "The gap",
      dave: "Too many CVs. Anyone with a gap of more than a year, out. They've lost touch.",
      options: {
        A: "Fair enough, flip them down",
        B: "Keep them in, and ask about the gap at interview if it matters",
        C: "Only keep the ones who explained their gap on the CV"
      },
      best: "B",
      flips: { A: ["rachel", "kwame", "tom"], B: [], C: ["tom"] },
      why: {
        A: "Cuts a parent, an ex-Forces leaver and someone recovering from illness. None of that says they can't do the job.",
        B: "A gap is a question for interview, not a reason to cut.",
        C: "Sounds fair, but it punishes Tom for keeping his health private, which he had every right to do."
      },
      job: null,
      reveal: "Behind the gaps: raising children, leaving the Forces, recovering from illness.",
      prompt: "Who's more likely to have a gap, and why? Does a gap tell you anything about whether someone can do this job?" },

    { title: "Full-time and on call",
      dave: "I need someone who's full-time now and can stay late whenever month-end hits.",
      options: {
        A: "Flip down anyone not currently full-time",
        B: "Check the job card: month-end dates are set in advance, so current hours aren't the test",
        C: "Keep them in, but note them as \"less committed\""
      },
      best: "B",
      flips: { A: ["rachel", "joanne"], B: [], C: [] },
      why: {
        A: "Current hours aren't on the job card. This cuts two strong QSs.",
        B: "The job never needed \"drop everything\". Joanne's compressed week already fits it.",
        C: "Keeps them on paper, but labels them before anyone has met them."
      },
      job: 4,
      reveal: "Month-end dates are set in advance. Joanne's compressed week already fits the role.",
      prompt: "Was Dave describing the job, or describing how he's always worked?" },

    { title: "The licence",
      dave: "This role is out on sites across Cumbria for measures and valuations. No licence, no shortlist.",
      options: {
        A: "Apply it, it's essential on the job card",
        B: "Keep Lee in, he's too good to lose",
        C: "Keep them both in and see if they'd get one"
      },
      best: "A",
      flips: { A: ["lee", "aisha"], B: ["aisha"], C: [] },
      why: {
        A: "This one is fair: it's on the job card, linked to the job and applied to everyone the same.",
        B: "Bending the rule for someone we rate is bias too. Aisha goes, Lee stays.",
        C: "If it's essential, it applies to everyone. If it isn't, take it off the job card."
      },
      job: 0,
      reveal: "A fair filter: in the spec, linked to the job, applied the same to everyone.",
      prompt: "What makes this one different from the last two? If someone couldn't drive because of a disability, what might change?" },

    { title: "A proper construction background",
      dave: "Ten years in construction minimum. Someone from a factory isn't going to understand a rail job.",
      options: {
        A: "Apply it: 10 years in construction minimum",
        B: "Test against the job card: cost and contract experience in any sector counts",
        C: "Meet him halfway at 5 years in construction"
      },
      best: "B",
      flips: { A: ["priya", "sophie", "hannah", "steven", "kwame", "aisha"], B: [], C: ["priya", "sophie", "steven", "kwame", "aisha"] },
      why: {
        A: "Construction years aren't on the job card. Six applicants gone, including Hannah and Priya.",
        B: "Cost and contract experience counts wherever it was earned.",
        C: "Halfway to a rule the job doesn't need is still a rule the job doesn't need."
      },
      job: 1,
      reveal: "Priya has spent 8 years managing budgets, supplier contracts and variations, and is studying for her QS degree.",
      prompt: "Who has had an unbroken, construction-only career? Who's had to take the long way round?" },

    { title: "Will she settle?",
      dave: "Hannah's just moved up with two young kids. She'll be wanting time off and probably won't stick it. Same with Rachel.",
      options: {
        A: "Fair point, flip them down",
        B: "Keep them in, family isn't on the job card",
        C: "Keep them in, but ask them about childcare at interview"
      },
      best: "B",
      flips: { A: ["hannah", "rachel"], B: [], C: [] },
      why: {
        A: "Assuming a mum won't stay is sex discrimination.",
        B: "Family isn't on the job card. Danny's card mentions his son too, and Dave didn't blink.",
        C: "Feels reasonable, but asking only women about childcare is the classic trap."
      },
      job: null,
      reveal: "Danny's card mentions his son too. Nobody asked about his childcare.",
      prompt: "Would Dave have said this about a man who'd just moved with his family? Where do these assumptions come from?" }
  ],

  final: {
    roomAsk: "Happy with this shortlist?",
    shortcutHead: "If every one of Dave's shortcuts had gone through",
    shortcutDave: "Mark's a good lad, I know him from rugby.",
    shortcutNote: "That's affinity bias: the quiet one that never needed a round.",
    tagline: "Same pile of CVs. Different questions."
  }
};
