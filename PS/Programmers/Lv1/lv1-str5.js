// 정수 내림차순으로 배치하기
function solution(n) {
  const strArr = [...String(n)].map(Number)
  return strArr.sort((a, b) => b - a).join('')
}
console.log(solution(118372));