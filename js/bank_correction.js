/* -------------------------------
            EXERCICE
J'ai 1000€ sur mon compte chaque mois j'ajoute 50€
Combien de temps me faut-il pour avoir 2000€ sur mon compte ?
Quelle boucle choisirez-vous pour effectuer cela ?
Affichez sur la page la somme de départ, combien vous avez tous les mois 
et le nombre de mois qu'il a fallu pour avoir les 2000€
-------------------------------- */

let bankAccount = 1000;
let month = 0;

// avec une boucle WHILE

document.write(
	`<h3 style="color:green">Sur mon compte actuellement: ${bankAccount}€ </h3>`,
);

while (bankAccount < 2000) {
	bankAccount += 50;
	document.write(
		`<h3 style="color:green">Le mois suivant j'ai : ${bankAccount}€ </h3>`,
	);
	month++;
}

document.write(
	`<h3 style="color:green">Pour avoir 2000€, il me faut: ${month} mois</h3>`,
);

/****************************************************************************************************/

// avec une boucle FOR
let time = 0;
let bankAccountBis = 1000;
document.write(
	`<h3 style="color:red">Sur mon compte actuellement: ${bankAccountBis}€ </h3>`,
);
for (let money = 1050; money <= 2000; money += 50) {
	document.write(
		`<h3 style="color:red">Le mois suivant j'ai : ${money}€ </h3>`,
	);
	time++;
}
document.write(
	`<h3 style="color:red">Il aura fallu ${time} mois pour avoir les 2000€.</h3>`,
);
