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
  {
    title: "Week 1",
    subtitle: "9–11 May",
    fixtures: [
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
    ],
  },
  {
    title: "Week 2",
    subtitle: "13–19 May",
    fixtures: [
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
    ],
  },
  {
    title: "Final Day",
    subtitle: "24 May",
    fixtures: [
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
    ],
  },
];

const allFixtures = fixtureWeeks.flatMap((week) => week.fixtures);

const clubBadgeStyles = {
  Arsenal: { shirt: "#ef0107", shorts: "#ffffff", socks: "#ef0107", trim: "#f8d24a" },
  "Manchester City": { shirt: "#6cabdd", shorts: "#ffffff", socks: "#6cabdd", trim: "#1c2c5b" },
  "Manchester United": { shirt: "#da291c", shorts: "#ffffff", socks: "#111111", trim: "#fbe122" },
  Liverpool: { shirt: "#c8102e", shorts: "#c8102e", socks: "#c8102e", trim: "#00b2a9" },
  "Aston Villa": { shirt: "#95bfe5", shorts: "#670e36", socks: "#95bfe5", trim: "#f3d459" },
  Bournemouth: { shirt: "#da291c", shorts: "#111111", socks: "#da291c", trim: "#111111" },
  Brentford: { shirt: "#e30613", shorts: "#111111", socks: "#e30613", trim: "#ffffff" },
  Brighton: { shirt: "#0057b8", shorts: "#ffffff", socks: "#0057b8", trim: "#ffffff" },
  Chelsea: { shirt: "#034694", shorts: "#034694", socks: "#ffffff", trim: "#ffffff" },
  Everton: { shirt: "#003399", shorts: "#ffffff", socks: "#ffffff", trim: "#ffffff" },
  Fulham: { shirt: "#ffffff", shorts: "#111111", socks: "#ffffff", trim: "#cc0000" },
  Sunderland: { shirt: "#eb172b", shorts: "#111111", socks: "#eb172b", trim: "#ffffff" },
  "Newcastle United": { shirt: "#111111", shorts: "#111111", socks: "#ffffff", trim: "#ffffff" },
  "Leeds United": { shirt: "#ffffff", shorts: "#ffffff", socks: "#ffffff", trim: "#ffcd00" },
  "Crystal Palace": { shirt: "#1b458f", shorts: "#1b458f", socks: "#c4122e", trim: "#c4122e" },
  "Nottingham Forest": { shirt: "#dd0000", shorts: "#ffffff", socks: "#dd0000", trim: "#ffffff" },
  "Tottenham Hotspur": { poo: true },
  "West Ham United": { shirt: "#7a263a", shorts: "#ffffff", socks: "#7a263a", trim: "#1bb1e7" },
  Burnley: { shirt: "#6c1d45", shorts: "#ffffff", socks: "#6c1d45", trim: "#99d6ea" },
  "Wolverhampton Wanderers": { shirt: "#fdb913", shorts: "#111111", socks: "#fdb913", trim: "#111111" },
};

/*
  Manual actual results area:
  Update these as real matches happen. This is the no-backend GitHub Pages version,
  so automatic live result syncing is not possible without adding an external API/backend.
*/
const actualResults = {
  "w1-1": { home: "2", away: "1", status: "FT" },
  "w1-2": { home: "1", away: "0", status: "FT" },
  "w1-3": { home: "1", away: "1", status: "FT" },
  "w1-4": { home: "0", away: "2", status: "FT" },
  "w1-5": { home: "3", away: "1", status: "FT" },
};

const state = {
  page: "submit",
  playerName: "",
  scores: blankScores(),
  lockedSubmission: null,
  submissions: [],
};

function blankScores() {
  return Object.fromEntries(allFixtures.map((fixture) => [fixture.id, { home: "", away: "" }]));
}

function cloneScores(scores) {
  return Object.fromEntries(Object.entries(scores).map(([id, score]) => [id, { ...score }]));
}

function makeSampleScores(seed = 0) {
  const scores = blankScores();
  allFixtures.forEach((fixture, index) => {
    const home = (index + seed) % 4;
    const away = (index * 2 + seed) % 3;
    scores[fixture.id] = { home: String(home), away: String(away) };
  });
  return scores;
}

function buildSubmission(name, scores) {
  return {
    name,
    scores,
    finalTable: calculateTable(scores),
    submittedAt: new Date().toLocaleString("en-GB"),
  };
}

