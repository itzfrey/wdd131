// footer year and last modified date
const year = document.querySelector("#currentyear");
const date = new Date();
const lastModified = document.querySelector("#lastModified");

year.innerHTML = date.getFullYear();
lastModified.innerHTML = "Last Modified: " + document.lastModified


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
window.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.querySelector('select[name="product"]');

    // Create and append the placeholder option
    const placeholderOption = document.createElement('option');
    placeholderOption.textContent = 'Choose a Product ...';
    placeholderOption.value = '';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    selectElement.appendChild(placeholderOption);

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
});
