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
// show and hide sidebar div in small screen

let menuIcon = document.querySelector(".nav-menu-icon");
let sidebar = document.querySelector("#side-bar");
let body = document.querySelector("body");
let bodyBg = document.querySelector(".body-bg");

menuIcon.addEventListener("click", function () {
  body.classList.add("stop-scrolling");
  bodyBg.classList.remove("hide");
  sidebar.classList.remove("hide");
});
bodyBg.addEventListener("click", function (e) {
  body.classList.remove("stop-scrolling");
  bodyBg.classList.add("hide");
  sidebar.classList.add("hide");
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

// ----statistics nav in mobile screen----------------------------------------------
// --------------------------------------------------

let statistic = document.querySelector(".statistics-container");
const distance2 = 330;

function statisticForward() {
  statistic.scrollBy({
    left: distance2,
    behavior: "smooth",
  });
}

function statisticBack() {
  statistic.scrollBy({
    left: -distance2,
    behavior: "smooth",
  });
}

// --------price plan swipper---------------------------------
// ----------------------------------------
var swiper = new Swiper(".planSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow-forward",
    prevEl: ".arrow-back",
  },
  speed: 1200,
});

// -----------show & hide about list "faq"-----------------------------------------------
// -------------------------------------------------------------

let faqList = document.querySelector("#faqList");
let faqBlock = document.querySelector("#faqAnswerBlock");

faqList.addEventListener("click", () => {
  faqBlock.classList.toggle("hide");
  faqList.classList.toggle("hide");
});

faqBlock.addEventListener("click", () => {
  faqBlock.classList.toggle("hide");
  faqList.classList.toggle("hide");
});
