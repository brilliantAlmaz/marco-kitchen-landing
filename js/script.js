const slider = document.querySelector('.slider');
const sliderItems = slider.querySelectorAll('.slider-item');
const sliderBtnPrev = document.querySelector('.slider__prev');
const sliderBtnNext = document.querySelector('.slider__next');
const sliderLine = document.querySelector('.slider-line');


function init() {
	slider.style.width = sliderItems.length * sliderLine.clientWidth + 'px';
	sliderItems.forEach(function (item) {
		item.style.minWidth = sliderLine.clientWidth + 'px';
	})
}

init();

//btns click events
let count = 0;

sliderBtnPrev.addEventListener('click', function () {
	if (count > 0) {
		count--;
	}
	else {
		count = sliderItems.length - 1;
	}
	slider.style.transform = `translate(-${sliderItems[0].clientWidth * count}px)`
})

sliderBtnNext.addEventListener('click', function () {
	if (count < sliderItems.length - 1) {
		count++;
	}
	else {
		count = 0;
	}
	slider.style.transform = `translate(-${sliderItems[0].clientWidth * count}px)`
})