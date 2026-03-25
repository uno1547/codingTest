// 백트래킹 스타일

const fs = require('fs')
// const [N, M] = fs.readFileSync(0).toString().trim().split(' ').map(Number)
const [N, M] = fs.readFileSync('./memo.txt').toString().trim().split(' ').map(Number)

const visited = new Array(N + 1).fill(false)
const path = []
let output = ''

function dfs(depth) {
  if(depth == M) {
    output += path.join(' ') + '\n'
    return
  }

  for(let i = 1; i <= N; i++) {
    if(!visited[i]) {
      visited[i] = true
      path.push(i)
      // console.log(path);
      dfs(depth + 1)
      path.pop()
      visited[i] = false
    }
  }
}

dfs(0)
console.log(output);