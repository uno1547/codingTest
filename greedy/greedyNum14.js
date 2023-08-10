//박스 채우기 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let boxVol = input[0].split(' ').map(Number).reduce((total, sum) => total * sum) //reduce함수 자세히 알아보기
let cubeNum = Number(input[1])
let cubeVols = []
for (let i = 2; i < input.length; i++) {
  let cube = input[i].split(' ').map(Number)
  cubeVols.push(cube)
  // let cubeVol = (2**cube[0]) 
}
console.log(boxVol)
console.log(cubeVols)
for (let i = cubeNum - 1; i >= 0; i--) {
  let cubeVol = ((2 ** cubeVols[i][0]) ** 3)
  console.log(cubeVol)
  for (let i = 1; i < 5; i++) {


  } 
}
// while (boxVol >= 0) { //box부피가 0이될때까지 반복

// }
while (boxVol > 0) {
}
for (let i = cubeNum - 1; i >= 0; i--) { // i = 2,1,0 cubeVols
  let cubeVol = ((2 ** cubeVols[i][0]) ** 3) // cubeVol = 64,8,1
  let cnt = 1
  while ((boxVol - cubeVol * cnt > 0) && (cnt <= cubeVols[i][1])) { //boxVol에서 현재 cube부피 Index찾아야함
    if (cnt >= cubeVols[i][1]) {
      break
    }
  }
  /*for (let cnt = 1; boxVol - cubeVol * cnt > 0; cnt++) {
    
  }*/

}