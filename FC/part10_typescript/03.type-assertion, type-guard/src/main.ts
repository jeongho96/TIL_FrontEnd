
// type assertion
const bodyElement = document.querySelector('body') as HTMLBodyElement;
// bodyElement.innerText = "Hello"; // ts는 바디태그가 없다고 생각할 수 있음.
// 위처럼 명시해주거나 변수에 대해서 !를 적으면 not null 타입 선언이 됨.

bodyElement!.innerText = "Hello";


// 있을 때만 넣어주는 방식(type guard)
if(bodyElement){
    bodyElement.innerText = "Hi";
}


// 다만 조심해서 사용해야 함. 아래는 잘못 사용된 예시
function func(arg: string | null){
    // return (arg as string).toLowerCase();
    if(arg){
        arg.toLowerCase();
    }
}

func('hello');
// 무조건 문자열이 들어온다고 타입 단언을 해줬지만, null이 오면 에러가 발생함.
func(null); 