function applyFixture(tableMap, fixture, score) {
  if (!score) return;
  const homeGoals = Number(score.home);
  const awayGoals = Number(score.away);

  if (score.home === "" || score.away === "" || Number.isNaN(homeGoals) || Number.isNaN(awayGoals)) return;

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
  const tableMap = Object.fromEntries(initialTable.map((row) => [row.team, { ...row }]));
  allFixtures.forEach((fixture) => applyFixture(tableMap, fixture, scores[fixture.id]));
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
  const points = (correctResult ? 5 : 0) + (exactScore ? 10 : 0);

  return {
    points,
    label: exactScore ? "Exact score" : correctResult ? "Correct result" : "Miss",
  };
}

function avg(values) {
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
}

function createSubmissionStats(submissions) {
  if (!submissions.length) {
    return {
      topScoringTeam: "Awaiting submissions",
      topScoringGoals: 0,
      biggestMover: "Awaiting submissions",
      biggestMove: 0,
      titleFavourite: "Awaiting submissions",
    };
  }

  const goals = Object.fromEntries(initialTable.map((row) => [row.team, 0]));
  const movement = Object.fromEntries(initialTable.map((row) => [row.team, []]));
  const titlePicks = {};
  const startPositions = Object.fromEntries(initialTable.map((row, index) => [row.team, index + 1]));

  submissions.forEach((submission) => {
    allFixtures.forEach((fixture) => {
      const s = submission.scores[fixture.id];
      if (s && s.home !== "" && s.away !== "") {
        goals[fixture.home] += Number(s.home);
        goals[fixture.away] += Number(s.away);
      }
    });

    submission.finalTable.forEach((row, index) => {
      movement[row.team].push(startPositions[row.team] - (index + 1));
    });

    const winner = submission.finalTable[0]?.team;
    titlePicks[winner] = (titlePicks[winner] || 0) + 1;
  });

  const [topScoringTeam, topScoringGoals] = Object.entries(goals).sort((a, b) => b[1] - a[1])[0];
  const [biggestMover, moves] = Object.entries(movement).sort((a, b) => Math.abs(avg(b[1])) - Math.abs(avg(a[1])))[0];
  const [titleFavourite] = Object.entries(titlePicks).sort((a, b) => b[1] - a[1])[0];

  return {
    topScoringTeam,
    topScoringGoals,
    biggestMover,
    biggestMove: avg(moves).toFixed(1),
    titleFavourite,
  };
}

function gameLeaderboard() {
  return state.submissions
    .map((submission) => ({
      ...submission,
      gamePoints: allFixtures.reduce(
        (total, fixture) => total + scorePrediction(submission.scores[fixture.id], actualResults[fixture.id]).points,
        0
      ),
    }))
    .sort((a, b) => b.gamePoints - a.gamePoints);
}

function saveState() {
  localStorage.setItem(
    "plForecastLeagueState",
    JSON.stringify({
      playerName: state.playerName,
      scores: state.scores,
      lockedSubmission: state.lockedSubmission,
      submissions: state.submissions,
    })
  );
}

