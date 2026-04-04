const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [v, e, start] = input[0].split(' ').map(Number)

const graph = new Array(v+1).fill(null).map(e => [])

for(let i = 1; i <= e; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  // console.log(a, b);
  graph[a].push(b)
  graph[b].push(a)
}

for(let i = 1; i <= v; i++) {
  graph[i].sort((a, b) => a - b)
}


console.log(graph);

const visited1 = new Array(v+1).fill(false)
let path1 = ''
function DFS(start) {

  visited1[start] = true
  path1 += start + ' '
  // console.log(`${start} 방문!!`);
  for(const next of graph[start]) {
    if(!visited1[next]) {
      DFS(next)
    }
  }
}

DFS(start)
console.log(path1);

const visited2 = new Array(v+1).fill(false)
let path2 = ''

function BFS(start) {
  const queue = []

  path2 += start + ' '
  visited2[start] = true
  queue.push(start)

  while(queue.length != 0) {
    const v = queue.shift()
    // console.log(v);

    for (const nextNode of graph[v]) {
      if(!visited2[nextNode]) {
        queue.push(nextNode)
        visited2[nextNode] = true
        path2 += nextNode + ' '
      }
    }
  }

}

BFS(start)
console.log(path2);