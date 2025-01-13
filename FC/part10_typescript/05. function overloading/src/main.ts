
function add(a: string, b: string) : string;
function add(a: number, b: number) : number;

function add(a: any, b: any) : any{
    return a + b
}

// 기본적인 구조가 같지만 매개변수나 반환 값이 다를 때 하나로 합쳐줄 수 있음.

function saySomething(word: string | string[]): string{
    if(typeof word === "string"){
        return word
    }

    else if(Array.isArray(word)){
        return word.join(" ");
    }

    throw new Error("unable to say something");
}



saySomething(['hello', 'world']);

// 위 함수를 오버로딩을 활용

function saySomething2(word: string) : string;
function saySomething2(word: string[]) : string;

function saySomething2(word: any) : any{
    if(typeof word === "string"){
        return word
    }

    else if(Array.isArray(word)){
        return word.join(" ");
    }

    throw new Error("unable to say something");
}

