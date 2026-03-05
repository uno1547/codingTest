// 문제 2839번 설탕배달 실패
/*
let n = 0 // 3 <= N <= 5000
let input = Number(fs.readFileSync('input.txt').toString().trim())
console.log(input)
if ((Math.floor(input / 5)) != 0) { //5로 나눈 몫이 0이아닐때
  if (input % 5 == 0) { //5로나눈몫이 0이아니고 나머지가 0일때 ex) 10,20 
    n += Math.floor(input / 5)
  } else { //5로나눈몫이 0이아니고 나머지가 존재할때 
    if ((input % 5) % 3 == 0) { // 그나머지를 3으로 나눈 나머지가 0일때 
      n += Math.floor(input / 5) + Math.floor((input % 5) / 3)
    } else {
      if (input % 3 == 0) { //3으로 나눈 몫이 존재하고 나머지가 0일때 
        n += Math.floor(input / 3)
      } else { //3으로 나눈 몫이 존재하고 나머지가 존재할때 
        if ((input % 3) % 5 == 0) { //3으로 나눈 몫이 존재하고 나머지가 0일때 
          n += Math.floor(input / 3) + Math.floor((input % 3) / 5)
        } else { //3으로 나눈 몫이 존재하고 나머지가 존재할때 
          n = -1
          console.log('hi')
        }
      }
    } 
  }
} else { //5로 나눈몫이 0일때 
  if ((input % 5) % 3 == 0) {
    n += Math.floor((input % 5) / 3)
  } else {
    n = -1
  } 
}
console.log(n)
// 11과 같이 5 * 1 + 3 * 2로 3의 결과가 나와야하는데 5로 나눌때 나눗셈을 통한 몫연산시 최대의 몫 2가 들어가므로 의도치않은 루프로빠짐 
// 5를 1번
*/

//두번째시도 깔끔하게 성공!! 
let fs = require('fs')
let amount = Number(fs.readFileSync('input.txt').toString().trim())
// let amount = 21
let max5Num = Math.floor(amount / 5) 
let [num5,num3] = [0,0]
let canDeliver = false
for (let i = max5Num; i >= 0; i--) {
  let remainder = amount - i * 5
  num5 = i
  // console.log(remainder)
  if (remainder % 3 == 0) {
    num3 = Math.floor(remainder / 3)
    canDeliver = true
    break
  }
}
if (canDeliver) {
  console.log(`5kg ${num5} 3kg ${num3} 봉지, 총 ${num5 + num3}`)
} else {
  console.log(-1)
}