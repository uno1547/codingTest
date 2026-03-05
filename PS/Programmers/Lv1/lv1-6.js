// 정수 내림차순으로 배치하기
const n = 118372
const strArr = [...String(n)].map(Number)
console.log(strArr);
const sortedArr = strArr.sort((a, b) => b - a)
console.log(sortedArr);