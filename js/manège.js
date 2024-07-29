for (let manege = 0; manege <= 10; ++manege) {
	document.write(`<p style='color:green' >Je suis le numéro ${manege}</p>`);
}
 let aswer = prompt("choisiser un numero. ")
 let number = 0;
 while( number <= 10){
     document.write(`<p style='color:violet'>Je passe par ici ${number}</p>`);
 ++number;
 }
 for ( let i = 0; i <= aswer ; ++i) {
	document.write(`<p style='color:red' >Je suis le numéro ${i}</p>`);
}