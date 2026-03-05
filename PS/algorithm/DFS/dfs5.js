// 백준 15686 치킨배달

const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(Number)
console.log(n, m);

// 각 치킨집 좌표구하기
const maps = new Array(n).fill(0).map(() => [])
for(let r = 0; r < 5; r++) {
 maps[r].push(...input[r+1].split(' ').map(Number))
}
// console.log (maps);

const homes = []
const stores = []

for(let r = 0; r < n; r++) {
  for(let c = 0; c < 5; c++) {
    if(maps[r][c] == 1) {
      homes.push([r+1, c+1])
    } else if(maps[r][c] == 2) {
      stores.push([r+1, c+1])
    }
  }
}

console.log(homes); // [[1, 3], [2, 5], [3, 2], [4, 3]]
console.log(stores); // [[2, 3], [3, 3], [5, 5]]

const visited = new Array(stores.length).fill(false)
const selected = []
console.log(visited);

let answer = 1e9
dfs(0, 0)
console.log(answer);

function dfs(depth, start) {
  console.log(`dfs(${depth}, ${start})호출`);
  if (depth == m) { //
    console.log(`m 과 depth같음!! ${m} ${depth}`); 
    let result = [] // 조합결과 저장 테이블
    for(let i of selected) result.push(stores[i])
    console.log(`selected의 요소 ${selected} result에 push 한결과 ${result}`);
    let sum = 0
    for(let [hx, hy] of homes) {
      let temp = 1e9
      for(let [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy))
        console.log(`hx hy 가 ${hx} ${hy}일때, result의 cx cy ${cx} ${cy}`);
        console.log(`temp : ${temp}`);
      }
      sum += temp
    }
    answer = Math.min(answer, sum)
    return
  }

  for(let i = start; i < stores.length; i++) { //
    if(visited[i]) continue
    selected.push(i)
    console.log(`selected에 ${i} push ${selected}`);
    visited[i] = true
    console.log(`${i}visited 방문!! ${visited}`);
    dfs(depth + 1, i + 1)
    selected.pop()
    visited[i] = false
  }
}

function dfs(depth, start) {
  if (depth == m) { 
    let result = [] // 조합결과 저장 테이블
    for(let i of selected) result.push(stores[i])
    return
  }

  for(let i = start; i < stores.length; i++) { 
    if(visited[i]) continue
    selected.push(i)
    visited[i] = true
    dfs(depth + 1, i + 1)
    selected.pop()
    visited[i] = false
  }
}