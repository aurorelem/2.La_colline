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

let icon = document.querySelector('icon');
let temp = document.querySelector('temp');
let desc = document.querySelector('desc');

//Ecouteur d'évèmnemnt qui exécute une fonction à chaque fois que la page est chargée

let button = document.querySelector('button');

button.addEventListener("click", () => locate());

async function locate() {
  let imput = document.querySelector('input').value;
  let location = input;
  console.log(location);     //Pour vérifier si je vais bien chercher la bonne info
  try {
    //Obtenir la localisation du pays
    let response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=" +
        apiKey
    );
    let data = await response.json();
    console.log(data);
    localStorage.setItem(data, JSON.stringify(response));
   
  } catch (error) {
    console.error(error);
  }
}
