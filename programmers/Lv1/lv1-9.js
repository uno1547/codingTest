//평균 구하기
function solution(arr) {
  const sum = arr.reduce((a, b) => a + b)
  const avg = sum / arr.length
  return avg
}