const wishListBtn = document.querySelectorAll('main .wishlist_plus');
wishListBtn.forEach((obj)=>{
    obj.addEventListener('click',()=>{
        const img = obj.querySelector('img');/* 버튼 안의 이미지 */

        if(img.src.includes('favorite-2.png')){
            img.src = './images/favorite-1.png';
        }else{
            img.src = './images/favorite-2.png';
        }
    })
})
console.log(wishListBtn)









/* swiper */
const bnr = new Swiper('.banner_container',{
    slidesPerView:'3.5',
    spaceBetween:20,
    loop:true,
    pagination: {
        el: ".swiper .banner_btn .arrow_wrap .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper .banner_btn .swiper-button-next",
        prevEl: ".swiper .banner_btn .swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper .banner_btn .swiper-scrollbar",
        hide: false,
    },
})

const newProduct = new Swiper('.new_container .new_product_container',{
    slidesPerView:1,
    navigation: {
        prevEl: ".new_container .swiper-button-prev",
        nextEl: ".new_container .swiper-button-next",
    },
})