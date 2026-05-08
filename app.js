
const initialTable = [
  { team: "Arsenal", played: 35, won: 26, drawn: 6, lost: 3, gf: 77, ga: 28, pts: 84 },
  { team: "Manchester City", played: 34, won: 25, drawn: 4, lost: 5, gf: 82, ga: 35, pts: 79 },
  { team: "Manchester United", played: 35, won: 20, drawn: 8, lost: 7, gf: 61, ga: 39, pts: 68 },
  { team: "Liverpool", played: 35, won: 19, drawn: 8, lost: 8, gf: 66, ga: 42, pts: 65 },
  { team: "Aston Villa", played: 35, won: 18, drawn: 7, lost: 10, gf: 58, ga: 45, pts: 61 },
  { team: "Bournemouth", played: 35, won: 16, drawn: 7, lost: 12, gf: 55, ga: 48, pts: 55 },
  { team: "Brentford", played: 35, won: 15, drawn: 8, lost: 12, gf: 57, ga: 53, pts: 53 },
  { team: "Brighton", played: 35, won: 14, drawn: 9, lost: 12, gf: 52, ga: 48, pts: 51 },
  { team: "Chelsea", played: 35, won: 14, drawn: 8, lost: 13, gf: 59, ga: 55, pts: 50 },
  { team: "Everton", played: 35, won: 13, drawn: 8, lost: 14, gf: 43, ga: 44, pts: 47 },
  { team: "Fulham", played: 35, won: 12, drawn: 10, lost: 13, gf: 44, ga: 48, pts: 46 },
  { team: "Sunderland", played: 35, won: 12, drawn: 8, lost: 15, gf: 41, ga: 50, pts: 44 },
  { team: "Newcastle United", played: 35, won: 11, drawn: 10, lost: 14, gf: 51, ga: 57, pts: 43 },
  { team: "Leeds United", played: 35, won: 11, drawn: 8, lost: 16, gf: 42, ga: 56, pts: 41 },
  { team: "Crystal Palace", played: 34, won: 10, drawn: 9, lost: 15, gf: 39, ga: 52, pts: 39 },
  { team: "Nottingham Forest", played: 35, won: 10, drawn: 8, lost: 17, gf: 38, ga: 55, pts: 38 },
  { team: "Tottenham Hotspur", played: 35, won: 9, drawn: 9, lost: 17, gf: 49, ga: 65, pts: 36 },
  { team: "West Ham United", played: 35, won: 8, drawn: 9, lost: 18, gf: 39, ga: 62, pts: 33 },
  { team: "Burnley", played: 35, won: 6, drawn: 8, lost: 21, gf: 31, ga: 68, pts: 26 },
  { team: "Wolverhampton Wanderers", played: 35, won: 5, drawn: 7, lost: 23, gf: 32, ga: 71, pts: 22 },
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

const allFixtures = fixtureWeeks.flatMap(w => w.fixtures);

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
  Arsenal: "ARS",
  "Manchester City": "MCI",
  "Manchester United": "MUN",
  Liverpool: "LIV",
  Chelsea: "CHE",
  "Aston Villa": "AVL",
  Bournemouth: "BOU",
  Brentford: "BRE",
  Brighton: "BHA",
  Everton: "EVE",
  Fulham: "FUL",
  Sunderland: "SUN",
  "Newcastle United": "NEW",
  "Leeds United": "LEE",
  "Crystal Palace": "CRY",
  "Nottingham Forest": "NFO",
  "Tottenham Hotspur": "💩",
  "West Ham United": "WHU",
  Burnley: "BUR",
  "Wolverhampton Wanderers": "WOL",
};

const actualResults = {
  "w1-1": { home: "2", away: "1", status: "FT" },
  "w1-2": { home: "1", away: "0", status: "FT" },
  "w1-3": { home: "1", away: "1", status: "FT" },
  "w1-4": { home: "0", away: "2", status: "FT" },
  "w1-5": { home: "3", away: "1", status: "FT" },
};

let page = "submit";
let playerName = "";
let scores = blankScores();
let lockedSubmission = null;
let duplicateNameMessage = "";
let lockMessage = "";
let submissions = [
  buildSubmission("Blane", makeSampleScores(1)),
  buildSubmission("Alex", makeSampleScores(2)),
  buildSubmission("Sarah", makeSampleScores(3)),
];

function blankScores() {
  return Object.fromEntries(allFixtures.map(f => [f.id, { home: "", away: "" }]));
}

