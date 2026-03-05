//랜선 자르기 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let k = input[0].split(' ').map(Number)[0]
let num = input[0].split(' ').map(Number)[1]
let cables = []
for (let i = 1; i <= k; i++) {
  cables.push(Number(input[i]))
}