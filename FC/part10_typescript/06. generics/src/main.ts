// function getArrayLength(arr: number[] | string[] | boolean[]): number {
//     return arr.length
// }

function getArrayLength<T>(arr: T[]): number {
    return arr.length
}

const array1 = [1,2,3];
const array2 = ["a", "b", "c"]
const array3 = [true, false, true]


// 타입이 바뀔때마다 union으로 추가해줄 수 있지만, 그럼 매번 추가해야됨.
// 따라서 위처럼 제네릭을 활용해 개발 가능.
getArrayLength<number>(array1);
getArrayLength<string>(array2);
getArrayLength<boolean>(array3);


interface Vehicle<T>{
    name: string;
    color: string;
    option: T;
}

const Car: Vehicle<{price: number}> = {
    name: 'Car',
    color: 'red',
    option: {
        price: 1000
    }
}

const bike: Vehicle<boolean> = {
    name: 'Bike',
    color: 'green',
    option : true
}


// 아래와 같이 Y의 default 값을 지정해줄 수 있음.
const makeArr = <X, Y = string>(x : X, y : Y): [X, Y] => {
    return [x,y];
}

const array4 = makeArr<number,number>(4,5);
const array5 = makeArr<string,string>('a','b');


// 아래와 같이 사용하면 firstName과 lastName을 받고,
// 추가적으로 다른 매개변수를 받을 수 있는 형태가 된다.
const makeFullName = <T extends{firstName: string, lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

makeFullName({firstName: "John", lastName: "Doe", location: 'Seoul'})