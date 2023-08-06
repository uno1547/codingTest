//11399 ATM 성공
/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
console.log(input)
let n = Number(input[0])
console.log(n)
let runTimes = input[1].split(' ').map(Number)
console.log(runTimes)
runTimes.sort(function(a, b) {
  return a - b
})
console.log(runTimes)
let minTime = 0
for (i = 0; i < n; i++) {
  minTime += (n-i) * runTimes[i]
}
console.log(minTime)
*/
/* 강의에서 짠 코드
  let summary = 0
  for(){
    summart += rumTimes[i]
  }
*/

//두번째 성공
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let num = Number(input[0])
let times = input[1].split(' ').map(Number)
console.log(times)
times.sort(function(a, b) {
  return a - b
})
console.log(times)
let sum = 0
for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    sum += times[j]
  }
}
console.log(sum)