//약수의 개수와 덧셈
function solution(left, right) {
  const arr = []
  for (let i = left; i <= right; i++) {
      arr.push(i)
  }
  return arr.reduce((acc, cur) => {
      let divisorNum = 0
      for(let i = 1; i <= cur; i++) { //약수의 개수카운트
          if(cur % i == 0) divisorNum++
      }
      return acc += divisorNum % 2 == 0 ? cur : -cur
  },0)
}
//제곱근이 정수면 약수의 개수가 홀수다 
//이거 비슷한거 본적있는디 약수개수 
//약수개수가 홀수이려면 제곱수여야함!!
/*
1 > 1
2 > 1, 2
3 > 1, 3
4 > 1, 2, 4
5 > 1, 5
*/