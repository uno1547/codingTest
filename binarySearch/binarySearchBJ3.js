//1654번 랜선자르기 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let k = Number(input[0].split(' ')[0])
let n = Number(input[0].split(' ')[1])
console.log(k, n)
let cables = []
for(let i = 1; i <= k; i++) {
  cables.push(Number(input[i]))
}
console.log(cables)
cables.sort((a, b) => a - b)
let start = 1
let end = cables[k-1]
let cnt = 0
while (start < end) {
  let mid = parseInt((start + end) / 2)
  for (cable of cables) {
    cnt += parseInt(cable / mid)
  }
  console.log(cnt)
  if (cnt == n) {
    return mid
  } else if (cnt > n) { //필요개수n보다 과함 > 랜선길이를 늘림
    start = mid + 1
  } else { //필요개수 n보다 부족함 > 랜선길이를 줄임
    end = mid - 1
  }
}
