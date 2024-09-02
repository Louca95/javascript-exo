function letMeLaugh() {
	fetch("translation_multinlingue.json")
		// Récupération de la réponse de l'api qu'on convertit en johnson (JSON)
		.then((data) => data.json())
		// Récupération de la réponse une fois convertie
		.then((res) => {
			console.log(res);
			// Stockage de l'icône de l'api dans le localStorage
			localStorage.setItem("avatar", res.icon_url);
			results.innerHTML = `
         <img src=${res.icon_url} alt="Avatar de Chuck" />
         <p>${res.value}</p>
         `;
		});
    }
     btn.addEventListener("click", letMeLaugh);