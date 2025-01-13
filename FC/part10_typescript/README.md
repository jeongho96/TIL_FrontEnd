# 10. typescript essentials

## 목차

[1.1 타입스크립트란?](#11-타입스크립트란)

[1.2 Typescript Type](#12-typescript-type)

[1.3 추가 제공 타입](#13-typescript-추가-제공-타입)

[1.4 타입 지정 방식](#14-type-annotation-type-inference)

[1.5 ts 설정](#15-ts-개발-환경-구성-및-tsconfigjson)


---

JavaScript를 Node.js까지 확장되서 서버 단위까지 사용하게 되면서 점차 범위가 넓어지고 코드가 복잡해짐에 따라 유지보수나 재사용성에 어려움이 생겼다. 이를 해결하기 위해 등장함.

## 1.1 타입스크립트란?
- 자바스크립트에 타입을 부여한 언어
- 타입스크립트는 자바스크립트를 포함하고 확장된 언어.
- js와 달리 브라우저에서 실행하려면 파일을 한번 js로 변환해주는 과정이 필요함.(컴파일)

> typesystem
>> 개발 환경에서 에러를 잡는 걸 도와주고, type annotations를 사용해 코드를 분석할 수 있다.
>> 오직 개발 환경에서만 활성화된다.


**typescript 사용 이유**
- js 코드를 단순화해 더 쉽게 읽고 디버그할 수 있도록 도와줌.
- 오픈소스임.
- 코드 유형 검사를 통해 js를 작성할 때 개발자가 일반적으로 겪는 버그를 피하는데 도움이 된다.

## 1.2 Typescript Type
- Typescript는 js가 가지고 있는 기본 제공 데이터 유형을 상속한다.
- string, number, boolean, null, undefined, symbol 등의 `Primitive types`
- 그리고 function, array, classes, object와 같은 `Object types`로 나뉜다.

## 1.3 Typescript 추가 제공 타입
위에서 설명한 Primitive와 Object 이외에 typescript가 추가적으로 제공하는 타입은 다음과 같다.

1. `Tuple`
2. `Enum` : 다른 프로그래밍 언어처럼 열거형을 의미.
    ```js
    enum PrintMedia {
        Newspaper = 1,
        Newsletter = 50,
        Magazine = 55,
        Book // 55에서 1 더하기기
    }
    ```
3. `Any` : 잘 알지 못하는 타입을 표현할 때 사용하며, 타입 검사를 하지 않고 컴파일 타임에 통과시킴. 최대한 쓰지 않는게 좋음.
    ```js
    let arr: any[] = ["John", 212, true];
    ```
4. `Void` : 자바에서 사용하는 것처럼 함수의 반환값이 없을 때 주로 사용(소문자로 작성 void)
5. `Never` : 어떠한 일이 절대로 발생하지 않을 때 never를 작성. 주로 함수의 반환값을 never를 사용하면, 리턴하거나 리턴 값을 절대로 내보내지 않음.
    ```js
    function throwError(errorMsg: string) never{
        throw new Error(errorMsg);
    }
    ```
6. `Union` : 2가지 이상의 데이터 유형을 사용 가능하도록 정의하는 유형.
    ```js
    let code: (string | number); -> 문자열이거나 숫자 유형만 정의 가능.
    ```

## 1.4 type annotation, type inference
타입스크립트에서 변수를 어떻게 정의하는지 구체적으로 알아보자.<br>
타입스크립트에서는 어떤 변수를 정의할 때 타입을 정하는 방식은 크게 2가지가 있다.
- `type annotation` : 개발자가 작성해서 알려주는 방식.
    - const rate: number = 5
- `type inference` : 타입스크립트가 타입을 추론하는 것.
    - const rate = 5;

**타입 annotation을 꼭 해줘야 하는 경우**
- any 타입을 반환하는 경우는 꼭 작성해야 한다.
    - JSON.parse(json)과 같은 경우 반드시 지정해야 한다.
- 변수 선언을 먼저하고 나중에 초기화 시에는 지정해줘야 한다.
- 여러 타입이 지정되어야 할 떄에는 여러 타입을 지정해주자.


## 1.5 ts 개발 환경 구성 및 tsconfig.json
앞에서 설명했듯 ts는 js와 달리 html에서 바로 인식할 수 없다. 컴파일 과정을 거쳐야지만 html에서 이해 가능한 js 파일로 변환되기 때문이다. 각각의 명령어들은 다음과 같다.

```bash
# 실행을 위한 타입스크립트 전역 설치
npm install -g typescript

# main.ts 라는 파일을 main.js로 변환
tsc main.ts

# tsconfig.json을 적용해서 자동 적용
tsc -w
```

```json
{
    // 컴파일 시 옵션션
    "comfileOptions" : {
        // 컴파일 되는 곳
        "rootDir" : "./src",
        // 빌드한 결과물이 나오는 곳
        "outDir" : "./build/js",
        // js 적용 버전
        "target" : "ES6",
        // 에러가 있을 때는 적용하지 않음.
        "noEmitOnError" : true,
        // 컴파일 이후에 사용될 JS 버전(ES6 이후가 ESNext)
        "module" : "ESNext",
        //
        "moduleResolution" : "Node",
        // esModule과 CommonJS를 혼용 사용 가능
        "esModuleInterop": true,
        // 컴파일 과정에서 사용하는 lib 지정
        "lib" : ["ESNext", "DOM"],
        // ts의 파일의 타입을 엄격히 사용할 것인지 여부
        "strict" : true,
        
    },
    // 컴파일 적용 폴더 명시(이외는 적용되지 않음)
    "include": [
        "./src/**/*.ts"
    ],

    "exclude" : [ // 컴파일 시 제외
        "node_modules",
    ]
}

```

## 1.6 타입 단언(type assetion) 과 타입 Guard
- 타입 단언은 말그대로 컴퓨터에게 타입을 내가 설정하고 그에 대해 유추하지 않도록 하는 것을 의미한다.

예시

```ts
// 에러
var foo = {};
foo.bar = 123;
foo.bas = 'hello

// 타입 단언 사용
interface Foo{
    bar: number;
    bas: string;
}

var foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello'

```

## 1.7 type alias vs interface
타입 별칭과 인터페이스는 타입의 이름을 지정하는 방법으로 방법이 매우 유사하며 자유롭게 선택 가능하다.

```ts

interface People{
    name: string
    age: number
}

const me: People = {
    name: 'john',
    age: 50
}

type People = {
    name: string
    age: number
}

```

- 차이점은 확장 방식에 있다.
- interface는 뒤에 extends를 붙여 확장하고,
- type 확장은 뒤에 &(intersection)을 붙여서 확장한다.
- 또한 같은 이름으로 2번 선언하게 되면, interface의 경우 속성이 다르다면 병합되서 생성 가능.
- type의 경우에는 선언 병합이 불가능하다.

```ts
interface Animal{
    name: string;
}

interface Bear extends Animal{
    honey: boolean
}

// type
type Animal = {
    name: string;
}

type Bear = Animal & {
    honey: boolean
}

const bear1: Bear = {
    name: 'honey bear',
    honey: true
}


```


- 공통점은 둘다 implement를 사용가능하며, union 유형을 사용해 새로운 type 혹은 인터페이스를 만들 수 있다.

```ts
interface Animal{
    name: string
}

interface Bear{
    honey: true
}

type NewType = Animal | Bear;

const bear1: NewType = {
    name: 'honey bear',
    honey: true
}

```

## 1.8 호출 시그니처, 인덱스 시그니처

호출 시그니처는 말 그대로 함수의 호출 형태를 미리 선언하는 형태를 의미한다.
- 형태는 다음과 같다. interface 내부에 `(매개변수 : 타입) : 반환타입`을 적는다.

```ts
interface getLikeNumber{
    (like: number): number;
}


interface Post{
    id: number;
    title: string;
    getLikeNumber: getLikeNumber
}


const post1: Post = {
    id: 1,
    title: 'post1',
    getLikeNumber(like:number){
        return like
    }
}

// 호출 시그니처가 없어서 에러 발생
// 맨 위에 호출 시그니처를 만들어줘야 함.
post1.getLikeNumber(1);

```

인덱스 시그니처는 배열과 객체를 위한 인덱스 시그니처 2개가 있다.

- 객체의 경우 변수명(key 부분) 부분과 그에 대한 속성을 정의해주는 파트
- 배열의 경우 인덱스와 들어갈 변수의 타입을 지정해주는 방식을 선언한다.
```ts
// 인덱스 시그니처

interface Post2{
    [key: string] : unknown;
    id: number;
    title: string;
}

const post2 = {
    id: 1,
    title: 'post 2',
}

// 위에서 정의한 속성 이외에 추가해야할 속성이 더 있다면
// 위처럼 key와 value에 대해서 시그니처를 정의하면 에러가 나지 않는다.
post2['description'] = 'description2'


// 배열 인덱스 시그니처
interface Names{
    [item: number]: string;
}

const userNames: Names = ['John', 'kim', 'Joe']

// 인덱스가 item 부분에 해당.
userNames[0] === 'John'

```




## 1.9 함수 오버로딩
매개변수의 타입이 다르거나 할 때, 오버로딩을 사용해서 다른 함수 여러 개를 한 번에 합쳐줄 수 있다.
- 유니온을 활용해서 필요한 경우를 선언해줄 수 있지만, 가짓수가 늘어나면 매번 추가해줘야해서 귀찮은 점이 있다.
- 따라서 오버로딩을 활용하는걸 권장한다.

```ts
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



```

## 1.10 접근제어자
ts에서는 class에서 변수 생성시 그 변수에 대해서 안에서 미리 선언을 해줘야 함.
접근 제어자는 크게 public, protected, private 존재.

```ts
class Post{
    constructor(
        private id: number = 9,
        protected title: string = ''
    ){

    }

    getPost() {
        return `postId ${this.id}, postTitle: ${this.title}`;
    }
}

const post: Post = new Post(1, "title 1");

```