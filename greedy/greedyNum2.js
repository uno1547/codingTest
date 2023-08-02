//11399 ATM 성공
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
/* 강의에서 짠 코드
  let summary = 0
  for(){
    summart += rumTimes[i]
  }
*/