// =====================================================================
// Who's Left Standing? The content
// Edit the words here. Keep the structure (ids, letters, brackets) as it is.
// Each round:
//   dave      what Neil says
//   options   A, B, C as they appear on the phones
//   best      the strongest option (10 points). The other two score 5.
//   shortcut  the option that is Neil's suggestion (used for the final reveal)
//   flips     which applicants each option flips down if the room picks it
//   why       one line per option, shown at the reveal
//   job       which job card line lights up at the reveal (0 = first line, or null)
//   reveal    one line under the options at the reveal
//   learn     the "Why it matters" screen: a headline, two or three points, and the fair question
//   prompt    what the facilitator asks (control panel only)
//   notes     facilitator only (control panel only)
// =====================================================================
window.SL_GAME = {
  title: "Who's Left Standing?",
  subtitle: "Twelve applicants. One vacancy. Eight shortcuts from a busy hiring manager. Your table decides which ones the room takes.",
  manager: "Neil",
  role: "Quantity Surveyor",

  job: [
    "Full UK driving licence",
    "Cost and contract experience, any sector",
    "QS qualified or studying for it",
    "Clear communicator",
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
      card: "QS, 4 years", personal: "Asked for the interview questions in writing",
      behind: "Qualified, licence, some rail experience. Asked for a common interview adjustment",
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
        B: "Only keep the ones who explained their gap on the CV",
        C: "Keep them all in, and at interview ask everyone about their recent experience"
      },
      best: "C", shortcut: "A",
      flips: { A: ["rachel", "kwame", "tom"], B: ["tom"], C: [] },
      why: {
        A: "Cuts a parent, a Forces leaver and someone recovering from illness. None of that says they can't do this job.",
        B: "Sounds fair, but it punishes Tom for keeping his health private, which he's entitled to do.",
        C: "Same question for everyone. Nobody is singled out for having a life outside work."
      },
      job: null,
      reveal: "Behind the three gaps: raising children, leaving the Forces, recovering from illness.",
      learn: {
        head: "A gap tells you something happened. It doesn't tell you what someone can do.",
        points: [
          "Career breaks are more common among women, mostly because of caring for children or relatives.",
          "Health questions before a job offer are restricted by the Equality Act, with narrow exceptions such as asking about adjustments for the interview.",
          "Who else it catches: Forces leavers, carers of any gender, people made redundant, people who've been ill."
        ],
        fair: "What have you done recently that shows you can do this job?"
      },
      prompt: "Who's more likely to have a gap, and why? Was B fair to Tom?",
      notes: "Expect B to split the room: it feels like a reasonable compromise. Push on why Tom should have to explain." },

    { title: "Full-time and on call",
      dave: "I need someone who's full-time now and can stay late whenever month-end hits.",
      options: {
        A: "Check the job card: month-end dates are set in advance, so current hours aren't the test",
        B: "Keep them in, but ask Rachel and Joanne at interview if they could go full-time",
        C: "Flip down anyone who isn't full-time right now"
      },
      best: "A", shortcut: "C",
      flips: { A: [], B: [], C: ["rachel", "joanne"] },
      why: {
        A: "The job never needed \"drop everything\". Joanne's compressed week already fits it.",
        B: "Keeps them in, but only the part-timers get the extra question. That's singling them out.",
        C: "Current hours aren't on the job card. This cuts two strong QSs."
      },
      job: 4,
      reveal: "Month-end dates are set in advance. Joanne's compressed week already fits the role.",
      learn: {
        head: "Was Neil describing the job, or how he's always worked?",
        points: [
          "Most part-time workers in the UK are women, so a \"full-time now\" rule falls hardest on them.",
          "Since April 2024, employees can ask for flexible working from their first day in a job.",
          "Who else it catches: carers, disabled people, older workers easing down."
        ],
        fair: "These are the hours and month-end dates the job needs. Can you work them?"
      },
      prompt: "Was Neil describing the job, or how he's always worked? What's wrong with B if it's asked politely?",
      notes: "B is the trap: it sounds reasonable, but only two applicants get the question, and both are women." },

    { title: "The licence",
      dave: "This role is out on sites across Cumbria for measures and valuations. No licence, no shortlist.",
      options: {
        A: "Keep them both in and see if they'd get one",
        B: "Apply it to everyone: it's essential on the job card",
        C: "Keep Lee in, he's too good to lose"
      },
      best: "B", shortcut: "B",
      flips: { A: [], B: ["lee", "aisha"], C: ["aisha"] },
      why: {
        A: "If it's essential, it applies to everyone. If it isn't, take it off the job card.",
        B: "Fair: it's on the job card, linked to the job and applied to everyone the same.",
        C: "Bending the rule for someone we rate is bias too. Aisha goes, Lee stays."
      },
      job: 0,
      reveal: "This time Neil's shortcut is fair. Did your table trust it, or push back out of habit?",
      learn: {
        head: "Not every filter is bias. The test is whether it's needed, linked to the job and applied to everyone.",
        points: [
          "Option C is the bias in this round: keeping the rule for Aisha but not for Lee.",
          "Worth asking when the job card is written: is a licence the need, or is getting to sites the need?",
          "If a disabled applicant can't drive, the employer has to consider reasonable adjustments."
        ],
        fair: "Does every essential criterion on this job card describe something the job really needs?"
      },
      prompt: "What makes this different from the last two rounds? What if someone couldn't drive because of a disability?",
      notes: "Watch for tables picking A out of habit after two rounds of pushing back. That's the point of this round." },

    { title: "A proper construction background",
      dave: "Ten years in construction minimum. Someone from a factory isn't going to understand a rail job.",
      options: {
        A: "Meet him halfway at 5 years in construction",
        B: "Apply it: 10 years in construction minimum",
        C: "Test against the job card: cost and contract experience in any sector counts"
      },
      best: "C", shortcut: "B",
      flips: { A: ["priya", "sophie", "steven", "kwame", "aisha"], B: ["priya", "sophie", "hannah", "steven", "kwame", "aisha"], C: [] },
      why: {
        A: "Halfway to a rule the job doesn't need is still a rule the job doesn't need.",
        B: "Construction years aren't on the job card. Six applicants gone, including Hannah and Priya.",
        C: "Cost and contract experience counts wherever it was earned."
      },
      job: 1,
      reveal: "Priya has 8 years managing budgets, supplier contracts and variations, and is studying for her QS degree.",
      learn: {
        head: "Years in the industry is a stand-in. Ask what it's meant to prove, then test that.",
        points: [
          "A long minimum shuts out younger applicants, people with career breaks and anyone changing sector.",
          "Construction has fewer women than most industries, so \"construction years only\" narrows the pool further.",
          "Kwame ran works budgets in the Royal Engineers. Is that really less relevant than ten years on a site?"
        ],
        fair: "Tell me about a contract or budget you managed, and how you handled a variation."
      },
      prompt: "Who has had an unbroken, construction-only career? Who's had to take the long way round?",
      notes: "A will feel like a sensible compromise. Ask what five years proves that the job card doesn't already test." },

    { title: "Will clients understand her?",
      dave: "I gave Priya a quick ring. Strong accent. Clients need to understand their QS, so she's out.",
      options: {
        A: "Judge what she said, not how she sounded: did she explain things clearly?",
        B: "Keep her in, but give her a written test nobody else gets",
        C: "Neil's right, clear communication is on the job card. Flip her down"
      },
      best: "A", shortcut: "C",
      flips: { A: [], B: [], C: ["priya"] },
      why: {
        A: "Clear communication is about being understood and explaining well. An accent isn't a lack of clarity.",
        B: "Keeps her in, but a test only she has to sit is treating her differently.",
        C: "It sounds like the job card, but it's judging how she sounds, not what she said."
      },
      job: 3,
      reveal: "Did anyone else get a phone call from Neil? Or only Priya?",
      learn: {
        head: "\"Clear communicator\" is on the job card. That's what makes this one easy to get wrong.",
        points: [
          "An accent usually points to where someone's from. Race in the Equality Act includes nationality and ethnic or national origins.",
          "If only some applicants get a phone screen, the process isn't the same for everyone.",
          "Who else it catches: regional accents, people with speech differences, anyone who sounds \"not from round here\"."
        ],
        fair: "Walk me through how you'd explain a cost overrun to a client."
      },
      prompt: "Is this about clarity, or about how someone sounds? Would a broad Cumbrian accent get the same treatment?",
      notes: "Expect some tables to defend C because communication is on the job card. Ask them how Neil measured it, and whether anyone else was rung." },

    { title: "Help at interview",
      dave: "Steven wants the questions in writing at interview. If he needs help to get through an interview, he'll need help doing the job.",
      options: {
        A: "Same process for everyone: no special treatment, that's fairest",
        B: "Give him the questions in writing, and assess him on the job card like everyone else",
        C: "Flip him down: if he needs help now, he'll struggle on the job"
      },
      best: "B", shortcut: "C",
      flips: { A: ["steven"], B: [], C: ["steven"] },
      why: {
        A: "Sounds fair, but a spoken-only interview tests the format, not the QS. Steven is marked down.",
        B: "Removes a barrier that has nothing to do with the job, then holds him to the same standard.",
        C: "An interview adjustment says nothing about how he'd do the job."
      },
      job: null,
      reveal: "Questions in writing is a common, low-cost interview adjustment.",
      learn: {
        head: "Treating everyone identically isn't always treating them fairly.",
        points: [
          "Employers have a legal duty to make reasonable adjustments for disabled applicants, including at interview.",
          "Asking applicants what adjustments they need for the interview is one of the questions the law allows before an offer.",
          "Many people never ask for an adjustment because they worry it'll count against them. This round is why."
        ],
        fair: "Is there anything we can do to help you show us your best at interview?"
      },
      prompt: "Why does \"same process for everyone\" feel fair? Who does it leave out?",
      notes: "A is the strong trap: tables will defend it as fairness. Keep the focus on what the interview is meant to test." },

    { title: "Will she settle?",
      dave: "Hannah's just moved up with two young kids. She'll be wanting time off and probably won't stick it. Same with Rachel.",
      options: {
        A: "Keep them in, but ask them about childcare at interview",
        B: "Fair point, flip them down",
        C: "Keep them in, and ask every applicant about the hours and travel the job needs"
      },
      best: "C", shortcut: "B",
      flips: { A: [], B: ["hannah", "rachel"], C: [] },
      why: {
        A: "Feels reasonable, but asking only the mums about childcare is the classic trap.",
        B: "Assuming a mum won't stay is an assumption about her sex, not evidence about her.",
        C: "Asks about what the job needs, of everyone. That's the information Neil actually needs."
      },
      job: null,
      reveal: "Danny's card mentions his son too. Nobody asked about his childcare.",
      learn: {
        head: "Neil thinks he's predicting the future. He's making an assumption about women.",
        points: [
          "Sex, and pregnancy and maternity, are protected characteristics. Turning someone down for being a mum is discrimination.",
          "Studies sending out identical CVs have found mothers rated as less committed, while fathers weren't marked down.",
          "Hannah has just moved here with her family. That could just as easily mean she's the one most likely to stay."
        ],
        fair: "The job needs these hours and this travel. Is that something you can do?"
      },
      prompt: "Would Neil have said this about a man who'd just moved with his family? Where do these assumptions come from?",
      notes: "Research reference if challenged: Correll, Benard and Paik (2007), 'Getting a Job: Is There a Motherhood Penalty?'. Use it as a pointer, not a statistic." },

    { title: "One of ours",
      dave: "Mark's a good lad, I know him from rugby. Put him straight through to interview, he'll pick up the QS side.",
      options: {
        A: "Hold him to the same job card: he doesn't meet the essentials yet, so he doesn't go through",
        B: "Put him through, he's a known quantity",
        C: "Give him a courtesy interview, it's only one slot"
      },
      best: "A", shortcut: "B",
      flips: { A: ["mark"], B: [], C: [] },
      why: {
        A: "Same standard for everyone, including people we like. If Mark wants a route into QS, offer it openly.",
        B: "\"Known quantity\" usually means \"like me\". That's affinity bias.",
        C: "A courtesy slot is one somebody else on the job card didn't get."
      },
      job: 2,
      reveal: "Mark has no QS qualification and no commercial experience. He's a good site engineer, not yet a QS.",
      learn: {
        head: "Affinity bias: we rate people higher when they remind us of ourselves.",
        points: [
          "It rarely feels like bias. It feels like trust, or a good feeling about someone.",
          "If the shortlist comes from the manager's network, it tends to look like the manager's network. Construction's workforce is still mostly men.",
          "Saying no to Mark here isn't saying no to Mark. A trainee QS route, offered openly, is a different conversation."
        ],
        fair: "Does this applicant meet the essential criteria, judged the same way as everyone else?"
      },
      prompt: "Why does this one feel different from the others? Have you ever been the Mark in this story?",
      notes: "C will be popular: it feels generous. Ask who loses out when the courtesy slot goes to Mark." }
  ],

  final: {
    roomAsk: "Happy with this shortlist?",
    shortcutHead: "If every one of Neil's shortcuts had gone through",
    shortcutDave: "Danny and Mark. Couldn't have picked better myself.",
    shortcutNote: "Every shortcut sounded reasonable on its own. Together, they built a shortlist that looks just like Neil.",
    tagline: "Same pile of CVs. Different questions."
  }
};
