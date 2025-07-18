const wishListBtn = document.querySelectorAll('main .wishlist_plus');
const hiddenDepth = document.querySelectorAll('header .bottom_wrap .depth');
const hiddenDepth2 = document.querySelectorAll('header .right_menu .depth');
const hiddenMsg = document.querySelector('header .bottom_wrap .hidden_inner');
const hiddenMsg2 = document.querySelector('header .right_menu .hidden_inner');
const hiddenMenuBtn = document.querySelector('header .bottom_wrap > a');
const hiddenMenuBtn2 = document.querySelector('header .right_menu .menu');
const hiddenMenu = document.querySelector('header .bottom_wrap .hidden_menu');
const hiddenMenu2 = document.querySelector('header .right_menu .hidden_menu');
const hiddenMenuLi = document.querySelectorAll('header .bottom_wrap .hidden_menu > li');
const hiddenMenuLi2 = document.querySelectorAll('header .right_menu .hidden_menu > li');
const closeBtn = document.querySelector('header .bottom_wrap .hidden_container .hidden_inner button');
const closeBtn2 = document.querySelector('header .right_menu .hidden_inner button')

/* 초기숨기기 */
let status = false;
hiddenMenu.style.display = 'none';
hiddenMsg.style.display = 'none';
hiddenDepth.forEach((obj)=>{
    obj.style.display = 'none';
})
let status2 = false;
hiddenMenu2.style.display = 'none';
hiddenMsg2.style.display = 'none';
hiddenDepth2.forEach((obj)=>{
    obj.style.display = 'none';
})
/* 마우스 올릴때 보이게하기 */
hiddenMenuBtn.addEventListener('click',()=>{
    if(status){
        hiddenMenu.style.display = 'none';
        hiddenMsg.style.display = 'none';
    }else{
        hiddenMenu.style.display = 'flex'
    }
    status = !status;
})
hiddenMenuBtn2.addEventListener('click',()=>{
    if(status2){
        hiddenMenu2.style.display = 'none';
        hiddenMsg2.style.display = 'none';
    }else{
        hiddenMenu2.style.display = 'flex'
    }
    status2 = !status2;
})
function resetMenu(){
    hiddenDepth.forEach((obj)=>{
        obj.style.display = 'none'
    })
}
function resetMenu2(){
    hiddenDepth2.forEach((obj)=>{
        obj.style.display = 'none'
    })
}
hiddenMenuLi.forEach((obj,idx)=>{
    obj.addEventListener('mouseover',()=>{
        hiddenDepth.forEach((depth,index)=>{
            if(idx == index){
                resetMenu();
                depth.style.display = 'flex'
                hiddenMsg.appendChild(depth);
                hiddenMsg.style.display = 'flex';
            }
        })
    })
})
hiddenMenuLi2.forEach((obj,idx)=>{
    obj.addEventListener('mouseover',()=>{
        hiddenDepth2.forEach((depth,index)=>{
            if(idx == index){
                resetMenu2();
                depth.style.display = 'flex'
                hiddenMsg2.appendChild(depth);
                hiddenMsg2.style.display = 'flex';
            }
        })
    })
})
closeBtn.addEventListener('click',()=>{
    hiddenMsg.style.display = 'none';
})
closeBtn2.addEventListener('click',()=>{
    hiddenMsg2.style.display = 'none';
})
/* 모바일에서 태블릿크기이상으로 커질때 자동으로 메뉴 닫기 */
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        hiddenMenu2.style.display = 'none';
        hiddenMsg2.style.display = 'none';
    }
});
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