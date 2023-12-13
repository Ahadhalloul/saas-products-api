// Constants
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const breakpoints = {
  mobile: 744,
  tablet: 1023,
};

// Global variables
let currentIndex = 0;

function container(selectorContainer, elements) {
  const container = document.querySelector(selectorContainer);
  const children = [...document.querySelectorAll(elements)];

  // Function to animate the transition using GSAP
  function scrollTransition() {
    const containerWidth = container.offsetWidth;
    const childWidth = children[currentIndex].offsetWidth;
    const scrollWidth = container.scrollWidth;
    const maxScroll = scrollWidth - containerWidth;
    const scrollPosition = Math.min(maxScroll, childWidth * currentIndex);

    // Adjust scroll position to center element
    const centeredScrollPosition =
      scrollPosition - containerWidth / 2 + childWidth / 2;

    // Only animate if screen size is less than 768px
    let mediaQuery = gsap.matchMedia();

    mediaQuery.add(`(max-width: ${breakpoints.mobile}px)`, () => {
      gsap.to(container, {
        duration: 0.8,
        x: -centeredScrollPosition,
        ease: "power1.inOut",
      });
    });
  }

  // Function to handle next button click
  function handleNextButtonClick() {
    currentIndex = (currentIndex + 1) % children.length;
    scrollTransition();
  }

  // Function to handle previous button click
  function handlePrevButtonClick() {
    currentIndex = (currentIndex - 1 + children.length) % children.length;
    scrollTransition();
  }

  // Event listeners
  nextButton.addEventListener("click", handleNextButtonClick);
  prevButton.addEventListener("click", handlePrevButtonClick);

  // Initial animation
  scrollTransition();
}

container(".social-list", ".social-item");
