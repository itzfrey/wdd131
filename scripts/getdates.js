const year = document.querySelector("#currentyear");

const date = new Date();

year.innerHTML = date.getFullYear();

const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = "Last Modified: " + document.lastModified