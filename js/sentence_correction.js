document.addEventListener("DOMContentLoaded", function () {
	// Tableau d'objets avec les phrases
	const phrases = [
		{ id: 0, text: "C'est une belle journée." },
		{ id: 1, text: "J'aime apprendre de nouvelles choses." },
		{ id: 2, text: "Le café est délicieux." },
		{ id: 3, text: "Il fait beau aujourd'hui." },
		{ id: 4, text: "Apprendre en groupe c'est fun !" },
	];

	let phrasesList = document.getElementById("sentences-list");

	function displaySentences() {
		for (let i = 0; i < phrases.length; ++i) {
			const div = document.createElement("div");
			div.classList.add("sentence-item");
			div.innerHTML = `
		        <p>${phrases[i].text}</p>
		        <span class="remove-button">Supprimer</span>
		        `;
			phrasesList.appendChild(div);
		}

		// Méthode map()
		// phrases.map((phrase, id) => {
		// 	const div = document.createElement("div");
		// 	div.classList.add("sentence-item");
		// 	div.innerHTML = `
		//         <p>${phrase.text}</p>
		//         <span class="remove-button">Supprimer</span>
		//         `;
		// 	phrasesList.appendChild(div);
		// });
	}

	displaySentences();
});
