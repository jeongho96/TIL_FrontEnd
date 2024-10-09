const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

// window를 스크롤할 때마다 기본적으로는 실행됨.(부하 문제)
// lodash의 throttle을 사용해서 300밀리세컨드마다 실행되게 수정.
// _.throttle(함수, 시간)

// GSAP을 사용해서 애니메이션 효과를 자연스럽게 추가.
// gsap.to(요소, 지속시간(초), 옵션);
window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        // 배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
    }
    else{
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300));