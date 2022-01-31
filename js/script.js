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