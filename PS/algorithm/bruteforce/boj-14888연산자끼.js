/*
const fs = require('fs')
const input = fs.readFileSync('./memo.txt').toString().trim().split('\n')

const n = Number(input[0])
const nums = input[1].split(' ').map(Number)
const tmp = input[2].split(' ').map(Number)
console.log(tmp);

// const operators = []
// const maps = {0 : "+", 1 : "-", 2 : "*", 3 : "/"}

// for(let i = 0; i < tmp.length; i++) {
//   for(let j = 0; j < tmp[i]; j++) {
//     operators.push(maps[i])
//   }
// }

// console.log(operators);

// 예를 들어 operators [-, -, +, +] 이면 어차피 다 굴려봐야하긴할듯

let minVal = Infinity
let maxVal = -Infinity

function dfs(index, currentResult) {
  if(index == n) {
    maxVal = Math.max(maxVal, currentResult)
    minVal = Math.min(minVal, currentResult)
    return
  }

  for(let i = 0; i < 4; i++) {
    if(tmp[i] > 0) {
      // 연산자가 남아있으면 연산 진행
      tmp[i]--

      let nextResult

      if(i == 0) nextResult = currentResult + nums[index] 
      else if(i == 1) nextResult = currentResult - nums[index] 
      else if(i == 2) nextResult = currentResult * nums[index] 
      else if(i == 3) nextResult = Math.trunc(currentResult / nums[index])

      dfs(index + 1, nextResult)

      tmp[i]++
    }

  }
}

dfs(1, nums[0]) // 첫번째 숫자, 

console.log(maxVal === 0 ? 0 : maxVal);
console.log(minVal === 0 ? 0 : minVal);
*/




const fs = require('fs')
const input = fs.readFileSync('./memo.txt').toString().trim().split('\n')

const n = Number(input[0])
const nums = input[1].split(' ').map(Number)
const tmp = input[2].split(' ').map(Number)

