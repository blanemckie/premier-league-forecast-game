document.getElementById("app").innerHTML = `
<div class="container">

  <div class="hero">
    <div class="hero-inner">

      <div class="hero-top">
        <div>
          <div class="ai-pill">
            Built as a fun way to develop my AI skills
          </div>

          <h1>
            Premier League Forecast League
          </h1>

          <p>
            Predict every remaining score, generate your final table,
            then compete against everyone else as the real results come in.
          </p>
        </div>

        <div class="logo-card">
          <div class="logo-icon">
            🏆
            <div class="logo-badge">PL</div>
          </div>

          <div>
            <div class="logo-kicker">
              Inspired by the run-in
            </div>

            <div class="logo-title">
              Forecast League
            </div>
          </div>
        </div>
      </div>

      <div class="nav">
        <button class="active">Score Submissions</button>
        <button>Useful Stats</button>
        <button>Results & Standings</button>
      </div>

    </div>
  </div>

  <div class="layout">

    <div>

      <div class="card">
        <div class="top-row">

          <div>
            <h2>Your entry</h2>
            <div class="sub">
              Complete the full fixture list before locking your entry.
            </div>
          </div>

          <div class="name-row">
            <input class="name-input" placeholder="Enter your name">
            <button class="lock">🔒 Lock</button>
          </div>

        </div>

        <div class="rules">

          <div class="rule">
            <div class="rule-points">5 pts</div>
            <div class="rule-title">Correct result</div>
            <div class="rule-text">Predict the right winner or draw.</div>
          </div>

          <div class="rule">
            <div class="rule-points">+10 pts</div>
            <div class="rule-title">Exact score bonus</div>
            <div class="rule-text">Get the exact scoreline right.</div>
          </div>

          <div class="rule">
            <div class="rule-points">15 pts</div>
            <div class="rule-title">Maximum per match</div>
            <div class="rule-text">Correct result plus exact score.</div>
          </div>

        </div>
      </div>

      <div class="card glass">

        <div class="week-header">
          <h3>Week 1</h3>
          <span>9–11 May</span>
        </div>

        ${fixture("Liverpool","Chelsea")}
        ${fixture("Brighton","Wolves")}
        ${fixture("Fulham","Bournemouth")}
        ${fixture("Sunderland","Man United")}
        ${fixture("Man City","Brentford")}

      </div>

    </div>

    <div>

      <div class="card">

        <h2>Your forecast submission table</h2>

        <div class="sub">
          This updates live as you enter scores.
        </div>

        <div class="table-wrap">

          <table>

            <thead>
              <tr>
                <th>#</th>
                <th>Club</th>
                <th>P</th>
                <th>GD</th>
                <th>Pts</th>
              </tr>
            </thead>

            <tbody>

              ${tableRow(1,"Arsenal")}
              ${tableRow(2,"Manchester City")}
              ${tableRow(3,"Liverpool")}
              ${tableRow(4,"Chelsea")}
              ${tableRow(5,"Aston Villa")}
              ${tableRow(6,"💩 Tottenham")}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </div>

</div>
`;

function fixture(home,away){
  return `
  <div class="fixture">

    <div class="fixture-meta">
      <span>Saturday</span>
      <span>15:00</span>
    </div>

    <div class="fixture-line">

      ${badge(home)}

      <div class="team-name team-right">
        ${home}
      </div>

      <input class="score">

      <div class="vs">v</div>

      <input class="score">

      <div class="team-name">
        ${away}
      </div>

      ${badge(away)}

    </div>

  </div>
  `;
}

function badge(team){

  if(team.includes("Tottenham")){
    return `<div class="club poo">💩</div>`;
  }

  return `
  <div class="club">
    <div class="pixel">
      <div class="head"></div>
      <div class="body" style="background:red"></div>
      <div class="stripe" style="background:white"></div>
      <div class="arm1" style="background:red"></div>
      <div class="arm2" style="background:red"></div>
      <div class="short1" style="background:white"></div>
      <div class="short2" style="background:white"></div>
      <div class="sock1" style="background:red"></div>
      <div class="sock2" style="background:red"></div>
    </div>
  </div>
  `;
}

function tableRow(pos,team){
  return `
  <tr>
    <td>${pos}</td>

    <td>
      <div class="club-row">
        ${badge(team)}
        ${team}
      </div>
    </td>

    <td>38</td>
    <td>40</td>
    <td><strong>${90-pos}</strong></td>
  </tr>
  `;
}
