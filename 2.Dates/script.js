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

let christmas1995 = new Date('1995-12-25')
let halloween2002 = new Date('2002-10-30')

console.log((halloween2002.getTime() / 1000) + ' seconds have passed betweeen halloween 2002 and 1/1/1970')
console.log((halloween2002.getTime() - christmas1995.getTime()) / (1000 * 60) + ' minutes have passed betweeen halloween 2002 and c')

