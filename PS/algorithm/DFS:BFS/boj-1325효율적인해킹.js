// 1 > 3
// 2 > 3
// 3 > 4
// 3 > 5

// 1 > 3 > 4 > 5 4개
// 2 > 3 > 4 > 5 4개

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)

const graph = Array.from({ length : N + 1 }, () => [])
for(let i = 1; i <= M; i++) {
  // console.log(input[i]);
  const [to, from] = input[i].split(' ').map(Number)
  graph[from].push(to)
}
// console.log(graph);

let maxCnt = 0
const map = new Array(N+1).fill(0)
const visited = new Array(N+1).fill(false)

for(let i = 1; i <= N; i++) {
  // const cnt = dfs(i, i)
  const cnt = bfs(i)
  maxCnt = Math.max(maxCnt, cnt)
  map[i] = cnt
}

const result = map.reduce((acc, val, idx) => {
  if(val == maxCnt) acc.push(idx)
  return acc
}, [])
  .sort((a, b) => a - b)
  .join(' ')

console.log(result);
// console.log(result.sort((a, b) => a - b).join());




function dfs(start, visitIdx) {
  let cnt = 1
  visited[start] = visitIdx

  for(const next of graph[start]) {
    if(visited[next] != visitIdx) {
      cnt += dfs(next, visitIdx)
    }
  }
  return cnt
}

function bfs(start) {
  let cnt = 0
  visited[start] = start
  const queue = [start]

  let head = 0
  while(head < queue.length) {
    const cur = queue[head++]
    cnt++

    for(const next of graph[cur]) {
      if(visited[next] != start) {
        visited[next] = start
        queue.push(next)
      }
    }
  }
  return cnt
}