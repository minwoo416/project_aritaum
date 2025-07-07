/* swiper */
const bnr = new Swiper('.banner_container',{
    slidesPerView:'3.5',
    spaceBetween:20,
    pagination: {
        el: ".swiper .banner_btn .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper .banner_btn .swiper-button-next",
        prevEl: ".swiper .banner_btn .swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper .banner_btn .swiper-scrollbar",
        hide: true,
    },
})