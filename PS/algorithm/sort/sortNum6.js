//11651번 한번에 성공
/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
let caseNums = Number(input[0])
let coords = []
for(i = 1; i <= caseNums; i++) {
    let coord = {}
    coord.x = Number(input[i].split(' ')[0])
    coord.y = Number(input[i].split(' ')[1])
    coords.push(coord)
}
coords.sort(function(a, b) {
    if(a.y == b.y) {return a.x - b.x}
    else {return a.y - b.y}
})
let result = ""
for(i = 0; i < caseNums; i++) {
  result += `${coords[i].x} ${coords[i].y}\n`
}
console.log(result)  
*/



/* 배열 바로 넣는것도 간단
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let caseNums = Number(input[0])
let cords = []
for (i = 1; i <= caseNums; i++) {
  cords.push(input[i].split(' ').map(Number))
}
cords.sort(function(a, b) {
  if (a[1] == b[1]) {
    return a[0] - b[0]  
  } else {
    return a[1] - b[1]
  }
})
let result = ""
for(i = 0; i < caseNums; i++) {
  result += `${coords[i].x} ${coords[i].y}\n`
}
console.log(result)  
*/

// 24 / 8 / 24
const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const n = Number(input[0])
const cords = []
for(let i = 1; i <= n; i++) {
  cords.push(input[i].split(' ').map(Number))
}
console.log(cords);

cords.sort((a, b) => {
  if(a[1] == b[1]) {
    return a[0] - b[0]
  } else {
    return a[1] - b[1]
  }
})

let ans = ""
for(let i = 0; i < n; i++) {
  ans += `${cords[i][0]} ${cords[i][1]} \n`
}
console.log(ans.trim());