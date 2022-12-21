//Création d'un objet icones de météo voir : https://erikflowers.github.io/weather-icons/
const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-cloudy",
    "Snow": "wi wi-day-snow",
    "Mist": "wi wi-day-fog",
    "drizzle": "wi wi-day-sleet",
 }



/*Début voir Laura*/ 
 fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=93470c9d125ec60da741809a54f81589')
.then(r =>r.json())
.then(json => console.log(json))