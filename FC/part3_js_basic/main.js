import getType from './getType'

console.log(typeof 'Hello world');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log(getType(123));


// 비교 연산자

const a = 1;
const b = 3;

console.log(a === b);

function isEqual(x, y){
    return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(2, '2'));

console.log(a !== b);

// const c = 1 < 2;
// if(c) console.log("참")
// else console.log("거짓")

// 위와 동일
const c = 1 < 2 ? "참" : "거짓";


// 형 변환
// Truthy(참 같은 값)
// true, {}, [] , 1, 2, 'false', -12, '3.14' ....

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0 , -0, NaN

// 화살표 함수
// () => {} vs function () {}
// 화살표 함수는 일반 함수와 달리 축약형으로 줄여 나갈 수 있음.

const double = function(x){
    return x * 2;
}

// const doubleArrow = (x) => {
//     return x * 2;
// }
const doubleArrow = x => x * 2;

// 만약 축약형으로 객체 데이터를 반환하려면 ()로 한번 감싸야한다.
const objectTemp = x => ({
    name : 'Heropy'
});


// 즉시 실행 함수
// IIFE, Immediately-Invoked Function Expression
// 2가지 방법 1 : (함수)() | 2 : (함수 ())
(function (){
    console.log(a * 2)
})()


// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
const a2 = 7

// 변수에 할당하는 형태는 이렇게 함수 호출이 먼저 나오면 오류가 남.
// 함수를 선언하는 형태는 순서에 관계없이 실행될 수 있게 호이스팅 발생.
double2();
// const double2 = function (){
//     console.log(a * 2);
// }
function double2(){
    console.log(a * 2);
}



// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 이후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수 종료
// clearInterval(): 설정된 Interval 함수 종료

setTimeout(function(){
    console.log("Heropy")
}, 3000);



// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// function timeout(){
//     setTimeout(() => {
//         console.log("Heropy")
    
//     }, 3000)
// }

// timeout()
// console.log('Done')
// 위와 같은 순서의 실행을 보장하고 싶을 때 유용하게 사용가능
function timeout(cb){
    setTimeout(() => {
        console.log("Heropy")
    cb()
    },3000)
}

// timeout 함수의 매개변수에 익명 함수를 전달
timeout(() => {
    console.log('Done')
})


