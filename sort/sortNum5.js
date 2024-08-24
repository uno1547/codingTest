//11650번 실패 
// 결과로 여러줄을 출력해야하는경우 꼭 문자열로 처리후 마지막 한번만 출력할수있게하자!! 안그러면 시간초과걸림
// 그리고 sort 내의 comparefunction에 따라 유연한 처리가능하다

/*
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let caseNums = Number(input[0])
let coords = []
for(i = 1; i <= caseNums; i++) {
  let coord = {}
  coord.x = Number(input[i].split(' ')[0])
  coord.y = Number(input[i].split(' ')[1])
  coords.push(coord)
}
coords.sort(function(a, b) {
  if(a.x == b.x) {
      return a.y - b.y
  } else {
      return a.x - b.x
  }
})
let result = ""
for(i = 0; i < caseNums; i++) {
    result += `${coords[i].x} ${coords[i].y}\n`
}
console.log(result)
*/


// 두번째시도 와 저위에꺼 어캐햇냐 왜 오히려 퇴화된거지
/*
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let caseNums = Number(input[0])
let cords = []
for (i = 1; i <= caseNums; i++) {
  cords.push(input[i].split(' '))
}
// sort함수정의하는여러방식 
// 1.
cords.sort(function(a, b) {
  if (a[0] < b[0]) { // a의 x좌표 < b의 x좌표 => 오름차순으로정렬
    return -1
  } else if (a[0] == b[0] && a[1] < b[1]) {
    return -1
  } else {
    return 1
  }
})
// 2.
cords.sort(function(a, b) {
  if (a[0] == b[0]) {
    a[1] - b[1]
  } else {
    a[0] - b[0]
  }
})
// 문자열처리후 1회출력 및 templeteLiteral
let result = ""
for (cor of cords) {
  result += `${cor[0]} ${cor[1]}\n`
}
console.log(result)
*/


// 24 / 8 / 24
let fs = require('fs')
let input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const n = Number(input[0])
const cords = []
for(let i = 1; i <= n; i++) {
  cords.push(input[i].split(' ').map(Number))
}

cords.sort((a, b) => {
  // return a[0] - b[0]
  if(a[0] < b[0]) {
    return -1
  } else if(a[0] > b[0]) {
    return 1
  } else {
    return a[1] - b[1]
  }
})

let result = ""
for(let i = 0; i < n; i++) {
  result += `${cords[i][0]} ${cords[i][1]}` + '\n'
}
console.log(result.trim());
