// 귤 고르기
const solution = (k, tangerine) => {
  const map = tangerine.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})
  console.log(map);

  const entries = Object.entries(map)
  entries.sort((a, b) => b[1] - a[1])
  console.log(entries);

  // let result = 0
  let result = 0
  for(let i = 0; i < entries.length; i++) {
    if(entries[i][1] > k) { // 꺼낼개수가 부족하다면
      result++
      console.log('얘로 담으면 충분');
      break
    } else { // 꺼낼수있다면
      k = k - entries[i][1]
      console.log(`${entries[i][0]} ${entries[i][1]}개 꺼냄`);
      result++
    }
    console.log(`담아야할개수${k} 현재 종류갯수${result}`);
    // if(k == 0) break
    if(k == 0) break
  }
  console.log(result);
}

// solution(6, [1, 3, 2, 5, 4, 5, 2, 3])
// solution(4, [1, 3, 2, 5, 4, 5, 2, 3])
solution(2, [1, 1, 1, 1, 2, 2, 2, 3])