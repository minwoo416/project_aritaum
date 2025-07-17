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