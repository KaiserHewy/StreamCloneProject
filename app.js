// THUMBNAIL SWIPER

var mySwiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 5,
  slidesPerView: 2,
  loop: false,
  freeMode: true,
  loopAdditionalSlides: 5,
  speed: 300,
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      // when window width is >= 640px
      640: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          freeMode: false,
          speed: 600,
      },
      960: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        freeMode: false,
        speed: 600,
    }
  }
  
})

// PLANS SECTION
const titleBox1 = document.getElementById('plans-container-1')
const titleText1 = document.getElementById("plans-title-1")
const titleBox2 = document.getElementById('plans-container-2')
const titleText2 = document.getElementById("plans-title-2")
const titleBox3 = document.getElementById('plans-container-3')
const titleText3 = document.getElementById("plans-title-3")

const titleHighlight1 = () => {
  titleText1.classList.remove('plans-title-mask')
  titleText2.classList.add('plans-title-mask')
  titleText3.classList.add('plans-title-mask')
};

const titleHighlight2 = () => {
  titleText1.classList.add('plans-title-mask')
  titleText2.classList.remove('plans-title-mask')
  titleText3.classList.add('plans-title-mask')
};

const titleHighlight3 = () => {
  titleText1.classList.add('plans-title-mask')
  titleText2.classList.add('plans-title-mask')
  titleText3.classList.remove('plans-title-mask')
};

const titleClear1 = () => {
  titleText1.classList.remove('plans-title-mask')
  titleText2.classList.remove('plans-title-mask')
  titleText3.classList.remove('plans-title-mask')
};

  
// PLANS EVENT LISTENERS
titleBox1.addEventListener("mouseover", titleHighlight1);
titleBox2.addEventListener("mouseover", titleHighlight2);
titleBox3.addEventListener("mouseover", titleHighlight3);
titleBox1.addEventListener("mouseout", titleClear1);
titleBox2.addEventListener("mouseout", titleClear1);
titleBox3.addEventListener("mouseout", titleClear1);



// FAQ DROPDOWN
const faqs = document.querySelectorAll(".FAQ")

faqs.forEach((faq)=>{
  faq.addEventListener("click",()=>{
    if(faq.classList.contains("active")) {
      faq.classList.remove("active")
    }else{
      faq.classList.add("active")
      faqs.forEach((otherFaq)=>{
        if(otherFaq != faq){
          otherFaq.classList.remove("active")
        }
      })
    }
  })
})

