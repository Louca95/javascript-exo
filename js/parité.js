let result = prompt ("choissiser un chiffre ")


for (let i = 0; i <= 10; i++) {
    if (result % 2 === 0) {
        document.write(result + " est pair");
    }else{
        document.write(result + " est impaire");

    }
    result++
}