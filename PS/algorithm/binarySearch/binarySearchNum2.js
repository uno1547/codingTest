let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let treeNum = Number(input[0].split(' ')[0])
let requireHeight = Number(input[0].split(' ')[1])
let treeHeights = input[1].split(' ').map(Number)
console.log(treeNum,requireHeight,treeHeights)
let start = 0
let end = treeHeights.reduce((a, b) => Math.max(a, b)) // 절단기 높이를 최대높이로 설정, 0 ~ 최대높이 사이를 이분탐색하며, 가져가는 나무높이가 적어도 M미터는 되고 최소가되도록
let result = 0
// total >=, <=, <, >, 랑 start = mid 왜안됌, result 가왜 else쪽에가있는지 몰라 걍 외워야겟다
while (start <= end) { //원본
  let mid = parseInt((start + end) / 2)
  console.log(`절단기 높이의 중간값 ${mid}`)
  let total = 0
  for (x of treeHeights) {
    total += (mid < x) ? (x - mid) : 0
  }
  if (total < requireHeight) { // <= 안됌
    end = mid - 1 //안됌
    console.log(`목재부족, 감소된 절단기최대높이 ${end} ${start}~${end} mid : ${mid}`)
  }  
  else {
    result = mid  //그냥그렇구나 
    start = mid + 1 //안됌
    console.log(`목재충분, 증가된 절단기최소높이 ${start} ${start}~${end} mid : ${mid}`)
  }
}
console.log(`필요목재얻는 절단기의 최대높이 ${result}`)

/*
total < requireHeight end = mid or start = mid이면 무한루프
total < requireHeight end = mid이면 무한루프
total < requireHeight end = mid이면 무한루프
*/

/*
if (total >= requireHeight) { // 평가길이 > 필요길이 인경우, 목재의 낭비를 최소화하기위해 절단기 높이 높임 
//반대로 평가길이 <= 필요길이 인경우, 목재가 더필요하므로 절단기 높이 낮춤
  start = mid + 1
  result = mid
} else {
  end = mid - 1
}
*/
/*
if (total <= requireHeight) { //평가길이 <= 필요길이 인경우, 목재가 부족하므로 절단기 높이 낮춤
  end = mid - 1
} else {
  start = mid + 1
}
*/