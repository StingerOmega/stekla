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
  //реакция на клик по кнопке бургера

    const btnBurger = document.querySelector('.btn-burger'),
          menu = document.querySelector('.mainmenu');

    btnBurger.addEventListener('click', () => {
        menu.classList.toggle('active');
        btnBurger.classList.toggle('active');
    });

    //Модальное окно
})

const popupLinks = document.querySelectorAll(".popup-form-link");
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 800;

if(popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll(".close-popup");
if(popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.banner__popup'));
            e.preventDefault();
        });
    }
}
function popupOpen(curentPopup) {
    if(curentPopup && unlock) {
        const popupActive = document.querySelector('.banner__popup.open');
        if(popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if(!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.banner__popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if(unlock) {
        popupActive.classList.remove('open');
        if(doUnlock) {
            bodyUnlock();
        }
    }
}
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('main').offsetWidth + 'px';
    if(lockPaddingValue.length > 0) {
        for(let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
function bodyUnlock() {
    setTimeout(function () {
        for(let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
