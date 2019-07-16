"use strict";
// toggle mobile navigation on click
function togleNavigation() {
  const x = document.getElementById("sideNav");
  if (x.style.maxHeight === "30rem") {
    x.style.maxHeight = "7rem";
    // x.style.transition = "max-height 0.3s";
  } else {
    x.style.maxHeight = "30rem";
    // x.style.transition = "max-height 0.3s";
  }
}
// window.addEventListener("scroll", () => {
//   console.log(window.offsetTop);
// });

let mainNavLinks = document.querySelectorAll(".navbar-nav_link");
let mainSections = document.querySelectorAll("#about, #projects, #education");

// let lastId;
// let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      console.log(section.offsetTop + section.offsetHeight);
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
// display
function myFunction(x) {
  const navigation = document.getElementById("sideNav");
  const navItems = document.querySelectorAll(".navbar-nav_link");
  if (x.matches == false) {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].onclick = () => {};
    }
    // If media query matches
    navigation.style.maxHeight = "100vh";
    navigation.style.transition = "none";
  } else if (x.matches == true) {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].onclick = () => {
        navigation.style.maxHeight = "7rem";
      };
    }
    navigation.style.maxHeight = "7rem";
    navigation.style.transition = "max-height 0.3s";
  }
}

const x = window.matchMedia("(max-width: 1200px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

GitHubCalendar(".calendar", "Gytisbal", {
  responsive: true
});
