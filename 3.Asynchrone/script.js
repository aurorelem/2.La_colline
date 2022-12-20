//Exemple 1: ordre d'exécution identique à l'ordre d'écriture
/*const name = "Jean-Didier";
console.log(name);

const max = 5;
for (let i = 0; i < max; i++) {
	console.log(i);
}
console.log("end");*/

//Exemple 2:
/*const in1Second = Date.now() + 1000;
let operations = 0;

console.log("Before the delay");

// This loop is executed until we reach the in1Second timestamp
while (Date.now() < in1Second) {
	operations += 1;
}

console.log("After the delay");
console.log("We could have done " + operations + " operations in that time.");
C'est la mauvaise approche car nous empêchons toute autre tâche de se produire pd la période*/

//Exemple 3: La bonne approche
/*console.log("Before the delay");
setTimeout(() => console.log("After 1s"), 1000);
console.log("After the delay");
Nous pouvons voir que After the delays'affiche même s'il est écrit après la fonction setTimeout . Il s'agit d'une opération asynchrone .
Nous pouvons également dire que cette méthode est non bloquante , puisque l'exécution du code peut continuer, même si nous avons des choses prévues dans le futur.
Les écouteurs d'événement sont une autre façon d'écrire du code asynchrone. Le code n'est exécuté qu'une fois l'événement survenu.*/

//Exemple 4: La fonction fetch()
/*const request = fetch("document.txt");
console.log("Making the request:", request); // Promise is pending

const response = request.then((response) => response.text());
console.log("Treating the response", response); // Promise is pending

response.then((text) => {
	console.log(text);
});

OU

fetch("document.txt")
	.then((response) => response.text())
	.then((text) => {
		const p = document.createElement("p");
		p.textContent = text;

		document.body.appendChild(p);
	});*/

/*La demande crée une promesse. Elle sera remplie lorsque le serveur renverra le document
Lorsque nous avons la réponse, nous appelons response.text()pour dire que nous voulons interpréter la réponse comme un texte. Il crée une nouvelle promesse
Lorsque le texte est entièrement chargé, nous créons une fonction pour enregistrer le résultat dans la console.*/

// Et si document.txtn'existe pas ? Ou a été renommé ? Ou le serveur a été mangé ? Nous devons prendre en compte l'échec de la promesse en utilisant la catch()méthode.

/*fetch("document.txt")
	.then((response) => response.text())
	.then((text) => {
		const p = document.createElement("p");
		p.textContent = text;

		document.body.appendChild(text);
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});*/

//Exercice 4: Requête inter-serveurs (API)

/*const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);

fetchName("keith")
	.then((response) => response.json())
	.then((json) => {
		console.log(json.age);
		console.log(json.count);
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});*/

//Exercice 1:

let btn = document.querySelector("button");
btn.addEventListener("click", () => fetchstring());

let list = document.createElement("ul");
document.body.appendChild(list);

function fetchstring() {
  try {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => {
        json.forEach((string) => {
          let liElem = document.createElement("li");
          liElem.innerText =
            "My name is " +
            string.name +
            " and I am " +
            string.age +
            " year old, ";
          list.appendChild(liElem);
        });
      });
  } catch (error) {
    console.log("There was an error!", error);
  }
}
