// 자릿수 더하기
function solution() {

}
const n = 123
const strN = [...String(n)]
const res = strN.reduce((acc, cur) => acc += Number(cur), 0)
console.log(res);
/*
형변환에는 다양한 방법이있다
문자열 > 숫자 
아니면 숫자 > 문자열 등등
*/