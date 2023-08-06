//11047 동전0문제 한번에 성공 강의에서 코드가 훨씬 짧음
/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
// console.log(input)
let nums = input[0].split(' ').map(Number)[0] //10
let price = input[0].split(' ').map(Number)[1]
// console.log(nums)
// console.log(price)
// let values = input.slice(1).map(Number)
console.log(values)
let cnt = 0
while (price != 0) { // price 가 0 이될때까지 수행 
  for (i = nums - 1; i >= 0; i--) {
    if (price == 0) {break}
    if (Math.floor(price / values[i]) == 0) {
      // console.log(`${values[i]} 로는 과함`)
      continue
    } else {
      let valueNum =  Math.floor(price / values[i])
      cnt += valueNum
      price %= values[i]
      // console.log(`${values[i]} ${valueNum}개 잔여금액${price}`)
      continue
    }
  }
}
console.log(cnt)
for (i = nums - 1; i >= 0; i--) {
  if((Math.floor(price / values[i])) == 0) { // price 가 value 초과시
    continue
  } else { //price가 value로 나눠질시 
    cnt += Math.floor(price / values[i])    
    price %= price / values[i]
    continue
  }
}
*/
//두번째시도 성공
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let unitNum = input[0].split(' ').map(Number)[0] //화폐단위개수
let value = input[0].split(' ').map(Number)[1] //가격
let cnt = 0
for (let i = unitNum; i >= 1; i--) {
  let unit = Number(input[i])
  if (unit > value) { //가격보다 크면 다음단위로
    continue
  } else { //unit <= value
    cnt += Math.floor(value / unit)
    value = value % unit
    if (value == 0) {
      break
    } 
  }
}
console.log(cnt)