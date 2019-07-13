"use strict";
// toggle mobile navigation on click
function togleNavigation() {
  const x = document.getElementById("sideNav");
  if (x.style.maxHeight === "30rem") {
    x.style.maxHeight = "7rem";
    x.style.transition = "max-height 0.3s";
  } else {
    x.style.maxHeight = "30rem";
    x.style.transition = "max-height 0.3s";
  }
}

// display
function myFunction(x) {
  const navigation = document.getElementById("sideNav");
  if (x.matches == false) {
    // If media query matches
    navigation.style.maxHeight = "100vh";
    navigation.style.transition = "none";
  } else {
    navigation.style.maxHeight = "7rem";
    navigation.style.transition = "none";
  }
}

const x = window.matchMedia("(max-width: 1200px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

GitHubCalendar(".calendar", "Gytisbal", {
  responsive: true
});
