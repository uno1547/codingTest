//18870번 문제 좌표압축 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
let length = Number(input[0])
let numbs = input[1].split(' ').map(Number)
// console.log(numbs)
let newNums = []
for(i = 0; i < length; i++) {
  if(!newNums.includes(numbs[i])) {
    newNums.push(numbs[i])
  }
}
// console.log(newNums)
newNums.sort(function(a, b) {
  return a - b
})
// console.log(newNums)
for(i = 0; i < length; i++) {
  numbs[i] = newNums.indexOf(numbs[i])
}
// console.log(numbs)
let result = ""
for(i = 0; i < length; i++) {
  result += `${numbs[i]} `
}
console.log(result)
//시간초과 for문안의 includes의 코드가 N^2의 시간복잡도를 가지기에 N이 100만까지의 범위일경우 시간초과 발생 > ㄹ