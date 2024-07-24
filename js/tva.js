
let answer = prompt("Question: quelle est votre prix hors taxe ?");
let taxe;
 document.write(`<p> le prix hors taxe donner par l'utilisateur est:${answer}`);

taxe = answer *1.20;
document.write(`<p>La réponse de votre TTC :${taxe}`);