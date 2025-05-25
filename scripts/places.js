const date = new Date();

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.innerHTML = date.getFullYear();
lastModified.innerHTML = "Last Modified: " + document.lastModified

const windChill = document.querySelector("#wind-chill");
const temperature = document.querySelector("#temperature");



const temperatureValue = 48; //Temperature in Fahrenheit
const windSpeed = 5.6 // Wind speed in mph


function calculateWindChill (temp, wind) {
    if (temp <= 50 && wind > 3) {
        let windChillValue = (
            35.74 + 
            0.6215 * temp - 
            35.75 * (wind ** 0.16) + 
            0.4275 * temp * (wind ** 0.16)
        ).toFixed(2);
        return windChillValue
    } else {
        return "N/A";
    }

}


windChill.innerHTML = `<strong>Wind Chill:</strong> <span>${calculateWindChill(temperatureValue, windSpeed)}°F</span>`;
temperature.innerHTML = `<strong>Temperature:</strong> <span>${temperatureValue}°F</span>`;

