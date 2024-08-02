let fiat = {};
console.log(fiat);
    fiat.cars = "fiat punto",
    fiat.fabricationdate = "1993",
    fiat.Date ="2010-04-05",

     fiat.listepassager = {

        passager1: "thirry",
        passager2: "pierre",
 };


 
 document.write(`<ul> 
                    <li>
                    ${fiat.cars}  
                    </li>
                    <li>
                    ${fiat.fabricationdate}
                    </li>
                    <li>
                    ${fiat.Date}
                    </li>
                    <li>
                    ${fiat.listepassager.passager1}
                    </li>
                    <li>
                    ${fiat.listepassager.passager2}
                    </li>
                </ul>`
                );
