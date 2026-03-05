// 백준 4803번 트리
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n')
// console.log(input);

function isCycle(x, prev) {
  // console.log(`현재${x} 직전${prev}`);
  visited[x] = true;
  // console.log(`${x}방문처리 인접탐색시작`);
  for(let y of graph[x]) {
    // console.log(`${x}의 인접 ${y}`);
    if(!visited[y]) { // 다음노드가 미방문 노드
      // console.log(`${x}의 인접 ${y}은 미방문 다시`);
      if (isCycle(y, x)) {
        // console.log(`${x}의 인접 미방문${y} 기준 사이클!!`);
        return true
      }
    } else if(y != prev) {
      // console.log(`${x}의 인접 방문${y}가 직전노드가 아님 사이클!!`);
      return true
    }
  }
  return false
}

let graph
let visited

let l = 0
let caseNum = 1
while(true) {
  const [n, m] = input[l].split(' ').map(Number)
  // console.log(`case 정점 : ${n}개 간선 : ${m}개`);
  if(n == 0 && m == 0) break

  graph = new Array(n + 1).fill(0).map(() => [])
  visited = new Array(n + 1).fill(false)
  visited[0] = true

  // console.log(graph);
  // console.log(visited);

  for(let i = 0; i < m; i++) {
    const [a, b] = input[l + 1 + i].split(' ').map(Number)
    graph[a].push(b)
    graph[b].push(a)
  }
  // console.log(graph);

  let cnt = 0
  while(visited.includes(false)) {
    const start = visited.indexOf(false)
    const result = isCycle(start, null)
    if(!result) cnt++
  }
  // console.log(cnt);
  l += m + 1
  if(cnt > 1) {
    console.log(`Case ${caseNum}: A forest of ${cnt} trees`);
  } else if(cnt == 1) {
    console.log(`Case ${caseNum}: There is one tree`);
  } else {
    console.log(`Case ${caseNum}: No trees`);
  }
  caseNum++
}

/*
const graph = [
  [], //0
  [2, 3], //1
  [1, 3], //2
  [1, 2], //3
  [5, 6], //4
  [4], //5 
  [4] //6
]
const visited = [
  true, false, false, false, false, false, false
]
function isCycle(x, prev) {
  // console.log(`현재${x} 직전${prev}`);
  visited[x] = true;
  console.log(`${x}방문처리 인접탐색시작`);
  for(let y of graph[x]) {
    // console.log(`${x}의 인접 ${y}`);
    if(!visited[y]) { // 다음노드가 미방문 노드
      // console.log(`${x}의 인접 ${y}은 미방문 다시`);
      if (isCycle(y, x)) {
        // console.log(`${x}의 인접 미방문${y} 기준 사이클!!`);
        return true
      }
    } else if(y != prev) {
      // console.log(`${x}의 인접 방문${y}가 직전노드가 아님 사이클!!`);
      return true
    }
  }
  return false
}

// const result = isCycle(1, null)
// console.log(result);

// 사이클인지 확인할수있으니깐 1번부터 사이클 돌리고, visited의 모든 정점들이 true가 될때까지 사이클을 돌리면서 개수 체크하면 될듯함

// let start = 1
let cnt = 0
while(visited.includes(false)) {
  const start = visited.indexOf(false)
  const result = isCycle(start, null)
  if(!result) cnt++
}
console.log(cnt);



/*
const result = visited.filter((el, idx) => {
  if(el == true) {
    console.log(idx);
    return true
  }
  return false
})

const result1 = visited.filter((el, idx) => {
  el ? console.log(idx) : 0
  return el
})
// console.log(result);
console.log(result1);
  */