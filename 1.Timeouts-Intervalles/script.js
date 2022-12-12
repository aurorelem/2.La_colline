/*Exemple 1:
console.log("WARNING! In exactly five seconds something will explode");

function theExplosion() {
  console.log("BOOM!");
}

setTimeout(theExplosion, 5000);*/

/*Exemple 2: timeout and events
function theExplosion() {
    alert("BOOM!");
  }
  
  const button = document.createElement("button");
  button.textContent = "WARNING";
  button.addEventListener("click", () => {
    // this will delay the event by 5 seconds
    setTimeout(theExplosion, 5000);
  });
  document.body.appendChild(button);*/

  /*Exemple 3: La récursivité                                     A regarder plus tard car n'a pas fct
  let times = 0;
  function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;

  const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
  setTimeout(heyYou, nextCall);
}*/

/*Exemple 3: La setInterval()fonction
let times = 0;
function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

setInterval(heyYou, 1000);*/

/*Exemple 4: Minuterie d'effacement                              A regarder plus tard car n'a pas fct
let interval;
let times = 0;

function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}*/


//Exercice 1:                                                    

/*const text = "prout";

//La référence de la minuterie
let timer;

//L'index courant
let i = 0;

//On n'avez pas besoin d'une boucle for dans setInterval, la fonction elle-même est déjà appelée par itérations, traitez-la simplement comme une itération de boucle.
function type() {

  //Imprimer le caractère courant avec l'index courant
  document.write(text[i]);
  
  //Augmente l'index
  i++;
  
  //Si l'index atteint la longueur maximale du texte, arrête le timer
  if(i >= text.length) 
    clearInterval(timer);
}

//Passer la fonction, au lieu de l'appeler
timer = setInterval(type, 1000);*/

/*let str = 'prout'.split('');                               A regarder plus tard, fct mais je ne comprend pas encore tout

const interval = setInterval(() => {
  document.write(str[0]);
  str = str.slice(1);
  
  if (!str.length) {
    clearInterval(interval);
  }
}, 1000);*/


//Autre possiblilité de résoudre l'exercice
/*var text = "prout";
    var i = 0;
    var o = "";

    function type() {
      o += text[i];
      document.write(o[i]);
      i++;
      if (i == text.length) {
        clearInterval(interval);
      }
    }
    var interval = window.setInterval(type, 1000);*/

    //Bonus 1:
    //Les éléments
const cells = document.querySelectorAll('.cell');
const startBtn = document.querySelector('#start');

//Les variables globales
let score = 0;
let time = 10;
let currentPos;

// lorsqu'une cellule est cliquée, il vérifie si la taupe est là et met à jour le score si c'est le cas.
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (parseInt(cell.getAttribute('data-index')) === currentPos) {
            score++;
            /*scoreEl.innerHTML = score;*/
        }
    })
});

//Ajout d'un écouteur au bouton de démarrage
startBtn.addEventListener('click', start);

function start() {
    let startGame = setInterval(() => { //boucler le jeu jusqu'à la fin du temps imparti
        //vider toutes les cellules au début pour s'assurer qu'il n'y a pas de taupe en double. 
        cells.forEach(cell => {
            cell.innerHTML = '';
        });

        //remplir une cellule au hasard en ajoutant un div avec la classe de taupe
        currentPos = Math.floor(Math.random() * 9);
        cells[currentPos].innerHTML = '<div class="mole"></div>';

        //vérification si le temps est écoulé
        time--;
        timeEl.innerHTML = time;
        if (time === 0) { // le temps est écoulé
            clearInterval(startGame); // arrêter la boucle
            //nous utilisons setTimeout parce que sans cela, l'alerte s'exécute avant la mise à jour du temps.
            setTimeout(() => {
                alert('Game Done! Refresh to restart.');
            }, 100);
        }
    }, 1000);
}
    