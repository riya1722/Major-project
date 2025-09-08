// Placeholder for JS (carousel, nav toggle, etc.)
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});
document.addEventListener("DOMContentLoaded", () => {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const allCards = document.querySelectorAll(".card");
  let visibleCount = 3; // number of products visible at start
  const batchSize = 3; // how many products to reveal per click

  // initially hide all except first 3
  allCards.forEach((card, index) => {
    if (index >= visibleCount) {
      card.classList.add("hidden");
    }
  });

  showMoreBtn.addEventListener("click", () => {
    // reveal next batch
    const nextCount = visibleCount + batchSize;
    for (let i = visibleCount; i < nextCount && i < allCards.length; i++) {
      allCards[i].classList.remove("hidden");
    }
    visibleCount = nextCount;

    // if all are visible, hide button
    if (visibleCount >= allCards.length) {
      showMoreBtn.style.display = "none";
    }
  });
});
