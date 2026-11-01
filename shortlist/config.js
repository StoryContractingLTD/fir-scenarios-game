// =====================================================================
// Who's Left Standing? settings
// This lives in the "shortlist" folder of the fir-scenarios-game repo.
// It uses the same Supabase tables (sg_) as the Scenarios Game, so only
// run one of the two games at a time.
// =====================================================================
window.SL_CONFIG = {

  // ---- Supabase (same project and tables as the Scenarios Game) ----
  supabaseUrl: "https://jffkqiguoibyoidmyzkt.supabase.co",
  supabaseKey: "sb_publishable_pKLwYTaF-gnRCUJvOKzCjQ_1hR7TLq8",

  // ---- The address phones use to join (the QR code is built from this) ----
  joinUrl: "https://storycontractingltd.github.io/fir-scenarios-game/shortlist/phone.html",

  // ---- Discussion and voting time per round, in seconds ----
  votingSeconds: 90,

  // ---- Images and sounds are shared with the Scenarios Game (one folder up) ----
  assets: "../assets/",
  images: { logo: "story-logo.png" },
  sounds: {
    votingMusic: "scenario-focus.mp3",   // loops while tables discuss and vote
    showEnd:     "scenario-focus.mp3"    // loops under the final scores
  }
};
