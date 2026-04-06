// 26 / 4 / 6
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const [N, M, R] = input[0].split(' ').map(Number)

const graph = new Array(N+1).fill(null).map(e => [])
const visited = new Array(N+1).fill(false)

for(let i = 1; i <= M; i++) {
  console.log(input[i]);
  const [a, b] = input[i].split(' ').map(Number)
  graph[a].push(b)
  graph[b].push(a)
}

for(let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b)
}

console.log(graph);
console.log(visited);

let cnt = 1
const map = new Array(N+1).fill(0)

function BFS(start) {
  visited[start] = true
  const queue = [start]
  map[start] = cnt++

  while(queue.length != 0) {
    const v = queue.shift()

    for(const nextV of graph[v]) {
      if(!visited[nextV]) {
        visited[nextV] = true
        queue.push(nextV)
        map[nextV] = cnt++
      }
    }
  }
}

BFS(R)

let tmp = ''
for(let i = 1; i <= N; i++) {
  tmp += map[i] + '\n'
}

console.log(tmp.trim());