const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const n = Number(input[0])
const numbers = input[1].split(' ').map(Number)

console.log(n, numbers);

// 모든 순열 생성하고, 생성할때마다 차이 계산
let maxSum = 0
const visited = new Array(n).fill(false)
const path = []

function dfs(depth) {

  if(depth == n) {
    let sum = 0
    for (let i = 0; i <= n - 2; i++) {
      sum += Math.abs(path[i] - path[i+1])
    }
    maxSum = Math.max(sum, maxSum)
    return
  }

  for(let i = 0; i < n; i++) {
    if(!visited[i]) {
      visited[i] = true
      path.push(numbers[i])
      dfs(depth + 1)
      // dfs(depth + 1)
      visited[i] = false
      path.pop()
    }
  }
}

dfs(0, 0)
console.log(maxSum);


function dfs2(depth, currentSum, lastValue) {
  if(depth == n) {
    maxSum = Math.max(maxSum, currentSum)
    return
  }

  for (let i = 0; i < n; i++) {
    if(!visited[i]) {
      visited[i] = true

      const nextValue = numbers[i]
      let nextSum = currentSum

      if(depth > 0) {
        nextSum += Math.abs(lastValue - nextValue)
      }

      dfs(depth + 1, nextSum, nextValue)

      visited[i] = false
    }
  }
}


// 인자로 넘겨서 효율적으로 계산하기
