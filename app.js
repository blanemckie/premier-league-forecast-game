const { useMemo, useRef, useState, forwardRef } = React;

function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const Button = forwardRef(function Button({ children, className = "", disabled, onClick, ...props }, ref) {
  return (
    <button
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
});

const Input = forwardRef(function Input({ className = "", ...props }, ref) {
  return <input ref={ref} className={`${className} outline-none`} {...props} />;
});

function Badge({ children, className = "" }) {
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-black ${className}`}>{children}</span>;
}

const motion = {
  section: ({ children, initial, animate, transition, ...props }) => <section {...props}>{children}</section>,
};

function Icon({ children, className = "", size = 22 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <Icon {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
    </Icon>
  );
}

function LockIcon(props) {
  return (
    <Icon {...props}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </Icon>
  );
}

function TrophyIcon(props) {
  return (
    <Icon {...props}>
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M5 5H3a3 3 0 0 0 4 4" />
      <path d="M19 5h2a3 3 0 0 1-4 4" />
    </Icon>
  );
}

function UserIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </Icon>
  );
}

function TableIcon(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 4v16" />
      <path d="M14 4v16" />
    </Icon>
  );
}

function CheckIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Icon>
  );
}

function ChartIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16v-5" />
      <path d="M12 16V8" />
      <path d="M16 16v-9" />
    </Icon>
  );
}

function BallIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m12 7 4 3-1.5 5h-5L8 10l4-3Z" />
      <path d="M12 7V3" />
      <path d="M16 10l4-1" />
      <path d="M14.5 15 17 20" />
      <path d="M9.5 15 7 20" />
      <path d="M8 10 4 9" />
    </Icon>
  );
}

function ShieldIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </Icon>
  );
}

function PremierLionLogo({ flipped = false, small = false }) {
  return (
    <img
      src="https://brandlogos.net/wp-content/uploads/2022/04/premier_league-logo_brandlogos.net_e58ej.png"
      alt="Premier League"
      className={`${small ? "h-14 w-14" : "h-20 w-20"} ${flipped ? "scale-x-[-1]" : ""} object-contain drop-shadow-[0_0_24px_rgba(255,255,255,0.45)]`}
      onError={(e) => {
        e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg";
      }}
    />
  );
}

const initialTable = [
  { team: "Arsenal", played: 35, won: 23, drawn: 7, lost: 5, gf: 67, ga: 26, pts: 76 },
  { team: "Manchester City", played: 34, won: 21, drawn: 8, lost: 5, gf: 69, ga: 32, pts: 71 },
  { team: "Manchester United", played: 35, won: 18, drawn: 10, lost: 7, gf: 63, ga: 48, pts: 64 },
  { team: "Liverpool", played: 35, won: 17, drawn: 7, lost: 11, gf: 59, ga: 47, pts: 58 },
  { team: "Aston Villa", played: 35, won: 17, drawn: 7, lost: 11, gf: 48, ga: 44, pts: 58 },
  { team: "Bournemouth", played: 35, won: 12, drawn: 16, lost: 7, gf: 55, ga: 52, pts: 52 },
  { team: "Brentford", played: 35, won: 14, drawn: 9, lost: 12, gf: 52, ga: 46, pts: 51 },
  { team: "Brighton", played: 35, won: 13, drawn: 11, lost: 11, gf: 49, ga: 42, pts: 50 },
  { team: "Chelsea", played: 35, won: 13, drawn: 9, lost: 13, gf: 54, ga: 48, pts: 48 },
  { team: "Everton", played: 35, won: 13, drawn: 9, lost: 13, gf: 44, ga: 44, pts: 48 },
  { team: "Fulham", played: 35, won: 14, drawn: 6, lost: 15, gf: 44, ga: 49, pts: 48 },
  { team: "Sunderland", played: 35, won: 12, drawn: 11, lost: 12, gf: 37, ga: 46, pts: 47 },
  { team: "Newcastle United", played: 35, won: 13, drawn: 6, lost: 16, gf: 49, ga: 51, pts: 45 },
  { team: "Leeds United", played: 35, won: 10, drawn: 13, lost: 12, gf: 47, ga: 52, pts: 43 },
  { team: "Crystal Palace", played: 34, won: 11, drawn: 10, lost: 13, gf: 36, ga: 42, pts: 43 },
  { team: "Nottingham Forest", played: 35, won: 11, drawn: 9, lost: 15, gf: 44, ga: 46, pts: 42 },
  { team: "Tottenham Hotspur", played: 35, won: 9, drawn: 10, lost: 16, gf: 45, ga: 54, pts: 37 },
  { team: "West Ham United", played: 35, won: 9, drawn: 9, lost: 17, gf: 42, ga: 61, pts: 36 },
  { team: "Burnley", played: 35, won: 4, drawn: 8, lost: 23, gf: 35, ga: 71, pts: 20 },
  { team: "Wolverhampton Wanderers", played: 35, won: 3, drawn: 9, lost: 23, gf: 25, ga: 63, pts: 18 },
];

const fixtureWeeks = [
  { title: "Week 1", subtitle: "9–11 May", fixtures: [
    { id: "w1-1", date: "Sat 9 May", time: "12:30", home: "Liverpool", away: "Chelsea" },
    { id: "w1-2", date: "Sat 9 May", time: "15:00", home: "Brighton", away: "Wolverhampton Wanderers" },
    { id: "w1-3", date: "Sat 9 May", time: "15:00", home: "Fulham", away: "Bournemouth" },
    { id: "w1-4", date: "Sat 9 May", time: "15:00", home: "Sunderland", away: "Manchester United" },
    { id: "w1-5", date: "Sat 9 May", time: "17:30", home: "Manchester City", away: "Brentford" },
    { id: "w1-6", date: "Sun 10 May", time: "14:00", home: "Burnley", away: "Aston Villa" },
    { id: "w1-7", date: "Sun 10 May", time: "14:00", home: "Crystal Palace", away: "Everton" },
    { id: "w1-8", date: "Sun 10 May", time: "14:00", home: "Nottingham Forest", away: "Newcastle United" },
    { id: "w1-9", date: "Sun 10 May", time: "16:30", home: "West Ham United", away: "Arsenal" },
    { id: "w1-10", date: "Mon 11 May", time: "20:00", home: "Tottenham Hotspur", away: "Leeds United" },
  ]},
  { title: "Week 2", subtitle: "13–19 May", fixtures: [
    { id: "w2-1", date: "Wed 13 May", time: "20:00", home: "Manchester City", away: "Crystal Palace" },
    { id: "w2-2", date: "Sun 17 May", time: "12:30", home: "Aston Villa", away: "Liverpool" },
    { id: "w2-3", date: "Sun 17 May", time: "12:30", home: "Manchester United", away: "Nottingham Forest" },
    { id: "w2-4", date: "Sun 17 May", time: "15:00", home: "Brentford", away: "Crystal Palace" },
    { id: "w2-5", date: "Sun 17 May", time: "15:00", home: "Everton", away: "Sunderland" },
    { id: "w2-6", date: "Sun 17 May", time: "15:00", home: "Leeds United", away: "Brighton" },
    { id: "w2-7", date: "Sun 17 May", time: "15:00", home: "Wolverhampton Wanderers", away: "Fulham" },
    { id: "w2-8", date: "Sun 17 May", time: "17:30", home: "Newcastle United", away: "West Ham United" },
    { id: "w2-9", date: "Mon 18 May", time: "20:00", home: "Arsenal", away: "Burnley" },
    { id: "w2-10", date: "Tue 19 May", time: "19:30", home: "Bournemouth", away: "Manchester City" },
    { id: "w2-11", date: "Tue 19 May", time: "20:15", home: "Chelsea", away: "Tottenham Hotspur" },
  ]},
  { title: "Final Day", subtitle: "24 May", fixtures: [
    { id: "w3-1", date: "Sun 24 May", time: "16:00", home: "Brighton", away: "Manchester United" },
    { id: "w3-2", date: "Sun 24 May", time: "16:00", home: "Burnley", away: "Wolverhampton Wanderers" },
    { id: "w3-3", date: "Sun 24 May", time: "16:00", home: "Crystal Palace", away: "Arsenal" },
    { id: "w3-4", date: "Sun 24 May", time: "16:00", home: "Fulham", away: "Newcastle United" },
    { id: "w3-5", date: "Sun 24 May", time: "16:00", home: "Liverpool", away: "Brentford" },
    { id: "w3-6", date: "Sun 24 May", time: "16:00", home: "Manchester City", away: "Aston Villa" },
    { id: "w3-7", date: "Sun 24 May", time: "16:00", home: "Nottingham Forest", away: "Bournemouth" },
    { id: "w3-8", date: "Sun 24 May", time: "16:00", home: "Sunderland", away: "Chelsea" },
    { id: "w3-9", date: "Sun 24 May", time: "16:00", home: "Leeds United", away: "West Ham United" },
    { id: "w3-10", date: "Sun 24 May", time: "16:00", home: "Tottenham Hotspur", away: "Everton" },
  ]},
];

const allFixtures = fixtureWeeks.flatMap((week) => week.fixtures);

const officialBadgeUrls = {
  Arsenal: "https://resources.premierleague.com/premierleague/badges/t3.png",
  "Manchester City": "https://resources.premierleague.com/premierleague/badges/t43.png",
  "Manchester United": "https://resources.premierleague.com/premierleague/badges/t1.png",
  Liverpool: "https://resources.premierleague.com/premierleague/badges/70/t14@x2.png",
  Chelsea: "https://resources.premierleague.com/premierleague/badges/t8.png",
  "Aston Villa": "https://resources.premierleague.com/premierleague/badges/t7.png",
  Bournemouth: "https://resources.premierleague.com/premierleague/badges/t91.png",
  Brentford: "https://resources.premierleague.com/premierleague/badges/t94.png",
  Brighton: "https://resources.premierleague.com/premierleague/badges/t36.png",
  Everton: "https://resources.premierleague.com/premierleague/badges/t11.png",
  Fulham: "https://resources.premierleague.com/premierleague/badges/t54.png",
  Sunderland: "https://resources.premierleague.com/premierleague/badges/t56.png",
  "Newcastle United": "https://resources.premierleague.com/premierleague/badges/t4.png",
  "Leeds United": "https://resources.premierleague.com/premierleague/badges/t2.png",
  "Crystal Palace": "https://resources.premierleague.com/premierleague/badges/t31.png",
  "Nottingham Forest": "https://resources.premierleague.com/premierleague/badges/t17.png",
  "West Ham United": "https://resources.premierleague.com/premierleague/badges/t21.png",
  Burnley: "https://resources.premierleague.com/premierleague/badges/t90.png",
  "Wolverhampton Wanderers": "https://resources.premierleague.com/premierleague/badges/t39.png",
};

const clubMonograms = {
  Arsenal: "ARS", Liverpool: "LIV", Chelsea: "CHE", Everton: "EVE", Fulham: "FUL", Sunderland: "SUN", Burnley: "BUR",
  "Manchester City": "MCI", "Manchester United": "MUN", "Aston Villa": "AVL", Bournemouth: "BOU", Brentford: "BRE", Brighton: "BHA",
  "Newcastle United": "NEW", "Leeds United": "LEE", "Crystal Palace": "CRY", "Nottingham Forest": "NFO", "Tottenham Hotspur": "💩",
  "West Ham United": "WHU", "Wolverhampton Wanderers": "WOL",
};

const actualResults = {
  "w1-1": { home: "2", away: "1", status: "FT" },
  "w1-2": { home: "1", away: "0", status: "FT" },
  "w1-3": { home: "1", away: "1", status: "FT" },
  "w1-4": { home: "0", away: "2", status: "FT" },
  "w1-5": { home: "3", away: "1", status: "FT" },
};

function blankScores() {
  return Object.fromEntries(allFixtures.map((fixture) => [fixture.id, { home: "", away: "" }]));
}

function cloneScores(scores) {
  return Object.fromEntries(Object.entries(scores).map(([id, score]) => [id, { ...score }]));
}

function applyFixture(tableMap, fixture, score) {
  if (!score || score.home === "" || score.away === "") return;
  const homeGoals = Number(score.home);
  const awayGoals = Number(score.away);
  if (Number.isNaN(homeGoals) || Number.isNaN(awayGoals)) return;
  const home = tableMap[fixture.home];
  const away = tableMap[fixture.away];
  if (!home || !away) return;
  home.played += 1;
  away.played += 1;
  home.gf += homeGoals;
  home.ga += awayGoals;
  away.gf += awayGoals;
  away.ga += homeGoals;
  if (homeGoals > awayGoals) {
    home.won += 1;
    away.lost += 1;
    home.pts += 3;
  } else if (awayGoals > homeGoals) {
    away.won += 1;
    home.lost += 1;
    away.pts += 3;
  } else {
    home.drawn += 1;
    away.drawn += 1;
    home.pts += 1;
    away.pts += 1;
  }
}

function calculateTable(scores) {
  const safeScores = scores || blankScores();
  const tableMap = Object.fromEntries(initialTable.map((row) => [row.team, { ...row }]));
  allFixtures.forEach((fixture) => applyFixture(tableMap, fixture, safeScores[fixture.id]));
  return Object.values(tableMap)
    .map((row) => ({ ...row, gd: row.gf - row.ga }))
    .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.team.localeCompare(b.team));
}

function outcome(score) {
  if (!score || score.home === "" || score.away === "") return "pending";
  const h = Number(score.home);
  const a = Number(score.away);
  if (h > a) return "home";
  if (a > h) return "away";
  return "draw";
}

function scorePrediction(predicted, actual) {
  if (!actual || actual.home === "" || actual.away === "") return { points: 0, label: "Pending" };
  if (!predicted || predicted.home === "" || predicted.away === "") return { points: 0, label: "No pick" };
  const correctResult = outcome(predicted) === outcome(actual);
  const exactScore = predicted.home === actual.home && predicted.away === actual.away;
  return { points: (correctResult ? 5 : 0) + (exactScore ? 10 : 0), label: exactScore ? "Exact score" : correctResult ? "Correct result" : "Miss" };
}

function makeSampleScores(seed = 0) {
  const scores = blankScores();
  allFixtures.forEach((fixture, index) => {
    scores[fixture.id] = { home: String((index + seed) % 4), away: String((index * 2 + seed) % 3) };
  });
  return scores;
}

function buildSubmission(name, scores) {
  return { name, scores, finalTable: calculateTable(scores), submittedAt: new Date().toLocaleString("en-GB") };
}

function normalizeName(name) {
  return String(name || "").trim().toLowerCase().split(" ").filter(Boolean).join(" ");
}

function isDuplicateSubmissionName(name, submissions) {
  const normalized = normalizeName(name);
  return Boolean(normalized) && submissions.some((submission) => normalizeName(submission.name) === normalized);
}

function avg(values) {
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
}

function createSubmissionStats(submissions) {
  if (!submissions.length) return { topScoringTeam: "Awaiting submissions", topScoringGoals: 0, biggestMover: "Awaiting submissions", biggestMove: 0, titleFavourite: "Awaiting submissions" };
  const goals = Object.fromEntries(initialTable.map((row) => [row.team, 0]));
  const movement = Object.fromEntries(initialTable.map((row) => [row.team, []]));
  const titlePicks = {};
  const startPositions = Object.fromEntries(initialTable.map((row, index) => [row.team, index + 1]));
  submissions.forEach((submission) => {
    allFixtures.forEach((fixture) => {
      const score = submission.scores[fixture.id];
      if (score && score.home !== "" && score.away !== "") {
        goals[fixture.home] += Number(score.home);
        goals[fixture.away] += Number(score.away);
      }
    });
    submission.finalTable.forEach((row, index) => movement[row.team].push(startPositions[row.team] - (index + 1)));
    const winner = submission.finalTable[0]?.team;
    titlePicks[winner] = (titlePicks[winner] || 0) + 1;
  });
  const [topScoringTeam, topScoringGoals] = Object.entries(goals).sort((a, b) => b[1] - a[1])[0];
  const [biggestMover, moves] = Object.entries(movement).sort((a, b) => Math.abs(avg(b[1])) - Math.abs(avg(a[1])))[0];
  const [titleFavourite] = Object.entries(titlePicks).sort((a, b) => b[1] - a[1])[0];
  return { topScoringTeam, topScoringGoals, biggestMover, biggestMove: avg(moves).toFixed(1), titleFavourite };
}

function ClubMark({ team, small = false }) {
  const sizeClass = small ? "h-8 w-8 sm:h-9 sm:w-9" : "h-14 w-14";
  if (team === "Tottenham Hotspur") {
    return <div title={team} aria-label={`${team} club badge`} className={`${sizeClass} flex shrink-0 items-center justify-center rounded-full bg-white text-lg shadow-md ring-2 ring-slate-400`}>{clubMonograms[team]}</div>;
  }
  return (
    <div title={team} aria-label={`${team} club badge`} className={`${sizeClass} flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-[2px] shadow-md ring-2 ring-white/70`}>
      <img src={officialBadgeUrls[team]} alt={`${team} badge`} className="h-full w-full object-contain" onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} />
    </div>
  );
}

function runCalculationTests() {
  const emptyScores = blankScores();
  const tableWithoutPredictions = calculateTable(emptyScores);
  console.assert(tableWithoutPredictions.length === 20, "Expected table to contain 20 teams");
  console.assert(tableWithoutPredictions[0].team === "Arsenal", "Expected Arsenal to remain first with no predicted scores");
  console.assert(tableWithoutPredictions[0].pts === 76, "Expected Arsenal to start on the correct current points total");
  const cityWinScores = blankScores();
  cityWinScores["w1-5"] = { home: "2", away: "0" };
  const cityWinTable = calculateTable(cityWinScores);
  console.assert(cityWinTable.find((row) => row.team === "Manchester City").pts === 74, "Expected Manchester City to gain 3 points from 71 to 74");
  console.assert(cityWinTable.find((row) => row.team === "Brentford").played === 36, "Expected Brentford played count to increase");
  console.assert(scorePrediction({ home: "2", away: "1" }, { home: "2", away: "1" }).points === 15, "Expected exact score to award 15 points");
  console.assert(scorePrediction({ home: "1", away: "0" }, { home: "2", away: "0" }).points === 5, "Expected correct result to award 5 points");
  console.assert(scorePrediction({ home: "1", away: "1" }, { home: "0", away: "2" }).points === 0, "Expected wrong result to award 0 points");
  console.assert(normalizeName("  Blane   McKie ") === "blane mckie", "Expected name normalisation to trim and collapse spaces");
  console.assert(isDuplicateSubmissionName("blane", [{ name: "Blane" }]) === true, "Expected duplicate names to be detected case-insensitively");
  console.assert(clubMonograms["Tottenham Hotspur"] === "💩", "Expected Spurs badge joke to remain in place");
  const arsenalRow = calculateTable(blankScores()).find((row) => row.team === "Arsenal");
  console.assert(arsenalRow.won === 23 && arsenalRow.drawn === 7 && arsenalRow.lost === 5, "Expected final table to retain W/D/L columns");
  console.assert(arsenalRow.gf === 67 && arsenalRow.ga === 26 && arsenalRow.gd === 41, "Expected final table to retain GF/GA/GD columns");
}

if (typeof window !== "undefined" && !window.__PL_FORECAST_TESTS_RAN__) {
  window.__PL_FORECAST_TESTS_RAN__ = true;
  runCalculationTests();
}

function TeamBadge({ name }) {
  return <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-[#37003c] shadow-sm">{name}</span>;
}

function HowToPlayBox() {
  const steps = [
    { icon: "⚽", title: "Make Your Predictions", text: "Predict each remaining fixture and build your final Premier League table." },
    { icon: "📊", title: "Watch The Table Move", text: "See your live forecast table update instantly after every score input." },
    { icon: "🏆", title: "See Who Knows Ball", text: "Sit back and compare your football knowledge against everyone else." },
  ];
  return (
    <div className="mx-auto mt-5 max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-1 shadow-2xl backdrop-blur-sm sm:mt-6 sm:rounded-[2rem]">
      <div className="rounded-[1.35rem] bg-[#2c0030]/80 p-4 sm:rounded-[1.8rem] sm:p-6">
        <div className="mb-5 flex items-center justify-center gap-3"><div className="h-3 w-3 rounded-full bg-[#00ff85]" /><div className="text-xl font-black uppercase tracking-[0.18em] text-white">How To Play</div><div className="h-3 w-3 rounded-full bg-[#e90052]" /></div>
        <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="group relative flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ff85] to-[#04f5ff] text-3xl shadow-lg">{step.icon}</div>
                <div className="mb-2 text-lg font-black text-white">{step.title}</div>
                <div className="break-words text-xs font-semibold leading-relaxed text-white/70">{step.text}</div>
              </div>
              {index < steps.length - 1 && <div className="hidden text-3xl font-black text-white/25 md:block">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScoreRule({ title, points, text, dark = false }) {
  return <div className={`rounded-3xl p-5 text-center ${dark ? "bg-white/10 text-white" : "bg-[#f4f0ff] text-[#37003c]"}`}><div className="mb-2 text-3xl font-black tracking-tight text-[#00ff85]">{points}</div><div className="text-xl font-black">{title}</div><div className={`mt-2 text-sm font-semibold leading-relaxed ${dark ? "text-white/70" : "text-[#37003c]/70"}`}>{text}</div></div>;
}

function RulesBox({ dark = false }) {
  return (
    <div className={`${dark ? "mx-auto mt-5 max-w-5xl border-white/15 bg-white/10 text-white" : "border-[#e90052]/20 bg-[#fff7fc] text-[#37003c]"} rounded-[2rem] border-2 p-5`}>
      <div className="mb-4 flex flex-col items-center justify-center gap-3 text-center"><TrophyIcon className={dark ? "text-[#00ff85]" : "text-[#e90052]"} /><div><h3 className="text-2xl font-black">Game Rules & Scoring</h3><p className={`text-sm font-semibold ${dark ? "text-white/70" : "text-[#37003c]/70"}`}>How points are awarded in the forecast game.</p></div></div>
      <div className="grid gap-3 md:grid-cols-3"><ScoreRule dark={dark} title="Correct result" points="5 pts" text="Predict the right winner or draw." /><ScoreRule dark={dark} title="Exact score bonus" points="10 pts" text="Get the exact scoreline right." /><ScoreRule dark={dark} title="Maximum per match" points="15 pts" text="Correct result plus exact score." /></div>
    </div>
  );
}

function PremierLeagueForecastGame() {
  const [page, setPage] = useState("submit");
  const [playerName, setPlayerName] = useState("");
  const [scores, setScores] = useState(blankScores());
  const [lockedSubmission, setLockedSubmission] = useState(null);
  const [duplicateNameMessage, setDuplicateNameMessage] = useState("");
  const [lockMessage, setLockMessage] = useState("");
  const [submissions, setSubmissions] = useState([buildSubmission("Blane", makeSampleScores(1)), buildSubmission("Alex", makeSampleScores(2)), buildSubmission("Sarah", makeSampleScores(3))]);
  const scoreInputRefs = useRef({});
  const forecastTable = useMemo(() => calculateTable(scores), [scores]);
  const completedCount = allFixtures.filter((fixture) => scores[fixture.id].home !== "" && scores[fixture.id].away !== "").length;
  const isComplete = completedCount === allFixtures.length;
  const submissionStats = useMemo(() => createSubmissionStats(submissions), [submissions]);
  const gameLeaderboard = useMemo(() => submissions.map((submission) => ({ ...submission, gamePoints: allFixtures.reduce((total, fixture) => total + scorePrediction(submission.scores[fixture.id], actualResults[fixture.id]).points, 0) })).sort((a, b) => b.gamePoints - a.gamePoints), [submissions]);
  const nameAlreadyUsed = useMemo(() => isDuplicateSubmissionName(playerName, submissions), [playerName, submissions]);

  const focusScoreInput = (fixtureId, side) => {
    if (typeof window === "undefined") return;
    window.requestAnimationFrame(() => scoreInputRefs.current[`${fixtureId}-${side}`]?.focus());
  };
  const moveToNextFixture = (fixtureId) => {
    const currentIndex = allFixtures.findIndex((fixture) => fixture.id === fixtureId);
    const nextFixture = allFixtures[currentIndex + 1];
    if (nextFixture) focusScoreInput(nextFixture.id, "home");
  };
  const updateScore = (fixtureId, side, value) => {
    if (lockedSubmission) return;
    const cleanValue = value.replace(/[^0-9]/g, "").slice(0, 2);
    setScores((current) => ({ ...current, [fixtureId]: { ...current[fixtureId], [side]: cleanValue } }));
    if (cleanValue !== "" && side === "home") focusScoreInput(fixtureId, "away");
    if (cleanValue !== "" && side === "away") moveToNextFixture(fixtureId);
  };
  const lockSubmission = () => {
    if (lockedSubmission) return;
    if (!playerName.trim()) { setLockMessage("Enter your name first, then you can lock in your predictions."); return; }
    if (nameAlreadyUsed) { setDuplicateNameMessage("That name is already on the leaderboard — add an initial or nickname to make it unique."); setLockMessage(""); return; }
    if (!isComplete) { const remainingFixtures = allFixtures.length - completedCount; setLockMessage(`Nearly there — you still need to predict ${remainingFixtures} more fixture${remainingFixtures === 1 ? "" : "s"}.`); return; }
    const submission = buildSubmission(playerName.trim(), cloneScores(scores));
    setLockedSubmission(submission);
    setSubmissions((current) => [...current, submission]);
    setDuplicateNameMessage("");
    setLockMessage("");
  };
  const navButton = (id, label, icon) => (
    <Button onClick={() => setPage(id)} className={`group relative flex h-[96px] min-w-[210px] max-w-[240px] flex-1 snap-center items-center justify-center overflow-hidden rounded-[1.5rem] border-2 px-4 py-3 text-center transition-all duration-300 sm:h-[110px] sm:rounded-[1.75rem] sm:px-5 sm:py-4 ${page === id ? "border-[#00ff85] bg-[#00ff85] text-[#37003c] shadow-[0_0_30px_rgba(0,255,133,0.35)] hover:bg-[#00ff85]" : "border-white/10 bg-white/10 text-white hover:border-white/25 hover:bg-white/15"}`}>
      <div className="relative flex w-full items-center justify-center gap-4 text-center"><div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl shadow-lg ${page === id ? "bg-[#37003c] text-white" : "bg-white/10 text-white"}`}>{icon}</div><div><div className="break-words text-base font-black leading-snug">{label}</div><div className={`mt-1 text-[10px] font-bold uppercase leading-tight tracking-[0.08em] ${page === id ? "text-[#37003c]/70" : "text-white/50"}`}>{id === "submit" && "Enter Predictions"}{id === "stats" && "Prediction Insights"}{id === "results" && "Results & Rankings"}{id === "build" && "AI Build Journey"}</div></div></div>
    </Button>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#37003c] p-3 text-white sm:p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-5 md:space-y-6">
        <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00ff85] via-[#04f5ff] to-[#e90052] p-1 shadow-2xl">
          <div className="rounded-[1.85rem] bg-[#37003c] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)] p-4 sm:p-6 md:p-10">
            <div className="relative text-center"><div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-5"><div className="text-3xl drop-shadow-[0_0_18px_rgba(255,215,0,0.65)] sm:text-4xl md:text-5xl">🏆</div><h1 className="max-w-[75vw] text-center text-[clamp(1.55rem,8vw,3.2rem)] font-black leading-[0.95] tracking-[-0.04em] text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.55)] sm:max-w-full sm:whitespace-nowrap">Premier League Run In Forecast Game</h1><div className="text-3xl drop-shadow-[0_0_18px_rgba(255,215,0,0.65)] sm:text-4xl md:text-5xl">🏆</div></div><p className="mx-auto mt-5 max-w-2xl text-sm font-semibold text-white/80 md:text-base">Predict every remaining score, generate your final table, then compete against everyone else as the real results come in.</p><div className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Built in 1 hour as part of a fun way to develop AI skills with work.....see the “How this was built” tab for more information!</div><HowToPlayBox /><RulesBox dark /></div>
            <div className="mx-auto mt-8 flex w-full snap-x items-stretch gap-3 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center sm:gap-4 md:mt-10">{navButton("submit", "Score Submissions", "⚽")}{navButton("stats", "Fun Stats", "📊")}{navButton("results", "Results & Standings", "🏆")}{navButton("build", "How This Was Built", "🤖")}</div>
          </div>
        </motion.section>
        {page === "submit" && <SubmitPage playerName={playerName} setPlayerName={setPlayerName} scores={scores} updateScore={updateScore} scoreInputRefs={scoreInputRefs} lockedSubmission={lockedSubmission} lockSubmission={lockSubmission} completedCount={completedCount} forecastTable={forecastTable} nameAlreadyUsed={nameAlreadyUsed} duplicateNameMessage={duplicateNameMessage} lockMessage={lockMessage} />}
        {page === "stats" && <StatsPage stats={submissionStats} submissions={submissions} />}
        {page === "results" && <ResultsPage submissions={submissions} leaderboard={gameLeaderboard} />}
        {page === "build" && <BuildPage />}
      </div>
    </div>
  );
}

