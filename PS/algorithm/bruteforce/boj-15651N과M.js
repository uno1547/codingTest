const fs = require('fs');

const [N, M] = fs.readFileSync('./memo.txt').toString().trim().split(' ').map(Number)
const path = []
let result = ''

function dfs(depth) {
  if(depth == M) {
      result += path.join(' ') + '\n'
    return
  }

  for(let i = 1; i <= N; i++) {
    path.push(i)
    dfs(depth + 1)
    path.pop()
  }

}

dfs(0)
console.log(result);