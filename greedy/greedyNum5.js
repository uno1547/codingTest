// A > B 16953번 에휴 뭔짓을한거냐 실패
/*let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number)
let number = input[0]
let ans = input[1]
let level = 1
let noans = true
console.log(number, ans)
function calculate (x) {
  let resultA = x * 2
  let resultB = Number(x.toString() + '1')
  // console.log(resultA, resultB)
  if (resultA == ans || resultB == ans) {
    console.log(level - 1)//정답이 있을경우
    noans = false
    if (resultA == ans) {
      console.log(resultA)
    } else {
      console.log(resultB)
    }
  } else { //정답이 없을경우 
    // level += 1
    if ((resultA > ans) && (resultB > ans)) {
      // console.log('up')
      // level -= 1
    } else {
      calculate(resultA)
      calculate(resultB)
    }//정답이 없을경우 
  }
}
calculate(number)
console.log(noans)*/

/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number)
let num = input[0] // 100
let ans = input[1] //40021
while (ans != num) {
  let strAns = ans.toString()
  if (ans % 2 == 0) {
    ans /= 2
  } else if (strAns[strAns.length - 1] == "1") {
    strAns.slice(0, -1)
  } else {

  }
} 
*/
//두번째 시도 깔끔하게 성공
// let fs = require('fs')
// let input = fs.readFileSync('input.txt').toString().trim().split(' ')
let input = ["4", "41"]
let origin = input[0]
let result = input[1]
let flag = false
let cnt = 0
while (Number(result) >= Number(origin)) {
  if (result[result.length - 1] == "1") { //결과의 끝자리가 1인경우
    result = result.slice(0, -1)
    // cnt += 1
    console.log(result)
  } else { //2의배수인경우
    result = String(result / 2)
    // cnt += 1
    console.log(result)
  }
  cnt += 1 // 중복을 줄여줄수있다
  if (result == origin) {
    flag = true
    break
  }
}
if (flag) {
  console.log(cnt+1)
} else {
  console.log(-1)
}
