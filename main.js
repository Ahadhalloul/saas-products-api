// ---------------------------------
// adding search wrapper
let searchWrapper = document.getElementById("searchWrapper");
let searchButton = document.getElementById("searchButton");
let searchBar = document.getElementById("searchBar");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchWrapper.classList.add("active");
});

searchWrapper.addEventListener("click", function (e) {
  if (!searchBar.contains(e.target)) {
    searchWrapper.classList.remove("active");
  }
});

// -----------------------------------------
// show and hide navigation div in small screen
let menuIcon = document.querySelector(".nav-menu-icon");
let navList = document.querySelector(".nav-list");
let navListUser = document.querySelector(".user-menu-list2");
let userArea = document.querySelector(".user-area2");
let userInfo = document.querySelector(".user-info");
let body = document.querySelector("body");
let bodyBg = document.querySelector(".body-bg");
let logo = document.querySelector(".logo-container");

menuIcon.addEventListener("click", function () {
  body.classList.add("stop-scrolling");
  logo.classList.add("logo-inside-menu");
  navList.classList.add("show-flex");
  // navListUser.classList.add("show-flex");
  // navListUser.classList.remove("hide");
  bodyBg.classList.remove("hide");
  userArea.classList.remove("hide");
  userInfo.classList.remove("hide");
});

bodyBg.addEventListener("click", function (e) {
  if (!navList.contains(e.target)) {
    body.classList.remove("stop-scrolling");
    logo.classList.remove("logo-inside-menu");
    navList.classList.remove("show-flex");
    navListUser.classList.remove("show-flex");

    bodyBg.classList.add("hide");
    userArea.classList.add("hide");
    userInfo.classList.add("hide");
  }
});

// ---------------------------------------
// add scroll buttons of price table plan
let priceTable = document.querySelector(".pricing-table");
const distance = 340;

function scrollLft() {
  priceTable.scrollBy({
    left: -distance,
    behavior: "smooth",
  });
}

function scrollRight() {
  priceTable.scrollBy({
    left: distance,
    behavior: "smooth",
  });
}
