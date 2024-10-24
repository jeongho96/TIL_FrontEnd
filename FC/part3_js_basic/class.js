// 클래스

// 생성자 함수(객체 데이터 생성)
function User(first, last){
    this.first = first;
    this.last = last;
}
// prototype에 할당해주면 한 번만 만들어진 함수를 참조만 하면 
// 메모리 효율성 증대
// prototype에 대해서는 나중에 확인하는게 좋음.
user.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

// 인스턴스 생성
const heropy = new user("Heropy", "Park");
const amy = new user("Amy", "Clarke");
const neo = new user("Neo", "Smith");

// 참고
// 특정 기호만을 이용해서 데이터를 생성하는 걸 리터럴 이라고 함.
// "" => 문자 리터럴
// {} => 객체 리터럴




// this
// 일반(Normal) 함수는 호출 위치에 따라 this를 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의
const heropy2 = {
    name : "Heropy",
    normal: function (){
        console.log(this.name)
    },
    arrow : () => {
        console.log(this.name)
    }
}
heropy.normal() // Heropy
heropy.arrow() // undefined


const amy2 = {
    name : 'amy',
    normal : heropy.normal,
    arrow: heropy.arrow
}
amy2.normal() // amy
amy2.arrow() // undefined

// 화살표함수의 this를 쓰고 싶다면 다음과 같은 경우
const timer2 = {
    name: 'Heropy',
    timeout : function(){
        setTimeout(() => {
            console.log(this.name)
        }, 2000)
    }
}



// ES6 Classes
// 조금씩 형태가 달라졌음. 위에서 선언한 User를 ES6에서 제공하는 
// class 패턴으로 변경하면 다음과 같다.
class User2 {
    // = constructor : function(fisrt,last){}
    // 생성자
    constructor(first, last){
        this.firstName = first;
        this.lastName = last;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


// 상속
class Vehicle {
    constructor(name, wheel){
        this.name = name;
        this.wheel = wheel;
    }
}
// 상속받은 클래스는 상위 클래스의 기능을 받아 사용 가능.
class Bicycle extends Vehicle{
    constructor(name, wheel, license){
        super(name, wheel)
        this.license = license;
    }
}