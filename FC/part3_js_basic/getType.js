// 데이터 타입 반환 함수
export default function getType(data){
    // object 자료형 을 받는데, slice로 자료형만 반환
    return Object.prototype.toString.call(data).slice(8 , -1);
}