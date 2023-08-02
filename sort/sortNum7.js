//1181번 *** compare function(a, b) 매개변수로 들어가는 a, b의 순서는 상관이 없다 그냥
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
let caseNum = Number(input[0])
console.log(caseNum)
let words = []
for(i = 1; i <= caseNum; i++) {
  if(!words.includes(input[i])) {words.push(input[i])}
} //중복 제거하는 다른 방법이있나 ?
words.sort(function(a, b) {
  if(a.length != b.length) {
    return a.length - b.length
  }
  else {
    if(a < b) {return -1}
    else if(a > b) {return 1}
  }
})
let result = ""
for(word of words) {
  result += `${word}\n`
}
console.log(result)