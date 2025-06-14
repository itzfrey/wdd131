
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