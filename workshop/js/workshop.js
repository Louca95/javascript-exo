// FOR
let tab = ["c'est grave si tu fais comme ça !", "mais comme ça c'est okay"];
// iniatialisation de l'itérateur à 0 ; condition pour arrêter la boucle  ;  on incrémente l'itérateur (soit on ajoute + 1)
for (let i = 0; i < tab.length /* array.length */; ++i) {
	// code
	console.log(`L'affichage avec FOR : ${tab[i]}`);
}
console.log(tab[0].length);
console.log(tab.length);

let i = 0;

// l'instruction se fera quand même une fois si la condition est fausse et la boucle n'ira pas plus loin
do {
	console.log(`L'affichage avec do while : ${tab[i]}`);
	++i;
} while (i > tab.length);

/***************************************************** *******************************************************/
let user = [
	{
		firstname: "Lucius",
		age: 21,
	},
];

const div = document.querySelector("div");

// sélection de l'id send qui représente le bouton dans le html
let bouton = document.querySelector("#send");

// alors on crée un paragraphe
const p = document.createElement("p");

// au départ display none pour ne pas afficher la div
div.style.display = "none";

// paragraphe qu'on rattache à la div du html
div.appendChild(p);

// fonction de soumission du formulaire
function authenticate(e) {
	// on évite a la page de se recharger lorqu'on soumet le formulaire
	e.preventDefault();
	console.log(e);

	// récupération de la valeur de l'input dans lequel on écrit le prenom
	let prenom = document.getElementById("firstname").value;
	console.log(prenom);
	console.log(typeof prenom);

	// récupération de la valeur de l'input dans lequel on écrit l'âge
	/* Attention ! les valeurs récupérées des input sont de type string ! Hors on va chercher
        à comparer si les deux valeurs sont strictement égales entre elles (de type et de valeur)
        Donc il faut convertir la valeur en un number pour que la condition soit vraie avec parseInt()
    */
	let age = parseInt(document.getElementById("age").value);
	console.log(age);
	console.log(typeof age);

	// si la valeur de l'input et de la propriété de l'objet firstname sont les mêmes
	// si la valeur de l'input et de la propriété de l'objet age sont les mêmes
	if (prenom === user[0].firstname && age === user[0].age) {
		console.log("c'est okay");

		// dans lequelle on écrit un message
		p.innerHTML = "C'est OKAYYYYY ! T'es connecté bro'";

		// on affiche la div qui était de base en display none
		div.style.display = "block";
	} else {
		// dans lequelle on écrit un message
		p.innerHTML = "Faut aller voir ailleurs !!";
		// on affiche la div qui était de base en display none
		div.style.display = "block";
	}
	console.log(user[0].firstname);
}

bouton.addEventListener("click", authenticate);
