document.addEventListener("DOMContentLoaded", function () {

    let intervalId;
    let counter = 0;
    let control =document.getElementById("control");
    
    const startIntervalButton = document.getElementById("start");
    const stopIntervalButton = document.getElementById("stop");
    const intervalCount = document.getElementById("timer");
    const reset = document.getElementById("reset");


    startIntervalButton.addEventListener("click", function () {
        
        intervalId = setInterval(() => {
            counter++;
            intervalCount.innerHTML = `${counter}`;
        }, 200);
    });

    stopIntervalButton.addEventListener("click", function () {
        clearInterval(intervalId);
    });

});