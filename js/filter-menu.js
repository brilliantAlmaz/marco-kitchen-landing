const filterBtns = document.querySelectorAll('.portfolio-filter-item .portfolio-filter-btn');
const filterMenu = document.querySelectorAll('.portfolio-filter-menu ');

filterBtns.forEach(function (item, index) {
   item.addEventListener('click', () => {
      filterMenu[index].classList.toggle('active');
      item.classList.toggle('active')
   })
})

window.addEventListener('click', function (e) {
   let a = e.target.parentNode;
   if (!(a.classList.contains('portfolio-filter-menu') || a.classList.contains('portfolio-filter-item') || a.parentNode.classList.contains('portfolio-filter-menu') || a.classList.contains('portfolio-filter-btn') || a.parentNode.parentNode.parentNode.classList.contains('portfolio-filter-item'))) {
      filterBtns.forEach((item) => {
         item.classList.remove('active');
      })
      filterMenu.forEach((item) => {
         item.classList.remove('active');
      })
   }
   console.log(a)
})