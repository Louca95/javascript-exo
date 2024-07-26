let userChoice = prompt(
    "Entrez votre choix (pierre, feuille, ciseaux) :",
    ).toLowerCase();
    let computerChoice;
    let randomChoice = Math.floor(Math.random() * 3);
    let resultMessage;
    
    console.log(Math.floor(Math.random()));
    
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
    } else if (
    userChoice === "pierre" ||
    userChoice === "feuille" ||
    userChoice === "ciseaux"
    ) {
    resultMessage += "Vous avez perdu.";
    } else {
    resultMessage = "Choix invalide, veuillez entrer pierre, feuille ou ciseaux.";
    }
    
    alert(resultMessage);