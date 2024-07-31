


function addition(poulet, vache, cheveau){
        let somme = poulet + vache + cheveau
        return somme;
}
    function annimaux(poulet, vache,cheveau){
        let somme = poulet*2 + vache*4 + cheveau*4
        return somme;
}
    poulet = parseInt(prompt("Donne moi le nombre de poulet :"));
    vache = parseInt(prompt("Donne moi le nombre de vache :"));
    cheveau = parseInt(prompt("Donne moi le nombre de cheveaux  :"));

    let result = addition(poulet, vache, cheveau);
    let patte = annimaux(poulet, vache, cheveau);

    document.write(`le resultat du nombre d'annimaux et de : ${result} et du nombre de patte et de : ${patte}`);

   