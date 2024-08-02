let participants = ["Jules", "Marc", "Paul", "Juliette", "Sandrine"];
let selectedNames = []; // Nouveau tableau pour pouvoir checker les prénoms sélectionnés

function tirage() {
	let name = document.querySelector("p");

	if (selectedNames.length === participants.length) {
		name.innerHTML =
			"Tous les prénoms ont été sélectionnés. Il n'y a plus de prénoms à tirer !";
		return; // On arrête la fonction si tous les prénoms ont été sélectionnés
	}

	// On lance le random dans la fonction car en dehors elle ne se lance qu'une première fois
	// donc on garantit un nouveau random de prénom à chaque fois qu'on appelle la fonction
	let random = Math.floor(Math.random() * participants.length);

	let selectedName = participants[random];

	if (selectedNames.includes(selectedName)) {
		name.innerHTML = `Prénom ${selectedName} déjà sélectionné! Relancez le tirage !`;
	} else {
		selectedNames.push(selectedName); // Ajouter le prénom sélectionné au tableau si on l'a pas déjà sélectionné
		name.innerHTML = `<br>Le nom du participant est: <strong>${selectedName}</strong>`;
	}
}
