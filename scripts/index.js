const wishListBtn = document.querySelectorAll('main .wishlist_plus');
/* swiper */
const bnr = new Swiper('.banner_container',{
    slidesPerView:3.5,
    spaceBetween:20,
    loop:true,
    autoplay:{delay:2000},
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


    breakpoints: {
        1440: {
        slidesPerView:3.5,
        spaceBetween: 20
        },
        780: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }

})
/* 뉴 스와이퍼 */
const newProduct = new Swiper('.new_container .new_product_container',{
    slidesPerView:1,
    navigation: {
        prevEl: ".new_container .swiper-button-prev",
        nextEl: ".new_container .swiper-button-next",
    },
})
/* 카테고리스와이퍼 */
const cateProduct = new Swiper('.category_container .cate_product_container',{
    slidesPerView:1,
    navigation: {
        prevEl: ".category_container .swiper-button-prev",
        nextEl: ".category_container .swiper-button-next",
    },
})

/* 뉴 카테고리 js */
const newCategory = document.querySelectorAll('main .new_container .category li')
/* li를 가져오고 li의 인덱스가 현재 인덱스랑 같으면 active 클래스를 붙여준다. */
function updateNewCategory(index){
    newCategory.forEach((obj, idx)=>{
        obj.classList.toggle('active1',idx === index);
    })
}
newProduct.on('slideChange',()=>{
    updateNewCategory(newProduct.activeIndex);
})
newCategory.forEach((li, i) => {
    li.addEventListener('click', () => {
        newProduct.slideTo(i);
        updateBestCategory(i);
    });
});
updateNewCategory(newProduct.activeIndex);
console.log(newCategory)

/* 카테고리 카테고리 js */
const cateCategory = document.querySelectorAll('main .category_container .category li')
/* li를 가져오고 li의 인덱스가 현재 인덱스랑 같으면 active 클래스를 붙여준다. */
function updateCateCategory(index){
    cateCategory.forEach((obj, idx)=>{
        obj.classList.toggle('active2',idx === index);
    })
}
cateProduct.on('slideChange',()=>{
    updateCateCategory(cateProduct.activeIndex);
})
cateCategory.forEach((li, i) => {
    li.addEventListener('click', () => {
        cateProduct.slideTo(i);
        updateCateCategory(i);
    });
});
updateCateCategory(cateProduct.activeIndex);
console.log(cateCategory)

/* 위시리스트 */
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