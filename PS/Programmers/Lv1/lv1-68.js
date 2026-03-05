const solution = () => {
  var answer = [];
  for (let winner of callings) {
      const prevIdx = players.indexOf(winner) - 1 //추월당하는사람 idx
      const curIdx = prevIdx + 1 // 추월할사람 idx

      const tmp = players[prevIdx] //
      players[prevIdx] = players[curIdx]
      players[curIdx] = tmp
  }
  return players
}
// 시간초과 indexOf때문에

const solution1 = (players, callings) => {
  const map = {}
  for(let i = 0; i < players.length; i++) {
    if(i == 0) {
      map[players[i]] = {prev : null, next : players[i+1]}
      continue
    }
    if(i == players.length - 1) {
      map[players[i]] = {prev : players[i-1], next : null}
      continue
    }

    map[players[i]] = {prev : players[i-1], next : players[i+1]}
  }
  // console.log(map);

  callings.forEach(el => {
    // console.log(el);
    const [prev, cur, next] = [map[el].prev, el, map[el].next] // b, c, d
    // console.log(prev, cur, next);
    const pprev = map[prev].prev //a
    // console.log(pprev);

    map[pprev].next = cur
    map[prev] = {prev : cur, next : next}
    map[cur] = {prev : pprev, next: prev}
    if (map[next]) {
      map[next].prev = prev
    }
      
    // console.log(map);
  });

  console.log(map);
  const arr = Object.entries(map)
  console.log(arr);

  let first = arr.find(([key, val]) => val.prev == null)[0]
  console.log(first);
  // const map2 = new Map(arr);
  const ans = [first]
  while(map[first].next) {
    ans.push(map[first].next)
    first = map[first].next
  }
  console.log(ans);
// 2. 시작 노드
// let current = first[0];
// const result = [current];

// // 3. next 따라가며 순회
// while (map2.get(current).next) {
//   current = map2.get(current).next;
//   result.push(current);
// }

// console.log(result); 
}

// solution1(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])

const solution2 = (players, callings) => {
  const map = {}
  for(let i = 0; i < players.length; i++) {
    map[players[i]] = i
  }
  console.log(map);
  // 결국 첫번째 풀이에서 indexOf대체로 맵을마련해두는것

  for(let i = 0; i < callings.length; i++) {
    const player = callings[i] // kai
    const idx = map[player] // 3
    
    const tmp = players[idx-1] // poe 
    players[idx - 1] = player // kai 승급 3 > 2
    players[idx] = tmp // poe 강등 2 > 3

    map[player] = idx - 1
    map[tmp] = idx
  }
  console.log(players);
}
solution2(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])