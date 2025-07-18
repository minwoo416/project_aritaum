const userId = document.querySelector('.login_container .id');
const userPw = document.querySelector('.login_container .pw');
const errorMsg = document.querySelector('.login_container .error');
const loginBtn = document.querySelector('.login_container .login_btn');
const autoLogin = document.querySelector('.login_container .login_content p img');
autoLogin.addEventListener('click',()=>{
    if(autoLogin.src.includes('login_off.png')){
        autoLogin.src = './images/login_on.png'
    }else{
        autoLogin.src = './images/login_off.png'
    }
})
const userserDB= [{
    id:'aaa',
    pw:'aaa',
},{
    id:'bbb',
    pw:'bbb',
}]

loginBtn.addEventListener('click',()=>{

    if(userId.value == '' && userPw.value ==''){
            //둘 다 입력안할시
        errorMsg.textContent = '아이디와 비밀번호를 입력해주세요'
    }else if(userId.value == ''){
        /* 아이디를 입력 안할시 */
        errorMsg.textContent = '아이디를 입력해주세요.'
    }else if(userPw.value == ''){
        /* 비밀번호만 입력 안할시 */
        errorMsg.textContent = '비밀번호를 입력해주세요.'
    }else if(userId.value == userserDB[0].id && userPw.value == userserDB[0].pw){
        /* 유저아이디와 동일할 때 */
        window.location.href= './index.html'
    }else{
        /* 위의 조건들이 모두 아닐 때 */
        errorMsg.textContent = '아이디 혹은 비밀번호가 일치하지않습니다.'
    }
})


console.log(userId, userPw, errorMsg, loginBtn);

//--------------------------------------헤더 반응형-------------------
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