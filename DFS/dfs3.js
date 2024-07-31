// 백준 1240번 노드사이의 거리 실패 무슨 과정인지 이해가 안되네 ㅁㄴ애;랴ㅓㅁ;ㅐㄴ어;래ㅓㅁㅈ댜ㅐㅓㄹ;ㅐㅑㅈ더;래ㅑㅓㅈㄷ;ㅐㅑ러
let fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
// const { setGlobalDispatcher } = require('undici-types');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const [nodeNum, queryNum] = input[0].split(' ').map(Number)
const graph = []
for (let i = 1; i <= nodeNum; i++) graph[i] = []
for (let i = 1; i < nodeNum; i++) {
  let [x, y, cost] = input[i].split(' ').map(Number)
  graph[x].push([y, cost])
  graph[y].push([x, cost])
}
console.log(graph);

function dfs(x, dist) {
  console.log(`dfs(${x}, ${dist})`);
  if (visited[x]) return
  visited[x] = 1
  distance[x] = dist
  console.log(`${x} 방문표시! distance[${x}] : ${dist}`);
  for (let [y, cost] of graph[x]) {
    console.log(`${x}의 거리${cost}에잇는 인접노드 ${y}에대해 dfs(${y}, ${dist} + ${cost}호출)`);
    dfs(y, dist + cost)
  }
}

for (let i = 0; i < queryNum; i++) {
  let [x, y] = input[nodeNum + i].split(' ').map(Number)
  visited = new Array(nodeNum + 1).fill(0)
  distance = new Array(nodeNum + 2).fill(-1)
  console.log(visited, distance);
  console.log(`x,y = ${x} ${y}에 대해 dfs(${x},0)호출!!`);
  dfs(x, 0)
  console.log(visited, distance);
  console.log(distance[y]);
}

//[1, 2]

/*
알고리즘
음 두노드쌍을 입력받으면 [start, end] 로 저장
start에서 DFS 시작 > 
*/

/*
const graph = {
  1 : {2 : 2, 4 : 3},
  2 : {1 : 2},
  3 : {4 : 2},
  4 : {1 : 3, 3 : 2}
}
const visited = [0, 0, 0, 0, 0]
let ans = 0
let dist = []
// let dist = 0
function DFS(start, end) {
  visited[start] = 1
  console.log(`${start} 방문`);
  const adjacents = graph[start]
  // if (end in adjacents) {
  //   console.log('바로보임!!');
  //   dist += adjacents[end]
  //   return
  // }
  for(let nodeNum in adjacents) { // 인접노드들에대해서 돌면서
    if (!visited[nodeNum]) {
      // console.log(`인접노드${nodeNum}방문한적없음!!`);
      if (nodeNum == end) { //인접노드에 바로 갈수있으면
        // dist += adjacents[nodeNum]
        dist.push(adjacents[nodeNum])
        console.log(`발견!! ${nodeNum}`);
        // isFound = 1
        return
      } else { //바로갈수없으면
        // dist += adjacents[nodeNum]
        dist.push(adjacents[nodeNum])
        // console.log(`더찾아야함 ${nodeNum} 의 인접노드로!! 현재${dist}움직임`);
        DFS(nodeNum, end)
      }
    }
  }
  dist.pop()
  // console.log(dist);
}
DFS(3, 2)
console.log(dist);
dist.forEach((el) => ans += el)
console.log(ans);
*/
/*
아래코드의 문제 : 탐색 과정에서 DFS(1) 안에서 재귀로 DFS(2)가 호출됐는데, 2의 
인접노드가 1밖에없어서 아무 수확없이 다시 1호출부로 돌아왔음에도, dist += 가중치가 실행되어
의미없는 탐색에 대해서 거리에 반영된다!! 음 그러면 탐색을 완전히 마친다음 경로 정점들을 따라가며
마지막에 거리를 계산해야하나 
const graph = {
  1 : {2 : 2, 4 : 3},
  2 : {1 : 2},
  3 : {4 : 2},
  4 : {1 : 3, 3 : 2}
}
const visited = [0, 0, 0, 0, 0]
let dist = 0
function DFS(start, end) {
  visited[start] = 1
  const adjacents = graph[start]
  if (end in adjacents) {
    console.log('바로보임!!');
    dist += adjacents[end]
    return
  }
  // console.log('인접노드',adjacents);
  for(let nodeNum in adjacents) { // 인접노드들에대해서 돌면서
    if (!visited[nodeNum]) {
      console.log(`인접노드${nodeNum}방문한적없음!!`);
      if (nodeNum == end) { //인접노드에 바로 갈수있으면
        dist += adjacents[nodeNum]
        console.log(`발견!! ${nodeNum}`);
        isFound = 1
        return
      } else { //바로갈수없으면
        dist += adjacents[nodeNum]
        console.log(`더찾아야함 ${nodeNum} 의 인접노드로!!`);
        DFS(nodeNum, end)
      }
    }
  }
}

DFS(3, 2)
console.log(dist);
*/