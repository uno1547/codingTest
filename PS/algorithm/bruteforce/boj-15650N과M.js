const fs = require('fs');

const [N, M] = fs.readFileSync('./memo.txt').toString().trim().split(' ').map(Number)
console.log(N, M);

// const map = {}
const path = []
let result = ''

function dfs(depth, start) {

  
  if(depth == M) {
      result += path.join(' ') + '\n'
    return
  }

  for(let i = start; i <= N; i++) {
    path.push(i)
    dfs(depth + 1, i + 1)
    path.pop()
  }

}

dfs(0, 1)
console.log(result);