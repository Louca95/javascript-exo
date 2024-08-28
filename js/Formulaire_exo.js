const nameForm = document.getElementById("Form");

const ageInput = document.getElementById("age");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-message");
// const btn = document.getElementById("btn");
const successMsg = document.getElementById("successMsg")

let regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

nameForm.addEventListener("submit", function (event){
    let nomInput = document.getElementById("name");

	const namelValue = nameInput.value;

	console.log(nameValue);

	// if (regex.test(nomValue)) {
		successMsg.innerHTML="le nom a été transmis ";
	// }
	errorMsg.innerHTML = "Veuillez ecrire un nom valide";
	// errorMsg.style.display = "block";
// });
// nomForm.addEventListener("submit", function (event) {
// 	event.preventDefault();

	const agelValue = ageInput.value;

	console.log(ageValue);

	if (regex.test(ageValue)) {
		successMsg.innerHTML="l'age a été transmis";
	}
	errorMsg.innerHTML = "Veuillez ecrire une age entre 18 et 120 ans";
	errorMsg.style.display = "block";
// });
// nomForm.addEventListener("submit", function (event) {
// 	event.preventDefault();

	const passwordValue = passwordInput.value;

	console.log(passwordValue);

	if (regex.test(nomValue)) {
		successMsg.innerHTML="le mot de passe a été transmie";
	}
	errorMsg.innerHTML = "Veuillez ecrire un mot de passe avec une majuscule, 8 caractères, un caractère spécial, des minuscules et un chiffre";
	errorMsg.style.display = "block";
});