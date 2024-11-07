const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// 대소문자 구분없이 the를 찾아라.
// const regexp = new RegExp('the', 'gi')
const regexp = /the/gi
console.log(str.match(regexp))

// 있는지 여부
console.log(regexp.test(str))

// 대체
console.log(str.replace(regexp, 'AAA'))