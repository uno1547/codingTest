let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')

let k = input[0].split(' ').map(Number)[0]
let num = input[0].split(' ').map(Number)[1]
let cables = []
for (let i = 1; i <= k; i++) {
  cables.push(Number(input[i]))
}

let start = 1// 랜선길이 최솟값
let end = cables.reduce((a, b) => Math.max(a, b)) //랜선길이의 최댓값
let result = 0
while (start <= end) {
  let mid = parseInt((start + end) / 2) // 랜선길이의 중간값
  let total = 0
  for (x of cables) { //정한 랜선길이에 따른 
    total += parseInt(x / mid)
  }
  console.log(total) // 최소한 N개는 만들어야하기때문에, result(N의 최대길이) 설정은 충분할때 설정하는게 맞는듯 
  if (total < num) { //모자람 > 길이를 줄이고 개수를 늘림 > end를 왼쪽으로 (길이를 늘려보는건 개수를 충분히 확보하고나서 )
    end = mid - 1
  } else { //충분함 > 길이를 늘리고, 개수가 N까지 줄여봄 > start를 오른쪽으로, result = mid
    start = mid + 1
    result = mid
  }
  /*
  if (total < num) {} //모자람 
  if (total >= num) {} //충분함 > 길이를 늘리고 개수를 줄임 > start를 오른쪽으로 
  if (total > num) {} 
  else {}
  */
}