function loadState() {
  const saved = localStorage.getItem("plForecastLeagueState");
  if (!saved) {
    state.submissions = [
      buildSubmission("Blane", makeSampleScores(1)),
      buildSubmission("Alex", makeSampleScores(2)),
      buildSubmission("Sarah", makeSampleScores(3)),
    ];
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    state.playerName = parsed.playerName || "";
    state.scores = parsed.scores || blankScores();
    state.lockedSubmission = parsed.lockedSubmission || null;
    state.submissions = parsed.submissions || [];
  } catch {
    state.submissions = [
      buildSubmission("Blane", makeSampleScores(1)),
      buildSubmission("Alex", makeSampleScores(2)),
      buildSubmission("Sarah", makeSampleScores(3)),
    ];
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function icon(name) {
  const icons = {
    user: "👤",
    lock: "🔒",
    table: "▦",
    trophy: "🏆",
    ball: "⚽",
    chart: "📊",
    calendar: "🗓️",
    sparkles: "✨",
    check: "✓",
  };
  return `<span aria-hidden="true">${icons[name] || ""}</span>`;
}

function clubMark(team, large = false) {
  const kit = clubBadgeStyles[team] || { shirt: "#00ff85", shorts: "#37003c", socks: "#04f5ff", trim: "#e90052" };

  if (kit.poo) {
    return `<span class="club-mark ${large ? "large" : ""} poo" title="${escapeHtml(team)}" aria-label="${escapeHtml(team)} badge">💩</span>`;
  }

  return `
    <span class="club-mark ${large ? "large" : ""}" title="${escapeHtml(team)}" aria-label="${escapeHtml(team)} pixel player badge">
      <span class="pixel-player">
        <span class="pixel-head"></span>
        <span class="pixel-body" style="background:${kit.shirt}"></span>
        <span class="pixel-stripe" style="background:${kit.trim}"></span>
        <span class="pixel-arm-left" style="background:${kit.shirt}"></span>
        <span class="pixel-arm-right" style="background:${kit.shirt}"></span>
        <span class="pixel-short-left" style="background:${kit.shorts}"></span>
        <span class="pixel-short-right" style="background:${kit.shorts}"></span>
        <span class="pixel-sock-left" style="background:${kit.socks}"></span>
        <span class="pixel-sock-right" style="background:${kit.socks}"></span>
      </span>
    </span>
  `;
}

function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <main class="app-shell">
      <div class="container">
        ${renderHero()}
        ${state.page === "submit" ? renderSubmitPage() : ""}
        ${state.page === "stats" ? renderStatsPage() : ""}
        ${state.page === "results" ? renderResultsPage() : ""}
      </div>
    </main>
  `;

  bindEvents();
}

function renderHero() {
  return `
    <section class="hero-wrap">
      <div class="hero">
        <div class="hero-grid">
          <div>
            <span class="ai-pill">Built as a fun way to develop my AI skills</span>
            <h1>Premier League Forecast League</h1>
            <p>Predict every remaining score, generate your final table, then compete against everyone else as the real results come in.</p>
          </div>
          <div class="brand-card">
            <div class="brand-icon">🏆<span class="brand-bubble">PL</span></div>
            <div>
              <div class="brand-kicker">Inspired by the run-in</div>
              <div class="brand-title">Forecast League</div>
            </div>
          </div>
        </div>
        <nav class="nav" aria-label="Main navigation">
          ${navButton("submit", "Score Submissions")}
          ${navButton("stats", "Useful Stats")}
          ${navButton("results", "Results & Standings")}
        </nav>
      </div>
    </section>
  `;
}

function navButton(page, label) {
  return `<button class="nav-button ${state.page === page ? "active" : ""}" data-page="${page}">${label}</button>`;
}

function renderSubmitPage() {
  const forecastTable = calculateTable(state.scores);
  const completedCount = allFixtures.filter((fixture) => state.scores[fixture.id].home !== "" && state.scores[fixture.id].away !== "").length;
  const isComplete = completedCount === allFixtures.length;
  const isLocked = Boolean(state.lockedSubmission);

  return `
    <section class="grid-main">
      <div class="stack">
        <div class="card">
          <div class="entry-row">
            <div class="entry-left">
              <div style="font-size:24px">${icon("user")}</div>
              <div>
                <h2>Your entry</h2>
                <p class="subtext">Complete the full fixture list before locking your entry.</p>
              </div>
            </div>
            <div class="name-lock">
              <input id="playerName" class="text-input" ${isLocked ? "disabled" : ""} value="${escapeHtml(state.playerName)}" placeholder="Enter your name" />
              <button id="lockSubmission" class="lock-button" ${!state.playerName.trim() || !isComplete || isLocked ? "disabled" : ""}>${icon("lock")} Lock</button>
            </div>
          </div>
          <div class="rules-grid">
            ${scoreRule("Correct result", "5 pts", "Predict the right winner or draw.")}
            ${scoreRule("Exact score bonus", "+10 pts", "Get the exact scoreline right.")}
            ${scoreRule("Maximum per match", "15 pts", "Correct result plus exact score.")}
          </div>
        </div>

        <div class="card translucent">
          <div class="card-title-row center">
            <div>
              <h2>All remaining fixtures</h2>
              <div class="progress">${completedCount}/${allFixtures.length} predicted</div>
            </div>
            ${isLocked ? `<span class="locked-badge">${icon("check")} Locked</span>` : ""}
          </div>
          ${fixtureWeeks.map((week) => renderFixtureWeek(week, isLocked)).join("")}
        </div>
      </div>

      <aside class="stack">
        ${renderForecastTable(forecastTable)}
        ${renderSubmissionSummary()}
      </aside>
    </section>
  `;
}

function scoreRule(title, points, text) {
  return `
    <div class="rule">
      <div class="rule-points">${points}</div>
      <div class="rule-title">${title}</div>
      <div class="rule-text">${text}</div>
    </div>
  `;
}

function renderFixtureWeek(week, isLocked) {
  return `
    <section>
      <div class="fixture-header">
        <div class="fixture-header-title">${week.title}</div>
        <div class="fixture-header-subtitle">${week.subtitle}</div>
      </div>
      ${week.fixtures.map((fixture) => renderFixtureInput(fixture, isLocked)).join("")}
    </section>
  `;
}

function renderFixtureInput(fixture, isLocked) {
  const score = state.scores[fixture.id];

  return `
    <div class="fixture-card">
      <div class="fixture-meta">
        <span>${fixture.date}</span>
        <span>${fixture.time}</span>
      </div>
      <div class="fixture-line">
        ${clubMark(fixture.home)}
        <div class="team-name team-home">${fixture.home}</div>
        <input class="score-input" data-fixture="${fixture.id}" data-side="home" inputmode="numeric" ${isLocked ? "disabled" : ""} value="${score.home}" placeholder="-" />
        <div class="vs">v</div>
        <input class="score-input" data-fixture="${fixture.id}" data-side="away" inputmode="numeric" ${isLocked ? "disabled" : ""} value="${score.away}" placeholder="-" />
        <div class="team-name">${fixture.away}</div>
        ${clubMark(fixture.away)}
      </div>
    </div>
  `;
}

function renderForecastTable(forecastTable) {
  return `
    <div class="card">
      <div class="card-title-row">
        <div style="font-size:24px;color:var(--pl-pink)">${icon("table")}</div>
        <div>
          <h2>Your forecast submission table</h2>
          <p class="subtext">This updates live as you enter scores. When you lock your entry, this table becomes your submitted final league forecast.</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Club</th>
              <th class="center">P</th>
              <th class="center">GD</th>
              <th class="center">Pts</th>
            </tr>
          </thead>
          <tbody>
            ${forecastTable.map((row, index) => `
              <tr>
                <td><strong>${index + 1}</strong></td>
                <td><div class="club-cell">${clubMark(row.team)} ${row.team}</div></td>
                <td class="center">${row.played}</td>
                <td class="center">${row.gd}</td>
                <td class="center"><strong>${row.pts}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderSubmissionSummary() {
  if (!state.lockedSubmission) {
    return `
      <div class="card gradient">
        <div class="card-title-row">
          <div style="font-size:24px">${icon("trophy")}</div>
          <h2>Submission summary</h2>
        </div>
        <p class="white-muted"><strong>Complete every score and add your name to lock in your final forecast league table.</strong></p>
      </div>
    `;
  }

  return `
    <div class="card gradient">
      <div class="card-title-row">
        <div style="font-size:24px">${icon("trophy")}</div>
        <h2>Submission summary</h2>
      </div>
      <div class="summary-panel">
        <div class="white-muted">Player</div>
        <div style="font-size:32px;font-weight:1000">${escapeHtml(state.lockedSubmission.name)}</div>
        <div class="white-muted">Submitted ${escapeHtml(state.lockedSubmission.submittedAt)}</div>
      </div>
      <div class="top-four-box">
        <strong>${icon("sparkles")} Predicted top 4</strong>
        <div>
          ${state.lockedSubmission.finalTable.slice(0, 4).map((row) => `<span class="team-pill">${row.team}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderStatsPage() {
  const stats = createSubmissionStats(state.submissions);

  return `
    <section class="stack">
      <div class="stats-grid">
        ${statCard("⚽", "Most forecast goals", stats.topScoringTeam, `${stats.topScoringGoals} goals across submissions`)}
        ${statCard("📊", "Biggest average mover", stats.biggestMover, `${stats.biggestMove} places vs current table`)}
        ${statCard("🏆", "Most picked champion", stats.titleFavourite, "Based on locked forecast tables")}
        ${statCard("👤", "Total submissions", String(state.submissions.length), "Including demo entries")}
      </div>
      <div class="card">
        <h2>Useful submission stats</h2>
        <p class="subtext" style="font-size:16px;line-height:1.5">This page turns everyone’s predictions into talking points: who people think will score most, who moves most in the run-in, and who the group expects to win the league.</p>
      </div>
    </section>
  `;
}

function statCard(iconText, label, value, detail) {
  return `
    <div class="stat-card">
      <div class="stat-icon">${iconText}</div>
      <div class="stat-label">${label}</div>
      <div class="stat-value">${escapeHtml(value)}</div>
      <div class="stat-detail">${escapeHtml(detail)}</div>
    </div>
  `;
}

function renderResultsPage() {
  const leaderboard = gameLeaderboard();

  return `
    <section class="grid-results">
      <div class="card">
        <div class="card-title-row">
          <div style="font-size:24px;color:var(--pl-pink)">${icon("calendar")}</div>
          <h2>Actual results vs submissions</h2>
        </div>
        ${allFixtures.map(renderResultRow).join("")}
      </div>
      <aside class="stack">
        <div class="card green">
          <h2>Game leaderboard</h2>
          <p><strong>5 pts correct result + 10 bonus pts exact score.</strong></p>
          ${leaderboard.map((player, index) => `
            <div class="leaderboard-row">
              <div>
                <div class="rank">#${index + 1}</div>
                <div style="font-size:20px;font-weight:1000">${escapeHtml(player.name)}</div>
              </div>
              <div class="big-points">${player.gamePoints}</div>
            </div>
          `).join("")}
        </div>
        <div class="card">
          <h2>People’s forecast champions</h2>
          <div style="margin-top:14px">
            ${state.submissions.map((submission) => `
              <div class="champion-row">
                <strong>${escapeHtml(submission.name)}</strong>
                <strong>${escapeHtml(submission.finalTable[0].team)}</strong>
              </div>
            `).join("")}
          </div>
        </div>
      </aside>
    </section>
  `;
}

function renderResultRow(fixture) {
  const actual = actualResults[fixture.id];

  return `
    <div class="result-row">
      <div class="result-top">
        <div class="result-teams">
          ${clubMark(fixture.home)}
          <div>
            <div class="fixture-meta" style="margin:0">${fixture.date} · ${fixture.time}</div>
            <div style="font-weight:1000">${fixture.home} v ${fixture.away}</div>
          </div>
          ${clubMark(fixture.away)}
        </div>
        <div class="actual-score">${actual ? `${actual.home} - ${actual.away}` : "Live / upcoming"}</div>
      </div>
      <div class="prediction-grid">
        ${state.submissions.map((submission) => {
          const prediction = submission.scores[fixture.id];
          const scoring = scorePrediction(prediction, actual);

          return `
            <div class="prediction-card">
              <div class="prediction-card-top">
                <span>${escapeHtml(submission.name)}</span>
                <span class="points-pill">${scoring.points} pts</span>
              </div>
              <div class="subtext">Predicted ${prediction.home}-${prediction.away} · ${scoring.label}</div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      state.page = button.dataset.page;
      renderApp();
    });
  });

  const playerNameInput = document.getElementById("playerName");
  if (playerNameInput) {
    playerNameInput.addEventListener("input", (event) => {
      state.playerName = event.target.value;
      saveState();
      renderApp();
    });
  }

  document.querySelectorAll(".score-input").forEach((input) => {
    input.addEventListener("input", (event) => {
      const fixtureId = event.target.dataset.fixture;
      const side = event.target.dataset.side;
      const cleanValue = event.target.value.replace(/[^0-9]/g, "").slice(0, 2);

      state.scores[fixtureId][side] = cleanValue;
      saveState();
      renderApp();
    });
  });

  const lockButton = document.getElementById("lockSubmission");
  if (lockButton) {
    lockButton.addEventListener("click", () => {
      const completedCount = allFixtures.filter((fixture) => state.scores[fixture.id].home !== "" && state.scores[fixture.id].away !== "").length;
      const isComplete = completedCount === allFixtures.length;

      if (!state.playerName.trim() || !isComplete || state.lockedSubmission) return;

      const submission = buildSubmission(state.playerName.trim(), cloneScores(state.scores));
      state.lockedSubmission = submission;
      state.submissions.push(submission);
      saveState();
      renderApp();
    });
  }
}

function runTests() {
  const empty = blankScores();
  const initial = calculateTable(empty);
  console.assert(initial.length === 20, "Expected 20 teams");
  console.assert(initial[0].team === "Arsenal", "Expected Arsenal first with no predictions");

  const cityWin = blankScores();
  cityWin["w1-5"] = { home: "2", away: "0" };
  const cityTable = calculateTable(cityWin);
  const manCity = cityTable.find((row) => row.team === "Manchester City");
  console.assert(manCity.pts === 82, "Expected City to gain three points");

  console.assert(scorePrediction({ home: "2", away: "1" }, { home: "2", away: "1" }).points === 15, "Exact score should be 15");
  console.assert(scorePrediction({ home: "1", away: "0" }, { home: "2", away: "0" }).points === 5, "Correct result should be 5");
  console.assert(scorePrediction({ home: "1", away: "1" }, { home: "0", away: "2" }).points === 0, "Incorrect result should be 0");
}

runTests();
loadState();
renderApp();
