//두 정수 사이의 합
function solution(a, b) {
  let sum = 0
  let [start, end] = [Math.min(a, b), Math.max(a, b)]
  for (let i = start; i <= end; i++) {
    sum += i
  }
  return sum
}
console.log(solution(5, 3));