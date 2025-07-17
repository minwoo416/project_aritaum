const big = document.querySelector('.product_container .big_thum img')
const small = document.querySelectorAll('.product_container .small_thum_wrap img')
const plusBtn = document.querySelector('.product_buy_wrap #plus');
const minusBtn = document.querySelector('.product_buy_wrap #minus');
const userNum = document.querySelector('.product_buy_wrap .count_btn input');//수량
const userAllNum = document.querySelector('.product_buy_wrap .user_all_num .all_count span');//총 구매 수량
const userPrice = document.querySelector('.product_buy_wrap .user_all_num .all_price .price_color');//총 구매 가격
const productBtn = document.querySelectorAll('.product_info_container .product_btn_wrap button');// 버튼
const content = document.querySelectorAll('.change_content > div');
console.log(plusBtn, minusBtn, userNum, userAllNum, userPrice, content, productBtn);
/* -----------------------------------------------------작은 이미지에 마우스 올리면 큰이미지에 올라오기~~~~ */
/* 1.이미지경로를 수정하는 함수 만들기 */
//이미지 경로가 계속 변경되기 때문에 매개변수 num 생성
function bigSrc(num){
    return big.src = `./images/big_tumb0${num}.jpg`
}
/* 2. 작은이미지에 이벤트로 위의 함수 넣기*/
small[0].addEventListener('mouseover',()=>{bigSrc(1)})
small[1].addEventListener('mouseover',()=>{bigSrc(2)})
small[2].addEventListener('mouseover',()=>{bigSrc(3)})

/* -----------------------------------------------------상품 - + 등등~~~~ */
/* +버튼 클릭 시 수량 증가 및 가격 변동 */
//초기 값
let num = 1;
let price = 81000;
let total = 0;
plusBtn.addEventListener('click',()=>{
    num++;
    if(num > 99){window.alert('최대 수량은 99개 입니다.')};    
    if(num > 0 && num <= 99){
        userNum.value = num;
        userAllNum.textContent = num;
        total = num * price;
        userPrice.textContent = total.toLocaleString('ko-kr');
    }
})
/* -버튼 클릭 시 */
minusBtn.addEventListener('click',()=>{
    num--;
    if(num <= 0){
        window.alert('최소 수량은 1개입니다.')
        num = 1;
    };
    if(num >= 1 && num <= 99){
        userNum.value = num;
        userAllNum.textContent = num;
        total = num * price;
        userPrice.textContent = total.toLocaleString('ko-kr');
    }
})
/* -----------------------------------------------------버튼 클릭시 ~~~~ */
/* 모든 내용 숨기기 */
content.forEach((obj)=>{
    obj.style.display = 'none';
})
productBtn.forEach((btn,idx)=>{
    btn.style.borderBottom = '1px solid #d9d9d9';
})
/* 초기 활성화버튼 */
productBtn[0].style.borderBottom = '1px solid #f0427d'
/* 초기 보이는 내용 */
content[0].style.display ='block';
/* 버튼 초기화 함수 생성 */
function btnOff(){
    productBtn.forEach((btn,idx)=>{
        btn.style.borderBottom = '1px solid #d9d9d9';
    })
}
/* 버튼 클릭 시에 내용다 지우고 누른것만 나오게  */
productBtn.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{/* 버튼을 클릭했을때 */
        content.forEach((obj)=>{
            obj.style.display = 'none';/* 내용을 모두 숨기기(이거 안하면 다음 버튼 클릭 시 이전내용이 없어지지않고 같이보임) */
        })
        btnOff();/* 위와 같은 이유로 버튼도 초기화 해주고 */
        content[idx].style.display = 'block';/* 내가 클릭한 해당 idx의 내용을 보이게 하고 */
        productBtn[idx].style.borderBottom = '1px solid #f0427d';/* 클릭한 버튼에 밑줄 주기 */
        
    })
})