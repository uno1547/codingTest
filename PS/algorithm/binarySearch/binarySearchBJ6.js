//k 번째수 실패
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let n = Number(input[0])
let k = Number(input[1])
let start = 1 //2차원배열의 가장작은원소
let end = n**2 //2차원배열의 가장큰원소
console.log(start, end)
let result = 0
while (start <= end) {
  let mid = parseInt((start + end) / 2)
  let cnt = 0
  for (let i = 1; i <= n; i++) {
    cnt += Math.min(parseInt(mid / i), n)
  }
  if (cnt >= k) {
    result = mid
    start = mid + 1
  } else {
    end = mid - 1
  }
}
console.log(result)
/** */
function lowerBound(start, end, value) { // array에서 value이상인 수가 처음으로 등장하는 index반환
  while (start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] >= value) end = mid
    else start = mid + 1
  }
  return end
}

function upperBound(arr, value, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] > value) end = mid
    else start = mid + 1
  }
  return end
}
//mid를 변화시키며이분탐색, mid값보다 작거나같은원소개수 cnt 가 k보다 크거나같을경우, 최소의 mid를 찾기위해 end > mid - 1
                                          // cnt 가 k보다 작을경우, k번째수라가정한 mid가 될수없으므로, start = mid + 1로 재탐색
// let minIn = lowerBound(b, mid, 0, b.length)
// let maxIn = upperBound(b, mid, 0, b.length)

