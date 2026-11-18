// Hellfest start date (month is 0-based: 5 = June).
const HELLFEST = new Date(2027, 5, 17);

const MS_PER_DAY = 24 * 60 * 60 * 1000;

// Number of nights between today and the festival, in the visitor's local time.
function nightsLeft(now) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  // Math.round absorbs the 1h shift caused by daylight saving time changes.
  return Math.round((HELLFEST - today) / MS_PER_DAY);
}

function render() {
  const nights = nightsLeft(new Date());
  const count = document.getElementById("count");
  const label = document.getElementById("label");

  if (nights > 0) {
    count.textContent = nights;
    label.textContent = nights === 1 ? "dodo, c'est demain !" : "dodos";
  } else if (nights === 0) {
    count.textContent = "🤘";
    label.textContent = "C'est aujourd'hui !";
  } else {
    count.textContent = "🤘";
    label.textContent = "Le Hellfest 2027 est passé. Vivement le prochain !";
  }
}

render();
// Refresh every minute so the counter updates at midnight.
setInterval(render, 60 * 1000);
