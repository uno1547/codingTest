const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [n, ...payments] = input
console.log(n);
console.log(payments);
const map = payments.map(str => str.split(' ').map(Number))
console.log(map);
// console.log(input);
/*
특정날짜 상담 잡으면 
1일 2일 3일 
 3

*/

let maxSum = 0

function dfs(day, currentSum) {
  // 기저조건 더이상 상담 진행못할경우 최대 요금 갱신
  if(day == n) {
    maxSum = Math.max(currentSum, maxSum)
    return
  }

  // 조건에따라 탐색
  // 현재 day상담 잡는경우
  if(day + map[day][0] <= n) {
    dfs(day + map[day][0], currentSum + map[day][1])
  }
  // 현재 idx상담 건너띄는경우
  dfs(day + 1, currentSum)
}

dfs(0, 0)
console.log(maxSum);