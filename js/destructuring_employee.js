const btn = document.querySelector("#show-info");
const btn1 = document.querySelector("#update-info");
function displayPersonInfo() {
    const person = {
	name: "Julie",
	age: 28,
	city: "Paris",
    hobby: "photography",
    profession: "Développeuse"
    };
    const { name, age, city, hobby, profession } = person;

    document.getElementById("result").innerHTML = `Nom: ${name},<br> Age: ${age}, <br> Ville: ${city}, <br> Loisir Préféré : ${hobby}, <br> Profession: ${profession}`;

}
btn.addEventListener("click", displayPersonInfo);

function updatePersonInfo() {
    const person = {
	name: "Julie",
	age: 28,
	city: "Paris",
    hobby: "photography",
    profession: "desingneur"
    };
    const { name, age, city, hobby, profession } = person;

    document.getElementById("result").innerHTML = `Nom: ${name},<br> Age: ${age}, <br> Ville: ${city}, <br> Loisir Préféré : ${hobby}, <br> Profession: ${profession}`;

}
btn1.addEventListener("click", updatePersonInfo);