let boolean: boolean;
let falseBoolean: boolean = false;


// Number
let number: number;
let integer: number = 6;
let float: number = 1.2345;


// String
let string: string;
let firstName: string = "Doe";

// Array
// 한 가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim'];
let names2: Array<string> = ['John', 'Kim'];

// 여러 타입을 가지는 배열(union 사용)
let array1: (string | number)[] = ['john', 1, 2];
let array2: Array<string | number> = ['john', 1, 2];


// 여러 타입을 가지되 단언할 수 없는 경우 any
let someArray: any[] = ['John' , 1, [] ,{} , false];


//Interface, Type

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B']
let numberArray: ReadonlyArray<number> = [1, 2];

// tuple : 형식 순서대로 정해진 대로 넣어야 함.
let tuple1: [string, number];
tuple1 = ['a', 1];

let users: [number, string][]
users = [[1, 'john'], [2, 'Doe']]

let tuple2: [string , number]
tuple2 = ['a', 1]
tuple2.push(2); // 다만 push를 하면 number나 string를 그 뒤에 넣는건 허용


// any
let any: any = 'abc';
any = 1;
any = [];


// unknown : any와 유사하나 다른 변수에 그 값을 할당할 수는 없음.
let unknown: unknown = false;
// let string1: string = unknown 이러면 에러
let string2: boolean = unknown as boolean; // 하지만 타입 단언을 사용하면 가능.


// object
let obj: object = {};
let arr: object = [];
let nul: object = null; // strint 옵션을 키면 ts에서는 null 할당 불가


const obj1: {id: number, title: string} = {
    id : 1,
    title: 'title1'
}

// Union
let union: (string | number);

// Function
let func1 : (arg1: number, arg2: number) => number;
func1 = function(x, y){
    return x * y;
}

let func2: () => void;
func2 = function() {
    console.log('h1');
}


// Null, Undefined
// tsconfig에서 strintNullCheck나 strint가 꺼져있으면 가능.
let number1: number = undefined;
let string9: string = null;
let ojbect: {a:10, b: false} = undefined;
let array: any[] = null;
let undefined1: undefined = null;
let null1: null = undefined;
let void1: void = null;


// void : 사실 확인해보면 void가 아니라 undefined를 반환함. 그러나 void가 형식이 맞음.
function greeting(): void{
    console.log('h1')
}

// never
function throwError(): never{
    throw new Error('error');
}

function keepProcessing(): never{
    while( true){
        console.log('h1')
    }
}

