const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const N = Number(input[0])
const E = Number(input[1])

const edges = input.slice(2)
const graph = new Array(N+1).fill(null).map(() => [])
const visited = new Array(N+1).fill(false)

for(let i = 0; i < E; i++) {
  const [a, b] = edges[i].split(' ').map(Number)
  graph[a].push(b)
  graph[b].push(a)
}

console.log(graph);

let cnt = 0
function dfs(start) {
  visited[start] = true
  cnt++
  for(const next of graph[start]) {
    if(!visited[next]) {
      dfs(next)
    }
  }
}
// dfs(1)
// console.log(cnt-1);


function bfs(start) {
  const queue = [start]
  visited[start] = true

  let head = 0
  while(head < queue.length) {
    const cur = queue[head++]
    cnt++ // 이 카운팅 혹은 갱신 처리는 뺄때 하는게 맞는지 for문 들어갈때 하는게 맞는지

    for(const next of graph[cur]) {
      if(!visited[next]) {
        queue.push(next)
        visited[next] = true
      }
    }
  }
}
bfs(1)
console.log(cnt - 1);