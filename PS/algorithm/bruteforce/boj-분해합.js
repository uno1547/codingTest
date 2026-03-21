// 26 / 3 / 21
/*
생성자 M은 당연히 N보단 작다
하지만 M은 아무리 작아도 N - (생성자 M 각자리수합) 보단 크다

*/
const fs = require('fs')
const digit = fs.readFileSync('./memo.txt').toString().trim().split('\n')[0]
const n = Number(digit)
// n 의 가장 작은 생성자를 구한다.
// n 의 생성자 m 은 n - (m의각자리합) ~ n 사이에 존재한다.

// n 216의 시작점 > 216 - 27 
// n 2467의 시작점 > 

const start = n - (digit.length * 9)

let answer = 0

for(let i = Math.max(0, start); i < n; i++) {
  const m = String(i)
  const sepSum = Number(m) + m.split('').map(Number).reduce((acc,val) => acc += val, 0)

  if(sepSum == n) return Number(m)
}