function SubmitPage({ playerName, setPlayerName, scores, updateScore, scoreInputRefs, lockedSubmission, lockSubmission, completedCount, forecastTable, nameAlreadyUsed, duplicateNameMessage, lockMessage }) {
  return (
    <div className="space-y-6">
      <Card className="relative overflow-hidden rounded-[2.25rem] border-0 bg-gradient-to-br from-[#ffffff] via-[#f7f2ff] to-[#eefcff] shadow-[0_16px_40px_rgba(0,0,0,0.14)]"><div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#00ff85]/20 blur-3xl" /><div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-[#e90052]/15 blur-3xl" /><CardContent className="relative p-5 md:p-6"><div className="grid gap-4 lg:grid-cols-[1.1fr_1.4fr] lg:items-center"><div className="relative flex h-full flex-col items-center justify-center gap-3 rounded-[1.75rem] bg-gradient-to-r from-[#37003c] via-[#4a0052] to-[#37003c] p-5 text-center text-white shadow-xl"><div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#00ff85] to-[#04f5ff] shadow-[0_10px_30px_rgba(0,255,133,0.35)]"><UserIcon className="text-[#37003c]" size={28} /></div><div><h2 className="text-3xl font-black tracking-tight">Your Entry</h2><p className="max-w-lg text-sm font-semibold text-white/75">Complete every remaining fixture prediction, enter your name and lock in your final Premier League forecast.</p></div></div><div className="relative flex items-center gap-4 rounded-[2rem] border-2 border-[#37003c]/10 bg-white p-3 shadow-xl"><div className="hidden text-5xl font-black text-[#00ff85] md:block">→</div><Input disabled={!!lockedSubmission} className="h-16 flex-1 rounded-[1.5rem] border-0 bg-[#f8f8ff] text-center text-2xl font-black shadow-inner placeholder:text-[#37003c]/30 focus-visible:ring-4 focus-visible:ring-[#00ff85]/40 sm:h-20 sm:text-3xl md:text-4xl" placeholder="Enter Your Name" value={playerName} onChange={(event) => setPlayerName(event.target.value)} /></div>{nameAlreadyUsed && !lockedSubmission && <div className="lg:col-span-2"><p className="rounded-[1.5rem] bg-[#fff0f6] p-3 text-center text-sm font-black text-[#e90052] shadow-sm">That name is already on the leaderboard — add an initial or nickname to make it unique.</p></div>}{duplicateNameMessage && <div className="lg:col-span-2"><p className="rounded-[1.5rem] bg-[#fff0f6] p-3 text-center text-sm font-black text-[#e90052] shadow-sm">{duplicateNameMessage}</p></div>}</div></CardContent></Card>
      <Card className="rounded-[2.25rem] border-0 bg-white/10 text-white shadow-2xl backdrop-blur"><CardContent className="p-5 md:p-6"><div className="mb-4 flex flex-col items-center justify-center gap-2 text-center"><div><h2 className="text-3xl font-black sm:text-4xl">Your Fixture Submissions</h2><p className="mx-auto max-w-2xl font-semibold text-white/70">Predict every remaining fixture and watch your live table update instantly.</p></div>{lockedSubmission && <Badge className="bg-[#00ff85] text-[#37003c]"><CheckIcon className="mr-1" size={14} />Locked In</Badge>}</div><div className="space-y-8"><div className="space-y-7">{fixtureWeeks.map((week) => <div key={week.title}><div className="sticky top-0 z-10 mb-3 rounded-2xl bg-[#37003c] p-3 text-center shadow-lg"><div className="text-2xl font-black">{week.title}</div><div className="text-sm font-bold text-[#00ff85]">{week.subtitle}</div></div><div className="grid gap-3 lg:grid-cols-2">{week.fixtures.map((fixture) => <FixtureInput key={fixture.id} fixture={fixture} scores={scores} updateScore={updateScore} scoreInputRefs={scoreInputRefs} lockedSubmission={lockedSubmission} />)}</div></div>)}</div><div className="mt-8 flex flex-col items-center justify-center gap-4"><Button disabled={!!lockedSubmission} onClick={lockSubmission} className="h-16 w-full max-w-3xl rounded-[1.5rem] bg-[#e90052] px-5 text-lg font-black text-white shadow-[0_0_35px_rgba(233,0,82,0.45)] transition-all duration-300 hover:scale-[1.01] hover:bg-[#c40046] sm:h-20 sm:rounded-[2rem] sm:px-10 sm:text-2xl"><LockIcon className="mr-3" size={24} />LOCK IN MY PREDICTIONS</Button>{lockMessage && !lockedSubmission && <div className="w-full max-w-3xl rounded-[1.5rem] bg-[#fff7d6] p-4 text-center text-sm font-black text-[#37003c] shadow-sm">{lockMessage}</div>}{lockedSubmission && <div className="w-full max-w-3xl rounded-[1.5rem] bg-gradient-to-r from-[#00ff85] to-[#04f5ff] p-4 text-center text-sm font-black text-[#37003c] shadow-lg">Entry locked. Good luck!</div>}</div><ForecastTable forecastTable={forecastTable} /></div></CardContent></Card>
    </div>
  );
}

