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
    loop: true,
    //mousewheel: true,
    spaceBetween: 0,
    effect: 'fade',
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    pagination: {
      el: '.swiper-pagination',
    },

  });