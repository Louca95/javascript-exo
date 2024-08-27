
let message=""

function restaurant(expr){
    switch (expr) {
        case "Pizza":
            document.getElementById("message").textContent ="Pour prends de kilos";
        break; 

        case "Pasta":
            document.getElementById("message").textContent ="Pour ne pas changer les bonne habithude";
        break; 

        case "Salad":
           document.getElementById("message").textContent ="Pour manger sainement";
        break; 

        case "Sushi":
            document.getElementById("message").textContent ="Pour un petit voyage en asie";
        break; 
        default:
            document.getElementById("message").textContent ="Aurevoir";
        break;
    }
    
}
