// script.js

// Example: Show an alert when search button is clicked
document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.querySelector(".search-container button");

  if (searchButton) {
    searchButton.addEventListener("click", function() {
      alert("Search functionality coming soon!");
    });
  }
});
