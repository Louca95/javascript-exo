;
// const countdown = document.getElementById("tcountdown");

// // Fonction pour démarrer le délai
// countdown.addEventListener("click", function () {
// 	countdown.innerHTML = "En attente...";
// 	setTimeout(() => {
// 		countdown.innerHTML = "Le délai de 3 secondes est écoulé";
// 	}, 3000);
// });
// Set the date we're counting down to
let countdownDate = new Date("Dec 31, 2024 23:59:59").getTime(); // Example date: Dec 31, 2024

// Update the countdown every 1 second
let countdownFunction = setInterval(function() {
    
    // Get today's date and time
    let now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    let distance = countdownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // If the countdown is finished, write some text and redirect
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Le site est maintenant ouvert!";
        // Redirect after 2 seconds
        setTimeout(function() {    
            window.location.href = "redirection.html"; // Replace with your target URL
        }, 2000);
    }
}, 1000);
