const teams = [
  "Arsenal",
  "Liverpool",
  "Manchester City",
  "Chelsea",
  "Tottenham",
  "Manchester United"
];

const container = document.getElementById("prediction-form");

teams.forEach((team, index) => {
  const row = document.createElement("div");

  row.style.marginBottom = "12px";

  row.innerHTML = `
    <label>
      ${index + 1}. ${team}
    </label>
  `;

  container.appendChild(row);
});

document.getElementById("saveBtn").addEventListener("click", () => {
  alert("Prediction saved!");
});
