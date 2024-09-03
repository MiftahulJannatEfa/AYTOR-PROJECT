$(document).ready(function(){
  $('.test_parent_bnnr').slick({

  });
});



let nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
  let test = document.documentElement.scrollTop;
  if (test > 100) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
});
// --------------- Fixd Nav ---------------------//

let search = document.querySelector(".search");
let search_box = document.querySelector(".search_box");
let cross = document.querySelector(".cross");
let input_box = document.querySelector(".input_box");

search.addEventListener('click', () => {
  search_box.classList.add("search_active");

  if (search_box.classList.contains('search_active')) {
    input_box.classList.add("input_active");
  } else {
    input_box.classList.remove("input_active");
  }
});

cross.addEventListener('click', () => {
  input_box.classList.remove("input_active");
  search_box.classList.remove("search_active");
});


// =======================Search End============================== //
// $('.productSlider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// })
$(".productSlicks").slick({
  slidesToShow: 4,
  prevArrow:"#newArivalProduct .arrows .leftArrow",
  nextArrow:"#newArivalProduct .arrows .rightArrow",
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },

      {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },

        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        },
   
    ]
});
// --------------------------- banner move end ------------------------------/