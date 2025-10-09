// 단지번호붙이기

//////////////////////////////// DFS 재귀 ///////////////////////
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const N = Number(input[0])
const matrix = input.slice(1).map(line => line.split('').map(Number))
const visited = Array.from({ length: N }, () => Array(N).fill(false))
// console.log(matrix);
// console.log(visited);

const dr = [-1, 1, 0, 0]
const dc = [0, 0, -1, 1]
/*

let complexNum = 0 // 단지번호
let nums = []
function dfs(r, c) { // 0 1 > (-1,1), (1,1), (0,0), (0,2)
  // console.log(`${r} ${c} 방문`);
  visited[r][c] = true
  let cnt = 1

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i] 
    const nc = c + dc[i] 
    // console.log(`nr : ${nr} nc : ${nc} 탐색`);
    if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
      if (matrix[nr][nc] === 1 && !visited[nr][nc]) {
        cnt += dfs(nr, nc)
      }
    }

  }
  // console.log(`${r} ${c} 리턴 cnt : ${cnt}`);
  return cnt
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (matrix[i][j] === 1 && !visited[i][j]) {
      const cnt = dfs(i, j)
      complexNum++
      nums.push(cnt)
      // console.log(`단지번호 : ${cnt}`);
    }
  }
}
*/
// console.log(complexNum);
// console.log(nums.sort((a, b) => a - b).join('\n'));

///////////////////////////////////////////////////////////////

/////////////////////////// 반복문 스택 //////////////////////////
/*
function dfsStack(r, c) {
  const stack = [[r, c]]
  visited[r][c] = true
  console.log(`시작 r:${r} c:${c} 방문처리`);
  let cnt = 0

  while (stack.length > 0) {
    const [cr, cc] = stack.pop()
    cnt++
    console.log(`pop 한좌표 r:${cr} c:${cc} cnt:${cnt}`);

    for (let i = 0; i < 4; i++) {
      const nr = cr + dr[i]
      const nc = cc + dc[i]
      if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
        if (matrix[nr][nc] === 1 && !visited[nr][nc]) {
          visited[nr][nc] = true
          console.log(`인접노드 r:${nr} c:${nc} 방문처리 및 스택에 push`);
          stack.push([nr, nc])
        }
      }
    }
  }

  return cnt
}

let groups = []

for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    if (matrix[i][j] === 1 && !visited[i][j]) {
      const size = dfsStack(i, j)
      groups.push(size)
    }
  }
}

groups.sort((a, b) => a - b)
console.log(groups.length)
console.log(groups.join('\n'))
*/
///////////////////////////////////////////////////////////////

/////////////////////////// BFS 큐 ////////////////////////////

function bfs(r, c) {
  let queue = [[r, c]];
  visited[r][c] = true;
  let cnt = 0;
  console.log(`큐에 시작좌표 r:${r} c:${c} 방문처리 및 enqueue`);

  while (queue.length > 0) {
    const [cr, cc] = queue.shift();  // 큐에서 꺼내기
    cnt++;
    console.log(`큐에서 꺼낸 좌표 r:${cr} c:${cc} cnt:${cnt}`);

    for (let i = 0; i < 4; i++) {
      const nr = cr + dr[i];
      const nc = cc + dc[i];

      if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
        if (matrix[nr][nc] === 1 && !visited[nr][nc]) {
          visited[nr][nc] = true;
          queue.push([nr, nc]);  // 새로운 좌표 추가
          console.log(`인접노드 r:${nr} c:${nc} 방문처리 및 큐에 enqueue`);
        }
      }
    }
  }
  return cnt;
}

let groups = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (matrix[i][j] === 1 && !visited[i][j]) {
      console.log(`새로운 단지 발견 r:${i} c:${j} bfs 호출`);
      groups.push(bfs(i, j));
    }
  }
}

groups.sort((a, b) => a - b);

console.log(groups.length);
console.log(groups.join("\n"));
