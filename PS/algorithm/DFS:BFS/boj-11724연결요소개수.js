const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const graph = new Array(N+1).fill(null).map(e=>[])
for(let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number)
  graph[u].push(v)
  graph[v].push(u)
}

for(let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b)
}

console.log(graph);


const visited = new Array(N+1).fill(false)

function dfs(start) {
  visited[start] = true
  console.log(`${start}방문`);
  for(const nextV of graph[start]) {
    if(!visited[nextV]) {
      dfs(nextV)
    }
  }
}
// dfs(1) 일반적인 DFS

let cnt = 0
for (let i = 1; i <= N; i++) {
  if(!visited[i]) {
    cnt++
    dfs(i)
  }
  continue
}

console.log(cnt);