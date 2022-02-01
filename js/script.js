document.addEventListener('DOMContentLoaded', () => {
	//Свипер
		const swiper = new Swiper('.portfolioSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        breakpoints: {
        	576: {
        		slidesPerView: 2,
        	},
        	992: {
        		slidesPerView: 3,
        	},
            1170: {
                slidesPerView: 4,
            },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

})

//реакция на клик по кнопке бургера

const btn = document.querySelector('.btn-burger');
const menu = document.querySelector('.mainmenu');

btn.onclick = () => {
    menu.classList.toggle('mainmenu-active');
    btn.classList.toggle('active');
}