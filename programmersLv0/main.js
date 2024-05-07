function solution(arr, queries) {
  const ans = []
  queries.forEach(element => {
    const [s, e, k] = [...element]
    for (let i = s; i <= e; i++) {
      if (i % k == 0) arr[i]++
    }
  })
  return arr
}
/* reduce를 이렇게 쓰다니
function solution(arr, queries) {
    return queries.reduce((bucket, [s, e, k]) => {
        for (let i = s; i <= e; i += 1) {
            if (i % k === 0) bucket[i] += 1
        }
        return bucket
    }, [...arr])
}
*/