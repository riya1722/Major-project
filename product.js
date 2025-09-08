// Show More Products
document.getElementById("showMoreBtn").addEventListener("click", () => {
  const hiddenCards = document.querySelectorAll(".card.hidden");
  hiddenCards.forEach(card => card.classList.remove("hidden"));
  
  // Hide the button after showing all products
  document.getElementById("showMoreBtn").style.display = "none";
});
