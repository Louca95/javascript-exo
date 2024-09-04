const eleves = [
    {name : "henry", note : [5, 15, 13]},
    {name : "julien", note : [9, 18, 3]},
    {name : "edouard", note : []},
]



const nombresMultipliés = eleves.map((eleve) =>
     {const { note, name } = eleve;
    console.log(note);
    console.log(name);
});
const sommeTotale = notes.reduce(
	(accumulateur, note) => accumulateur + note / 3,
	0,
);
document.getElementById(
	"result",
).innerHTML = `Somme des nombres: ${sommeTotale}`;

