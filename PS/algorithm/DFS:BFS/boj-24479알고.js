const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, M, start] = input[0].split(' ').map(Number)
console.log(N, M, start);

const graph = new Array(N + 1).fill(null).map(e => [])

for(let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  console.log(a,b);
  graph[a].push(b)
  graph[b].push(a)
}
for(let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b)
}

console.log(graph);

const visited = new Array(N+1).fill(false)
const order = new Array(N+1).fill(0)
let cnt = 1

function dfs(start) {
  visited[start] = true
  order[start] = cnt++

  for(const nextNode of graph[start]) {
    if(!visited[nextNode]) {
      dfs(nextNode)
    }
  }
}

dfs(start)

let tmp = ''
for(let i = 1; i <= N; i++) {
  tmp += order[i] + "\n"
}
console.log(tmp.trim());
