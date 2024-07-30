
let nub1 = prompt (" Ecriver votre premier chiffre")
let nub2 = prompt (" Ecriver votre deuxieme chiffre")

function chiffre(nub1,  nub2){
	let resultat =  parseInt(nub1) + parseInt(nub2) ;
    document.write (`le resultat de ${nub1} + ${nub2} = ${resultat}`)
}
    


chiffre (nub1, nub2)
