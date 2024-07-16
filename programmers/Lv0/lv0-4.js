// 배열 만들기 4
function solution(arr) {
  let stk = []
  let i = 0
  while(i < arr.length) {
    if (stk.length) {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i])
        i++
      } else {
        stk.pop()
      }
    } else {
      stk.push(arr[i])
      i++
    }
  }
  console.log(stk);
  return stk
}
solution([1, 4, 2, 5, 3])