function FixtureInput({ fixture, scores, updateScore, scoreInputRefs, lockedSubmission }) {
  return (
    <div className="rounded-3xl border border-[#37003c]/10 bg-white bg-[linear-gradient(135deg,rgba(55,0,60,0.02),rgba(0,255,133,0.04))] p-4 text-[#37003c] shadow-lg">
      <div className="mb-3 flex items-center justify-between text-xs font-black uppercase tracking-wide text-[#37003c]/60"><span>{fixture.date}</span><span>{fixture.time}</span></div>
      <div className="grid grid-cols-[32px_minmax(0,1fr)_52px_14px_52px_minmax(0,1fr)_32px] items-center gap-1 sm:grid-cols-[36px_1fr_64px_20px_64px_1fr_36px] sm:gap-2">
        <ClubMark team={fixture.home} small />
        <div className="truncate text-right text-xs font-black sm:text-base">{fixture.home}</div>
        <Input ref={(element) => { if (element) scoreInputRefs.current[`${fixture.id}-home`] = element; }} disabled={!!lockedSubmission} inputMode="numeric" value={scores[fixture.id].home} onChange={(event) => updateScore(fixture.id, "home", event.target.value)} className="h-11 rounded-2xl border-[#37003c]/20 text-center text-xl font-black sm:h-12 sm:text-2xl" placeholder="-" />
        <div className="text-center text-lg font-black text-[#e90052]">v</div>
        <Input ref={(element) => { if (element) scoreInputRefs.current[`${fixture.id}-away`] = element; }} disabled={!!lockedSubmission} inputMode="numeric" value={scores[fixture.id].away} onChange={(event) => updateScore(fixture.id, "away", event.target.value)} className="h-11 rounded-2xl border-[#37003c]/20 text-center text-xl font-black sm:h-12 sm:text-2xl" placeholder="-" />
        <div className="truncate text-xs font-black sm:text-base">{fixture.away}</div>
        <ClubMark team={fixture.away} small />
      </div>
    </div>
  );
}

