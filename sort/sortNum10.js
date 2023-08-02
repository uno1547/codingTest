//1427번 소트인사이드  틀림 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString()
// console.log(input)
input.sort(function(a, b) {
  return b - a
})
let result = ""
for(i = 0; i < input.length; i++) {
  result += input[i]
}
console.log(result)
//다른방법 이것도 틀림 ㅋㅋ
/*let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()          .split('\n')[0] 아니 이건 뭐임 어차피 한줄 주어지는거 아닌가  toString()으로 들어온 문자열에 공백이나 개행문자가 포함되는경우가 있기때문에 toString().trim()을 사용해서 공백을 제거해주는게 맞다고함 
let cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (i of input) {
    cnt[Number(i)] += 1
}
let result = ""
for (i = 9; i >= 0; i--) {
  for (j = 0; j < cnt[i]; j++) {
      result += i
  }
}
console.log(result)
*/
// DBcode
let fs = require('fs')
let number = fs.readFileSync('input.txt').toString()