// 맵상의 치킨집 X개중 M개를 골랐을때 
// 도시의 치킨거리가 최소가 되도록하는 경우를 탐색

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number)
// console.log(N, M);

const map = input.slice(1).map(row => row.split(' ').map(Number))
// console.log(map);

// 1. 맵에 있는 치킨집의 좌표 다구함
const chickens = map.reduce((acc, val, row) => {
  const chickens = val.reduce((acc, val, col) => {
    if(val == 2) acc.push([row, col])
    return acc
  }, [])
  acc.push(...chickens)
  return acc
}, [])

// console.log(chickens);
// 2. 치킨집중 M개 고르기

const path = []
let minDistance = Infinity
function dfs(cnt, start) {
  if(cnt == M) { // M개의 치킨집 골랐으면 
    // 각집치킨거리, 도시의 치킨거리 구하기
    // console.log(path);
    // console.log('이 치킨집일때 도시의 치킨거리 구하기');
    minDistance = Math.min(minDistance, getCityDistance(path))
    return
  }

  for(let i = start; i < chickens.length; i++) {
    path.push(chickens[i])
    dfs(cnt + 1, i + 1)
    path.pop()
  }
}

dfs(0, 0)
console.log(minDistance);
function getCityDistance(cords) {
  // console.log(cords);

  // 모든 집기준 치킨거리 탐색
  // let minChickenDistance = Infinity
  let cityDistance = 0
  for(let i = 0; i < map.length; i++) {
    for(let j = 0; j < map.length; j++) {
      const house = map[i][j]
      if(house == 1) {
        cityDistance += getHouseDistance(i, j, cords)        
        if(cityDistance > minDistance) return Infinity
      }
      else continue
    }
  }
  // console.log(cityDistance);
  return cityDistance
}

// 치킨거리는 집과 가장 가까운 치킨집사이의 거리
function getHouseDistance(hr, hc, cords) {
  // console.log(`집의 좌표가 ${hr} ${hc}일때 집의 치킨거리구하기`);
  let minDistance = Infinity
  for (const [r, c] of cords) {
    // console.log(`치킨집좌표 ${r} ${c}`);
    const distance = Math.abs(hr - r) + Math.abs(hc - c)
    minDistance = Math.min(minDistance, distance)
  }
  // console.log(`집의 좌표가 ${hr} ${hc}일때 집의 치킨거리 : ${minDistance}`);
  return minDistance
}