//19939번 박터트리기 실패 이런 생각을어캐함 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number)
let ballNum = input[0] //5
let basketNum = input[1] //3
let summary = 0
for (let i = 1; i < k + 1; i++) {
  summary += i
}
if (summary > n) {
  console.log(-1)
} else {

}