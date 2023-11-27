let searchWrapper = document.getElementById("searchWrapper");
let searchButton = document.getElementById("searchButton");
let searchBar = document.getElementById("searchBar");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchWrapper.classList.add("active");
});

// searchWrapper.addEventListener("click", (e) => {
//   e.preventDefault();
//   searchWrapper.classList.remove("active");
// });

searchWrapper.addEventListener("click", function (e) {
  if (!searchBar.contains(e.target)) {
    searchWrapper.classList.remove("active");
  }
});

const faqs = document.querySelectorAll(".faq.pricing");

const faqButton = document.querySelectorAll(".faq-button");

faqButton.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    faqButton[index].classList.toggle("toggle");
    faqs[index].classList.toggle("toggle");
  });
});

