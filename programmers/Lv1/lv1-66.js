function solution(participant, completion) {
  let ans = 0
  const map = {}
  participant.forEach(member => {
    if(!map[member]) map[member] = 1 // 없으면 추가
    else map[member]++
  })
  // console.log(map)
  
  completion.forEach(member => {
    if(map[member]) map[member]--
  })

  // console.log('최종', map);

  for(let name in map) {
    // console.log(name, map[name]);
    if(map[name] != 0) {
      ans = name
      break
    }
  }
  console.log(ans);
  return ans
}

function solution1(participant, completion) {
  const map = new Map()
  console.log(map);

  for(let i = 0; i < participant.length; i++) {
    let a = participant[i]
    let b = completion[i]

    map.set(a, (map.get(a) || 0) + 1)
    map.set(b, (map.get(b) || 0) - 1)

    console.log(map);
  }
}

function solution3(participant, completion) {
  const map = new Map()
  let ans
  for(let name of participant) {
    map.set(name, (map.get(name) || 0 ) + 1)
  }

  for(let name of completion) {
    map.set(name, (map.get(name) || 0 ) - 1)
  }

  // console.log(map);
  for (let [name, count] of map) {
    if(count > 0) {
      ans = name
      break
    }
  }
  console.log(ans);
  return ans
}

const solution2 = (par, com) => {
  const map = com.map(member => com[member] = (com[member] | 0) + 1)
  console.log(map);
  const ans = par.find(member => !com[member]--, com.map(member => com[member] = (com[member] || 0) + 1))
  console.log(ans);
}

solution3(["a", "a", "a"], ["a", "a"]) //a
solution3(["a", "a", "a", "b", "b"], ["a", "a", "a", "b"]) //b
solution3(["a", "b", "c"], ["a", "c"]) //b
// console.log(ans);