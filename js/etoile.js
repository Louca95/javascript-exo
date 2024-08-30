
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

 
    const size = getRandomNumber(2, 10); 
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

 
    const x = getRandomNumber(0, window.innerWidth);
    const y = getRandomNumber(0, window.innerHeight);
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    
    document.body.appendChild(star);
}


document.addEventListener('click', () => {
    createStar();
});



