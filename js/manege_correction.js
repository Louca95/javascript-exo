// ------------------QUESTION 1

for (let i = 1; i <= 10; i++) {
    document.write(
    "<p style='color:red'>C'est le tour de manége n° " + i + "</p>",
    );
    }
    
    // let round = 0;
    // while(round < 10){
    //     ++round;
    //     document.write("<p style='color:green'>C'est le tour de manége n° " + round + "</p>");
    // }
    
    // ------------------QUESTION 2
    
    let nbRound = parseInt(prompt("Combien de tours voulez-vous faire ?"));
    for (let count = 1; count <= nbRound; ++count) {
    document.write(
    "<p style='color:pink'>C'est la tour de manége n° " + count + "</p>",
    );
    }
    
    // let question = parseInt(prompt("Combien de tours voulez-vous faire ?"));
    // let count = 0;
    // while(count <= question){
    //     ++count;
    //     document.write("<p style='color:green'>C'est la tour de manége n° " + count + "</p>");
    // }