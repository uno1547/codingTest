const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const n = Number(input[0])

const graph = Array.from({length : n+1}, () => [])
// const visited = new Array(n+1).fill(false)

for(let i = 1; i < n; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  graph[a].push(b)
  graph[b].push(a)
}

const parents = new Array(n+1).fill(0)
const queue = [1]
parents[1] = 1
/*
인접리스트가 맞나?
부모의 기준이 뭐지 예를 들어 4의 인접은 1, 2, 7이 있는데
*/
let head = 0
while(head < queue.length) {
  const cur = queue[head++]

  for(const next of graph[cur]) {
    if(parents[next] == 0) {
      parents[next] = cur
      queue.push(next)
    }
  }
}

let tmp = ''
for(let i = 2; i < parents.length; i++) {
  tmp += parents[i] + '\n'
}
console.log(tmp.trim());