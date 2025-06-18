
console.log("rafting.js loaded");

// ========== Navigation Toggle ==========
function toggleMenu() {
  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");

  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
  });
}

// ========== Footer Date Update ==========
function updateFooterDates() {
  const year = document.querySelector("#currentyear");
  const lastModified = document.querySelector("#lastModified");
  const date = new Date();

  year.innerHTML = date.getFullYear();
  lastModified.innerHTML = `Last Modified: ${document.lastModified}`;
}

// ========== Track Visits Using localStorage ==========
function updateVisitCounter() {
  let reviewCount = localStorage.getItem("reviewCount");
  reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
  localStorage.setItem("reviewCount", reviewCount);
  console.log(`This page has been visited ${reviewCount} times.`);
}

// ========== Trip Data (Array of Objects) ==========
const trips = [
  { name: "Extreme Trips", duration: "2 days", difficulty: "Challenging", season: "Spring, Summer", price: "$5,000" },
  { name: "Family Fun Float", duration: "Half day", difficulty: "Easy", season: "Spring, Summer, Fall", price: "$1,500" },
  { name: "Canyon Explorer", duration: "10 hours", difficulty: "Moderate", season: "Summer, Fall", price: "$1,500" },
  { name: "River Exhilaration", duration: "6 hours", difficulty: "Extreme", season: "Spring", price: "$2,000" },
  { name: "Gentle Float Trips", duration: "1 day", difficulty: "Moderate", season: "Spring, Summer, Fall", price: "$1,500" }
];

// ==========  Build Trips Table ==========
function buildTripTable() {
  const container = document.getElementById("tripTableContainer");
  if (!container) {
    console.error("No container found: #tripTableContainer");
    return;
  }

  if (trips.length === 0) {
    container.innerHTML = "<p>No trips available right now.</p>";
    return;
  }

  let heading = container.querySelector(".trip-table-heading");
  if (!heading) {
    heading = document.createElement("h2");
    heading.classList.add("trip-table-heading");
    heading.textContent = "Trip Overview | Duration · Difficulty · Season · Price";
    container.prepend(heading);
  }

  const table = document.createElement("table");
  table.classList.add("trip-table");

  // Table Header
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  ["Trip Name", "Duration", "Difficulty", "Season", "Price"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  // Table Body
  const tbody = document.createElement("tbody");
  trips.forEach(trip => {
    const tr = tbody.insertRow();
    Object.values(trip).forEach(value => {
      const td = tr.insertCell();
      td.textContent = value;
    });
  });
  table.appendChild(tbody);

  const existing = container.querySelector("table.trip-table");
  if (existing) existing.remove();

  container.appendChild(table);
}

// ========== Initialize Everything on Page Load ==========
document.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
  updateFooterDates();
  updateVisitCounter();
  buildTripTable();
});
