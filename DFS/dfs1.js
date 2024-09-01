//2606 바이러스
let fs = require('fs')
let input = fs.readFileSync('../input.txt').toString().trim().split('\n')
let [num, connectNum, ...connects] = input
num = Number(num)
connectNum = Number(connectNum)
connects = connects.map((connect) => connect.split(' ').map(Number))
console.log('connects', connects);

let network = new Array(num + 1).fill(1).map(() => new Set)
connects.forEach(([start, end], idx) => {
  console.log(`start${start} end${end}`);
  network[start].add(end)
  network[end].add(start)
})
console.log(network);
network = network.map((set) => Array.from(set))
console.log(network);

const infected = new Array(num + 1).fill(false)

function search(network, i, infected) {
  infected[i] = true

  for(let node of network[i]) {
    if(infected[node] == false) search(network, node, infected)
  }
}
search(network, 1, infected)

console.log(infected);

const ans = infected.reduce((num, val) => {
  if(val) num++
  return num 
}, 0)

console.log(ans);











/*
let [num, setNum, ...connects] = input
num = Number(num)
setNum = Number(setNum)
connects = connects.map((el) => el.split(' ').map(Number))
let ans = 0
let visited = Array(num + 1).fill(false)
let graph = [...Array(num + 1)].map(() => [])
connects.forEach(([from, to]) => {
  graph[from].push(to)
  graph[to].push(from)
})

function DFS(com) {
  visited[com] = true
  //ans += 1 인지 모르겟네 1번제외 몇개인지 세는거니깐 ㄴㄴ 그게아니라
  for(let n of graph[com]) {
    if (!visited[n]) { //인접컴퓨터 방문안했으면
      // ans += 1 //ans위치가 여기인지 
      DFS(n)
    }
  }
}
DFS(1)
console.log(ans); // 여기서 1빼야되는거임? 안빼도 맞았는데 
// 이 인접리스트를 탐색하여, 1번부터 방문, 
*/