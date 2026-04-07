const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const n = Number(input[0])
const matrix = input.slice(1).map(line => line.split(' ').map(Number))
console.log(matrix);

const graph = new Array(n+1).fill(null).map(e=>[])

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    if(matrix[i][j] == 0) continue
    graph[i+1].push(j+1)
  }
}

console.log(graph);


// function dfs(start) { 자기자신으로 돌아오는경우를 따져야함
//   visited[start] = true
//   console.log(`${start} 방문`);

//   for(const adjN of graph[start]) {
//     if(!visited[adjN]) dfs(adjN)
//   }
// }

// dfs(1)

// 각 노드 i에서 출발하여 도달 가능한 모든 노드를 찾는 함수
function dfs(curr, visited) {
  for(const next of graph[curr]) {
    if(!visited[next]) {
      visited[next] = 1
      console.log(`${next}방문`);
      dfs(next, visited)
    }
  }
}
// dfs(1)

const ans = []

for(let i = 1; i <= n; i++) {
  const visited = new Array(n+1).fill(0)
  // console.log(visited);
  console.log(`${i} 출발`);
  dfs(i, visited)
  console.log(`${i} 탐색 결과 ${visited}`);
  ans.push(visited.slice(1).join(' '))
}

console.log(ans.join('\n'));