const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const year = document.querySelector("#currentyear");

const date = new Date();

year.innerHTML = date.getFullYear();

const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = "Last Modified: " + document.lastModified