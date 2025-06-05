const date = new Date();

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.innerHTML = date.getFullYear();
lastModified.innerHTML = "Last Modified: " + document.lastModified