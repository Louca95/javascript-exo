document.addEventListener("DOMContentLoaded", function () {
    let array = []
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let citation = document.getElementById ("quote-text");
        let author = document.getElementById ("author-name");

        // Méthode map()
		array.map((citation, author) => {
		const form = document.createElement("quote-form");
		form.classList.add("quote-text");
		form.innerHTML = `
		            <p>${array.text}</p>
		            <span class="remove-button">${array.text}</span>
		     `;
		 	arrayList.appendChild(form);
			form.querySelector(".remove-button").addEventListener("click", () => {
		 		removePhrase(id);
		 	});
		 });


    });


});