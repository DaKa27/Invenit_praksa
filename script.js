function showDiv(event, divNumber) {
    event.preventDefault();
    // Hide all content divs
    var contentDivs = document.querySelectorAll('.link-content');
    contentDivs.forEach(function(div) {
      div.style.display = 'none';
    });

    // Show the selected content div
    var selectedDiv = document.getElementById('div' + divNumber);
    if (selectedDiv) {
      selectedDiv.style.display = 'flex';
    }
  }

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 35,
      }
    },

    loop: true,
    //mousewheel: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    pagination: {
      el: '.swiper-pagination',
    },
    
  });

let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation');

const hamburgerEvent = (navigation, close, open) => {
  navigationItems.style.display = navigation;
  closeHam.style.display = close;
  openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));