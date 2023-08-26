//1654번 랜선자르기 성공
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let k = Number(input[0].split(' ')[0])
let n = Number(input[0].split(' ')[1])
console.log(input, k, n)
let cables = []
for(let i = 1; i <= k; i++) {
  cables.push(Number(input[i]))
}
console.log(cables)
cables.sort((a, b) => a - b)
let start = 1
let end = cables[k-1]
let result = 0

while (start <= end) { // start <= end인지 아니면 원하는 답 찾지못하고 break됨
  mid = parseInt((start + end) / 2)
  let cnt = 0
  for (cable of cables) {
    cnt += parseInt(cable / mid)
  }
  console.log(cnt)
  /*
  if (cnt == n) { // 여기서는 찾았다고 바로 결과가 나오는게 아님 개수는 만족하더라도, 길이가 최대가 되어야하기때문인듯하다. 
    // break
  } else if (cnt > n) { //필요개수n보다 과함 > 랜선길이를 늘림
    start = mid + 1
  } else { //필요개수 n보다 부족함 > 랜선길이를 줄임
    end = mid - 1
  }
  */
  if(cnt >= n) { //개수가 과하거나(만족) > 길이늘림, 
    start = mid + 1
    result = mid
  } else { //개수가 부족 > 길이줄임 일단 정답이 될수가없음, 최소 개수는 채운상태에서 길이가 최대가 되어야하므로, 일단 길이 줄이는것밖에할수가없음 정답의 최대길이를 구하는건 위에서 처리해줘야함
    end = mid - 1
  }
}
console.log(result)