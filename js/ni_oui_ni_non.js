let result;

let tour = 1;
let i = true;
while (i == true ) {
    result = prompt ("jouon au jeux du ni oui ni non");
    result.toLowerCase();
    ++tour;
	if ( result == "yes"){
		document.write(`<p style='color:green'>tu as perdue a : ${tour} tours</p>`);
            i = false;
    }else if(result == "no"){
        document.write(`<p style='color:green'>tu as perdue a: ${tour} tour</p>`);
            i = false;
        }
        else{
            i = true;
        }
};
// if(i = false){
//     tour = 0;
// }
    