const sliders = document.querySelectorAll('.slider');
const sliderCounts = [];
const sliderItems = [];

// элементы стрелок
const slidersArrows = document.querySelectorAll('.portfolio .arrowblock');
// элементы текущих индексов картинок
const sliderCurrents = document.querySelectorAll('.portfolio .current');
// элементы количества картинок
const sliderLengths = document.querySelectorAll('.portfolio .length');
// элементы главных картинок
const sliderImages = document.querySelectorAll('.portoflio-image img');



// инициация
sliders.forEach((item, index) => {
   // элементы в каждом слайдере
   sliderItems.push(item.querySelectorAll('.slider-item'));
   // инициация счетчика
   sliderCounts.push(0);
   // установка первой картинки в превью
   replaceImage(sliderItems[index][0], sliderImages[index])

})

// Количество картинок в галерее
sliderLengths.forEach((item, index) => {
   item.innerHTML = sliderItems[index].length;
})


slidersArrows.forEach(function (item, index) {
   // ивент клика  - следующий элемент
   item.querySelector('.next').addEventListener('click', function () {

      if (sliderCounts[index] < +sliderLengths[index].innerHTML - 1) {
         sliderCounts[index]++;
         sliderCurrents[index].innerHTML = sliderCounts[index] + 1;
         sliders[index].style.transform = `translate(-${(sliderItems[index][sliderCounts[index]].clientWidth + 5) * sliderCounts[index]}px)`;
         replaceImage(sliderItems[index][sliderCounts[index]], sliderImages[index])

      }

   })
   // ивент клика  -  предыдущий элемент
   item.querySelector('.prev').addEventListener('click', function () {

      if (sliderCounts[index] > 0) {
         sliderCounts[index]--;
         sliderCurrents[index].innerHTML = sliderCounts[index] + 1;
         sliders[index].style.transform = `translate(-${(sliderItems[index][sliderCounts[index]].clientWidth + 5) * sliderCounts[index]}px)`;
         replaceImage(sliderItems[index][sliderCounts[index]], sliderImages[index])
      }

   })
})

// функция для замены картинки на новую
function replaceImage(elem, main) {
   main.src = elem.querySelector('img').src;
}


const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach((item) => {
   item.style.maxWidth = (item.parentNode.clientWidth - 40) / 2 + 'px';
})

window.addEventListener('resize', () => {
   portfolioItems.forEach((item) => {
      item.style.maxWidth = (item.parentNode.clientWidth - 40) / 2 + 'px';
   })
})