let array = [];
let message = ""
let add;

do {
	let list = prompt("Quelle ingrediant vous voulez dans votre liste?");

    if(list){
        array.push(list);
    }

    add = prompt("il vous faut autre chose ? oui/non ?")
    .toLowerCase() === "oui";
} while(add);


if(array.length > 0){

    document.getElementById("message").innerHTML =`voici le resultat de la list ${array}`;

}else{

    document.getElementById("message").innerHTML =`voici le resultat de la list est vide`;
    
}