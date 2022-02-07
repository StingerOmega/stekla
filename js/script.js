document.addEventListener('DOMContentLoaded', () => {
	//Свипер
	swiperPortfolio();	
    //реакция на клик по кнопке бургера
    burger();
    //Модальное окно
    popupForm();
})

function swiperPortfolio(){
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
}

function burger(){
    const btnBurger = document.querySelector('.btn-burger'),
          menu = document.querySelector('.mainmenu');

    btnBurger.addEventListener('click', () => {
        menu.classList.toggle('active');
        btnBurger.classList.toggle('active');
    });
}
function popupForm(){
    const popupLinks = document.querySelectorAll('.popup-link'),
          body = document.querySelector('body'),
          lockPadding = document.querySelectorAll('.lock-padding');

    let unlock = true;

    const timeout = 800;

    if (popupLinks.length>0){
        for(let index = 0; index < popupLinks.length; index++){
            const popupLink = popupLinks[index];
            popupLink.addEventListener('click',(e)=>{
                const popupName = popupLink.getAttribute('href').replace('#',''),
                      curentPopup = document.getElementById(popupName);

                      popupOpen(curentPopup);  
                      e.preventDefault();
            })
        }
    }

    const popupCloseIcon = document.querySelectorAll('.close-popup');

    if (popupCloseIcon.length>0){
        for(let index = 0; index < popupCloseIcon.length; index++){
            const el = popupCloseIcon[index];
            el.addEventListener('click',(e)=>{
                popupClose(el.closest('.popup'));  
                e.preventDefault();
            })
        }
    }
    function popupOpen(curentPopup){
        if (curentPopup && unlock){
            const popupActive = document.querySelector('.popup.open');
            if (popupActive){
                popupClose(popupActive, false);
            }else{
                bodyLock();
            }
            curentPopup.classList.add('open');
            curentPopup.addEventListener('click',(e) => {
                if(!e.target.closest('.popup__content')){
                    popupClose(e.target.closest('.popup'));
                }
            })
        }
    }

    function popupClose(popupActive, doUnlock = true){
        if (unlock){
            popupActive.classList.remove('open');
            if (doUnlock){
                bodyUnlock();
            }
        }
    }
    function bodyLock(){
        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth +'px';
        if (lockPadding>0){
            for(let index = 0; index < lockPadding.length; index++){
            let el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }}        
         body.style.paddingRight = lockPaddingValue;
         body.classList.add('lock');
         unlock = false;
         setTimeout(() => unlock = true, timeout)
    }
     function bodyUnlock(){
        setTimeout(() => {
          if (lockPadding>0){
            for(let index = 0; index < lockPadding.length; index++){
            let el = lockPadding[index];
            el.style.paddingRight = '0px';
        }}  
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
        },timeout);
        unlock = false;
        setTimeout(() => {
            unlock = true;
        },timeout);
     }

     document.addEventListener('keydown',(e) => {
        if (e.which === 27){
            const popupActive = document.querySelector('.popup.open');
            if (popupActive){
                popupClose(popupActive);
            }            
        }
     })
   
}

