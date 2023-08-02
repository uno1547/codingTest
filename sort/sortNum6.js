//11651번 한번에 성공
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