//1181번 *** compare function(a, b) 매개변수로 들어가는 a, b의 순서는 상관이 없다 그냥
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
let caseNum = Number(input[0])
console.log(caseNum)
let words = []
for(i = 1; i <= caseNum; i++) {
  if(!words.includes(input[i])) {words.push(input[i])}
} //중복 제거하는 다른 방법이있나 ? 집합자료형사용 넣는거 시간복잡도N임
words.sort(function(a, b) {
  if(a.length != b.length) {
    return a.length - b.length
  }
  else { //뭐임 문자열,숫자일경우에 sort() 만 쓰는거랑 sort(comparefn()) 쓰는거 헷갈리네
    if(a < b) {return -1}
    else if(a > b) {return 1}
  }
})
let result = ""
for(word of words) {
  result += `${word}\n`
}
console.log(result)
/*
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let caseNum = Number(input[0])
let words = []
for (i = 1; i <= caseNum; i++) {
  words.push(input[i])
}
let set = new Set(words)
let newArr = [...set]
newArr.sort(function(a, b) {
  if (a.length == b.length) {
    if (a < b) {
      return -1
    } else {
      return 1
    }
  } else {
    return a.length - b.length
  }
})
let result = ""
for (word of newArr) {
    result += `${word} \n`
}
console.log(result)
*/