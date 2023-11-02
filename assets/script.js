const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions de tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et événements</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

const bannerImg = document.querySelector('.banner-img');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

let currentSlideIndex = 0;

leftArrow.addEventListener('click', () => {
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	updateSlide(currentSlideIndex);
});

rightArrow.addEventListener('click', () => {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	updateSlide(currentSlideIndex);
});

function updateSlide(index) {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	const bannerText = document.querySelector('#banner p');
	bannerText.innerHTML = slides[index].tagLine;

	dots.forEach((dot, dotIndex) => {
		if (dotIndex === index) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}


function autoSlide() {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	updateSlide(currentSlideIndex);
}

setInterval(autoSlide, 3000); 