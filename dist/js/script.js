"use strict";
// toggle mobile navigation on click
function togleNavigation() {
  const x = document.getElementById("togleNavigation");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// display
function myFunction(x) {
  const navigation = document.getElementById("togleNavigation");
  if (x.matches == false) {
    // If media query matches
    navigation.style.display = "block";
  } else {
    navigation.style.display = "none";
  }
}

const x = window.matchMedia("(max-width: 1200px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

GitHubCalendar(".calendar", "Gytisbal", {
  responsive: true
});