function ForecastTable({ forecastTable }) {
  return (
    <Card className="rounded-[2rem] border border-[#37003c]/10 bg-white bg-[linear-gradient(135deg,rgba(55,0,60,0.015),rgba(4,245,255,0.03))] text-[#37003c] shadow-xl"><CardContent className="p-5 md:p-6"><div className="mb-6 flex flex-col items-center justify-center gap-3 text-center"><PremierLionLogo small /><div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#00ff85] to-[#04f5ff] shadow-lg"><TableIcon className="text-[#37003c]" size={30} /></div><div><h2 className="text-3xl font-black tracking-tight sm:text-4xl">The Final Table</h2><p className="mx-auto mt-1 max-w-3xl text-lg font-bold leading-relaxed text-[#37003c]/70">Based on your predictions... this is how the Premier League season finishes 👀🏆</p><p className="mx-auto mt-2 max-w-2xl text-sm font-black uppercase tracking-[0.12em] text-[#e90052]">⬆️ Don’t forget to lock in your predictions above!</p></div></div><div className="overflow-x-auto overflow-y-hidden rounded-3xl border border-[#37003c]/10"><table className="w-full min-w-[860px] text-[13px] md:text-sm"><thead className="bg-[#37003c] text-white"><tr><th className="p-3 text-left font-black">#</th><th className="p-3 text-left font-black">Club</th><th className="p-3 text-center font-black">P</th><th className="p-3 text-center font-black">W</th><th className="p-3 text-center font-black">D</th><th className="p-3 text-center font-black">L</th><th className="p-3 text-center font-black">GF</th><th className="p-3 text-center font-black">GA</th><th className="p-3 text-center font-black">GD</th><th className="p-3 text-center font-black">Pts</th></tr></thead><tbody>{forecastTable.map((row, index) => <tr key={row.team} className="border-b border-[#37003c]/10 last:border-0"><td className="p-3 text-sm font-black">{index + 1}</td><td className="p-3 text-sm font-black"><div className="flex items-center gap-2"><ClubMark team={row.team} small />{row.team}</div></td><td className="p-3 text-center font-semibold">{row.played}</td><td className="p-3 text-center font-semibold">{row.won}</td><td className="p-3 text-center font-semibold">{row.drawn}</td><td className="p-3 text-center font-semibold">{row.lost}</td><td className="p-3 text-center font-semibold">{row.gf}</td><td className="p-3 text-center font-semibold">{row.ga}</td><td className="p-3 text-center font-semibold">{row.gd}</td><td className="p-3 text-center font-black">{row.pts}</td></tr>)}</tbody></table></div></CardContent></Card>
  );
}


