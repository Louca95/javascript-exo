let old = prompt("Quelle est votre age?");
let driving = prompt("Est ce que vous avez le permis de conduire? o/n");

if(old >= 18 && driving == "o"){
    alert("tu a le permis gg")
}
else if(old >= 18 && driving == "n"){
    alert("dommage tu as pas eu le permis ")
}
else{
    alert("tu est trop jeune")
}
// let red
// let blue 
// alert("choissier le rouge ou le bleu")
// function play(red) {
// 	while (true) {
// 		red = prompt(
// 			"commbien de perso sur leaugue of legends il y a ? ",
// 		).toLowerCase();
//     if (red === 168){
//         alert("bien joué")
//     }else
//         ("Dommage tu est n'est pas bon")
//     }
// }
// play(red)