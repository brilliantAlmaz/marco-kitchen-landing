const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header-infoblock');
const html = document.querySelector('html');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   html.classList.toggle('lock');
   body.classList.toggle('lock');
})

headerMenuPadd()
function headerMenuPadd() {
   headerMenu.style.paddingLeft = window.getComputedStyle(document.querySelector('.container'), null).getPropertyValue('padding-left')
   document.querySelector('.pros-box').style.paddingRight = window.getComputedStyle(document.querySelector('.container'), null).getPropertyValue('padding-left')
}

window.addEventListener('resize', headerMenuPadd);