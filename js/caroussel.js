const image = document.querySelector("#carousel-image");
const caption = document.querySelector("#carousel-caption");

// Tableau d'objets d'images et de titres
const images = [
{src: "../img/paysage.jpg",
caption: "Paysage nordique",
alt: "Paysage nordique",
},
{
src: "../img/rivière.jpg",
caption: "Femme au milieu d'une rivière",
alt: "Femme au milieu d'une rivière",
},
{
src: "../img/salon.jpg",
caption: "Intérieur moderne",
alt: "Intérieur moderne",
},
];

let currentIndex = 0; // Index (position) de l'image actuelle soit la première

function updateCarousel() {
image.src = images[currentIndex].src;
image.alt = images[currentIndex].alt;
caption.innerHTML = images[currentIndex].caption;
}

function previous() {
if (currentIndex > 0) {
currentIndex = currentIndex - 1;
} else {
currentIndex = images.length - 1; // pour aller à la dernière image
}
updateCarousel();
}

function next() {
if (currentIndex < images.length - 1) {
currentIndex = currentIndex + 1;
} else {
currentIndex = 0; // pour revenir à la première image
}
updateCarousel();
}

// Initialiser le carrousel avec la première image
updateCarousel();

console.log(image);