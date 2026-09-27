// =====================================================================
// FIR Scenarios Game ("Nothing In It"): settings
// This is the only file you should need to edit by hand.
// =====================================================================
window.GG_CONFIG = {

  // ---- Supabase (same project as the other games; this game uses the sg_ tables) ----
  supabaseUrl: "https://jffkqiguoibyoidmyzkt.supabase.co",
  supabaseKey: "sb_publishable_pKLwYTaF-gnRCUJvOKzCjQ_1hR7TLq8",

  // ---- The address phones use to join (the QR code is built from this) ----
  joinUrl: "https://storycontractingltd.github.io/fir-scenarios-game/phone.html",

  // ---- Vimeo: the scenario video (scene times are in content/questions.js) ----
  vimeoId: "1223951596",
  vimeoHash: "c0e6b77135",

  // ---- Images (in assets/images) ----
  images: {
    logo: "story-logo.png"
  },

  // ---- Discussion and voting time per round, in seconds ----
  votingSeconds: 180,

  // ---- Sounds (in assets/audio). No voiceover and no applause in this game. ----
  sounds: {
    votingMusic:  "scenario-focus.mp3",   // loops while tables discuss and vote
    showEnd:      "scenario-focus.mp3"    // loops under the final scores
  }
};
