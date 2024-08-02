let userChoice;
let computerChoice;
let resultMessage = "";

// Variables pour les scores des joueurs
let userScore = 0;
let computerScore = 0;

// Sélection des éléments du DOM
let result = document.querySelector("p");
let endGame = document.querySelector(".game");
let points = document.querySelector("h2");

console.log(Math.floor(Math.random()));

// Fonction qui va lancer le jeu
function play() {
	while (true) {
		userChoice = prompt(
			"Entrez votre choix (pierre, feuille, ciseaux) :",
		).toLowerCase();
		if (
			(userChoice === "pierre" ||
				userChoice === "feuille" ||
				userChoice === "ciseaux") &&
			isNaN(userChoice)
		) {
			break;
		} else {
			alert("Choix invalide, veuillez entrer pierre, feuille ou ciseaux.");
		}
	}

	let randomChoice = Math.floor(Math.random() * 3);

	if (randomChoice === 0) {
		computerChoice = "pierre";
	} else if (randomChoice === 1) {
		computerChoice = "feuille";
	} else {
		computerChoice = "ciseaux";
	}

	resultMessage = "Ordinateur a choisi : " + computerChoice + ". ";

	if (userChoice === computerChoice) {
		resultMessage += "C'est un match nul !";
	} else if (
		(userChoice === "pierre" && computerChoice === "ciseaux") ||
		(userChoice === "feuille" && computerChoice === "pierre") ||
		(userChoice === "ciseaux" && computerChoice === "feuille")
	) {
		resultMessage += "Vous avez gagné !";
		// Incrémentation du score du joueur quand il a gagné
		++userScore;
	} else {
		resultMessage += "Dommage! Vous avez perdu.";
		// Incrémentation du score de l'ordinateur quand il a gagné
		++computerScore;
	}

	result.innerHTML = resultMessage;
	points.innerHTML = `Vous avez ${userScore} point(s) et l'ordinateur a ${computerScore} point(s)`;

	// Si l'un des deux joueurs arrive à 5 points il gagne la partie
	if (userScore === 5) {
		endGame.innerHTML = "Félicitations! Vous avez gagné la partie.";
		// On appelle la fonction qui remet à zéro les scores et messages
		resetGame();
	} else if (computerScore === 5) {
		endGame.innerHTML = "Dommage! L'ordinateur a gagné la partie.";
		// On appelle la fonction qui remet à zéro les scores et messages
		resetGame();
	}
}

// Fonction qui va remettre à zéro les scores et les messages
function resetGame() {
	userScore = 0;
	computerScore = 0;
	result.innerHTML = "";
	points.innerHTML = "Vous avez 0 point(s) et l'ordinateur a 0 point(s)";
}



