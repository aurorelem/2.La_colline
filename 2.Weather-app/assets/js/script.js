//Création d'un objet icones de météo voir : https://erikflowers.github.io/weather-icons/
const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-cloudy",
    "Snow": "wi wi-day-snow",
    "Mist": "wi wi-day-fog",
    "drizzle": "wi wi-day-sleet",
 }

//Ma cléf API
const apiKey = "c29ada0ea1fe1a7641088d1fdb6c7478";

//Mes variables
let city = document.querySelector('city');
let imput = document.querySelector('input');
let button = document.querySelector('button');
let icon = document.querySelector('icon');
let temp = document.querySelector('temp');
let desc = document.querySelector('desc');

//Ecouteur d'évèmnemnt qui exécute une fonction à chaque fois que la page est chargée
window.addEventListener('load', () => {
    let long;
    let lat;
    //Accéder à la géolocalisation de l'utilisateur
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
        //Stockage de la longitude et de la latitude dans des variables
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
    });
    
}



button.addEventListener("click", () => locate());

async function locate() {
  let city = input.value;
  try {
    //Obtenir la localisation du pays
    let response = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&appid=" +
        apiKey
    );
    let data = await response.json();
    //Obtenir la latitude et la longitude
    console.log(data);
    localStorage.setItem(data, JSON.stringify(response));
    let lat = data[0].lat;
    let lon = data[0].lon;
    console.log(lon);
    console.log(lat);
    weatherApp(lat, lon);
  } catch (error) {
    console.error(error);
  }
}