function cloneScores(obj) {
  return Object.fromEntries(Object.entries(obj).map(([id, score]) => [id, { ...score }]));
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

function calculateTable(currentScores) {
  const tableMap = Object.fromEntries(initialTable.map(row => [row.team, { ...row }]));
  allFixtures.forEach(fixture => applyFixture(tableMap, fixture, currentScores[fixture.id]));
  return Object.values(tableMap)
    .map(row => ({ ...row, gd: row.gf - row.ga }))
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
  const points = (correctResult ? 5 : 0) + (exactScore ? 10 : 0);
  return { points, label: exactScore ? "Exact score" : correctResult ? "Correct result" : "Miss" };
}

function makeSampleScores(seed = 0) {
  const sample = blankScores();
  allFixtures.forEach((fixture, index) => {
    sample[fixture.id] = { home: String((index + seed) % 4), away: String((index * 2 + seed) % 3) };
  });
  return sample;
}

function buildSubmission(name, submittedScores) {
  return {
    name,
    scores: submittedScores,
    finalTable: calculateTable(submittedScores),
    submittedAt: new Date().toLocaleString("en-GB"),
  };
}

function normalizeName(name) {
  return String(name || "").trim().toLowerCase().split(" ").filter(Boolean).join(" ");
}

function isDuplicateSubmissionName(name) {
  const n = normalizeName(name);
  return Boolean(n) && submissions.some(s => normalizeName(s.name) === n);
}

function avg(values) {
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
}

function createSubmissionStats() {
  if (!submissions.length) return { topScoringTeam: "Awaiting submissions", topScoringGoals: 0, biggestMover: "Awaiting submissions", biggestMove: 0, titleFavourite: "Awaiting submissions" };

  const goals = Object.fromEntries(initialTable.map(row => [row.team, 0]));
  const movement = Object.fromEntries(initialTable.map(row => [row.team, []]));
  const titlePicks = {};
  const startPositions = Object.fromEntries(initialTable.map((row, index) => [row.team, index + 1]));

  submissions.forEach(submission => {
    allFixtures.forEach(fixture => {
      const s = submission.scores[fixture.id];
      if (s && s.home !== "" && s.away !== "") {
        goals[fixture.home] += Number(s.home);
        goals[fixture.away] += Number(s.away);
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

function gameLeaderboard() {
  return submissions
    .map(submission => ({
      ...submission,
      gamePoints: allFixtures.reduce((total, fixture) => total + scorePrediction(submission.scores[fixture.id], actualResults[fixture.id]).points, 0),
    }))
    .sort((a, b) => b.gamePoints - a.gamePoints);
}

function clubBadge(team) {
  if (team === "Tottenham Hotspur") {
    return `<div class="badge spurs-poo" title="${team}">💩</div>`;
  }
  const fallback = clubMonograms[team] || team.slice(0, 3).toUpperCase();
  const url = officialBadgeUrls[team] || "";
  return `<div class="badge" title="${team}">
    <span class="badge-fallback">${fallback}</span>
    <img src="${url}" alt="${team} badge" onerror="this.style.display='none'" />
  </div>`;
}

function renderHero() {
  const navs = [
    ["submit", "Score Submissions", "Enter Predictions", "⚽"],
    ["stats", "Fun Stats", "Prediction Insights", "📊"],
    ["results", "Results & Standings", "Results & Rankings", "🏆"],
    ["build", "How This Was Built", "AI Build Journey", "🤖"],
  ];

  return `
    <section class="hero-wrap">
      <div class="hero">
        <h1 class="title">🏆 Premier League Run In Forecast Game 🏆</h1>
        <p class="subtitle">Predict every remaining score, generate your final table, then compete against everyone else as the real results come in.</p>
        <div class="ai-line">Built in 1 hour as part of a fun way to develop AI skills with work.....see the “How this was built” tab for more information!</div>

        <div class="how-box">
          <div class="how-inner">
            <div class="section-label"><span class="dot green"></span>How To Play<span class="dot pink"></span></div>
            <div class="how-steps">
              <div class="how-step"><div class="step-icon">⚽</div><div class="step-title">Make Your Predictions</div><div class="step-text">Predict each remaining fixture and build your final Premier League table.</div></div>
              <div class="arrow">→</div>
              <div class="how-step"><div class="step-icon">📊</div><div class="step-title">Watch The Table Move</div><div class="step-text">See your live forecast table update instantly after every score input.</div></div>
              <div class="arrow">→</div>
              <div class="how-step"><div class="step-icon">🏆</div><div class="step-title">See Who Knows Ball</div><div class="step-text">Sit back and compare your football knowledge against everyone else.</div></div>
            </div>
          </div>
        </div>

        <div class="rules-box">
          <div class="rules-head"><div style="font-size: 28px;">🏆</div><h2>Game Rules & Scoring</h2><p>How points are awarded in the forecast game.</p></div>
          <div class="rules-grid">
            <div class="rule-card"><div class="rule-points">5 pts</div><div class="rule-title">Correct result</div><div class="rule-text">Predict the right winner or draw.</div></div>
            <div class="rule-card"><div class="rule-points">10 pts</div><div class="rule-title">Exact score bonus</div><div class="rule-text">Get the exact scoreline right.</div></div>
            <div class="rule-card"><div class="rule-points">15 pts</div><div class="rule-title">Maximum per match</div><div class="rule-text">Correct result plus exact score.</div></div>
          </div>
        </div>

        <div class="nav">
          ${navs.map(([id, label, sub, icon]) => `
            <button class="nav-btn ${page === id ? "active" : ""}" onclick="setPage('${id}')">
              <div class="nav-icon">${icon}</div>
              <div><div class="nav-main">${label}</div><div class="nav-sub">${sub}</div></div>
            </button>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSubmitPage() {
  const completedCount = allFixtures.filter(f => scores[f.id].home !== "" && scores[f.id].away !== "").length;
  const isComplete = completedCount === allFixtures.length;
  const nameAlreadyUsed = isDuplicateSubmissionName(playerName);
  const forecastTable = calculateTable(scores);

  return `
    <div class="page">
      <div class="entry-card">
        <div class="entry-grid">
          <div class="entry-intro">
            <div class="user-icon">👤</div>
            <h2>Your Entry</h2>
            <p>Complete every remaining fixture prediction, enter your name and lock in your final Premier League forecast.</p>
          </div>
          <div class="name-box">
            <div class="name-arrow">→</div>
            <input class="name-input" placeholder="Enter Your Name" value="${escapeHtml(playerName)}" ${lockedSubmission ? "disabled" : ""} oninput="updateName(this.value)" />
          </div>
          ${!isComplete ? `<div class="status info">You have predicted ${completedCount} of ${allFixtures.length} fixtures. Fill them all in to unlock your submission.</div>` : ""}
          ${nameAlreadyUsed && !lockedSubmission ? `<div class="status error">That name is already on the leaderboard — add an initial or nickname to make it unique.</div>` : ""}
          ${duplicateNameMessage ? `<div class="status error">${duplicateNameMessage}</div>` : ""}
          ${lockMessage && !lockedSubmission ? `<div class="status warn">${lockMessage}</div>` : ""}
          ${lockedSubmission ? `<div class="status success">Entry locked. Good luck!</div>` : ""}
        </div>
      </div>

      <div class="main-card">
        <div class="center-head">
          <h2>Your Fixture Submissions</h2>
          <p>Predict every remaining fixture and watch your live table update instantly.</p>
          ${lockedSubmission ? `<span class="locked-badge">✓ Locked In</span>` : ""}
        </div>

        ${fixtureWeeks.map(week => `
          <section class="week">
            <div class="week-head"><div class="week-title">${week.title}</div><div class="week-subtitle">${week.subtitle}</div></div>
            <div class="fixture-grid">
              ${week.fixtures.map(renderFixture).join("")}
            </div>
          </section>
        `).join("")}

        <div class="lock-wrap">
          <button class="lock-btn" ${lockedSubmission ? "disabled" : ""} onclick="lockSubmission()">🔒 LOCK IN MY PREDICTIONS</button>
        </div>

        ${renderForecastTable(forecastTable)}
      </div>
    </div>
  `;
}

function renderFixture(fixture) {
  const score = scores[fixture.id];
  return `
    <div class="fixture-card">
      <div class="fixture-meta"><span>${fixture.date}</span><span>${fixture.time}</span></div>
      <div class="fixture-row">
        ${clubBadge(fixture.home)}
        <div class="team-home">${fixture.home}</div>
        <input class="score-input" inputmode="numeric" maxlength="2" value="${score.home}" ${lockedSubmission ? "disabled" : ""} oninput="updateScore('${fixture.id}', 'home', this.value)" placeholder="-" />
        <div class="v">v</div>
        <input class="score-input" inputmode="numeric" maxlength="2" value="${score.away}" ${lockedSubmission ? "disabled" : ""} oninput="updateScore('${fixture.id}', 'away', this.value)" placeholder="-" />
        <div class="team-away">${fixture.away}</div>
        ${clubBadge(fixture.away)}
      </div>
    </div>
  `;
}

function renderForecastTable(table) {
  return `
    <div class="table-card">
      <div class="table-head">
        <div class="table-icon">📋</div>
        <h2>The Final Table</h2>
        <p>Based on your predictions... this is how the Premier League season finishes 👀🏆</p>
        <div class="table-reminder">⬆️ Don’t forget to lock in your predictions above!</div>
      </div>
      <div class="table-shell">
        <table>
          <thead><tr><th>#</th><th>Club</th><th>P</th><th>GD</th><th>Pts</th></tr></thead>
          <tbody>
            ${table.map((row, index) => `
              <tr>
                <td>${index + 1}</td>
                <td><div class="club-cell">${clubBadge(row.team)} ${row.team}</div></td>
                <td>${row.played}</td>
                <td>${row.gd}</td>
                <td>${row.pts}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStatsPage() {
  const stats = createSubmissionStats();
  return `
    <div class="page">
      <div class="stats-grid">
        ${statCard("⚽", "Most forecast goals", stats.topScoringTeam, `${stats.topScoringGoals} goals across submissions`)}
        ${statCard("📈", "Biggest average mover", stats.biggestMover, `${stats.biggestMove} places vs current table`)}
        ${statCard("🏆", "Most picked champion", stats.titleFavourite, "Based on locked forecast tables")}
        ${statCard("👤", "Total submissions", String(submissions.length), "Including demo entries")}
      </div>
      <div class="info-card">
        <h2>Fun Stats</h2>
        <p>Fun stats about the predictions — who people think will score most, who moves most in the run-in, and who everyone expects to win the league.</p>
        <div class="auth-note">
          <div style="font-size: 34px;">🛡️</div>
          <h2>Ready For Real Tester Storage</h2>
          <p>This prototype now has unique-name checking and authentic Premier League badge links. The next upgrade is connecting Firebase, so locked predictions are saved online and shared across everyone’s devices.</p>
        </div>
      </div>
    </div>
  `;
}

function statCard(icon, label, value, detail) {
  return `
    <div class="stat-card">
      <div class="stat-icon">${icon}</div>
      <div class="stat-label">${label}</div>
      <div class="stat-value">${value}</div>
      <div class="stat-detail">${detail}</div>
    </div>
  `;
}

function renderResultsPage() {
  const leaderboard = gameLeaderboard();
  return `
    <div class="page results-layout">
      <div class="results-card">
        <h2>📅 Actual results vs submissions</h2>
        ${allFixtures.map(fixture => renderResultRow(fixture)).join("")}
      </div>
      <div>
        <div class="results-card" style="background: var(--pl-green);">
          <h2>🏆 Game leaderboard</h2>
          <p><strong>5 pts</strong> correct result + <strong>10 bonus pts</strong> exact score.</p>
          ${leaderboard.map((player, index) => `
            <div class="pred-card" style="background:white; margin-top:10px;">
              <div class="pred-head"><span>#${index + 1} ${player.name}</span><span>${player.gamePoints}</span></div>
            </div>
          `).join("")}
        </div>
        <div class="results-card" style="margin-top:20px;">
          <h2>People’s forecast champions</h2>
          ${submissions.map(s => `
            <div class="pred-card" style="margin-top:10px;">
              <div class="pred-head"><span>${s.name}</span><span>${s.finalTable[0].team}</span></div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderResultRow(fixture) {
  const actual = actualResults[fixture.id];
  return `
    <div class="result-row">
      <div class="result-top">
        <div class="result-teams">
          ${clubBadge(fixture.home)}
          <div><div style="font-size:12px;color:rgba(55,0,60,.5);font-weight:900;text-transform:uppercase;">${fixture.date} · ${fixture.time}</div><strong>${fixture.home} v ${fixture.away}</strong></div>
          ${clubBadge(fixture.away)}
        </div>
        <div class="actual-score">${actual ? `${actual.home} - ${actual.away}` : "Live / upcoming"}</div>
      </div>
      <div class="pred-grid">
        ${submissions.map(submission => {
          const prediction = submission.scores[fixture.id];
          const scoring = scorePrediction(prediction, actual);
          return `
            <div class="pred-card">
              <div class="pred-head"><span>${submission.name}</span><span class="points-pill">${scoring.points} pts</span></div>
              <div style="margin-top:6px;font-size:13px;color:rgba(55,0,60,.7);font-weight:700;">Predicted ${prediction.home}-${prediction.away} · ${scoring.label}</div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderBuildPage() {
  const steps = [
    ["💡", "1. Starting With The Idea", "The starting point was simply: ‘Can I build a fun Premier League run-in prediction game for friends and work colleagues using AI?’ The aim was not perfection — it was to learn by building something real."],
    ["⌨️", "2. First Prompt Into ChatGPT", "The first prompt asked ChatGPT Canvas to create a modern Premier League prediction game using React, with fixtures, live table calculations and a leaderboard system."],
    ["🎨", "3. Rapid Visual Improvements", "From there, the app evolved through simple conversational prompts like: ‘Make this look more premium’, ‘Add Premier League vibes’, and ‘Make the instructions more visually pleasing.’"],
    ["🗣️", "4. Iterating Through Conversation", "Most improvements were not coded manually. Ideas were described naturally in English and the AI updated the code live."],
    ["⚽", "5. Adding Game Logic", "The scoring system, prediction locking, forecast tables and points calculations were all generated and refined through AI-assisted iteration."],
    ["🛠️", "6. Debugging With AI", "When coding issues appeared, ChatGPT helped debug by explaining the errors and rewriting affected code sections."],
  ];

  const prompts = [
    "Make the title more centred and visually prominent",
    "Add Premier League trophies and make it feel more premium",
    "Create fun stats about the predictions",
    "Make the navigation clearer and more interactive",
    "Use authentic Premier League badges",
    "Fix the JSX closing tag error",
  ];

  return `
    <div class="page">
      <div class="build-hero"><div class="build-hero-inner"><div style="font-size:70px;">🤖</div><h2>How This Was Built</h2><p>This entire Premier League Run In Forecast Game was built in around 1 hour using ChatGPT Canvas, conversational prompting and AI-assisted React development.</p></div></div>
      <div class="build-card">
        <h2 style="text-align:center;font-size:40px;">The Process</h2>
        ${steps.map(([icon, title, text]) => `<div class="build-step"><div style="font-size:38px;">${icon}</div><h3>${title}</h3><p>${text}</p></div>`).join("")}
      </div>
      <div class="dark-card">
        <h2 style="text-align:center;font-size:40px;">💬 Example Prompts Used</h2>
        <div class="prompt-grid">${prompts.map(p => `<div class="prompt">“${p}”</div>`).join("")}</div>
      </div>
    </div>
  `;
}

function setPage(newPage) {
  page = newPage;
  render();
}

function updateName(value) {
  playerName = value;
  duplicateNameMessage = "";
  lockMessage = "";
  render();
}

function updateScore(fixtureId, side, value) {
  if (lockedSubmission) return;
  const cleanValue = String(value).replace(/[^0-9]/g, "").slice(0, 2);
  scores[fixtureId] = { ...scores[fixtureId], [side]: cleanValue };
  lockMessage = "";
  render();
}

function lockSubmission() {
  const completedCount = allFixtures.filter(f => scores[f.id].home !== "" && scores[f.id].away !== "").length;
  const isComplete = completedCount === allFixtures.length;

  if (lockedSubmission) return;

  if (!playerName.trim()) {
    lockMessage = "Enter your name first, then you can lock in your predictions.";
    duplicateNameMessage = "";
    render();
    return;
  }

  if (isDuplicateSubmissionName(playerName)) {
    duplicateNameMessage = "That name is already on the leaderboard — add an initial or nickname to make it unique.";
    lockMessage = "";
    render();
    return;
  }

  if (!isComplete) {
    const remaining = allFixtures.length - completedCount;
    lockMessage = `Nearly there — you still need to predict ${remaining} more fixture${remaining === 1 ? "" : "s"}.`;
    duplicateNameMessage = "";
    render();
    return;
  }

  const submission = buildSubmission(playerName.trim(), cloneScores(scores));
  lockedSubmission = submission;
  submissions = [...submissions, submission];
  duplicateNameMessage = "";
  lockMessage = "";
  render();
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const pageContent = page === "submit" ? renderSubmitPage()
    : page === "stats" ? renderStatsPage()
    : page === "results" ? renderResultsPage()
    : renderBuildPage();

  document.getElementById("app").innerHTML = `
    <main class="app-shell">
      <div class="container">
        ${renderHero()}
        ${pageContent}
      </div>
    </main>
  `;
}

render();
