// 예산

// 26 / 3 / 6

function solution1(d, budget) {
  const asc = d.sort((a, b) => a - b) // 오름차순으로 정렬
  console.log(asc);
  
  const result = asc.reduce((acc, val) => {
    if(budget - val < 0) return acc
    console.log(`budget ${budget} 에서 ${val} 만큼 분배`);
    budget -= val
    acc++
    console.log(`남은budget ${budget}`);
    return acc
  }, 0)
  console.log(result);
  return result
}

// solution([1, 3, 2, 5, 4], 9)
// solution([2, 2, 3, 3], 10)


function solution(d, budget) {
  const asc = d.sort((a, b) => a - b) // 오름차순으로 정렬
  
  let cnt = 0

  for(let i = 0; i < asc.length; i++) {
    // console.log(asc[i]);
    // 예산부족시
    if(asc[i] > budget) break

    budget -= asc[i]
    cnt++
  }
  console.log(cnt);
}

// solution([1, 3, 2, 5, 4], 9)
solution([2, 2, 3, 3], 10)
