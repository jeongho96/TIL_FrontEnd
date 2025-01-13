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

