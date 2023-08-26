//2805 나무자르기 성공
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let treeNum = Number(input[0].split(' ')[0])
let demand = Number(input[0].split(' ')[1])
let trees = input[1].split(' ').map(Number)

let min = 0
let max = trees.reduce(function(result , value) {
  return Math.max(result, value)
})
let result = 0

while (min <= max) {
  let mid = parseInt((min + max) / 2)
  console.log('절단기높이', mid)
  let tmp = 0
  for (let i = 0; i < treeNum; i++) {
    trees[i] > mid ? tmp += trees[i] - mid : tmp += 0 //나무길이가 절단기높이보다 높으면 높이차만큼 획득
  }
  console.log('얻은나무',tmp)
  if (tmp >= demand) { // 얻은 나무길이가 필요길이보다 크거나같다(충분) > 환경보호를 위해 절단기 높이를 최대로 
    result = mid
    min = mid + 1
  } else { //얻은 나무길이가 필요길이보다 부족 > 절단기 높이를 낮춰 필요나무길이를 확보
    max = mid - 1
  }
}
console.log(result)