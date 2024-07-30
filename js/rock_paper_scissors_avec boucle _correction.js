let userChoice;
let computerChoice;
let randomChoice = Math.floor(Math.random() * 3);
let resultMessage = "";

console.log(Math.floor(Math.random()));

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
resultMessage += "Vous avez gagnÃ© !";
} else {
resultMessage += "Dommage! Vous avez perdu.";
}

alert(resultMessage);