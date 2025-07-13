const plusBtn = document.querySelector('.product_buy_wrap #plus');
const minusBtn = document.querySelector('.product_buy_wrap #minus');
const userNum = document.querySelector('.product_buy_wrap .count_btn input');//수량
const userAllNum = document.querySelector('.product_buy_wrap .user_all_num .all_count span');//총 구매 수량
const userPrice = document.querySelector('.product_buy_wrap .user_all_num .all_price .price_color');//총 구매 가격
console.log(plusBtn, minusBtn, userNum, userAllNum, userPrice);
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