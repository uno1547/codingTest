const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, S] = input[0].split(' ').map(Number)
const numbers = input[1].split(' ').map(Number)
console.log(N, S, numbers);

/*
path배열? result배열


*/
let count = 0
function dfs(idx, currentSum) {
  if(idx == N) {
    if(currentSum == S) {
      count++
    }
    return
  }

  dfs(idx + 1, currentSum + numbers[idx])
  dfs(idx + 1, currentSum)
}

dfs(0, 0)

if(S == 0) {
  count--
}
console.log(count);