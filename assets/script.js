const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById('#banner');
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const imageElement = document.querySelector('#banner > img');
const nomElement = document.querySelector('#banner > p');

const nbr = slides.length;

let currentSlide = 0;


/* declaration de la function sans execution*/
function dots() {
	const dots = document.querySelector('.dots');
	for (let currentSlide = 0; currentSlide < nbr; currentSlide++) {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		dots.appendChild(dot);
		if (currentSlide == 0) {
			dots.children[currentSlide].classList.add('dot_selected');
		}
	}
}
/* execution */
dots();

function selected() {
	const dot = document.getElementsByClassName('dot');
	for (let currentSlide = 0; currentSlide < dot.length; currentSlide++) {
		dot[currentSlide].classList.remove('dot_selected');
	}
	dot[currentSlide].classList.add('dot_selected');
}

function showSlide() {
	imageElement.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	nomElement.innerHTML = slides[currentSlide].tagLine;
	selected();
}

left.addEventListener("click", function () {
	currentSlide === 0 ? currentSlide = nbr - 1 : currentSlide--
	showSlide();
});

right.addEventListener("click", function () {
	/*condition du if*/currentSlide == nbr - 1 ?/*effet du if*/ currentSlide = 0 :/*else*/ currentSlide++
	showSlide();

});










