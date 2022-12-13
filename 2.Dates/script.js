//Exemple 1:
/*let now = new Date() // Today's date 
let dateInThePast = new Date('1990-12-25') // 25th December of 1990 (at midnight, since we do not set the time)

console.log(dateInThePast.toISOString()) // 1990-12-25T00:00:00.000Z
console.log(dateInThePast.toUTCString()) // Tue, 25 Dec 1990 00:00:00 GMT
console.log(dateInThePast.toString()) // Tue Dec 25 1990 01:00:00 GMT+0100 (Central European Standard Time)*/

//Il existe une méthode pour extraire toutes les informations de l'objet date. Vous souhaitez récupérer le jour => getDate() ! Vous voulez le jour de la semaine => 0 étant dimanche, 6 étant samedi, utilisez getDay()

//Exemple 2:
/*let dateInThePast = new Date('1990-12-25')

console.log(dateInThePast.getDate()) // 25
console.log(dateInThePast.getDay()) // 2 ( = tuesday)
console.log(dateInThePast.getFullYear()) // 1990
console.log(dateInThePast.getHours()) // 1 (midnight, UTC+1)
console.log(dateInThePast.getMilliseconds()) // 0
console.log(dateInThePast.getMinutes()) // 0
console.log(dateInThePast.getMonth()) // 11 (! Months start at 0 !)
console.log(dateInThePast.getSeconds()) // 0*/

//Si on souhaite afficher les dates en heure UTC (moins le décalage UTC), il existe un équivalent pour chacune de ces méthodes, par exemple getHours()devient getUTCHours()

//Horodatages

//getTime() , cela vous donne une valeur spéciale appelée epoch, c'est le nombre de millisecondes depuis le 1er janvier 1970.

/*let christmas1995 = new Date('1995-12-25')
let halloween2002 = new Date('2002-10-30')

console.log((halloween2002.getTime() / 1000) + ' seconds have passed betweeen halloween 2002 and 1/1/1970')
console.log((halloween2002.getTime() - christmas1995.getTime()) / (1000 * 60) + ' minutes have passed betweeen halloween 2002 and c')*/


/*let halloween2002 = new Date('2002-10-30')
let threeDays = 1000 * 60 * 60 * 24 * 3 // 1000 miliseconds * 60 seconds * 60 minutes * 24 hours * 3 days

let threeDaysPastHalloween2002 = new Date(
  halloween2002.getTime() + threeDays
)

console.log(threeDaysPastHalloween2002.toString())*/

//Exercice 1:

//Ancorage
/*let anchorage = new Date()

let anchorageHours = anchorage.getHours()
let anchorageMinutes = anchorage.getMinutes()
let anchorageSeconds = anchorage.getSeconds()
let anchorageDate = 'anchorage : ' + anchorageHours + " h " + anchorageMinutes + " min " + anchorageSeconds + "sec"

document.getElementsByClassName("Anchorage")[0].innerHTML = anchorageDate
console.log(anchorageDate)
*/

//Reykjavik
/*let reykjavik = new Date()

let reykjavikHours = reykjavik.getUTCHours()-1
let reykjavikMinutes = reykjavik.getUTCMinutes()
let reykjavikSeconds = reykjavik.getUTCSeconds()
let reykjavikDate = 'Reykjavik : ' + reykjavikHours + " h " + reykjavikMinutes + " min " + reykjavikSeconds + " sec "
console.log(reykjavikDate)*/

//Saint-Petersbourg
/*let saint_petersbourg = new Date()

let saint_petersbourgHours = saint_petersbourg.getUTCHours()+3
let saint_petersbourgMinutes = saint_petersbourg.getUTCMinutes()
let saint_petersbourgSecond = saint_petersbourg.getUTCSeconds()
let saint_petersbourgDate = 'saint_petersbourg' + saint_petersbourgHours + " h " + saint_petersbourgMinutes + " min " + saint_petersbourgSecond + " sec "
document.getElementsByClassName(saint_petersbourg)[0].innerHTML = saint_petersbourgDate
console.log(saint_petersbourg)*/

//Brussels
/*let brussels = new Date()

let brusselsHours = brussels.getUTCHours()
let brusselsMinutes = brussels.getUTCMinutes()
let brusselsSeconds = brussels.getUTCSeconds()
let brusselsDate = 'brussels : ' + brusselsHours + " h " + brusselsMinutes + " min " + brusselsSeconds + " sec "
document.getElementsByClassName("brussels")[0].innerHTML = brusselsDate
console.log(brusselsDate)*/

//Exercice 2:

/*let date_1 = new Date('10/06/1987');
let date_2 = new Date();

const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
console.log(days(date_1, date_2) +" Hé ben, ça en fait des jours!! ");*/

