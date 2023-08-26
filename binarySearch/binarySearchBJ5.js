//2110번 공유기 설치 힌트받고성공
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let houseNum = Number(input[0].split(' ')[0])
let wifiNum = Number(input[0].split(' ')[1])
let homes = []
for (let i = 1; i <= houseNum; i++) {
  homes.push(Number(input[i]))
}
console.log(houseNum, wifiNum, homes)
homes.sort((a, b) => a - b)
/*
let start = 1 공유기사이거리의 최솟값 : 1
let end = max 공유기사이거리의 최댓값 : 가장오른쪽x좌표 - 가장왼쪽x좌표
공유기사이거리의 최솟값를 변화시킴
>공유기사이거리의 최솟값이 10 > 이만큼은 떨어져서 설치되야하기에 설치가능한 공유기 개수가 감소
>공유기사이거리의 최솟값이 1 > 조금만 떨어져도 설치가능하기에 설치가능한 공유기 개수 증가 
설치가능공유기 개수가 부족하면 거리를 좁히고, 공유기 개수가 다설치할수있다면, 문제의 요구사항인 '인접공유기 사이의거리' 공유기 사이거리를 키워보며 이분탐색
*/
let minGap = 1 //공유기사이최소거리 1
let maxGap = homes[houseNum - 1] - homes[0] //공유기사이최대거리
let result = 0 
while (minGap <= maxGap) {
  let midGap = parseInt((minGap + maxGap)/ 2) //공유기사이거리를 mid변수로설정, 이분탐색
  let setUp = homes[0] //제일좌측x좌표부터 설치, 다음공유기들이 최대개수C내에서 최대거리를 유지하며설치될수있기위함
  let count = 1 //일단 제일 앞쪽에 1개 설치 
  for (let i = 1; i < houseNum; i++) { //두번째 집부터 순회하며, setUp과 midGap이상 벌어졌다면 설치, setUp갱신
    if (homes[i] - setUp >= midGap) { // 공유기 거리만족 > 설치
      count += 1
      setUp = homes[i]
    }
  }
  if (count >= wifiNum) { //설치공유기수가 C이상(충분) > 공유기사이거리를 늘려봄
    minGap = midGap + 1
    result = midGap
  } else { //설치공유기수가 C미만(부족) > 공유기사이거리를 좁혀, 설지공유기수를 늘림
    maxGap = midGap - 1
  }
}
console.log(result)

