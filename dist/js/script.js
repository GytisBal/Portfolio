"use strict";

function togleNavigation() {
  const x = document.getElementById("togleNavigation");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

GitHubCalendar(".calendar", "Gytisbal", {
  responsive: true
});
