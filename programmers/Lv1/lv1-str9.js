// 제일 작은 수 제거하기 

function solution1(arr) {
  const min = arr.sort((a, b) => a - b)[0] // 이렇게 되면 원본 arr가 변형됨
  arr.splice(arr.indexOf(min), 1) 
  console.log(arr);
  return arr.length ? arr : arr.push(-1)
}
function solution2(arr) {
  const min = arr.reduce((acc, val) => {
    return Math.min(acc, val)
  })
  arr.splice(arr.indexOf(min), 1)
  if (arr.length == 0) return [-1]
  else return arr
}
console.log(solution2([4,3,2,1]));
console.log(solution2([10]));
// const arr = [2,5,4,7,1]
// const result = arr.reduce((acc, val) => {
//   return Math.min(acc, val)
// })
// console.log(result);