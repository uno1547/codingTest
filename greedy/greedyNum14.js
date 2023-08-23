//박스 채우기 실패 감1도안옴
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
for (let i = cubeNum - 1; i >= 0; i--) { // i = 2,1,0 cubeVols
  let cubeVol = ((2 ** cubeVols[i][0]) ** 3) // cubeVol = 64,8,1
  let maxCnt = cubeVols[i][1] //1
  let cnt = 0
  console.log(cnt, maxCnt)  //0, 1
  /*if ((boxVol - cubeVol * cnt >= 0) && (cnt + 1 <= maxCnt)) {
    cnt += 1
    boxVol -= cubeVol * cnt 
  }*/
  while ((boxVol - cubeVol * cnt >= 0) && (cnt + 1 <= maxCnt)) {
    cnt += 1
  } 
  boxVol -= cubeVol * cnt
}
boxVol - 64 * 1
boxVol - 64 * 2