function StatsPage({ stats, submissions }) {
  return <div className="relative space-y-6"><div className="grid gap-4 md:grid-cols-4"><StatCard icon={<BallIcon />} label="Most forecast goals" value={stats.topScoringTeam} detail={`${stats.topScoringGoals} goals across submissions`} /><StatCard icon={<ChartIcon />} label="Biggest average mover" value={stats.biggestMover} detail={`${stats.biggestMove} places vs current table`} /><StatCard icon={<TrophyIcon />} label="Most picked champion" value={stats.titleFavourite} detail="Based on locked forecast tables" /><StatCard icon={<UserIcon />} label="Total submissions" value={String(submissions.length)} detail="Including demo entries" /></div><Card className="rounded-[2rem] border border-[#37003c]/10 bg-white bg-[linear-gradient(135deg,rgba(55,0,60,0.015),rgba(4,245,255,0.03))] text-[#37003c] shadow-xl"><CardContent className="p-6"><h2 className="mb-4 text-3xl font-black">Fun Stats</h2><p className="font-semibold text-[#37003c]/75">Fun stats about the predictions — who people think will score most, who moves most in the run-in, and who everyone expects to win the league.</p><div className="mt-5 rounded-[2rem] border border-[#37003c]/10 bg-gradient-to-br from-[#f4f0ff] to-[#eefcff] p-5 text-center shadow-sm"><div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00ff85] text-[#37003c]"><ShieldIcon size={28} /></div><h3 className="text-2xl font-black">Ready For Real Tester Storage</h3><p className="mx-auto mt-2 max-w-3xl text-sm font-bold leading-relaxed text-[#37003c]/70">This prototype now has unique-name checking and authentic Premier League badge links. The next upgrade is connecting Firebase, so locked predictions are saved online and shared across everyone’s devices.</p></div></CardContent></Card></div>;
}

