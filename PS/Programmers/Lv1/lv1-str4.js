// 수열과 구간 쿼리
function solution1(arr, queries) {
  const answer = []
  for(let i = 0; i < queries.length; i++) {
    const query = queries[i] //[0, 4, 2] 인 i(0,1,2,3,4) 에 대해 2보다 크면서 가장 작은 arr[i]를 찾아라
    const start = query[0]
    const end = query[1]
    const find = query[2]
    const ans = []
    for(let j = start; j <= end; j++) {
      if(arr[j] > find) ans.push(arr[j])
    }
    ans.sort((a, b) => a - b)
    // ans = []
    // queries[i] = ans.length == 0 ? -1 : ans[0]
    let f = ans.length == 0 ? -1 : ans[0]
    answer.push(f)
  }
  return answer
}
console.log(solution2([0, 1, 2, 4, 3], [[0, 4, 2],[0, 3, 2],[0, 2, 2]]))

function solution2(arr, queries) {
  for(let i = 0; i < queries.length; i++) {
    const query = queries[i]
    const [start, end, find] = [query[0], query[1], query[2]]
    const sliced = arr.slice(start, end + 1)
    const valid = sliced.filter((val) => val > find)
    valid.sort((a, b) => a - b)
    queries[i] = valid.length == 0 ? -1 : valid[0] 
  }
  console.log(queries);
}

// 9가 3의배수냐?
console.log(9 % 3 == 0);
// i가 k의배수냐?
console.log(i % k == 0);