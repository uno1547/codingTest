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