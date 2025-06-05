// Ham Button and Navigation Toggle
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

// Array of temple objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	  templeName: "Manila Philippines Temple",
	  location: "Metro Manila Philippines",
	  dedicated: "1984, September, 25",
	  area: 26683,
	  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
  {
	  templeName: "Bern Switzerland Temple",
	  location: "Zollikofen, Switzerland",
	  dedicated: "1955, September, 11",
	  area: 35546,
	  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },
  {
	  templeName: "Okinawa Japan Temple",
	  location: "Okinawa, Japan",
	  dedicated: "2023, November, 12",
	  area: 12437,
	  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg"
  }
];

createTempleCard(temples);

const home = document.querySelector("#home");
const oldtemples = document.querySelector("#old");
const newtemples = document.querySelector("#new");
const largetemples = document.querySelector("#large");
const smalltemples = document.querySelector("#small");
const title = document.getElementById("temple-title");


// Convert dedication date string to actual year
function getYear(dateString) {
  return parseInt(dateString.split(",")[0]);
}
 
home.addEventListener("click", () => {
  title.textContent = "Home";
  createTempleCard(temples);
});

// Filter and display temples dedicated before 1900
oldtemples.addEventListener("click", () => {
  title.textContent = "Temples Dedicated Before 1900";
  createTempleCard(temples.filter(temple => getYear(temple.dedicated) < 1900));
});

// Filter and display temples dedicated after 2000
newtemples.addEventListener("click", () => {
  title.textContent = "Temples Dedicated After 2000";
  createTempleCard(temples.filter(temple => getYear(temple.dedicated) > 2000));
});

// Filter and display temples larger than 90,000 sq. ft.
largetemples.addEventListener("click", () => {
  title.textContent = "Temples Larger Than 90,000 sq. ft.";
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

// Filter and display temples smaller than 10,000 sq. ft.
smalltemples.addEventListener("click", () => {
  title.textContent = "Temples Smaller Than 10,000 sq. ft.";
  createTempleCard(temples.filter(temple => temple.area < 10000));
});


// Function to create and display temple cards  
function createTempleCard(filteredTemples) {
  document.querySelector(".container").innerHTML = ""; 
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p"); 
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq. ft.`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name); 
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".container").appendChild(card);
  })
}