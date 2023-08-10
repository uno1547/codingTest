// 문제 8번 주유소 13305번 일단 성공인듯 서브테스크가 뭔지모르겟네 
/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let N = Number(input[0])
let distances = input[1].split(' ').map(Number) //거리배열
let prices = input[2].split(' ').map(Number) // 기름가격 배열
let startPrice = prices[0]
let cost = 0
console.log(distances, prices)
for (let i = 0; i < N - 1; i++) {
  if (prices[i] < startPrice) {
    startPrice = prices[i]
  }
  let dist = distances[i]
  cost += startPrice * dist 
}
console.log(cost)
*/

//두번째 시도  13305번 bigInt자료형 처음들어봄 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let caseNum = Number(input[0])
let distances = input[1].split(' ').map(Number)
let prices = input[2].split(' ').map(Number)
console.log(caseNum)
console.log(distances)
console.log(prices)
let minValue = 1000000000
let fee = 0
for (let i = 0; i < prices.length - 1; i++) {
  if (minValue >= prices[i]) {
    minValue = prices[i]
  }
  // console.log(distances[i])
  fee += minValue * distances[i]
  console.log(fee)
}