function StatCard({ icon, label, value, detail }) {
  return <Card className="rounded-[2rem] border border-[#37003c]/10 bg-white bg-[linear-gradient(135deg,rgba(55,0,60,0.015),rgba(4,245,255,0.03))] text-[#37003c] shadow-xl"><CardContent className="p-5"><div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00ff85]">{icon}</div><div className="text-xs font-black uppercase tracking-wide text-[#e90052]">{label}</div><div className="mt-1 break-words text-xl font-black leading-tight">{value}</div><div className="mt-2 text-sm font-semibold text-[#37003c]/65">{detail}</div></CardContent></Card>;
}

function ResultsPage({ submissions, leaderboard }) {
  return <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"><Card className="rounded-[2rem] border border-[#37003c]/10 bg-white bg-[linear-gradient(135deg,rgba(55,0,60,0.015),rgba(4,245,255,0.03))] text-[#37003c] shadow-xl"><CardContent className="p-6"><div className="mb-4 flex items-center gap-2"><CalendarIcon className="text-[#e90052]" /><h2 className="text-3xl font-black">Actual results vs submissions</h2></div><div className="space-y-3">{allFixtures.map((fixture) => <ResultRow key={fixture.id} fixture={fixture} submissions={submissions} />)}</div></CardContent></Card><div className="space-y-6"><Card className="rounded-[2rem] border-0 bg-[#00ff85] text-[#37003c] shadow-xl"><CardContent className="p-6"><h2 className="mb-2 text-2xl font-black">Game leaderboard</h2><p className="mb-4 font-semibold">5 pts correct result + 10 bonus pts exact score.</p><div className="space-y-3">{leaderboard.map((player, index) => <div key={player.name} className="flex items-center justify-between rounded-3xl bg-white p-4"><div><div className="text-xs font-black text-[#e90052]">#{index + 1}</div><div className="text-xl font-black">{player.name}</div></div><div className="text-3xl font-black">{player.gamePoints}</div></div>)}</div></CardContent></Card><Card className="rounded-[2rem] border border-[#37003c]/10 bg-white bg-[linear-gradient(135deg,rgba(55,0,60,0.015),rgba(4,245,255,0.03))] text-[#37003c] shadow-xl"><CardContent className="p-6"><h2 className="mb-4 text-2xl font-black">People’s forecast champions</h2>{submissions.map((submission) => <div key={submission.name} className="mb-2 flex items-center justify-between rounded-2xl bg-[#f4f0ff] p-3"><span className="font-black">{submission.name}</span><span className="font-bold">{submission.finalTable[0].team}</span></div>)}</CardContent></Card></div></div>;
}

function BuildPage() {
  const buildSteps = [
    { title: "1. Starting With The Idea", text: "The starting point was simply: ‘Can I build a fun Premier League run-in prediction game for friends and work colleagues using AI?’ The aim was not perfection — it was to learn by building something real.", icon: "💡" },
    { title: "2. First Prompt Into ChatGPT", text: "The first prompt asked ChatGPT Canvas to create a modern Premier League prediction game using React, with fixtures, live table calculations and a leaderboard system. Within seconds, the first working prototype existed.", icon: "⌨️" },
    { title: "3. Rapid Visual Improvements", text: "From there, the app evolved through simple conversational prompts like: ‘Make this look more premium’, ‘Add Premier League vibes’, ‘Improve the navigation’, ‘Make the title more centred’ and ‘Make the instructions more visually pleasing.’", icon: "🎨" },
    { title: "4. Iterating Through Conversation", text: "Most improvements were not coded manually. Instead, ideas were described naturally in English and the AI updated the React code live. The process felt more like directing a designer/developer rather than traditional coding.", icon: "🗣️" },
    { title: "5. Adding Game Logic", text: "The scoring system, prediction locking, forecast tables and points calculations were all generated and refined through AI-assisted iteration.", icon: "⚽" },
    { title: "6. Debugging With AI", text: "When coding issues appeared, ChatGPT helped debug by explaining the errors and rewriting affected code sections.", icon: "🛠️" },
  ];
  const examplePrompts = ["Make the title more centred and visually prominent", "Add Premier League trophies and make it feel more premium", "Create fun stats about the predictions", "Make the navigation clearer and more interactive", "Use authentic Premier League badges", "Fix the JSX closing tag error"];
  return <div className="space-y-8"><Card className="rounded-[2rem] border-0 bg-gradient-to-br from-[#00ff85] via-[#04f5ff] to-[#e90052] p-1 shadow-2xl"><CardContent className="rounded-[1.8rem] bg-[#37003c] p-8 text-white"><div className="mx-auto max-w-5xl text-center"><div className="mb-4 text-7xl">🤖</div><h2 className="mb-5 text-5xl font-black">How This Was Built</h2><p className="mx-auto max-w-4xl text-lg font-semibold leading-relaxed text-white/75">This entire Premier League Run In Forecast Game was built in around 1 hour using ChatGPT Canvas, conversational prompting and AI-assisted React development.</p></div></CardContent></Card><Card className="rounded-[2rem] border border-[#37003c]/10 bg-white bg-[linear-gradient(135deg,rgba(55,0,60,0.015),rgba(4,245,255,0.03))] text-[#37003c] shadow-xl"><CardContent className="p-8"><div className="mb-6 text-center"><h3 className="text-4xl font-black">The Process</h3><p className="mt-2 text-lg font-semibold text-[#37003c]/65">Step-by-step how the project evolved from idea to live website.</p></div><div className="space-y-5">{buildSteps.map((step) => <div key={step.title} className="rounded-[2rem] border border-[#37003c]/10 bg-[#f8f6ff] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left"><div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#00ff85] to-[#04f5ff] text-4xl shadow-lg">{step.icon}</div><div><h4 className="mb-3 text-2xl font-black leading-tight">{step.title}</h4><p className="text-base font-semibold leading-relaxed text-[#37003c]/70">{step.text}</p></div></div></div>)}</div></CardContent></Card><Card className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] text-white shadow-xl backdrop-blur"><CardContent className="p-8 text-center"><div className="mb-5 text-6xl">💬</div><h3 className="mb-5 text-4xl font-black">Example Prompts Used</h3><div className="grid gap-4 md:grid-cols-2">{examplePrompts.map((prompt) => <div key={prompt} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 text-left font-semibold text-white/85 shadow-lg backdrop-blur">“{prompt}”</div>)}</div></CardContent></Card></div>;
}

function ResultRow({ fixture, submissions }) {
  const actual = actualResults[fixture.id];
  return (
    <div className="rounded-3xl border border-[#37003c]/10 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <ClubMark team={fixture.home} small />
          <div><div className="text-xs font-black uppercase tracking-wide text-[#37003c]/50">{fixture.date} · {fixture.time}</div><div className="font-black">{fixture.home} v {fixture.away}</div></div>
          <ClubMark team={fixture.away} small />
        </div>
        <div className="rounded-2xl bg-[#37003c] px-4 py-2 text-center font-black text-white">{actual ? `${actual.home} - ${actual.away}` : "Live / upcoming"}</div>
      </div>
      <div className="mt-3 grid gap-2 md:grid-cols-3">
        {submissions.map((submission) => {
          const prediction = submission.scores[fixture.id];
          const scoring = scorePrediction(prediction, actual);
          const predictedText = prediction ? `${prediction.home}-${prediction.away}` : "-";
          return <div key={`${fixture.id}-${submission.name}`} className="rounded-2xl bg-[#f4f0ff] p-3"><div className="flex items-center justify-between"><span className="font-black">{submission.name}</span><span className="rounded-full bg-white px-2 py-1 text-xs font-black">{scoring.points} pts</span></div><div className="mt-1 text-sm font-semibold text-[#37003c]/70">Predicted {predictedText} · {scoring.label}</div></div>;
        })}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PremierLeagueForecastGame />);
