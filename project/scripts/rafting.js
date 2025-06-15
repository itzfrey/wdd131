
console.log("rafting.js loaded");

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

// footer year and last modified date
const year = document.querySelector("#currentyear");
const date = new Date();
const lastModified = document.querySelector("#lastModified");

year.innerHTML = date.getFullYear();
lastModified.innerHTML = "Last Modified: " + document.lastModified

// localStorage counter script
    window.addEventListener("DOMContentLoaded", () => {
      let reviewCount = localStorage.getItem("reviewCount");
      reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
      localStorage.setItem("reviewCount", reviewCount);
    });

const trips = [
  { name: "Extreme Trips", duration: "2 days", difficulty: "Challenging", season: "Spring, Summer", price: "$350" },
  { name: "Family Fun Float", duration: "Half day", difficulty: "Easy", season: "Spring, Summer, Fall", price: "$90" },
  { name: "Canyon Explorer", duration: "10 hours", difficulty: "Moderate", season: "Summer, Fall", price: "$180" },
  { name: "River Exhilaration", duration: "6 hours", difficulty: "Extreme", season: "Spring", price: "$220" },
  { name: "Gentle Float Trips", duration: "1 day", difficulty: "Moderate", season: "Spring, Summer, Fall", price: "$150" }
];

function buildTripTable() {
  const container = document.getElementById("tripTableContainer");
  if (!container) {
    console.error("No container found: #tripTableContainer");
    return;
  }

  // Add heading above table
  let heading = container.querySelector(".trip-table-heading");
  if (!heading) {
    heading = document.createElement("h2");
    heading.classList.add("trip-table-heading");
    heading.textContent = "Trip Overview | Duration · Difficulty · Season · Price";
    container.prepend(heading);
  }

  const table = document.createElement("table");
  table.classList.add("trip-table");

  // Build header
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  ["Trip Name", "Duration", "Difficulty", "Season", "Price"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  // Build body
  const tbody = document.createElement("tbody");
  trips.forEach(trip => {
    const tr = tbody.insertRow();
    Object.values(trip).forEach(value => {
      const td = tr.insertCell();
      td.textContent = value;
    });
  });
  table.appendChild(tbody);

  // Remove existing table (if re-rendering)
  const existing = container.querySelector("table.trip-table");
  if (existing) existing.remove();

  container.appendChild(table);
}

document.addEventListener("DOMContentLoaded", buildTripTable);
